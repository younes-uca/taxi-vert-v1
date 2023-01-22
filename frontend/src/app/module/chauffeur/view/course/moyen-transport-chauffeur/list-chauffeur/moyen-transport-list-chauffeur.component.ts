import {Component, OnInit} from '@angular/core';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';




import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-moyen-transport-list-chauffeur',
  templateUrl: './moyen-transport-list-chauffeur.component.html',
  styleUrls: ['./moyen-transport-list-chauffeur.component.css']
})
export class MoyenTransportListChauffeurComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'MoyenTransport';


    constructor(private datePipe: DatePipe, private moyenTransportService: MoyenTransportService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadMoyenTransports();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadMoyenTransports(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('MoyenTransport', 'list');
        isPermistted ? this.moyenTransportService.findAll().subscribe(moyenTransports => this.moyenTransports = moyenTransports,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.moyenTransportService.findByCriteria(this.searchMoyenTransport).subscribe(moyenTransports=>{
            
            this.moyenTransports = moyenTransports;
           // this.searchMoyenTransport = new MoyenTransportVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editMoyenTransport(moyenTransport: MoyenTransportVo){
        const isPermistted = await this.roleService.isPermitted('MoyenTransport', 'edit');
         if(isPermistted){
          this.moyenTransportService.findByIdWithAssociatedList(moyenTransport).subscribe(res => {
           this.selectedMoyenTransport = res;

            this.editMoyenTransportDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewMoyenTransport(moyenTransport: MoyenTransportVo){
        const isPermistted = await this.roleService.isPermitted('MoyenTransport', 'view');
        if(isPermistted){
           this.moyenTransportService.findByIdWithAssociatedList(moyenTransport).subscribe(res => {
           this.selectedMoyenTransport = res;

            this.viewMoyenTransportDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateMoyenTransport(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedMoyenTransport = new MoyenTransportVo();
            this.createMoyenTransportDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteMoyenTransport(moyenTransport: MoyenTransportVo){
       const isPermistted = await this.roleService.isPermitted('MoyenTransport', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Moyen transport) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.moyenTransportService.delete(moyenTransport).subscribe(status=>{
                          if(status > 0){
                          const position = this.moyenTransports.indexOf(moyenTransport);
                          position > -1 ? this.moyenTransports.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Moyen transport Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateMoyenTransport(moyenTransport: MoyenTransportVo) {

     this.moyenTransportService.findByIdWithAssociatedList(moyenTransport).subscribe(
	 res => {
	       this.initDuplicateMoyenTransport(res);
	       this.selectedMoyenTransport = res;
	       this.selectedMoyenTransport.id = null;


            this.createMoyenTransportDialog = true;

});

	}

	initDuplicateMoyenTransport(res: MoyenTransportVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.moyenTransports.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchMoyenTransport.libelle ? this.searchMoyenTransport.libelle : environment.emptyForExport ,
            'Code': this.searchMoyenTransport.code ? this.searchMoyenTransport.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get moyenTransports() : Array<MoyenTransportVo> {
           return this.moyenTransportService.moyenTransports;
       }
    set moyenTransports(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransports = value;
       }

    get moyenTransportSelections() : Array<MoyenTransportVo> {
           return this.moyenTransportService.moyenTransportSelections;
       }
    set moyenTransportSelections(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransportSelections = value;
       }
   
     


    get selectedMoyenTransport() : MoyenTransportVo {
           return this.moyenTransportService.selectedMoyenTransport;
       }
    set selectedMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.selectedMoyenTransport = value;
       }
    
    get createMoyenTransportDialog() :boolean {
           return this.moyenTransportService.createMoyenTransportDialog;
       }
    set createMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.createMoyenTransportDialog= value;
       }
    
    get editMoyenTransportDialog() :boolean {
           return this.moyenTransportService.editMoyenTransportDialog;
       }
    set editMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.editMoyenTransportDialog= value;
       }
    get viewMoyenTransportDialog() :boolean {
           return this.moyenTransportService.viewMoyenTransportDialog;
       }
    set viewMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.viewMoyenTransportDialog = value;
       }
       
     get searchMoyenTransport() : MoyenTransportVo {
        return this.moyenTransportService.searchMoyenTransport;
       }
    set searchMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.searchMoyenTransport = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

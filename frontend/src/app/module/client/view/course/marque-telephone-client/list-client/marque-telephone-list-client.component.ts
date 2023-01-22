import {Component, OnInit} from '@angular/core';
import {MarqueTelephoneService} from 'src/app/controller/service/MarqueTelephone.service';
import {MarqueTelephoneVo} from 'src/app/controller/model/MarqueTelephone.model';
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
  selector: 'app-marque-telephone-list-client',
  templateUrl: './marque-telephone-list-client.component.html',
  styleUrls: ['./marque-telephone-list-client.component.css']
})
export class MarqueTelephoneListClientComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'MarqueTelephone';


    constructor(private datePipe: DatePipe, private marqueTelephoneService: MarqueTelephoneService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadMarqueTelephones();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadMarqueTelephones(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('MarqueTelephone', 'list');
        isPermistted ? this.marqueTelephoneService.findAll().subscribe(marqueTelephones => this.marqueTelephones = marqueTelephones,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.marqueTelephoneService.findByCriteria(this.searchMarqueTelephone).subscribe(marqueTelephones=>{
            
            this.marqueTelephones = marqueTelephones;
           // this.searchMarqueTelephone = new MarqueTelephoneVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editMarqueTelephone(marqueTelephone: MarqueTelephoneVo){
        const isPermistted = await this.roleService.isPermitted('MarqueTelephone', 'edit');
         if(isPermistted){
          this.marqueTelephoneService.findByIdWithAssociatedList(marqueTelephone).subscribe(res => {
           this.selectedMarqueTelephone = res;

            this.editMarqueTelephoneDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewMarqueTelephone(marqueTelephone: MarqueTelephoneVo){
        const isPermistted = await this.roleService.isPermitted('MarqueTelephone', 'view');
        if(isPermistted){
           this.marqueTelephoneService.findByIdWithAssociatedList(marqueTelephone).subscribe(res => {
           this.selectedMarqueTelephone = res;

            this.viewMarqueTelephoneDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateMarqueTelephone(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedMarqueTelephone = new MarqueTelephoneVo();
            this.createMarqueTelephoneDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteMarqueTelephone(marqueTelephone: MarqueTelephoneVo){
       const isPermistted = await this.roleService.isPermitted('MarqueTelephone', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Marque telephone) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.marqueTelephoneService.delete(marqueTelephone).subscribe(status=>{
                          if(status > 0){
                          const position = this.marqueTelephones.indexOf(marqueTelephone);
                          position > -1 ? this.marqueTelephones.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Marque telephone Supprimé',
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


public async duplicateMarqueTelephone(marqueTelephone: MarqueTelephoneVo) {

     this.marqueTelephoneService.findByIdWithAssociatedList(marqueTelephone).subscribe(
	 res => {
	       this.initDuplicateMarqueTelephone(res);
	       this.selectedMarqueTelephone = res;
	       this.selectedMarqueTelephone.id = null;


            this.createMarqueTelephoneDialog = true;

});

	}

	initDuplicateMarqueTelephone(res: MarqueTelephoneVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.marqueTelephones.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchMarqueTelephone.libelle ? this.searchMarqueTelephone.libelle : environment.emptyForExport ,
            'Code': this.searchMarqueTelephone.code ? this.searchMarqueTelephone.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get marqueTelephones() : Array<MarqueTelephoneVo> {
           return this.marqueTelephoneService.marqueTelephones;
       }
    set marqueTelephones(value: Array<MarqueTelephoneVo>) {
        this.marqueTelephoneService.marqueTelephones = value;
       }

    get marqueTelephoneSelections() : Array<MarqueTelephoneVo> {
           return this.marqueTelephoneService.marqueTelephoneSelections;
       }
    set marqueTelephoneSelections(value: Array<MarqueTelephoneVo>) {
        this.marqueTelephoneService.marqueTelephoneSelections = value;
       }
   
     


    get selectedMarqueTelephone() : MarqueTelephoneVo {
           return this.marqueTelephoneService.selectedMarqueTelephone;
       }
    set selectedMarqueTelephone(value: MarqueTelephoneVo) {
        this.marqueTelephoneService.selectedMarqueTelephone = value;
       }
    
    get createMarqueTelephoneDialog() :boolean {
           return this.marqueTelephoneService.createMarqueTelephoneDialog;
       }
    set createMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.createMarqueTelephoneDialog= value;
       }
    
    get editMarqueTelephoneDialog() :boolean {
           return this.marqueTelephoneService.editMarqueTelephoneDialog;
       }
    set editMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.editMarqueTelephoneDialog= value;
       }
    get viewMarqueTelephoneDialog() :boolean {
           return this.marqueTelephoneService.viewMarqueTelephoneDialog;
       }
    set viewMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.viewMarqueTelephoneDialog = value;
       }
       
     get searchMarqueTelephone() : MarqueTelephoneVo {
        return this.marqueTelephoneService.searchMarqueTelephone;
       }
    set searchMarqueTelephone(value: MarqueTelephoneVo) {
        this.marqueTelephoneService.searchMarqueTelephone = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

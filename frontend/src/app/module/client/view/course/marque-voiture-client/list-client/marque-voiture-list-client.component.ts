import {Component, OnInit} from '@angular/core';
import {MarqueVoitureService} from 'src/app/controller/service/MarqueVoiture.service';
import {MarqueVoitureVo} from 'src/app/controller/model/MarqueVoiture.model';
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
  selector: 'app-marque-voiture-list-client',
  templateUrl: './marque-voiture-list-client.component.html',
  styleUrls: ['./marque-voiture-list-client.component.css']
})
export class MarqueVoitureListClientComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'MarqueVoiture';
     yesOrNoActif :any[] =[];


    constructor(private datePipe: DatePipe, private marqueVoitureService: MarqueVoitureService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadMarqueVoitures();
      this.initExport();
      this.initCol();
    this.yesOrNoActif =  [{label: 'Actif', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadMarqueVoitures(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('MarqueVoiture', 'list');
        isPermistted ? this.marqueVoitureService.findAll().subscribe(marqueVoitures => this.marqueVoitures = marqueVoitures,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.marqueVoitureService.findByCriteria(this.searchMarqueVoiture).subscribe(marqueVoitures=>{
            
            this.marqueVoitures = marqueVoitures;
           // this.searchMarqueVoiture = new MarqueVoitureVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
                            {field: 'actif', header: 'Actif'},
        ];
    }
    
    public async editMarqueVoiture(marqueVoiture: MarqueVoitureVo){
        const isPermistted = await this.roleService.isPermitted('MarqueVoiture', 'edit');
         if(isPermistted){
          this.marqueVoitureService.findByIdWithAssociatedList(marqueVoiture).subscribe(res => {
           this.selectedMarqueVoiture = res;

            this.editMarqueVoitureDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewMarqueVoiture(marqueVoiture: MarqueVoitureVo){
        const isPermistted = await this.roleService.isPermitted('MarqueVoiture', 'view');
        if(isPermistted){
           this.marqueVoitureService.findByIdWithAssociatedList(marqueVoiture).subscribe(res => {
           this.selectedMarqueVoiture = res;

            this.viewMarqueVoitureDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateMarqueVoiture(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedMarqueVoiture = new MarqueVoitureVo();
            this.createMarqueVoitureDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteMarqueVoiture(marqueVoiture: MarqueVoitureVo){
       const isPermistted = await this.roleService.isPermitted('MarqueVoiture', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Marque voiture) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.marqueVoitureService.delete(marqueVoiture).subscribe(status=>{
                          if(status > 0){
                          const position = this.marqueVoitures.indexOf(marqueVoiture);
                          position > -1 ? this.marqueVoitures.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Marque voiture Supprimé',
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


public async duplicateMarqueVoiture(marqueVoiture: MarqueVoitureVo) {

     this.marqueVoitureService.findByIdWithAssociatedList(marqueVoiture).subscribe(
	 res => {
	       this.initDuplicateMarqueVoiture(res);
	       this.selectedMarqueVoiture = res;
	       this.selectedMarqueVoiture.id = null;


            this.createMarqueVoitureDialog = true;

});

	}

	initDuplicateMarqueVoiture(res: MarqueVoitureVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.marqueVoitures.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
                    'Actif': e.actif? 'Vrai' : 'Faux' ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchMarqueVoiture.libelle ? this.searchMarqueVoiture.libelle : environment.emptyForExport ,
            'Code': this.searchMarqueVoiture.code ? this.searchMarqueVoiture.code : environment.emptyForExport ,
            'Actif': this.searchMarqueVoiture.actif ? (this.searchMarqueVoiture.actif ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get marqueVoitures() : Array<MarqueVoitureVo> {
           return this.marqueVoitureService.marqueVoitures;
       }
    set marqueVoitures(value: Array<MarqueVoitureVo>) {
        this.marqueVoitureService.marqueVoitures = value;
       }

    get marqueVoitureSelections() : Array<MarqueVoitureVo> {
           return this.marqueVoitureService.marqueVoitureSelections;
       }
    set marqueVoitureSelections(value: Array<MarqueVoitureVo>) {
        this.marqueVoitureService.marqueVoitureSelections = value;
       }
   
     


    get selectedMarqueVoiture() : MarqueVoitureVo {
           return this.marqueVoitureService.selectedMarqueVoiture;
       }
    set selectedMarqueVoiture(value: MarqueVoitureVo) {
        this.marqueVoitureService.selectedMarqueVoiture = value;
       }
    
    get createMarqueVoitureDialog() :boolean {
           return this.marqueVoitureService.createMarqueVoitureDialog;
       }
    set createMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.createMarqueVoitureDialog= value;
       }
    
    get editMarqueVoitureDialog() :boolean {
           return this.marqueVoitureService.editMarqueVoitureDialog;
       }
    set editMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.editMarqueVoitureDialog= value;
       }
    get viewMarqueVoitureDialog() :boolean {
           return this.marqueVoitureService.viewMarqueVoitureDialog;
       }
    set viewMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.viewMarqueVoitureDialog = value;
       }
       
     get searchMarqueVoiture() : MarqueVoitureVo {
        return this.marqueVoitureService.searchMarqueVoiture;
       }
    set searchMarqueVoiture(value: MarqueVoitureVo) {
        this.marqueVoitureService.searchMarqueVoiture = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

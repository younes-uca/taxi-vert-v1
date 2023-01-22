import {Component, OnInit} from '@angular/core';
import {ModelApplicationService} from 'src/app/controller/service/ModelApplication.service';
import {ModelApplicationVo} from 'src/app/controller/model/ModelApplication.model';
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
  selector: 'app-model-application-list-admin',
  templateUrl: './model-application-list-admin.component.html',
  styleUrls: ['./model-application-list-admin.component.css']
})
export class ModelApplicationListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'ModelApplication';


    constructor(private datePipe: DatePipe, private modelApplicationService: ModelApplicationService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadModelApplications();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadModelApplications(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ModelApplication', 'list');
        isPermistted ? this.modelApplicationService.findAll().subscribe(modelApplications => this.modelApplications = modelApplications,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.modelApplicationService.findByCriteria(this.searchModelApplication).subscribe(modelApplications=>{
            
            this.modelApplications = modelApplications;
           // this.searchModelApplication = new ModelApplicationVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editModelApplication(modelApplication: ModelApplicationVo){
        const isPermistted = await this.roleService.isPermitted('ModelApplication', 'edit');
         if(isPermistted){
          this.modelApplicationService.findByIdWithAssociatedList(modelApplication).subscribe(res => {
           this.selectedModelApplication = res;

            this.editModelApplicationDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewModelApplication(modelApplication: ModelApplicationVo){
        const isPermistted = await this.roleService.isPermitted('ModelApplication', 'view');
        if(isPermistted){
           this.modelApplicationService.findByIdWithAssociatedList(modelApplication).subscribe(res => {
           this.selectedModelApplication = res;

            this.viewModelApplicationDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateModelApplication(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedModelApplication = new ModelApplicationVo();
            this.createModelApplicationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteModelApplication(modelApplication: ModelApplicationVo){
       const isPermistted = await this.roleService.isPermitted('ModelApplication', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Model application) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modelApplicationService.delete(modelApplication).subscribe(status=>{
                          if(status > 0){
                          const position = this.modelApplications.indexOf(modelApplication);
                          position > -1 ? this.modelApplications.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Model application Supprimé',
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


public async duplicateModelApplication(modelApplication: ModelApplicationVo) {

     this.modelApplicationService.findByIdWithAssociatedList(modelApplication).subscribe(
	 res => {
	       this.initDuplicateModelApplication(res);
	       this.selectedModelApplication = res;
	       this.selectedModelApplication.id = null;


            this.createModelApplicationDialog = true;

});

	}

	initDuplicateModelApplication(res: ModelApplicationVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.modelApplications.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchModelApplication.libelle ? this.searchModelApplication.libelle : environment.emptyForExport ,
            'Code': this.searchModelApplication.code ? this.searchModelApplication.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get modelApplications() : Array<ModelApplicationVo> {
           return this.modelApplicationService.modelApplications;
       }
    set modelApplications(value: Array<ModelApplicationVo>) {
        this.modelApplicationService.modelApplications = value;
       }

    get modelApplicationSelections() : Array<ModelApplicationVo> {
           return this.modelApplicationService.modelApplicationSelections;
       }
    set modelApplicationSelections(value: Array<ModelApplicationVo>) {
        this.modelApplicationService.modelApplicationSelections = value;
       }
   
     


    get selectedModelApplication() : ModelApplicationVo {
           return this.modelApplicationService.selectedModelApplication;
       }
    set selectedModelApplication(value: ModelApplicationVo) {
        this.modelApplicationService.selectedModelApplication = value;
       }
    
    get createModelApplicationDialog() :boolean {
           return this.modelApplicationService.createModelApplicationDialog;
       }
    set createModelApplicationDialog(value: boolean) {
        this.modelApplicationService.createModelApplicationDialog= value;
       }
    
    get editModelApplicationDialog() :boolean {
           return this.modelApplicationService.editModelApplicationDialog;
       }
    set editModelApplicationDialog(value: boolean) {
        this.modelApplicationService.editModelApplicationDialog= value;
       }
    get viewModelApplicationDialog() :boolean {
           return this.modelApplicationService.viewModelApplicationDialog;
       }
    set viewModelApplicationDialog(value: boolean) {
        this.modelApplicationService.viewModelApplicationDialog = value;
       }
       
     get searchModelApplication() : ModelApplicationVo {
        return this.modelApplicationService.searchModelApplication;
       }
    set searchModelApplication(value: ModelApplicationVo) {
        this.modelApplicationService.searchModelApplication = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

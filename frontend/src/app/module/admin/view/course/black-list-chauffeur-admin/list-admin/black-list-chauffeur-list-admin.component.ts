import {Component, OnInit} from '@angular/core';
import {BlackListChauffeurService} from 'src/app/controller/service/BlackListChauffeur.service';
import {BlackListChauffeurVo} from 'src/app/controller/model/BlackListChauffeur.model';
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
  selector: 'app-black-list-chauffeur-list-admin',
  templateUrl: './black-list-chauffeur-list-admin.component.html',
  styleUrls: ['./black-list-chauffeur-list-admin.component.css']
})
export class BlackListChauffeurListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'BlackListChauffeur';


    constructor(private datePipe: DatePipe, private blackListChauffeurService: BlackListChauffeurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadBlackListChauffeurs();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadBlackListChauffeurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('BlackListChauffeur', 'list');
        isPermistted ? this.blackListChauffeurService.findAll().subscribe(blackListChauffeurs => this.blackListChauffeurs = blackListChauffeurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.blackListChauffeurService.findByCriteria(this.searchBlackListChauffeur).subscribe(blackListChauffeurs=>{
            
            this.blackListChauffeurs = blackListChauffeurs;
           // this.searchBlackListChauffeur = new BlackListChauffeurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'chauffeur', header: 'Chauffeur'},
                            {field: 'client', header: 'Client'},
                            {field: 'dateBlackList', header: 'Date black list'},
                            {field: 'commentaire', header: 'Commentaire'},
        ];
    }
    
    public async editBlackListChauffeur(blackListChauffeur: BlackListChauffeurVo){
        const isPermistted = await this.roleService.isPermitted('BlackListChauffeur', 'edit');
         if(isPermistted){
          this.blackListChauffeurService.findByIdWithAssociatedList(blackListChauffeur).subscribe(res => {
           this.selectedBlackListChauffeur = res;

            this.editBlackListChauffeurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewBlackListChauffeur(blackListChauffeur: BlackListChauffeurVo){
        const isPermistted = await this.roleService.isPermitted('BlackListChauffeur', 'view');
        if(isPermistted){
           this.blackListChauffeurService.findByIdWithAssociatedList(blackListChauffeur).subscribe(res => {
           this.selectedBlackListChauffeur = res;

            this.viewBlackListChauffeurDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateBlackListChauffeur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedBlackListChauffeur = new BlackListChauffeurVo();
            this.createBlackListChauffeurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteBlackListChauffeur(blackListChauffeur: BlackListChauffeurVo){
       const isPermistted = await this.roleService.isPermitted('BlackListChauffeur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Black list chauffeur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.blackListChauffeurService.delete(blackListChauffeur).subscribe(status=>{
                          if(status > 0){
                          const position = this.blackListChauffeurs.indexOf(blackListChauffeur);
                          position > -1 ? this.blackListChauffeurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Black list chauffeur Supprimé',
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


public async duplicateBlackListChauffeur(blackListChauffeur: BlackListChauffeurVo) {

     this.blackListChauffeurService.findByIdWithAssociatedList(blackListChauffeur).subscribe(
	 res => {
	       this.initDuplicateBlackListChauffeur(res);
	       this.selectedBlackListChauffeur = res;
	       this.selectedBlackListChauffeur.id = null;


            this.createBlackListChauffeurDialog = true;

});

	}

	initDuplicateBlackListChauffeur(res: BlackListChauffeurVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.blackListChauffeurs.map(e => {
    return {
                    'Chauffeur': e.chauffeur ,
                    'Client': e.client ,
                    'Date black list': e.dateBlackList ,
                    'Commentaire': e.commentaire ,
     }
      });

      this.criteriaData = [{
            'Chauffeur': this.searchBlackListChauffeur.chauffeur ? this.searchBlackListChauffeur.chauffeur : environment.emptyForExport ,
            'Client': this.searchBlackListChauffeur.client ? this.searchBlackListChauffeur.client : environment.emptyForExport ,
            'Date black list': this.searchBlackListChauffeur.dateBlackList ? this.searchBlackListChauffeur.dateBlackList : environment.emptyForExport ,
            'Commentaire': this.searchBlackListChauffeur.commentaire ? this.searchBlackListChauffeur.commentaire : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get blackListChauffeurs() : Array<BlackListChauffeurVo> {
           return this.blackListChauffeurService.blackListChauffeurs;
       }
    set blackListChauffeurs(value: Array<BlackListChauffeurVo>) {
        this.blackListChauffeurService.blackListChauffeurs = value;
       }

    get blackListChauffeurSelections() : Array<BlackListChauffeurVo> {
           return this.blackListChauffeurService.blackListChauffeurSelections;
       }
    set blackListChauffeurSelections(value: Array<BlackListChauffeurVo>) {
        this.blackListChauffeurService.blackListChauffeurSelections = value;
       }
   
     


    get selectedBlackListChauffeur() : BlackListChauffeurVo {
           return this.blackListChauffeurService.selectedBlackListChauffeur;
       }
    set selectedBlackListChauffeur(value: BlackListChauffeurVo) {
        this.blackListChauffeurService.selectedBlackListChauffeur = value;
       }
    
    get createBlackListChauffeurDialog() :boolean {
           return this.blackListChauffeurService.createBlackListChauffeurDialog;
       }
    set createBlackListChauffeurDialog(value: boolean) {
        this.blackListChauffeurService.createBlackListChauffeurDialog= value;
       }
    
    get editBlackListChauffeurDialog() :boolean {
           return this.blackListChauffeurService.editBlackListChauffeurDialog;
       }
    set editBlackListChauffeurDialog(value: boolean) {
        this.blackListChauffeurService.editBlackListChauffeurDialog= value;
       }
    get viewBlackListChauffeurDialog() :boolean {
           return this.blackListChauffeurService.viewBlackListChauffeurDialog;
       }
    set viewBlackListChauffeurDialog(value: boolean) {
        this.blackListChauffeurService.viewBlackListChauffeurDialog = value;
       }
       
     get searchBlackListChauffeur() : BlackListChauffeurVo {
        return this.blackListChauffeurService.searchBlackListChauffeur;
       }
    set searchBlackListChauffeur(value: BlackListChauffeurVo) {
        this.blackListChauffeurService.searchBlackListChauffeur = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

import {Component, OnInit} from '@angular/core';
import {EtatChauffeurService} from 'src/app/controller/service/EtatChauffeur.service';
import {EtatChauffeurVo} from 'src/app/controller/model/EtatChauffeur.model';
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
  selector: 'app-etat-chauffeur-list-admin',
  templateUrl: './etat-chauffeur-list-admin.component.html',
  styleUrls: ['./etat-chauffeur-list-admin.component.css']
})
export class EtatChauffeurListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'EtatChauffeur';


    constructor(private datePipe: DatePipe, private etatChauffeurService: EtatChauffeurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadEtatChauffeurs();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadEtatChauffeurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatChauffeur', 'list');
        isPermistted ? this.etatChauffeurService.findAll().subscribe(etatChauffeurs => this.etatChauffeurs = etatChauffeurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.etatChauffeurService.findByCriteria(this.searchEtatChauffeur).subscribe(etatChauffeurs=>{
            
            this.etatChauffeurs = etatChauffeurs;
           // this.searchEtatChauffeur = new EtatChauffeurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editEtatChauffeur(etatChauffeur: EtatChauffeurVo){
        const isPermistted = await this.roleService.isPermitted('EtatChauffeur', 'edit');
         if(isPermistted){
          this.etatChauffeurService.findByIdWithAssociatedList(etatChauffeur).subscribe(res => {
           this.selectedEtatChauffeur = res;

            this.editEtatChauffeurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewEtatChauffeur(etatChauffeur: EtatChauffeurVo){
        const isPermistted = await this.roleService.isPermitted('EtatChauffeur', 'view');
        if(isPermistted){
           this.etatChauffeurService.findByIdWithAssociatedList(etatChauffeur).subscribe(res => {
           this.selectedEtatChauffeur = res;

            this.viewEtatChauffeurDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateEtatChauffeur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEtatChauffeur = new EtatChauffeurVo();
            this.createEtatChauffeurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteEtatChauffeur(etatChauffeur: EtatChauffeurVo){
       const isPermistted = await this.roleService.isPermitted('EtatChauffeur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Etat chauffeur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etatChauffeurService.delete(etatChauffeur).subscribe(status=>{
                          if(status > 0){
                          const position = this.etatChauffeurs.indexOf(etatChauffeur);
                          position > -1 ? this.etatChauffeurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Etat chauffeur Supprimé',
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


public async duplicateEtatChauffeur(etatChauffeur: EtatChauffeurVo) {

     this.etatChauffeurService.findByIdWithAssociatedList(etatChauffeur).subscribe(
	 res => {
	       this.initDuplicateEtatChauffeur(res);
	       this.selectedEtatChauffeur = res;
	       this.selectedEtatChauffeur.id = null;


            this.createEtatChauffeurDialog = true;

});

	}

	initDuplicateEtatChauffeur(res: EtatChauffeurVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.etatChauffeurs.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchEtatChauffeur.libelle ? this.searchEtatChauffeur.libelle : environment.emptyForExport ,
            'Code': this.searchEtatChauffeur.code ? this.searchEtatChauffeur.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get etatChauffeurs() : Array<EtatChauffeurVo> {
           return this.etatChauffeurService.etatChauffeurs;
       }
    set etatChauffeurs(value: Array<EtatChauffeurVo>) {
        this.etatChauffeurService.etatChauffeurs = value;
       }

    get etatChauffeurSelections() : Array<EtatChauffeurVo> {
           return this.etatChauffeurService.etatChauffeurSelections;
       }
    set etatChauffeurSelections(value: Array<EtatChauffeurVo>) {
        this.etatChauffeurService.etatChauffeurSelections = value;
       }
   
     


    get selectedEtatChauffeur() : EtatChauffeurVo {
           return this.etatChauffeurService.selectedEtatChauffeur;
       }
    set selectedEtatChauffeur(value: EtatChauffeurVo) {
        this.etatChauffeurService.selectedEtatChauffeur = value;
       }
    
    get createEtatChauffeurDialog() :boolean {
           return this.etatChauffeurService.createEtatChauffeurDialog;
       }
    set createEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.createEtatChauffeurDialog= value;
       }
    
    get editEtatChauffeurDialog() :boolean {
           return this.etatChauffeurService.editEtatChauffeurDialog;
       }
    set editEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.editEtatChauffeurDialog= value;
       }
    get viewEtatChauffeurDialog() :boolean {
           return this.etatChauffeurService.viewEtatChauffeurDialog;
       }
    set viewEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.viewEtatChauffeurDialog = value;
       }
       
     get searchEtatChauffeur() : EtatChauffeurVo {
        return this.etatChauffeurService.searchEtatChauffeur;
       }
    set searchEtatChauffeur(value: EtatChauffeurVo) {
        this.etatChauffeurService.searchEtatChauffeur = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

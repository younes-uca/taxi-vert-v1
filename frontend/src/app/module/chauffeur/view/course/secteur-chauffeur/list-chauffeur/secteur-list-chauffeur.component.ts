import {Component, OnInit} from '@angular/core';
import {SecteurService} from 'src/app/controller/service/Secteur.service';
import {SecteurVo} from 'src/app/controller/model/Secteur.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';



import { VilleService } from 'src/app/controller/service/Ville.service';

import {VilleVo} from 'src/app/controller/model/Ville.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-secteur-list-chauffeur',
  templateUrl: './secteur-list-chauffeur.component.html',
  styleUrls: ['./secteur-list-chauffeur.component.css']
})
export class SecteurListChauffeurComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Secteur';
    villes :Array<VilleVo>;


    constructor(private datePipe: DatePipe, private secteurService: SecteurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private villeService: VilleService
) { }

    ngOnInit() : void {
      this.loadSecteurs();
      this.initExport();
      this.initCol();
      this.loadVille();
    }
    
    // methods
      public async loadSecteurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Secteur', 'list');
        isPermistted ? this.secteurService.findAll().subscribe(secteurs => this.secteurs = secteurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.secteurService.findByCriteria(this.searchSecteur).subscribe(secteurs=>{
            
            this.secteurs = secteurs;
           // this.searchSecteur = new SecteurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
                        {field: 'ville?.libelle', header: 'Ville'},
        ];
    }
    
    public async editSecteur(secteur: SecteurVo){
        const isPermistted = await this.roleService.isPermitted('Secteur', 'edit');
         if(isPermistted){
          this.secteurService.findByIdWithAssociatedList(secteur).subscribe(res => {
           this.selectedSecteur = res;

            this.editSecteurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewSecteur(secteur: SecteurVo){
        const isPermistted = await this.roleService.isPermitted('Secteur', 'view');
        if(isPermistted){
           this.secteurService.findByIdWithAssociatedList(secteur).subscribe(res => {
           this.selectedSecteur = res;

            this.viewSecteurDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateSecteur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedSecteur = new SecteurVo();
            this.createSecteurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteSecteur(secteur: SecteurVo){
       const isPermistted = await this.roleService.isPermitted('Secteur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Secteur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.secteurService.delete(secteur).subscribe(status=>{
                          if(status > 0){
                          const position = this.secteurs.indexOf(secteur);
                          position > -1 ? this.secteurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Secteur Supprimé',
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

public async loadVille(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Secteur', 'list');
    isPermistted ? this.villeService.findAll().subscribe(villes => this.villes = villes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateSecteur(secteur: SecteurVo) {

     this.secteurService.findByIdWithAssociatedList(secteur).subscribe(
	 res => {
	       this.initDuplicateSecteur(res);
	       this.selectedSecteur = res;
	       this.selectedSecteur.id = null;


            this.createSecteurDialog = true;

});

	}

	initDuplicateSecteur(res: SecteurVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.secteurs.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
            'Ville': e.villeVo?.libelle ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchSecteur.libelle ? this.searchSecteur.libelle : environment.emptyForExport ,
            'Code': this.searchSecteur.code ? this.searchSecteur.code : environment.emptyForExport ,
        'Ville': this.searchSecteur.villeVo?.libelle ? this.searchSecteur.villeVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get secteurs() : Array<SecteurVo> {
           return this.secteurService.secteurs;
       }
    set secteurs(value: Array<SecteurVo>) {
        this.secteurService.secteurs = value;
       }

    get secteurSelections() : Array<SecteurVo> {
           return this.secteurService.secteurSelections;
       }
    set secteurSelections(value: Array<SecteurVo>) {
        this.secteurService.secteurSelections = value;
       }
   
     


    get selectedSecteur() : SecteurVo {
           return this.secteurService.selectedSecteur;
       }
    set selectedSecteur(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }
    
    get createSecteurDialog() :boolean {
           return this.secteurService.createSecteurDialog;
       }
    set createSecteurDialog(value: boolean) {
        this.secteurService.createSecteurDialog= value;
       }
    
    get editSecteurDialog() :boolean {
           return this.secteurService.editSecteurDialog;
       }
    set editSecteurDialog(value: boolean) {
        this.secteurService.editSecteurDialog= value;
       }
    get viewSecteurDialog() :boolean {
           return this.secteurService.viewSecteurDialog;
       }
    set viewSecteurDialog(value: boolean) {
        this.secteurService.viewSecteurDialog = value;
       }
       
     get searchSecteur() : SecteurVo {
        return this.secteurService.searchSecteur;
       }
    set searchSecteur(value: SecteurVo) {
        this.secteurService.searchSecteur = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

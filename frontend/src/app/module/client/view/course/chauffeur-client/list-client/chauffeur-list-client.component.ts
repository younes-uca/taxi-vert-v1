import {Component, OnInit} from '@angular/core';
import {ChauffeurService} from 'src/app/controller/service/Chauffeur.service';
import {ChauffeurVo} from 'src/app/controller/model/Chauffeur.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';



import { MoyenTransportService } from 'src/app/controller/service/MoyenTransport.service';
import { ModelApplicationService } from 'src/app/controller/service/ModelApplication.service';
import { MarqueTelephoneService } from 'src/app/controller/service/MarqueTelephone.service';
import { MarqueVoitureService } from 'src/app/controller/service/MarqueVoiture.service';
import { EtatChauffeurService } from 'src/app/controller/service/EtatChauffeur.service';
import { VilleService } from 'src/app/controller/service/Ville.service';
import { LangueService } from 'src/app/controller/service/Langue.service';
import { ThemeService } from 'src/app/controller/service/Theme.service';

import {ModelApplicationVo} from 'src/app/controller/model/ModelApplication.model';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {EtatChauffeurVo} from 'src/app/controller/model/EtatChauffeur.model';
import {LangueVo} from 'src/app/controller/model/Langue.model';
import {MarqueVoitureVo} from 'src/app/controller/model/MarqueVoiture.model';
import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {MarqueTelephoneVo} from 'src/app/controller/model/MarqueTelephone.model';
import {VilleVo} from 'src/app/controller/model/Ville.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-chauffeur-list-client',
  templateUrl: './chauffeur-list-client.component.html',
  styleUrls: ['./chauffeur-list-client.component.css']
})
export class ChauffeurListClientComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Chauffeur';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];
    moyenTransports :Array<MoyenTransportVo>;
    modelApplications :Array<ModelApplicationVo>;
    marqueTelephones :Array<MarqueTelephoneVo>;
    marqueVoitures :Array<MarqueVoitureVo>;
    etatChauffeurs :Array<EtatChauffeurVo>;
    villes :Array<VilleVo>;
    langues :Array<LangueVo>;
    themes :Array<ThemeVo>;


    constructor(private datePipe: DatePipe, private chauffeurService: ChauffeurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private moyenTransportService: MoyenTransportService
        , private modelApplicationService: ModelApplicationService
        , private marqueTelephoneService: MarqueTelephoneService
        , private marqueVoitureService: MarqueVoitureService
        , private etatChauffeurService: EtatChauffeurService
        , private villeService: VilleService
        , private langueService: LangueService
        , private themeService: ThemeService
) { }

    ngOnInit() : void {
      this.loadChauffeurs();
      this.initExport();
      this.initCol();
      this.loadMoyenTransport();
      this.loadModelApplication();
      this.loadMarqueTelephone();
      this.loadMarqueVoiture();
      this.loadEtatChauffeur();
      this.loadVille();
      this.loadLangue();
      this.loadTheme();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadChauffeurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
        isPermistted ? this.chauffeurService.findAll().subscribe(chauffeurs => this.chauffeurs = chauffeurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.chauffeurService.findByCriteria(this.searchChauffeur).subscribe(chauffeurs=>{
            
            this.chauffeurs = chauffeurs;
           // this.searchChauffeur = new ChauffeurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'matricule', header: 'Matricule'},
                            {field: 'mobile', header: 'Mobile'},
                        {field: 'moyenTransport?.libelle', header: 'Moyen transport'},
                        {field: 'modelApplication?.libelle', header: 'Model application'},
                        {field: 'marqueTelephone?.libelle', header: 'Marque telephone'},
                        {field: 'marqueVoiture?.libelle', header: 'Marque voiture'},
                        {field: 'etatChauffeur?.libelle', header: 'Etat chauffeur'},
                        {field: 'ville?.libelle', header: 'Ville'},
                            {field: 'codePostale', header: 'Code postale'},
                            {field: 'nombrePlace', header: 'Nombre place'},
                            {field: 'imageVoiture', header: 'Image voiture'},
                            {field: 'orderAffichage', header: 'Order affichage'},
                            {field: 'altitudeActuelle', header: 'Altitude actuelle'},
                            {field: 'longitudeActuelle', header: 'Longitude actuelle'},
                        {field: 'langue?.libelle', header: 'Langue'},
                        {field: 'theme?.libelle', header: 'Theme'},
                            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
                            {field: 'enabled', header: 'Enabled'},
                            {field: 'accountNonExpired', header: 'Account non expired'},
                            {field: 'accountNonLocked', header: 'Account non locked'},
                            {field: 'passwordChanged', header: 'Password changed'},
                            {field: 'createdAt', header: 'Created at'},
                            {field: 'updatedAt', header: 'Updated at'},
                            {field: 'username', header: 'Username'},
                            {field: 'password', header: 'Password'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'nom', header: 'Nom'},
        ];
    }
    
    public async editChauffeur(chauffeur: ChauffeurVo){
        const isPermistted = await this.roleService.isPermitted('Chauffeur', 'edit');
         if(isPermistted){
          this.chauffeurService.findByIdWithAssociatedList(chauffeur).subscribe(res => {
           this.selectedChauffeur = res;
                        this.selectedChauffeur.createdAt = new Date(chauffeur.createdAt);
                        this.selectedChauffeur.updatedAt = new Date(chauffeur.updatedAt);

            this.editChauffeurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewChauffeur(chauffeur: ChauffeurVo){
        const isPermistted = await this.roleService.isPermitted('Chauffeur', 'view');
        if(isPermistted){
           this.chauffeurService.findByIdWithAssociatedList(chauffeur).subscribe(res => {
           this.selectedChauffeur = res;
                this.selectedChauffeur.createdAt = new Date(chauffeur.createdAt);
                this.selectedChauffeur.updatedAt = new Date(chauffeur.updatedAt);

            this.viewChauffeurDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateChauffeur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedChauffeur = new ChauffeurVo();
            this.createChauffeurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteChauffeur(chauffeur: ChauffeurVo){
       const isPermistted = await this.roleService.isPermitted('Chauffeur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Chauffeur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.chauffeurService.delete(chauffeur).subscribe(status=>{
                          if(status > 0){
                          const position = this.chauffeurs.indexOf(chauffeur);
                          position > -1 ? this.chauffeurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Chauffeur Supprimé',
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

public async loadMoyenTransport(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.moyenTransportService.findAll().subscribe(moyenTransports => this.moyenTransports = moyenTransports,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadModelApplication(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.modelApplicationService.findAll().subscribe(modelApplications => this.modelApplications = modelApplications,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadMarqueTelephone(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.marqueTelephoneService.findAll().subscribe(marqueTelephones => this.marqueTelephones = marqueTelephones,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadMarqueVoiture(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.marqueVoitureService.findAll().subscribe(marqueVoitures => this.marqueVoitures = marqueVoitures,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadEtatChauffeur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.etatChauffeurService.findAll().subscribe(etatChauffeurs => this.etatChauffeurs = etatChauffeurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadVille(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.villeService.findAll().subscribe(villes => this.villes = villes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadLangue(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.langueService.findAll().subscribe(langues => this.langues = langues,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadTheme(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Chauffeur', 'list');
    isPermistted ? this.themeService.findAll().subscribe(themes => this.themes = themes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateChauffeur(chauffeur: ChauffeurVo) {

     this.chauffeurService.findByIdWithAssociatedList(chauffeur).subscribe(
	 res => {
	       this.initDuplicateChauffeur(res);
	       this.selectedChauffeur = res;
	       this.selectedChauffeur.id = null;


            this.createChauffeurDialog = true;

});

	}

	initDuplicateChauffeur(res: ChauffeurVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.chauffeurs.map(e => {
    return {
                    'Matricule': e.matricule ,
                    'Mobile': e.mobile ,
            'Moyen transport': e.moyenTransportVo?.libelle ,
            'Model application': e.modelApplicationVo?.libelle ,
            'Marque telephone': e.marqueTelephoneVo?.libelle ,
            'Marque voiture': e.marqueVoitureVo?.libelle ,
            'Etat chauffeur': e.etatChauffeurVo?.libelle ,
            'Ville': e.villeVo?.libelle ,
                    'Code postale': e.codePostale ,
                    'Nombre place': e.nombrePlace ,
                    'Image voiture': e.imageVoiture ,
                    'Order affichage': e.orderAffichage ,
                    'Altitude actuelle': e.altitudeActuelle ,
                    'Longitude actuelle': e.longitudeActuelle ,
            'Langue': e.langueVo?.libelle ,
            'Theme': e.themeVo?.libelle ,
                    'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                    'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                    'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                    'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                    'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                    'Created at': this.datePipe.transform(e.createdAt , 'dd/MM/yyyy hh:mm'),
                    'Updated at': this.datePipe.transform(e.updatedAt , 'dd/MM/yyyy hh:mm'),
                    'Username': e.username ,
                    'Password': e.password ,
                    'Prenom': e.prenom ,
                    'Nom': e.nom ,
     }
      });

      this.criteriaData = [{
            'Matricule': this.searchChauffeur.matricule ? this.searchChauffeur.matricule : environment.emptyForExport ,
            'Mobile': this.searchChauffeur.mobile ? this.searchChauffeur.mobile : environment.emptyForExport ,
        'Moyen transport': this.searchChauffeur.moyenTransportVo?.libelle ? this.searchChauffeur.moyenTransportVo?.libelle : environment.emptyForExport ,
        'Model application': this.searchChauffeur.modelApplicationVo?.libelle ? this.searchChauffeur.modelApplicationVo?.libelle : environment.emptyForExport ,
        'Marque telephone': this.searchChauffeur.marqueTelephoneVo?.libelle ? this.searchChauffeur.marqueTelephoneVo?.libelle : environment.emptyForExport ,
        'Marque voiture': this.searchChauffeur.marqueVoitureVo?.libelle ? this.searchChauffeur.marqueVoitureVo?.libelle : environment.emptyForExport ,
        'Etat chauffeur': this.searchChauffeur.etatChauffeurVo?.libelle ? this.searchChauffeur.etatChauffeurVo?.libelle : environment.emptyForExport ,
        'Ville': this.searchChauffeur.villeVo?.libelle ? this.searchChauffeur.villeVo?.libelle : environment.emptyForExport ,
            'Code postale': this.searchChauffeur.codePostale ? this.searchChauffeur.codePostale : environment.emptyForExport ,
            'Nombre place Min': this.searchChauffeur.nombrePlaceMin ? this.searchChauffeur.nombrePlaceMin : environment.emptyForExport ,
            'Nombre place Max': this.searchChauffeur.nombrePlaceMax ? this.searchChauffeur.nombrePlaceMax : environment.emptyForExport ,
            'Image voiture': this.searchChauffeur.imageVoiture ? this.searchChauffeur.imageVoiture : environment.emptyForExport ,
            'Order affichage Min': this.searchChauffeur.orderAffichageMin ? this.searchChauffeur.orderAffichageMin : environment.emptyForExport ,
            'Order affichage Max': this.searchChauffeur.orderAffichageMax ? this.searchChauffeur.orderAffichageMax : environment.emptyForExport ,
            'Altitude actuelle Min': this.searchChauffeur.altitudeActuelleMin ? this.searchChauffeur.altitudeActuelleMin : environment.emptyForExport ,
            'Altitude actuelle Max': this.searchChauffeur.altitudeActuelleMax ? this.searchChauffeur.altitudeActuelleMax : environment.emptyForExport ,
            'Longitude actuelle Min': this.searchChauffeur.longitudeActuelleMin ? this.searchChauffeur.longitudeActuelleMin : environment.emptyForExport ,
            'Longitude actuelle Max': this.searchChauffeur.longitudeActuelleMax ? this.searchChauffeur.longitudeActuelleMax : environment.emptyForExport ,
        'Langue': this.searchChauffeur.langueVo?.libelle ? this.searchChauffeur.langueVo?.libelle : environment.emptyForExport ,
        'Theme': this.searchChauffeur.themeVo?.libelle ? this.searchChauffeur.themeVo?.libelle : environment.emptyForExport ,
            'Credentials non expired': this.searchChauffeur.credentialsNonExpired ? (this.searchChauffeur.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchChauffeur.enabled ? (this.searchChauffeur.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchChauffeur.accountNonExpired ? (this.searchChauffeur.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchChauffeur.accountNonLocked ? (this.searchChauffeur.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchChauffeur.passwordChanged ? (this.searchChauffeur.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchChauffeur.createdAtMin ? this.datePipe.transform(this.searchChauffeur.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchChauffeur.createdAtMax ? this.datePipe.transform(this.searchChauffeur.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchChauffeur.updatedAtMin ? this.datePipe.transform(this.searchChauffeur.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchChauffeur.updatedAtMax ? this.datePipe.transform(this.searchChauffeur.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchChauffeur.username ? this.searchChauffeur.username : environment.emptyForExport ,
            'Password': this.searchChauffeur.password ? this.searchChauffeur.password : environment.emptyForExport ,
            'Prenom': this.searchChauffeur.prenom ? this.searchChauffeur.prenom : environment.emptyForExport ,
            'Nom': this.searchChauffeur.nom ? this.searchChauffeur.nom : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get chauffeurs() : Array<ChauffeurVo> {
           return this.chauffeurService.chauffeurs;
       }
    set chauffeurs(value: Array<ChauffeurVo>) {
        this.chauffeurService.chauffeurs = value;
       }

    get chauffeurSelections() : Array<ChauffeurVo> {
           return this.chauffeurService.chauffeurSelections;
       }
    set chauffeurSelections(value: Array<ChauffeurVo>) {
        this.chauffeurService.chauffeurSelections = value;
       }
   
     


    get selectedChauffeur() : ChauffeurVo {
           return this.chauffeurService.selectedChauffeur;
       }
    set selectedChauffeur(value: ChauffeurVo) {
        this.chauffeurService.selectedChauffeur = value;
       }
    
    get createChauffeurDialog() :boolean {
           return this.chauffeurService.createChauffeurDialog;
       }
    set createChauffeurDialog(value: boolean) {
        this.chauffeurService.createChauffeurDialog= value;
       }
    
    get editChauffeurDialog() :boolean {
           return this.chauffeurService.editChauffeurDialog;
       }
    set editChauffeurDialog(value: boolean) {
        this.chauffeurService.editChauffeurDialog= value;
       }
    get viewChauffeurDialog() :boolean {
           return this.chauffeurService.viewChauffeurDialog;
       }
    set viewChauffeurDialog(value: boolean) {
        this.chauffeurService.viewChauffeurDialog = value;
       }
       
     get searchChauffeur() : ChauffeurVo {
        return this.chauffeurService.searchChauffeur;
       }
    set searchChauffeur(value: ChauffeurVo) {
        this.chauffeurService.searchChauffeur = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

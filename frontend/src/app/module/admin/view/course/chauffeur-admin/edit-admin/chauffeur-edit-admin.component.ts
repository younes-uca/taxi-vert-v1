import {Component, OnInit, Input} from '@angular/core';
import {ChauffeurService} from 'src/app/controller/service/Chauffeur.service';
import {ChauffeurVo} from 'src/app/controller/model/Chauffeur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {ThemeService} from 'src/app/controller/service/Theme.service';
import {LangueVo} from 'src/app/controller/model/Langue.model';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {MarqueTelephoneVo} from 'src/app/controller/model/MarqueTelephone.model';
import {MarqueTelephoneService} from 'src/app/controller/service/MarqueTelephone.service';
import {EtatChauffeurVo} from 'src/app/controller/model/EtatChauffeur.model';
import {EtatChauffeurService} from 'src/app/controller/service/EtatChauffeur.service';
import {VilleVo} from 'src/app/controller/model/Ville.model';
import {VilleService} from 'src/app/controller/service/Ville.service';
import {MarqueVoitureVo} from 'src/app/controller/model/MarqueVoiture.model';
import {MarqueVoitureService} from 'src/app/controller/service/MarqueVoiture.service';
import {ModelApplicationVo} from 'src/app/controller/model/ModelApplication.model';
import {ModelApplicationService} from 'src/app/controller/service/ModelApplication.service';
@Component({
  selector: 'app-chauffeur-edit-admin',
  templateUrl: './chauffeur-edit-admin.component.html',
  styleUrls: ['./chauffeur-edit-admin.component.css']
})
export class ChauffeurEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validMoyenTransportLibelle = true;
    _validMoyenTransportCode = true;
    _validModelApplicationLibelle = true;
    _validModelApplicationCode = true;
    _validMarqueTelephoneLibelle = true;
    _validMarqueTelephoneCode = true;
    _validMarqueVoitureLibelle = true;
    _validMarqueVoitureCode = true;
    _validEtatChauffeurLibelle = true;
    _validEtatChauffeurCode = true;
    _validVilleLibelle = true;
    _validVilleCode = true;
    _validLangueLibelle = true;
    _validLangueCode = true;
    _validThemeLibelle = true;
    _validThemeCode = true;



constructor(private datePipe: DatePipe, private chauffeurService: ChauffeurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private themeService: ThemeService
,       private langueService: LangueService
,       private moyenTransportService: MoyenTransportService
,       private marqueTelephoneService: MarqueTelephoneService
,       private etatChauffeurService: EtatChauffeurService
,       private villeService: VilleService
,       private marqueVoitureService: MarqueVoitureService
,       private modelApplicationService: ModelApplicationService
) {

}

// methods
ngOnInit(): void {
    this.selectedMoyenTransport = new MoyenTransportVo();
    this.moyenTransportService.findAll().subscribe((data) => this.moyenTransports = data);
    this.selectedModelApplication = new ModelApplicationVo();
    this.modelApplicationService.findAll().subscribe((data) => this.modelApplications = data);
    this.selectedMarqueTelephone = new MarqueTelephoneVo();
    this.marqueTelephoneService.findAll().subscribe((data) => this.marqueTelephones = data);
    this.selectedMarqueVoiture = new MarqueVoitureVo();
    this.marqueVoitureService.findAll().subscribe((data) => this.marqueVoitures = data);
    this.selectedEtatChauffeur = new EtatChauffeurVo();
    this.etatChauffeurService.findAll().subscribe((data) => this.etatChauffeurs = data);
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
    this.selectedLangue = new LangueVo();
    this.langueService.findAll().subscribe((data) => this.langues = data);
    this.selectedTheme = new ThemeVo();
    this.themeService.findAll().subscribe((data) => this.themes = data);
}




private setValidation(value : boolean){
    }


public edit(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.editWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public editWithShowOption(showList: boolean){
     this.chauffeurService.edit().subscribe(chauffeur=>{
     const myIndex = this.chauffeurs.findIndex(e => e.id === this.selectedChauffeur.id);
     this.chauffeurs[myIndex] = chauffeur;
     this.editChauffeurDialog = false;
     this.submitted = false;
     this.selectedChauffeur = new ChauffeurVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

    }
































//openPopup
      public async openCreateLangue(langue: string) {
        const isPermistted = await this.roleService.isPermitted('Langue', 'edit');
        if(isPermistted) {
         this.selectedLangue = new LangueVo();
         this.createLangueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateVille(ville: string) {
        const isPermistted = await this.roleService.isPermitted('Ville', 'edit');
        if(isPermistted) {
         this.selectedVille = new VilleVo();
         this.createVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateMoyenTransport(moyenTransport: string) {
        const isPermistted = await this.roleService.isPermitted('MoyenTransport', 'edit');
        if(isPermistted) {
         this.selectedMoyenTransport = new MoyenTransportVo();
         this.createMoyenTransportDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateMarqueTelephone(marqueTelephone: string) {
        const isPermistted = await this.roleService.isPermitted('MarqueTelephone', 'edit');
        if(isPermistted) {
         this.selectedMarqueTelephone = new MarqueTelephoneVo();
         this.createMarqueTelephoneDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateMarqueVoiture(marqueVoiture: string) {
        const isPermistted = await this.roleService.isPermitted('MarqueVoiture', 'edit');
        if(isPermistted) {
         this.selectedMarqueVoiture = new MarqueVoitureVo();
         this.createMarqueVoitureDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateTheme(theme: string) {
        const isPermistted = await this.roleService.isPermitted('Theme', 'edit');
        if(isPermistted) {
         this.selectedTheme = new ThemeVo();
         this.createThemeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateModelApplication(modelApplication: string) {
        const isPermistted = await this.roleService.isPermitted('ModelApplication', 'edit');
        if(isPermistted) {
         this.selectedModelApplication = new ModelApplicationVo();
         this.createModelApplicationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateEtatChauffeur(etatChauffeur: string) {
        const isPermistted = await this.roleService.isPermitted('EtatChauffeur', 'edit');
        if(isPermistted) {
         this.selectedEtatChauffeur = new EtatChauffeurVo();
         this.createEtatChauffeurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editChauffeurDialog  = false;
    this.setValidation(true);
}

// getters and setters

get chauffeurs(): Array<ChauffeurVo> {
    return this.chauffeurService.chauffeurs;
       }
set chauffeurs(value: Array<ChauffeurVo>) {
        this.chauffeurService.chauffeurs = value;
       }

 get selectedChauffeur(): ChauffeurVo {
           return this.chauffeurService.selectedChauffeur;
       }
    set selectedChauffeur(value: ChauffeurVo) {
        this.chauffeurService.selectedChauffeur = value;
       }

   get editChauffeurDialog(): boolean {
           return this.chauffeurService.editChauffeurDialog;

       }
    set editChauffeurDialog(value: boolean) {
        this.chauffeurService.editChauffeurDialog= value;
       }

       get selectedLangue(): LangueVo {
           return this.langueService.selectedLangue;
       }
      set selectedLangue(value: LangueVo) {
        this.langueService.selectedLangue = value;
       }
       get langues(): Array<LangueVo> {
           return this.langueService.langues;
       }
       set langues(value: Array<LangueVo>) {
        this.langueService.langues = value;
       }
       get createLangueDialog(): boolean {
           return this.langueService.createLangueDialog;
       }
      set createLangueDialog(value: boolean) {
        this.langueService.createLangueDialog= value;
       }
       get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
      set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
       get villes(): Array<VilleVo> {
           return this.villeService.villes;
       }
       set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }
       get createVilleDialog(): boolean {
           return this.villeService.createVilleDialog;
       }
      set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
       }
       get selectedMoyenTransport(): MoyenTransportVo {
           return this.moyenTransportService.selectedMoyenTransport;
       }
      set selectedMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.selectedMoyenTransport = value;
       }
       get moyenTransports(): Array<MoyenTransportVo> {
           return this.moyenTransportService.moyenTransports;
       }
       set moyenTransports(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransports = value;
       }
       get createMoyenTransportDialog(): boolean {
           return this.moyenTransportService.createMoyenTransportDialog;
       }
      set createMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.createMoyenTransportDialog= value;
       }
       get selectedMarqueTelephone(): MarqueTelephoneVo {
           return this.marqueTelephoneService.selectedMarqueTelephone;
       }
      set selectedMarqueTelephone(value: MarqueTelephoneVo) {
        this.marqueTelephoneService.selectedMarqueTelephone = value;
       }
       get marqueTelephones(): Array<MarqueTelephoneVo> {
           return this.marqueTelephoneService.marqueTelephones;
       }
       set marqueTelephones(value: Array<MarqueTelephoneVo>) {
        this.marqueTelephoneService.marqueTelephones = value;
       }
       get createMarqueTelephoneDialog(): boolean {
           return this.marqueTelephoneService.createMarqueTelephoneDialog;
       }
      set createMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.createMarqueTelephoneDialog= value;
       }
       get selectedMarqueVoiture(): MarqueVoitureVo {
           return this.marqueVoitureService.selectedMarqueVoiture;
       }
      set selectedMarqueVoiture(value: MarqueVoitureVo) {
        this.marqueVoitureService.selectedMarqueVoiture = value;
       }
       get marqueVoitures(): Array<MarqueVoitureVo> {
           return this.marqueVoitureService.marqueVoitures;
       }
       set marqueVoitures(value: Array<MarqueVoitureVo>) {
        this.marqueVoitureService.marqueVoitures = value;
       }
       get createMarqueVoitureDialog(): boolean {
           return this.marqueVoitureService.createMarqueVoitureDialog;
       }
      set createMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.createMarqueVoitureDialog= value;
       }
       get selectedTheme(): ThemeVo {
           return this.themeService.selectedTheme;
       }
      set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
       }
       get themes(): Array<ThemeVo> {
           return this.themeService.themes;
       }
       set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }
       get createThemeDialog(): boolean {
           return this.themeService.createThemeDialog;
       }
      set createThemeDialog(value: boolean) {
        this.themeService.createThemeDialog= value;
       }
       get selectedModelApplication(): ModelApplicationVo {
           return this.modelApplicationService.selectedModelApplication;
       }
      set selectedModelApplication(value: ModelApplicationVo) {
        this.modelApplicationService.selectedModelApplication = value;
       }
       get modelApplications(): Array<ModelApplicationVo> {
           return this.modelApplicationService.modelApplications;
       }
       set modelApplications(value: Array<ModelApplicationVo>) {
        this.modelApplicationService.modelApplications = value;
       }
       get createModelApplicationDialog(): boolean {
           return this.modelApplicationService.createModelApplicationDialog;
       }
      set createModelApplicationDialog(value: boolean) {
        this.modelApplicationService.createModelApplicationDialog= value;
       }
       get selectedEtatChauffeur(): EtatChauffeurVo {
           return this.etatChauffeurService.selectedEtatChauffeur;
       }
      set selectedEtatChauffeur(value: EtatChauffeurVo) {
        this.etatChauffeurService.selectedEtatChauffeur = value;
       }
       get etatChauffeurs(): Array<EtatChauffeurVo> {
           return this.etatChauffeurService.etatChauffeurs;
       }
       set etatChauffeurs(value: Array<EtatChauffeurVo>) {
        this.etatChauffeurService.etatChauffeurs = value;
       }
       get createEtatChauffeurDialog(): boolean {
           return this.etatChauffeurService.createEtatChauffeurDialog;
       }
      set createEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.createEtatChauffeurDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatEdit;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }




    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }


    get validMoyenTransportLibelle(): boolean {
    return this._validMoyenTransportLibelle;
    }

    set validMoyenTransportLibelle(value: boolean) {
    this._validMoyenTransportLibelle = value;
    }
    get validMoyenTransportCode(): boolean {
    return this._validMoyenTransportCode;
    }

    set validMoyenTransportCode(value: boolean) {
    this._validMoyenTransportCode = value;
    }
    get validModelApplicationLibelle(): boolean {
    return this._validModelApplicationLibelle;
    }

    set validModelApplicationLibelle(value: boolean) {
    this._validModelApplicationLibelle = value;
    }
    get validModelApplicationCode(): boolean {
    return this._validModelApplicationCode;
    }

    set validModelApplicationCode(value: boolean) {
    this._validModelApplicationCode = value;
    }
    get validMarqueTelephoneLibelle(): boolean {
    return this._validMarqueTelephoneLibelle;
    }

    set validMarqueTelephoneLibelle(value: boolean) {
    this._validMarqueTelephoneLibelle = value;
    }
    get validMarqueTelephoneCode(): boolean {
    return this._validMarqueTelephoneCode;
    }

    set validMarqueTelephoneCode(value: boolean) {
    this._validMarqueTelephoneCode = value;
    }
    get validMarqueVoitureLibelle(): boolean {
    return this._validMarqueVoitureLibelle;
    }

    set validMarqueVoitureLibelle(value: boolean) {
    this._validMarqueVoitureLibelle = value;
    }
    get validMarqueVoitureCode(): boolean {
    return this._validMarqueVoitureCode;
    }

    set validMarqueVoitureCode(value: boolean) {
    this._validMarqueVoitureCode = value;
    }
    get validEtatChauffeurLibelle(): boolean {
    return this._validEtatChauffeurLibelle;
    }

    set validEtatChauffeurLibelle(value: boolean) {
    this._validEtatChauffeurLibelle = value;
    }
    get validEtatChauffeurCode(): boolean {
    return this._validEtatChauffeurCode;
    }

    set validEtatChauffeurCode(value: boolean) {
    this._validEtatChauffeurCode = value;
    }
    get validVilleLibelle(): boolean {
    return this._validVilleLibelle;
    }

    set validVilleLibelle(value: boolean) {
    this._validVilleLibelle = value;
    }
    get validVilleCode(): boolean {
    return this._validVilleCode;
    }

    set validVilleCode(value: boolean) {
    this._validVilleCode = value;
    }
    get validLangueLibelle(): boolean {
    return this._validLangueLibelle;
    }

    set validLangueLibelle(value: boolean) {
    this._validLangueLibelle = value;
    }
    get validLangueCode(): boolean {
    return this._validLangueCode;
    }

    set validLangueCode(value: boolean) {
    this._validLangueCode = value;
    }
    get validThemeLibelle(): boolean {
    return this._validThemeLibelle;
    }

    set validThemeLibelle(value: boolean) {
    this._validThemeLibelle = value;
    }
    get validThemeCode(): boolean {
    return this._validThemeCode;
    }

    set validThemeCode(value: boolean) {
    this._validThemeCode = value;
    }
}

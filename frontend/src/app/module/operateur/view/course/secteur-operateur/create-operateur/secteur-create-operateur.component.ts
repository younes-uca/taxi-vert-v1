import {Component, OnInit, Input} from '@angular/core';
import {SecteurService} from 'src/app/controller/service/Secteur.service';
import {SecteurVo} from 'src/app/controller/model/Secteur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {VilleVo} from 'src/app/controller/model/Ville.model';
import {VilleService} from 'src/app/controller/service/Ville.service';
@Component({
  selector: 'app-secteur-create-operateur',
  templateUrl: './secteur-create-operateur.component.html',
  styleUrls: ['./secteur-create-operateur.component.css']
})
export class SecteurCreateOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validSecteurLibelle = true;
   _validSecteurCode = true;

    _validVilleLibelle = true;
    _validVilleCode = true;



constructor(private datePipe: DatePipe, private secteurService: SecteurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private villeService: VilleService
) {

}

ngOnInit(): void {
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
}




private setValidation(value: boolean){
    this.validSecteurLibelle = value;
    this.validSecteurCode = value;
    }


public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.secteurService.save().subscribe(secteur=>{
      if(secteur != null){
       this.secteurs.push({...secteur});
       this.createSecteurDialog = false;
       this.submitted = false;
       this.selectedSecteur = new SecteurVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Secteur existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateSecteurLibelle();
this.validateSecteurCode();

    }

private validateSecteurLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedSecteur.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validSecteurLibelle = false;
        } else {
            this.validSecteurLibelle = true;
        }
    }
private validateSecteurCode(){
        if (this.stringUtilService.isEmpty(this.selectedSecteur.code)) {
            this.errorMessages.push('Code non valide');
            this.validSecteurCode = false;
        } else {
            this.validSecteurCode = true;
        }
    }







       public async openCreateVille(ville: string) {
          const isPermistted = await this.roleService.isPermitted('Ville', 'add');
         if(isPermistted) {
         this.selectedVille = new VilleVo();
         this.createVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}

hideCreateDialog(){
    this.createSecteurDialog  = false;
    this.setValidation(true);
}

get secteurs(): Array<SecteurVo> {
    return this.secteurService.secteurs;
       }
set secteurs(value: Array<SecteurVo>) {
        this.secteurService.secteurs = value;
       }

 get selectedSecteur(): SecteurVo {
           return this.secteurService.selectedSecteur;
       }
    set selectedSecteur(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }

   get createSecteurDialog(): boolean {
           return this.secteurService.createSecteurDialog;

       }
    set createSecteurDialog(value: boolean) {
        this.secteurService.createSecteurDialog= value;
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

    get dateFormat(){
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatCreate;
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

    get validSecteurLibelle(): boolean {
    return this._validSecteurLibelle;
    }

    set validSecteurLibelle(value: boolean) {
    this._validSecteurLibelle = value;
    }
    get validSecteurCode(): boolean {
    return this._validSecteurCode;
    }

    set validSecteurCode(value: boolean) {
    this._validSecteurCode = value;
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

}

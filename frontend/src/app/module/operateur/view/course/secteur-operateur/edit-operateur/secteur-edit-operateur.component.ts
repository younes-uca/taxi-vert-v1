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
  selector: 'app-secteur-edit-operateur',
  templateUrl: './secteur-edit-operateur.component.html',
  styleUrls: ['./secteur-edit-operateur.component.css']
})
export class SecteurEditOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validSecteurLibelle = true;
   _validSecteurCode = true;

    _validVilleLibelle = true;
    _validVilleCode = true;



constructor(private datePipe: DatePipe, private secteurService: SecteurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private villeService: VilleService
) {

}

// methods
ngOnInit(): void {
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
}




private setValidation(value : boolean){
    this.validSecteurLibelle = value;
    this.validSecteurCode = value;
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
     this.secteurService.edit().subscribe(secteur=>{
     const myIndex = this.secteurs.findIndex(e => e.id === this.selectedSecteur.id);
     this.secteurs[myIndex] = secteur;
     this.editSecteurDialog = false;
     this.submitted = false;
     this.selectedSecteur = new SecteurVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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







//openPopup
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
// methods

hideEditDialog(){
    this.editSecteurDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editSecteurDialog(): boolean {
           return this.secteurService.editSecteurDialog;

       }
    set editSecteurDialog(value: boolean) {
        this.secteurService.editSecteurDialog= value;
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

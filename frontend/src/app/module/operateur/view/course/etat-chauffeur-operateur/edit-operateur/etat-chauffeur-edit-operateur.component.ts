import {Component, OnInit, Input} from '@angular/core';
import {EtatChauffeurService} from 'src/app/controller/service/EtatChauffeur.service';
import {EtatChauffeurVo} from 'src/app/controller/model/EtatChauffeur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-etat-chauffeur-edit-operateur',
  templateUrl: './etat-chauffeur-edit-operateur.component.html',
  styleUrls: ['./etat-chauffeur-edit-operateur.component.css']
})
export class EtatChauffeurEditOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validEtatChauffeurLibelle = true;
   _validEtatChauffeurCode = true;




constructor(private datePipe: DatePipe, private etatChauffeurService: EtatChauffeurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

// methods
ngOnInit(): void {
}




private setValidation(value : boolean){
    this.validEtatChauffeurLibelle = value;
    this.validEtatChauffeurCode = value;
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
     this.etatChauffeurService.edit().subscribe(etatChauffeur=>{
     const myIndex = this.etatChauffeurs.findIndex(e => e.id === this.selectedEtatChauffeur.id);
     this.etatChauffeurs[myIndex] = etatChauffeur;
     this.editEtatChauffeurDialog = false;
     this.submitted = false;
     this.selectedEtatChauffeur = new EtatChauffeurVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateEtatChauffeurLibelle();
this.validateEtatChauffeurCode();

    }

private validateEtatChauffeurLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedEtatChauffeur.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatChauffeurLibelle = false;
        } else {
            this.validEtatChauffeurLibelle = true;
        }
    }
private validateEtatChauffeurCode(){
        if (this.stringUtilService.isEmpty(this.selectedEtatChauffeur.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatChauffeurCode = false;
        } else {
            this.validEtatChauffeurCode = true;
        }
    }






//openPopup
// methods

hideEditDialog(){
    this.editEtatChauffeurDialog  = false;
    this.setValidation(true);
}

// getters and setters

get etatChauffeurs(): Array<EtatChauffeurVo> {
    return this.etatChauffeurService.etatChauffeurs;
       }
set etatChauffeurs(value: Array<EtatChauffeurVo>) {
        this.etatChauffeurService.etatChauffeurs = value;
       }

 get selectedEtatChauffeur(): EtatChauffeurVo {
           return this.etatChauffeurService.selectedEtatChauffeur;
       }
    set selectedEtatChauffeur(value: EtatChauffeurVo) {
        this.etatChauffeurService.selectedEtatChauffeur = value;
       }

   get editEtatChauffeurDialog(): boolean {
           return this.etatChauffeurService.editEtatChauffeurDialog;

       }
    set editEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.editEtatChauffeurDialog= value;
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

}

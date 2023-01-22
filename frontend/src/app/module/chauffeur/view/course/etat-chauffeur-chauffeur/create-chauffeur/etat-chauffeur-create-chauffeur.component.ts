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
  selector: 'app-etat-chauffeur-create-chauffeur',
  templateUrl: './etat-chauffeur-create-chauffeur.component.html',
  styleUrls: ['./etat-chauffeur-create-chauffeur.component.css']
})
export class EtatChauffeurCreateChauffeurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validEtatChauffeurLibelle = true;
   _validEtatChauffeurCode = true;




constructor(private datePipe: DatePipe, private etatChauffeurService: EtatChauffeurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validEtatChauffeurLibelle = value;
    this.validEtatChauffeurCode = value;
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
     this.etatChauffeurService.save().subscribe(etatChauffeur=>{
      if(etatChauffeur != null){
       this.etatChauffeurs.push({...etatChauffeur});
       this.createEtatChauffeurDialog = false;
       this.submitted = false;
       this.selectedEtatChauffeur = new EtatChauffeurVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Etat chauffeur existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

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







hideCreateDialog(){
    this.createEtatChauffeurDialog  = false;
    this.setValidation(true);
}

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

   get createEtatChauffeurDialog(): boolean {
           return this.etatChauffeurService.createEtatChauffeurDialog;

       }
    set createEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.createEtatChauffeurDialog= value;
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

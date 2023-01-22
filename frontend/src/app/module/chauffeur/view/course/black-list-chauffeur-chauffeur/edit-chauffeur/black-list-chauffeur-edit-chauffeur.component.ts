import {Component, OnInit, Input} from '@angular/core';
import {BlackListChauffeurService} from 'src/app/controller/service/BlackListChauffeur.service';
import {BlackListChauffeurVo} from 'src/app/controller/model/BlackListChauffeur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-black-list-chauffeur-edit-chauffeur',
  templateUrl: './black-list-chauffeur-edit-chauffeur.component.html',
  styleUrls: ['./black-list-chauffeur-edit-chauffeur.component.css']
})
export class BlackListChauffeurEditChauffeurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validBlackListChauffeurChauffeur = true;
   _validBlackListChauffeurClient = true;




constructor(private datePipe: DatePipe, private blackListChauffeurService: BlackListChauffeurService
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
    this.validBlackListChauffeurChauffeur = value;
    this.validBlackListChauffeurClient = value;
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
     this.blackListChauffeurService.edit().subscribe(blackListChauffeur=>{
     const myIndex = this.blackListChauffeurs.findIndex(e => e.id === this.selectedBlackListChauffeur.id);
     this.blackListChauffeurs[myIndex] = blackListChauffeur;
     this.editBlackListChauffeurDialog = false;
     this.submitted = false;
     this.selectedBlackListChauffeur = new BlackListChauffeurVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateBlackListChauffeurChauffeur();
this.validateBlackListChauffeurClient();

    }

private validateBlackListChauffeurChauffeur(){
        if (this.stringUtilService.isEmpty(this.selectedBlackListChauffeur.chauffeur)) {
            this.errorMessages.push('Chauffeur non valide');
            this.validBlackListChauffeurChauffeur = false;
        } else {
            this.validBlackListChauffeurChauffeur = true;
        }
    }
private validateBlackListChauffeurClient(){
        if (this.stringUtilService.isEmpty(this.selectedBlackListChauffeur.client)) {
            this.errorMessages.push('Client non valide');
            this.validBlackListChauffeurClient = false;
        } else {
            this.validBlackListChauffeurClient = true;
        }
    }








//openPopup
// methods

hideEditDialog(){
    this.editBlackListChauffeurDialog  = false;
    this.setValidation(true);
}

// getters and setters

get blackListChauffeurs(): Array<BlackListChauffeurVo> {
    return this.blackListChauffeurService.blackListChauffeurs;
       }
set blackListChauffeurs(value: Array<BlackListChauffeurVo>) {
        this.blackListChauffeurService.blackListChauffeurs = value;
       }

 get selectedBlackListChauffeur(): BlackListChauffeurVo {
           return this.blackListChauffeurService.selectedBlackListChauffeur;
       }
    set selectedBlackListChauffeur(value: BlackListChauffeurVo) {
        this.blackListChauffeurService.selectedBlackListChauffeur = value;
       }

   get editBlackListChauffeurDialog(): boolean {
           return this.blackListChauffeurService.editBlackListChauffeurDialog;

       }
    set editBlackListChauffeurDialog(value: boolean) {
        this.blackListChauffeurService.editBlackListChauffeurDialog= value;
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

    get validBlackListChauffeurChauffeur(): boolean {
    return this._validBlackListChauffeurChauffeur;
    }

    set validBlackListChauffeurChauffeur(value: boolean) {
    this._validBlackListChauffeurChauffeur = value;
    }
    get validBlackListChauffeurClient(): boolean {
    return this._validBlackListChauffeurClient;
    }

    set validBlackListChauffeurClient(value: boolean) {
    this._validBlackListChauffeurClient = value;
    }

}

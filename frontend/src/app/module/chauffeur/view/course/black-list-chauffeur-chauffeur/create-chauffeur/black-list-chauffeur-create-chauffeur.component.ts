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
  selector: 'app-black-list-chauffeur-create-chauffeur',
  templateUrl: './black-list-chauffeur-create-chauffeur.component.html',
  styleUrls: ['./black-list-chauffeur-create-chauffeur.component.css']
})
export class BlackListChauffeurCreateChauffeurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validBlackListChauffeurChauffeur = true;
   _validBlackListChauffeurClient = true;




constructor(private datePipe: DatePipe, private blackListChauffeurService: BlackListChauffeurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validBlackListChauffeurChauffeur = value;
    this.validBlackListChauffeurClient = value;
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
     this.blackListChauffeurService.save().subscribe(blackListChauffeur=>{
      if(blackListChauffeur != null){
       this.blackListChauffeurs.push({...blackListChauffeur});
       this.createBlackListChauffeurDialog = false;
       this.submitted = false;
       this.selectedBlackListChauffeur = new BlackListChauffeurVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Black list chauffeur existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

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









hideCreateDialog(){
    this.createBlackListChauffeurDialog  = false;
    this.setValidation(true);
}

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

   get createBlackListChauffeurDialog(): boolean {
           return this.blackListChauffeurService.createBlackListChauffeurDialog;

       }
    set createBlackListChauffeurDialog(value: boolean) {
        this.blackListChauffeurService.createBlackListChauffeurDialog= value;
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

import {Component, OnInit, Input} from '@angular/core';
import {BlackListClientService} from 'src/app/controller/service/BlackListClient.service';
import {BlackListClientVo} from 'src/app/controller/model/BlackListClient.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-black-list-client-create-client',
  templateUrl: './black-list-client-create-client.component.html',
  styleUrls: ['./black-list-client-create-client.component.css']
})
export class BlackListClientCreateClientComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validBlackListClientChauffeur = true;
   _validBlackListClientClient = true;




constructor(private datePipe: DatePipe, private blackListClientService: BlackListClientService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validBlackListClientChauffeur = value;
    this.validBlackListClientClient = value;
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
     this.blackListClientService.save().subscribe(blackListClient=>{
      if(blackListClient != null){
       this.blackListClients.push({...blackListClient});
       this.createBlackListClientDialog = false;
       this.submitted = false;
       this.selectedBlackListClient = new BlackListClientVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Black list client existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateBlackListClientChauffeur();
this.validateBlackListClientClient();

    }

private validateBlackListClientChauffeur(){
        if (this.stringUtilService.isEmpty(this.selectedBlackListClient.chauffeur)) {
            this.errorMessages.push('Chauffeur non valide');
            this.validBlackListClientChauffeur = false;
        } else {
            this.validBlackListClientChauffeur = true;
        }
    }
private validateBlackListClientClient(){
        if (this.stringUtilService.isEmpty(this.selectedBlackListClient.client)) {
            this.errorMessages.push('Client non valide');
            this.validBlackListClientClient = false;
        } else {
            this.validBlackListClientClient = true;
        }
    }









hideCreateDialog(){
    this.createBlackListClientDialog  = false;
    this.setValidation(true);
}

get blackListClients(): Array<BlackListClientVo> {
    return this.blackListClientService.blackListClients;
       }
set blackListClients(value: Array<BlackListClientVo>) {
        this.blackListClientService.blackListClients = value;
       }

 get selectedBlackListClient(): BlackListClientVo {
           return this.blackListClientService.selectedBlackListClient;
       }
    set selectedBlackListClient(value: BlackListClientVo) {
        this.blackListClientService.selectedBlackListClient = value;
       }

   get createBlackListClientDialog(): boolean {
           return this.blackListClientService.createBlackListClientDialog;

       }
    set createBlackListClientDialog(value: boolean) {
        this.blackListClientService.createBlackListClientDialog= value;
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

    get validBlackListClientChauffeur(): boolean {
    return this._validBlackListClientChauffeur;
    }

    set validBlackListClientChauffeur(value: boolean) {
    this._validBlackListClientChauffeur = value;
    }
    get validBlackListClientClient(): boolean {
    return this._validBlackListClientClient;
    }

    set validBlackListClientClient(value: boolean) {
    this._validBlackListClientClient = value;
    }


}

import {Component, OnInit, Input} from '@angular/core';
import {ModelApplicationService} from 'src/app/controller/service/ModelApplication.service';
import {ModelApplicationVo} from 'src/app/controller/model/ModelApplication.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-model-application-edit-admin',
  templateUrl: './model-application-edit-admin.component.html',
  styleUrls: ['./model-application-edit-admin.component.css']
})
export class ModelApplicationEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validModelApplicationLibelle = true;
   _validModelApplicationCode = true;




constructor(private datePipe: DatePipe, private modelApplicationService: ModelApplicationService
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
    this.validModelApplicationLibelle = value;
    this.validModelApplicationCode = value;
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
     this.modelApplicationService.edit().subscribe(modelApplication=>{
     const myIndex = this.modelApplications.findIndex(e => e.id === this.selectedModelApplication.id);
     this.modelApplications[myIndex] = modelApplication;
     this.editModelApplicationDialog = false;
     this.submitted = false;
     this.selectedModelApplication = new ModelApplicationVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateModelApplicationLibelle();
this.validateModelApplicationCode();

    }

private validateModelApplicationLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedModelApplication.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validModelApplicationLibelle = false;
        } else {
            this.validModelApplicationLibelle = true;
        }
    }
private validateModelApplicationCode(){
        if (this.stringUtilService.isEmpty(this.selectedModelApplication.code)) {
            this.errorMessages.push('Code non valide');
            this.validModelApplicationCode = false;
        } else {
            this.validModelApplicationCode = true;
        }
    }






//openPopup
// methods

hideEditDialog(){
    this.editModelApplicationDialog  = false;
    this.setValidation(true);
}

// getters and setters

get modelApplications(): Array<ModelApplicationVo> {
    return this.modelApplicationService.modelApplications;
       }
set modelApplications(value: Array<ModelApplicationVo>) {
        this.modelApplicationService.modelApplications = value;
       }

 get selectedModelApplication(): ModelApplicationVo {
           return this.modelApplicationService.selectedModelApplication;
       }
    set selectedModelApplication(value: ModelApplicationVo) {
        this.modelApplicationService.selectedModelApplication = value;
       }

   get editModelApplicationDialog(): boolean {
           return this.modelApplicationService.editModelApplicationDialog;

       }
    set editModelApplicationDialog(value: boolean) {
        this.modelApplicationService.editModelApplicationDialog= value;
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

}

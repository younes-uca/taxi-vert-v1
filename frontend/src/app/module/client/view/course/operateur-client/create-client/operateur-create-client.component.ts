import {Component, OnInit, Input} from '@angular/core';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {OperateurVo} from 'src/app/controller/model/Operateur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-operateur-create-client',
  templateUrl: './operateur-create-client.component.html',
  styleUrls: ['./operateur-create-client.component.css']
})
export class OperateurCreateClientComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validOperateurDescription = true;




constructor(private datePipe: DatePipe, private operateurService: OperateurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validOperateurDescription = value;
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
     this.operateurService.save().subscribe(operateur=>{
      if(operateur != null){
       this.operateurs.push({...operateur});
       this.createOperateurDialog = false;
       this.submitted = false;
       this.selectedOperateur = new OperateurVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Operateur existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateOperateurDescription();

    }

private validateOperateurDescription(){
        if (this.stringUtilService.isEmpty(this.selectedOperateur.description)) {
            this.errorMessages.push('Description non valide');
            this.validOperateurDescription = false;
        } else {
            this.validOperateurDescription = true;
        }
    }

















hideCreateDialog(){
    this.createOperateurDialog  = false;
    this.setValidation(true);
}

get operateurs(): Array<OperateurVo> {
    return this.operateurService.operateurs;
       }
set operateurs(value: Array<OperateurVo>) {
        this.operateurService.operateurs = value;
       }

 get selectedOperateur(): OperateurVo {
           return this.operateurService.selectedOperateur;
       }
    set selectedOperateur(value: OperateurVo) {
        this.operateurService.selectedOperateur = value;
       }

   get createOperateurDialog(): boolean {
           return this.operateurService.createOperateurDialog;

       }
    set createOperateurDialog(value: boolean) {
        this.operateurService.createOperateurDialog= value;
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

    get validOperateurDescription(): boolean {
    return this._validOperateurDescription;
    }

    set validOperateurDescription(value: boolean) {
    this._validOperateurDescription = value;
    }


}

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
  selector: 'app-operateur-edit-chauffeur',
  templateUrl: './operateur-edit-chauffeur.component.html',
  styleUrls: ['./operateur-edit-chauffeur.component.css']
})
export class OperateurEditChauffeurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validOperateurDescription = true;




constructor(private datePipe: DatePipe, private operateurService: OperateurService
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
    this.validOperateurDescription = value;
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
     this.operateurService.edit().subscribe(operateur=>{
     const myIndex = this.operateurs.findIndex(e => e.id === this.selectedOperateur.id);
     this.operateurs[myIndex] = operateur;
     this.editOperateurDialog = false;
     this.submitted = false;
     this.selectedOperateur = new OperateurVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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
















//openPopup
// methods

hideEditDialog(){
    this.editOperateurDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editOperateurDialog(): boolean {
           return this.operateurService.editOperateurDialog;

       }
    set editOperateurDialog(value: boolean) {
        this.operateurService.editOperateurDialog= value;
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

    get validOperateurDescription(): boolean {
    return this._validOperateurDescription;
    }

    set validOperateurDescription(value: boolean) {
    this._validOperateurDescription = value;
    }

}

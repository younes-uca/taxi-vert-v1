import {Component, OnInit, Input} from '@angular/core';
import {MarqueTelephoneService} from 'src/app/controller/service/MarqueTelephone.service';
import {MarqueTelephoneVo} from 'src/app/controller/model/MarqueTelephone.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-marque-telephone-edit-operateur',
  templateUrl: './marque-telephone-edit-operateur.component.html',
  styleUrls: ['./marque-telephone-edit-operateur.component.css']
})
export class MarqueTelephoneEditOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validMarqueTelephoneLibelle = true;
   _validMarqueTelephoneCode = true;




constructor(private datePipe: DatePipe, private marqueTelephoneService: MarqueTelephoneService
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
    this.validMarqueTelephoneLibelle = value;
    this.validMarqueTelephoneCode = value;
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
     this.marqueTelephoneService.edit().subscribe(marqueTelephone=>{
     const myIndex = this.marqueTelephones.findIndex(e => e.id === this.selectedMarqueTelephone.id);
     this.marqueTelephones[myIndex] = marqueTelephone;
     this.editMarqueTelephoneDialog = false;
     this.submitted = false;
     this.selectedMarqueTelephone = new MarqueTelephoneVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateMarqueTelephoneLibelle();
this.validateMarqueTelephoneCode();

    }

private validateMarqueTelephoneLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedMarqueTelephone.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validMarqueTelephoneLibelle = false;
        } else {
            this.validMarqueTelephoneLibelle = true;
        }
    }
private validateMarqueTelephoneCode(){
        if (this.stringUtilService.isEmpty(this.selectedMarqueTelephone.code)) {
            this.errorMessages.push('Code non valide');
            this.validMarqueTelephoneCode = false;
        } else {
            this.validMarqueTelephoneCode = true;
        }
    }






//openPopup
// methods

hideEditDialog(){
    this.editMarqueTelephoneDialog  = false;
    this.setValidation(true);
}

// getters and setters

get marqueTelephones(): Array<MarqueTelephoneVo> {
    return this.marqueTelephoneService.marqueTelephones;
       }
set marqueTelephones(value: Array<MarqueTelephoneVo>) {
        this.marqueTelephoneService.marqueTelephones = value;
       }

 get selectedMarqueTelephone(): MarqueTelephoneVo {
           return this.marqueTelephoneService.selectedMarqueTelephone;
       }
    set selectedMarqueTelephone(value: MarqueTelephoneVo) {
        this.marqueTelephoneService.selectedMarqueTelephone = value;
       }

   get editMarqueTelephoneDialog(): boolean {
           return this.marqueTelephoneService.editMarqueTelephoneDialog;

       }
    set editMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.editMarqueTelephoneDialog= value;
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

    get validMarqueTelephoneLibelle(): boolean {
    return this._validMarqueTelephoneLibelle;
    }

    set validMarqueTelephoneLibelle(value: boolean) {
    this._validMarqueTelephoneLibelle = value;
    }
    get validMarqueTelephoneCode(): boolean {
    return this._validMarqueTelephoneCode;
    }

    set validMarqueTelephoneCode(value: boolean) {
    this._validMarqueTelephoneCode = value;
    }

}

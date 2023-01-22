import {Component, OnInit, Input} from '@angular/core';
import {VilleService} from 'src/app/controller/service/Ville.service';
import {VilleVo} from 'src/app/controller/model/Ville.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-ville-create-client',
  templateUrl: './ville-create-client.component.html',
  styleUrls: ['./ville-create-client.component.css']
})
export class VilleCreateClientComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validVilleLibelle = true;
   _validVilleCode = true;




constructor(private datePipe: DatePipe, private villeService: VilleService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validVilleLibelle = value;
    this.validVilleCode = value;
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
     this.villeService.save().subscribe(ville=>{
      if(ville != null){
       this.villes.push({...ville});
       this.createVilleDialog = false;
       this.submitted = false;
       this.selectedVille = new VilleVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Ville existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateVilleLibelle();
this.validateVilleCode();

    }

private validateVilleLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedVille.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validVilleLibelle = false;
        } else {
            this.validVilleLibelle = true;
        }
    }
private validateVilleCode(){
        if (this.stringUtilService.isEmpty(this.selectedVille.code)) {
            this.errorMessages.push('Code non valide');
            this.validVilleCode = false;
        } else {
            this.validVilleCode = true;
        }
    }







hideCreateDialog(){
    this.createVilleDialog  = false;
    this.setValidation(true);
}

get villes(): Array<VilleVo> {
    return this.villeService.villes;
       }
set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }

 get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }

   get createVilleDialog(): boolean {
           return this.villeService.createVilleDialog;

       }
    set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
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

import {Component, OnInit, Input} from '@angular/core';
import {MarqueVoitureService} from 'src/app/controller/service/MarqueVoiture.service';
import {MarqueVoitureVo} from 'src/app/controller/model/MarqueVoiture.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-marque-voiture-edit-operateur',
  templateUrl: './marque-voiture-edit-operateur.component.html',
  styleUrls: ['./marque-voiture-edit-operateur.component.css']
})
export class MarqueVoitureEditOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validMarqueVoitureLibelle = true;
   _validMarqueVoitureCode = true;




constructor(private datePipe: DatePipe, private marqueVoitureService: MarqueVoitureService
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
    this.validMarqueVoitureLibelle = value;
    this.validMarqueVoitureCode = value;
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
     this.marqueVoitureService.edit().subscribe(marqueVoiture=>{
     const myIndex = this.marqueVoitures.findIndex(e => e.id === this.selectedMarqueVoiture.id);
     this.marqueVoitures[myIndex] = marqueVoiture;
     this.editMarqueVoitureDialog = false;
     this.submitted = false;
     this.selectedMarqueVoiture = new MarqueVoitureVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateMarqueVoitureLibelle();
this.validateMarqueVoitureCode();

    }

private validateMarqueVoitureLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedMarqueVoiture.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validMarqueVoitureLibelle = false;
        } else {
            this.validMarqueVoitureLibelle = true;
        }
    }
private validateMarqueVoitureCode(){
        if (this.stringUtilService.isEmpty(this.selectedMarqueVoiture.code)) {
            this.errorMessages.push('Code non valide');
            this.validMarqueVoitureCode = false;
        } else {
            this.validMarqueVoitureCode = true;
        }
    }







//openPopup
// methods

hideEditDialog(){
    this.editMarqueVoitureDialog  = false;
    this.setValidation(true);
}

// getters and setters

get marqueVoitures(): Array<MarqueVoitureVo> {
    return this.marqueVoitureService.marqueVoitures;
       }
set marqueVoitures(value: Array<MarqueVoitureVo>) {
        this.marqueVoitureService.marqueVoitures = value;
       }

 get selectedMarqueVoiture(): MarqueVoitureVo {
           return this.marqueVoitureService.selectedMarqueVoiture;
       }
    set selectedMarqueVoiture(value: MarqueVoitureVo) {
        this.marqueVoitureService.selectedMarqueVoiture = value;
       }

   get editMarqueVoitureDialog(): boolean {
           return this.marqueVoitureService.editMarqueVoitureDialog;

       }
    set editMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.editMarqueVoitureDialog= value;
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

    get validMarqueVoitureLibelle(): boolean {
    return this._validMarqueVoitureLibelle;
    }

    set validMarqueVoitureLibelle(value: boolean) {
    this._validMarqueVoitureLibelle = value;
    }
    get validMarqueVoitureCode(): boolean {
    return this._validMarqueVoitureCode;
    }

    set validMarqueVoitureCode(value: boolean) {
    this._validMarqueVoitureCode = value;
    }

}

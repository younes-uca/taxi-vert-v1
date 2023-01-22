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
  selector: 'app-marque-voiture-create-chauffeur',
  templateUrl: './marque-voiture-create-chauffeur.component.html',
  styleUrls: ['./marque-voiture-create-chauffeur.component.css']
})
export class MarqueVoitureCreateChauffeurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validMarqueVoitureLibelle = true;
   _validMarqueVoitureCode = true;




constructor(private datePipe: DatePipe, private marqueVoitureService: MarqueVoitureService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validMarqueVoitureLibelle = value;
    this.validMarqueVoitureCode = value;
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
     this.marqueVoitureService.save().subscribe(marqueVoiture=>{
      if(marqueVoiture != null){
       this.marqueVoitures.push({...marqueVoiture});
       this.createMarqueVoitureDialog = false;
       this.submitted = false;
       this.selectedMarqueVoiture = new MarqueVoitureVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Marque voiture existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

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








hideCreateDialog(){
    this.createMarqueVoitureDialog  = false;
    this.setValidation(true);
}

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

   get createMarqueVoitureDialog(): boolean {
           return this.marqueVoitureService.createMarqueVoitureDialog;

       }
    set createMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.createMarqueVoitureDialog= value;
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

import {Component, OnInit, Input} from '@angular/core';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-moyen-transport-create-client',
  templateUrl: './moyen-transport-create-client.component.html',
  styleUrls: ['./moyen-transport-create-client.component.css']
})
export class MoyenTransportCreateClientComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validMoyenTransportLibelle = true;
   _validMoyenTransportCode = true;




constructor(private datePipe: DatePipe, private moyenTransportService: MoyenTransportService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validMoyenTransportLibelle = value;
    this.validMoyenTransportCode = value;
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
     this.moyenTransportService.save().subscribe(moyenTransport=>{
      if(moyenTransport != null){
       this.moyenTransports.push({...moyenTransport});
       this.createMoyenTransportDialog = false;
       this.submitted = false;
       this.selectedMoyenTransport = new MoyenTransportVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Moyen transport existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateMoyenTransportLibelle();
this.validateMoyenTransportCode();

    }

private validateMoyenTransportLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedMoyenTransport.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validMoyenTransportLibelle = false;
        } else {
            this.validMoyenTransportLibelle = true;
        }
    }
private validateMoyenTransportCode(){
        if (this.stringUtilService.isEmpty(this.selectedMoyenTransport.code)) {
            this.errorMessages.push('Code non valide');
            this.validMoyenTransportCode = false;
        } else {
            this.validMoyenTransportCode = true;
        }
    }







hideCreateDialog(){
    this.createMoyenTransportDialog  = false;
    this.setValidation(true);
}

get moyenTransports(): Array<MoyenTransportVo> {
    return this.moyenTransportService.moyenTransports;
       }
set moyenTransports(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransports = value;
       }

 get selectedMoyenTransport(): MoyenTransportVo {
           return this.moyenTransportService.selectedMoyenTransport;
       }
    set selectedMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.selectedMoyenTransport = value;
       }

   get createMoyenTransportDialog(): boolean {
           return this.moyenTransportService.createMoyenTransportDialog;

       }
    set createMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.createMoyenTransportDialog= value;
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

    get validMoyenTransportLibelle(): boolean {
    return this._validMoyenTransportLibelle;
    }

    set validMoyenTransportLibelle(value: boolean) {
    this._validMoyenTransportLibelle = value;
    }
    get validMoyenTransportCode(): boolean {
    return this._validMoyenTransportCode;
    }

    set validMoyenTransportCode(value: boolean) {
    this._validMoyenTransportCode = value;
    }


}

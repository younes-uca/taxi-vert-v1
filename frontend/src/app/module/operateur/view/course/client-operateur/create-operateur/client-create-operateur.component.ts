import {Component, OnInit, Input} from '@angular/core';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {ThemeService} from 'src/app/controller/service/Theme.service';
import {LangueVo} from 'src/app/controller/model/Langue.model';
import {LangueService} from 'src/app/controller/service/Langue.service';
@Component({
  selector: 'app-client-create-operateur',
  templateUrl: './client-create-operateur.component.html',
  styleUrls: ['./client-create-operateur.component.css']
})
export class ClientCreateOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validClientDescription = true;

    _validLangueLibelle = true;
    _validLangueCode = true;
    _validThemeLibelle = true;
    _validThemeCode = true;



constructor(private datePipe: DatePipe, private clientService: ClientService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private themeService: ThemeService
,       private langueService: LangueService
) {

}

ngOnInit(): void {
    this.selectedLangue = new LangueVo();
    this.langueService.findAll().subscribe((data) => this.langues = data);
    this.selectedTheme = new ThemeVo();
    this.themeService.findAll().subscribe((data) => this.themes = data);
}




private setValidation(value: boolean){
    this.validClientDescription = value;
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
     this.clientService.save().subscribe(client=>{
      if(client != null){
       this.clients.push({...client});
       this.createClientDialog = false;
       this.submitted = false;
       this.selectedClient = new ClientVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Client existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateClientDescription();

    }

private validateClientDescription(){
        if (this.stringUtilService.isEmpty(this.selectedClient.description)) {
            this.errorMessages.push('Description non valide');
            this.validClientDescription = false;
        } else {
            this.validClientDescription = true;
        }
    }


















       public async openCreateLangue(langue: string) {
          const isPermistted = await this.roleService.isPermitted('Langue', 'add');
         if(isPermistted) {
         this.selectedLangue = new LangueVo();
         this.createLangueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateTheme(theme: string) {
          const isPermistted = await this.roleService.isPermitted('Theme', 'add');
         if(isPermistted) {
         this.selectedTheme = new ThemeVo();
         this.createThemeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}

hideCreateDialog(){
    this.createClientDialog  = false;
    this.setValidation(true);
}

get clients(): Array<ClientVo> {
    return this.clientService.clients;
       }
set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }

 get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
    set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }

   get createClientDialog(): boolean {
           return this.clientService.createClientDialog;

       }
    set createClientDialog(value: boolean) {
        this.clientService.createClientDialog= value;
       }

       get selectedLangue(): LangueVo {
           return this.langueService.selectedLangue;
       }
      set selectedLangue(value: LangueVo) {
        this.langueService.selectedLangue = value;
       }
       get langues(): Array<LangueVo> {
           return this.langueService.langues;
       }
       set langues(value: Array<LangueVo>) {
        this.langueService.langues = value;
       }
       get createLangueDialog(): boolean {
           return this.langueService.createLangueDialog;
       }
      set createLangueDialog(value: boolean) {
        this.langueService.createLangueDialog= value;
       }
       get selectedTheme(): ThemeVo {
           return this.themeService.selectedTheme;
       }
      set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
       }
       get themes(): Array<ThemeVo> {
           return this.themeService.themes;
       }
       set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }
       get createThemeDialog(): boolean {
           return this.themeService.createThemeDialog;
       }
      set createThemeDialog(value: boolean) {
        this.themeService.createThemeDialog= value;
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

    get validClientDescription(): boolean {
    return this._validClientDescription;
    }

    set validClientDescription(value: boolean) {
    this._validClientDescription = value;
    }

    get validLangueLibelle(): boolean {
    return this._validLangueLibelle;
    }

    set validLangueLibelle(value: boolean) {
    this._validLangueLibelle = value;
    }
    get validLangueCode(): boolean {
    return this._validLangueCode;
    }

    set validLangueCode(value: boolean) {
    this._validLangueCode = value;
    }
    get validThemeLibelle(): boolean {
    return this._validThemeLibelle;
    }

    set validThemeLibelle(value: boolean) {
    this._validThemeLibelle = value;
    }
    get validThemeCode(): boolean {
    return this._validThemeCode;
    }

    set validThemeCode(value: boolean) {
    this._validThemeCode = value;
    }

}

import {Component, OnInit, Input} from '@angular/core';
import {ThemeService} from 'src/app/controller/service/Theme.service';
import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-theme-create-operateur',
  templateUrl: './theme-create-operateur.component.html',
  styleUrls: ['./theme-create-operateur.component.css']
})
export class ThemeCreateOperateurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validThemeLibelle = true;
   _validThemeCode = true;




constructor(private datePipe: DatePipe, private themeService: ThemeService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validThemeLibelle = value;
    this.validThemeCode = value;
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
     this.themeService.save().subscribe(theme=>{
      if(theme != null){
       this.themes.push({...theme});
       this.createThemeDialog = false;
       this.submitted = false;
       this.selectedTheme = new ThemeVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Theme existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateThemeLibelle();
this.validateThemeCode();

    }

private validateThemeLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTheme.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validThemeLibelle = false;
        } else {
            this.validThemeLibelle = true;
        }
    }
private validateThemeCode(){
        if (this.stringUtilService.isEmpty(this.selectedTheme.code)) {
            this.errorMessages.push('Code non valide');
            this.validThemeCode = false;
        } else {
            this.validThemeCode = true;
        }
    }







hideCreateDialog(){
    this.createThemeDialog  = false;
    this.setValidation(true);
}

get themes(): Array<ThemeVo> {
    return this.themeService.themes;
       }
set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }

 get selectedTheme(): ThemeVo {
           return this.themeService.selectedTheme;
       }
    set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
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

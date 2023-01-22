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
  selector: 'app-theme-edit-admin',
  templateUrl: './theme-edit-admin.component.html',
  styleUrls: ['./theme-edit-admin.component.css']
})
export class ThemeEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validThemeLibelle = true;
   _validThemeCode = true;




constructor(private datePipe: DatePipe, private themeService: ThemeService
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
    this.validThemeLibelle = value;
    this.validThemeCode = value;
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
     this.themeService.edit().subscribe(theme=>{
     const myIndex = this.themes.findIndex(e => e.id === this.selectedTheme.id);
     this.themes[myIndex] = theme;
     this.editThemeDialog = false;
     this.submitted = false;
     this.selectedTheme = new ThemeVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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






//openPopup
// methods

hideEditDialog(){
    this.editThemeDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editThemeDialog(): boolean {
           return this.themeService.editThemeDialog;

       }
    set editThemeDialog(value: boolean) {
        this.themeService.editThemeDialog= value;
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

import {Component, OnInit, Input} from '@angular/core';
import {EtatCourseService} from 'src/app/controller/service/EtatCourse.service';
import {EtatCourseVo} from 'src/app/controller/model/EtatCourse.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-etat-course-edit-admin',
  templateUrl: './etat-course-edit-admin.component.html',
  styleUrls: ['./etat-course-edit-admin.component.css']
})
export class EtatCourseEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validEtatCourseLibelle = true;
   _validEtatCourseCode = true;




constructor(private datePipe: DatePipe, private etatCourseService: EtatCourseService
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
    this.validEtatCourseLibelle = value;
    this.validEtatCourseCode = value;
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
     this.etatCourseService.edit().subscribe(etatCourse=>{
     const myIndex = this.etatCourses.findIndex(e => e.id === this.selectedEtatCourse.id);
     this.etatCourses[myIndex] = etatCourse;
     this.editEtatCourseDialog = false;
     this.submitted = false;
     this.selectedEtatCourse = new EtatCourseVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateEtatCourseLibelle();
this.validateEtatCourseCode();

    }

private validateEtatCourseLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedEtatCourse.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatCourseLibelle = false;
        } else {
            this.validEtatCourseLibelle = true;
        }
    }
private validateEtatCourseCode(){
        if (this.stringUtilService.isEmpty(this.selectedEtatCourse.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatCourseCode = false;
        } else {
            this.validEtatCourseCode = true;
        }
    }






//openPopup
// methods

hideEditDialog(){
    this.editEtatCourseDialog  = false;
    this.setValidation(true);
}

// getters and setters

get etatCourses(): Array<EtatCourseVo> {
    return this.etatCourseService.etatCourses;
       }
set etatCourses(value: Array<EtatCourseVo>) {
        this.etatCourseService.etatCourses = value;
       }

 get selectedEtatCourse(): EtatCourseVo {
           return this.etatCourseService.selectedEtatCourse;
       }
    set selectedEtatCourse(value: EtatCourseVo) {
        this.etatCourseService.selectedEtatCourse = value;
       }

   get editEtatCourseDialog(): boolean {
           return this.etatCourseService.editEtatCourseDialog;

       }
    set editEtatCourseDialog(value: boolean) {
        this.etatCourseService.editEtatCourseDialog= value;
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

    get validEtatCourseLibelle(): boolean {
    return this._validEtatCourseLibelle;
    }

    set validEtatCourseLibelle(value: boolean) {
    this._validEtatCourseLibelle = value;
    }
    get validEtatCourseCode(): boolean {
    return this._validEtatCourseCode;
    }

    set validEtatCourseCode(value: boolean) {
    this._validEtatCourseCode = value;
    }

}

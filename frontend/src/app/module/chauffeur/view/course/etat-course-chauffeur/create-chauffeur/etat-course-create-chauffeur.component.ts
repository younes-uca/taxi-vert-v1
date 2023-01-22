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
  selector: 'app-etat-course-create-chauffeur',
  templateUrl: './etat-course-create-chauffeur.component.html',
  styleUrls: ['./etat-course-create-chauffeur.component.css']
})
export class EtatCourseCreateChauffeurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validEtatCourseLibelle = true;
   _validEtatCourseCode = true;




constructor(private datePipe: DatePipe, private etatCourseService: EtatCourseService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validEtatCourseLibelle = value;
    this.validEtatCourseCode = value;
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
     this.etatCourseService.save().subscribe(etatCourse=>{
      if(etatCourse != null){
       this.etatCourses.push({...etatCourse});
       this.createEtatCourseDialog = false;
       this.submitted = false;
       this.selectedEtatCourse = new EtatCourseVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Etat course existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

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







hideCreateDialog(){
    this.createEtatCourseDialog  = false;
    this.setValidation(true);
}

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

   get createEtatCourseDialog(): boolean {
           return this.etatCourseService.createEtatCourseDialog;

       }
    set createEtatCourseDialog(value: boolean) {
        this.etatCourseService.createEtatCourseDialog= value;
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

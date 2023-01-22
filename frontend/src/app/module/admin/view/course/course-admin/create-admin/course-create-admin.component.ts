import {Component, OnInit, Input} from '@angular/core';
import {CourseService} from 'src/app/controller/service/Course.service';
import {CourseVo} from 'src/app/controller/model/Course.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {ChauffeurVo} from 'src/app/controller/model/Chauffeur.model';
import {ChauffeurService} from 'src/app/controller/service/Chauffeur.service';
import {OperateurVo} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {EtatCourseVo} from 'src/app/controller/model/EtatCourse.model';
import {EtatCourseService} from 'src/app/controller/service/EtatCourse.service';
import {SecteurVo} from 'src/app/controller/model/Secteur.model';
import {SecteurService} from 'src/app/controller/service/Secteur.service';
@Component({
  selector: 'app-course-create-admin',
  templateUrl: './course-create-admin.component.html',
  styleUrls: ['./course-create-admin.component.css']
})
export class CourseCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validSecteurLibelle = true;
    _validSecteurCode = true;
    _validSecteurLibelle = true;
    _validSecteurCode = true;
    _validMoyenTransportLibelle = true;
    _validMoyenTransportCode = true;
    _validOperateurDescription = true;
    _validClientDescription = true;
    _validEtatCourseLibelle = true;
    _validEtatCourseCode = true;



constructor(private datePipe: DatePipe, private courseService: CourseService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private clientService: ClientService
,       private moyenTransportService: MoyenTransportService
,       private chauffeurService: ChauffeurService
,       private operateurService: OperateurService
,       private etatCourseService: EtatCourseService
,       private secteurService: SecteurService
) {

}

ngOnInit(): void {
    this.selectedSecteurSource = new SecteurSourceVo();
    this.secteurSourceService.findAll().subscribe((data) => this.secteurSources = data);
    this.selectedSecteurDestination = new SecteurDestinationVo();
    this.secteurDestinationService.findAll().subscribe((data) => this.secteurDestinations = data);
    this.selectedMoyenTransport = new MoyenTransportVo();
    this.moyenTransportService.findAll().subscribe((data) => this.moyenTransports = data);
    this.selectedOperateur = new OperateurVo();
    this.operateurService.findAll().subscribe((data) => this.operateurs = data);
    this.selectedClient = new ClientVo();
    this.clientService.findAll().subscribe((data) => this.clients = data);
    this.selectedChauffeur = new ChauffeurVo();
    this.chauffeurService.findAll().subscribe((data) => this.chauffeurs = data);
    this.selectedEtatCourse = new EtatCourseVo();
    this.etatCourseService.findAll().subscribe((data) => this.etatCourses = data);
}




private setValidation(value: boolean){
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
     this.courseService.save().subscribe(course=>{
      if(course != null){
       this.courses.push({...course});
       this.createCourseDialog = false;
       this.submitted = false;
       this.selectedCourse = new CourseVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Course existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();

    }




























       public async openCreateClient(client: string) {
          const isPermistted = await this.roleService.isPermitted('Client', 'add');
         if(isPermistted) {
         this.selectedClient = new ClientVo();
         this.createClientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateEtatCourse(etatCourse: string) {
          const isPermistted = await this.roleService.isPermitted('EtatCourse', 'add');
         if(isPermistted) {
         this.selectedEtatCourse = new EtatCourseVo();
         this.createEtatCourseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateMoyenTransport(moyenTransport: string) {
          const isPermistted = await this.roleService.isPermitted('MoyenTransport', 'add');
         if(isPermistted) {
         this.selectedMoyenTransport = new MoyenTransportVo();
         this.createMoyenTransportDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateOperateur(operateur: string) {
          const isPermistted = await this.roleService.isPermitted('Operateur', 'add');
         if(isPermistted) {
         this.selectedOperateur = new OperateurVo();
         this.createOperateurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateSecteurDestination(secteurDestination: string) {
          const isPermistted = await this.roleService.isPermitted('Secteur', 'add');
         if(isPermistted) {
         this.selectedSecteurDestination = new SecteurVo();
         this.createSecteurDestinationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateChauffeur(chauffeur: string) {
          const isPermistted = await this.roleService.isPermitted('Chauffeur', 'add');
         if(isPermistted) {
         this.selectedChauffeur = new ChauffeurVo();
         this.createChauffeurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateSecteurSource(secteurSource: string) {
          const isPermistted = await this.roleService.isPermitted('Secteur', 'add');
         if(isPermistted) {
         this.selectedSecteurSource = new SecteurVo();
         this.createSecteurSourceDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}

hideCreateDialog(){
    this.createCourseDialog  = false;
    this.setValidation(true);
}

get courses(): Array<CourseVo> {
    return this.courseService.courses;
       }
set courses(value: Array<CourseVo>) {
        this.courseService.courses = value;
       }

 get selectedCourse(): CourseVo {
           return this.courseService.selectedCourse;
       }
    set selectedCourse(value: CourseVo) {
        this.courseService.selectedCourse = value;
       }

   get createCourseDialog(): boolean {
           return this.courseService.createCourseDialog;

       }
    set createCourseDialog(value: boolean) {
        this.courseService.createCourseDialog= value;
       }

       get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
      set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }
       get clients(): Array<ClientVo> {
           return this.clientService.clients;
       }
       set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }
       get createClientDialog(): boolean {
           return this.clientService.createClientDialog;
       }
      set createClientDialog(value: boolean) {
        this.clientService.createClientDialog= value;
       }
       get selectedEtatCourse(): EtatCourseVo {
           return this.etatCourseService.selectedEtatCourse;
       }
      set selectedEtatCourse(value: EtatCourseVo) {
        this.etatCourseService.selectedEtatCourse = value;
       }
       get etatCourses(): Array<EtatCourseVo> {
           return this.etatCourseService.etatCourses;
       }
       set etatCourses(value: Array<EtatCourseVo>) {
        this.etatCourseService.etatCourses = value;
       }
       get createEtatCourseDialog(): boolean {
           return this.etatCourseService.createEtatCourseDialog;
       }
      set createEtatCourseDialog(value: boolean) {
        this.etatCourseService.createEtatCourseDialog= value;
       }
       get selectedMoyenTransport(): MoyenTransportVo {
           return this.moyenTransportService.selectedMoyenTransport;
       }
      set selectedMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.selectedMoyenTransport = value;
       }
       get moyenTransports(): Array<MoyenTransportVo> {
           return this.moyenTransportService.moyenTransports;
       }
       set moyenTransports(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransports = value;
       }
       get createMoyenTransportDialog(): boolean {
           return this.moyenTransportService.createMoyenTransportDialog;
       }
      set createMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.createMoyenTransportDialog= value;
       }
       get selectedOperateur(): OperateurVo {
           return this.operateurService.selectedOperateur;
       }
      set selectedOperateur(value: OperateurVo) {
        this.operateurService.selectedOperateur = value;
       }
       get operateurs(): Array<OperateurVo> {
           return this.operateurService.operateurs;
       }
       set operateurs(value: Array<OperateurVo>) {
        this.operateurService.operateurs = value;
       }
       get createOperateurDialog(): boolean {
           return this.operateurService.createOperateurDialog;
       }
      set createOperateurDialog(value: boolean) {
        this.operateurService.createOperateurDialog= value;
       }
       get selectedSecteurDestination(): SecteurVo {
           return this.secteurService.selectedSecteur;
       }
      set selectedSecteurDestination(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }
       get secteurDestinations(): Array<SecteurVo> {
           return this.secteurService.secteurDestinations;
       }
       set secteurDestinations(value: Array<SecteurVo>) {
        this.secteurService.secteurDestinations = value;
       }
       get createSecteurDestinationDialog(): boolean {
           return this.secteurService.createSecteurDestinationDialog;
       }
      set createSecteurDestinationDialog(value: boolean) {
        this.secteurService.createSecteurDestinationDialog= value;
       }
       get selectedChauffeur(): ChauffeurVo {
           return this.chauffeurService.selectedChauffeur;
       }
      set selectedChauffeur(value: ChauffeurVo) {
        this.chauffeurService.selectedChauffeur = value;
       }
       get chauffeurs(): Array<ChauffeurVo> {
           return this.chauffeurService.chauffeurs;
       }
       set chauffeurs(value: Array<ChauffeurVo>) {
        this.chauffeurService.chauffeurs = value;
       }
       get createChauffeurDialog(): boolean {
           return this.chauffeurService.createChauffeurDialog;
       }
      set createChauffeurDialog(value: boolean) {
        this.chauffeurService.createChauffeurDialog= value;
       }
       get selectedSecteurSource(): SecteurVo {
           return this.secteurService.selectedSecteur;
       }
      set selectedSecteurSource(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }
       get secteurSources(): Array<SecteurVo> {
           return this.secteurService.secteurSources;
       }
       set secteurSources(value: Array<SecteurVo>) {
        this.secteurService.secteurSources = value;
       }
       get createSecteurSourceDialog(): boolean {
           return this.secteurService.createSecteurSourceDialog;
       }
      set createSecteurSourceDialog(value: boolean) {
        this.secteurService.createSecteurSourceDialog= value;
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


    get validSecteurSourceLibelle(): boolean {
    return this._validSecteurSourceLibelle;
    }

    set validSecteurSourceLibelle(value: boolean) {
    this._validSecteurSourceLibelle = value;
    }
    get validSecteurSourceCode(): boolean {
    return this._validSecteurSourceCode;
    }

    set validSecteurSourceCode(value: boolean) {
    this._validSecteurSourceCode = value;
    }
    get validSecteurDestinationLibelle(): boolean {
    return this._validSecteurDestinationLibelle;
    }

    set validSecteurDestinationLibelle(value: boolean) {
    this._validSecteurDestinationLibelle = value;
    }
    get validSecteurDestinationCode(): boolean {
    return this._validSecteurDestinationCode;
    }

    set validSecteurDestinationCode(value: boolean) {
    this._validSecteurDestinationCode = value;
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
    get validOperateurDescription(): boolean {
    return this._validOperateurDescription;
    }

    set validOperateurDescription(value: boolean) {
    this._validOperateurDescription = value;
    }
    get validClientDescription(): boolean {
    return this._validClientDescription;
    }

    set validClientDescription(value: boolean) {
    this._validClientDescription = value;
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

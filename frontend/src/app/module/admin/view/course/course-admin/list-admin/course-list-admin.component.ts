import {Component, OnInit} from '@angular/core';
import {CourseService} from 'src/app/controller/service/Course.service';
import {CourseVo} from 'src/app/controller/model/Course.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';



import { SecteurService } from 'src/app/controller/service/Secteur.service';
import { SecteurService } from 'src/app/controller/service/Secteur.service';
import { MoyenTransportService } from 'src/app/controller/service/MoyenTransport.service';
import { OperateurService } from 'src/app/controller/service/Operateur.service';
import { ClientService } from 'src/app/controller/service/Client.service';
import { ChauffeurService } from 'src/app/controller/service/Chauffeur.service';
import { EtatCourseService } from 'src/app/controller/service/EtatCourse.service';

import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {SecteurVo} from 'src/app/controller/model/Secteur.model';
import {EtatCourseVo} from 'src/app/controller/model/EtatCourse.model';
import {OperateurVo} from 'src/app/controller/model/Operateur.model';
import {ChauffeurVo} from 'src/app/controller/model/Chauffeur.model';
import {ClientVo} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-course-list-admin',
  templateUrl: './course-list-admin.component.html',
  styleUrls: ['./course-list-admin.component.css']
})
export class CourseListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Course';
    secteurSources :Array<SecteurVo>;
    secteurDestinations :Array<SecteurVo>;
    moyenTransports :Array<MoyenTransportVo>;
    operateurs :Array<OperateurVo>;
    clients :Array<ClientVo>;
    chauffeurs :Array<ChauffeurVo>;
    etatCourses :Array<EtatCourseVo>;


    constructor(private datePipe: DatePipe, private courseService: CourseService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private secteurService: SecteurService
        , private secteurService: SecteurService
        , private moyenTransportService: MoyenTransportService
        , private operateurService: OperateurService
        , private clientService: ClientService
        , private chauffeurService: ChauffeurService
        , private etatCourseService: EtatCourseService
) { }

    ngOnInit() : void {
      this.loadCourses();
      this.initExport();
      this.initCol();
      this.loadSecteurSource();
      this.loadSecteurDestination();
      this.loadMoyenTransport();
      this.loadOperateur();
      this.loadClient();
      this.loadChauffeur();
      this.loadEtatCourse();
    }
    
    // methods
      public async loadCourses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Course', 'list');
        isPermistted ? this.courseService.findAll().subscribe(courses => this.courses = courses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.courseService.findByCriteria(this.searchCourse).subscribe(courses=>{
            
            this.courses = courses;
           // this.searchCourse = new CourseVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateDemandeCourse', header: 'Date demande course'},
                            {field: 'dateReponseChauffeur', header: 'Date reponse chauffeur'},
                            {field: 'dateArriveChauffeur', header: 'Date arrive chauffeur'},
                            {field: 'dateArriveClient', header: 'Date arrive client'},
                        {field: 'secteurSource?.libelle', header: 'Secteur source'},
                        {field: 'secteurDestination?.libelle', header: 'Secteur destination'},
                        {field: 'moyenTransport?.libelle', header: 'Moyen transport'},
                            {field: 'nombrePlace', header: 'Nombre place'},
                        {field: 'operateur?.description', header: 'Operateur'},
                        {field: 'client?.description', header: 'Client'},
                        {field: 'chauffeur?.id', header: 'Chauffeur'},
                            {field: 'telephone', header: 'Telephone'},
                            {field: 'commentaire', header: 'Commentaire'},
                            {field: 'noteInterne', header: 'Note interne'},
                        {field: 'etatCourse?.libelle', header: 'Etat course'},
                            {field: 'adresseDepart', header: 'Adresse depart'},
                            {field: 'noteDepart', header: 'Note depart'},
                            {field: 'altitudeDepart', header: 'Altitude depart'},
                            {field: 'longitudeDepart', header: 'Longitude depart'},
                            {field: 'adresseArrive', header: 'Adresse arrive'},
                            {field: 'noteArrive', header: 'Note arrive'},
                            {field: 'altitudeArrive', header: 'Altitude arrive'},
                            {field: 'longitudeArrive', header: 'Longitude arrive'},
        ];
    }
    
    public async editCourse(course: CourseVo){
        const isPermistted = await this.roleService.isPermitted('Course', 'edit');
         if(isPermistted){
          this.courseService.findByIdWithAssociatedList(course).subscribe(res => {
           this.selectedCourse = res;

            this.editCourseDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewCourse(course: CourseVo){
        const isPermistted = await this.roleService.isPermitted('Course', 'view');
        if(isPermistted){
           this.courseService.findByIdWithAssociatedList(course).subscribe(res => {
           this.selectedCourse = res;

            this.viewCourseDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateCourse(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedCourse = new CourseVo();
            this.createCourseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteCourse(course: CourseVo){
       const isPermistted = await this.roleService.isPermitted('Course', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Course) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.courseService.delete(course).subscribe(status=>{
                          if(status > 0){
                          const position = this.courses.indexOf(course);
                          position > -1 ? this.courses.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Course Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }

public async loadSecteurSource(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.secteurService.findAll().subscribe(secteurSources => this.secteurSources = secteurSources,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadSecteurDestination(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.secteurService.findAll().subscribe(secteurDestinations => this.secteurDestinations = secteurDestinations,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadMoyenTransport(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.moyenTransportService.findAll().subscribe(moyenTransports => this.moyenTransports = moyenTransports,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadOperateur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.operateurService.findAll().subscribe(operateurs => this.operateurs = operateurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadClient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadChauffeur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.chauffeurService.findAll().subscribe(chauffeurs => this.chauffeurs = chauffeurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadEtatCourse(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Course', 'list');
    isPermistted ? this.etatCourseService.findAll().subscribe(etatCourses => this.etatCourses = etatCourses,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateCourse(course: CourseVo) {

     this.courseService.findByIdWithAssociatedList(course).subscribe(
	 res => {
	       this.initDuplicateCourse(res);
	       this.selectedCourse = res;
	       this.selectedCourse.id = null;


            this.createCourseDialog = true;

});

	}

	initDuplicateCourse(res: CourseVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.courses.map(e => {
    return {
                    'Date demande course': e.dateDemandeCourse ,
                    'Date reponse chauffeur': e.dateReponseChauffeur ,
                    'Date arrive chauffeur': e.dateArriveChauffeur ,
                    'Date arrive client': e.dateArriveClient ,
            'Secteur source': e.secteurSourceVo?.libelle ,
            'Secteur destination': e.secteurDestinationVo?.libelle ,
            'Moyen transport': e.moyenTransportVo?.libelle ,
                    'Nombre place': e.nombrePlace ,
            'Operateur': e.operateurVo?.description ,
            'Client': e.clientVo?.description ,
            'Chauffeur': e.chauffeurVo?.id ,
                    'Telephone': e.telephone ,
                    'Commentaire': e.commentaire ,
                    'Note interne': e.noteInterne ,
            'Etat course': e.etatCourseVo?.libelle ,
                    'Adresse depart': e.adresseDepart ,
                    'Note depart': e.noteDepart ,
                    'Altitude depart': e.altitudeDepart ,
                    'Longitude depart': e.longitudeDepart ,
                    'Adresse arrive': e.adresseArrive ,
                    'Note arrive': e.noteArrive ,
                    'Altitude arrive': e.altitudeArrive ,
                    'Longitude arrive': e.longitudeArrive ,
     }
      });

      this.criteriaData = [{
            'Date demande course': this.searchCourse.dateDemandeCourse ? this.searchCourse.dateDemandeCourse : environment.emptyForExport ,
            'Date reponse chauffeur': this.searchCourse.dateReponseChauffeur ? this.searchCourse.dateReponseChauffeur : environment.emptyForExport ,
            'Date arrive chauffeur': this.searchCourse.dateArriveChauffeur ? this.searchCourse.dateArriveChauffeur : environment.emptyForExport ,
            'Date arrive client': this.searchCourse.dateArriveClient ? this.searchCourse.dateArriveClient : environment.emptyForExport ,
        'Secteur source': this.searchCourse.secteurSourceVo?.libelle ? this.searchCourse.secteurSourceVo?.libelle : environment.emptyForExport ,
        'Secteur destination': this.searchCourse.secteurDestinationVo?.libelle ? this.searchCourse.secteurDestinationVo?.libelle : environment.emptyForExport ,
        'Moyen transport': this.searchCourse.moyenTransportVo?.libelle ? this.searchCourse.moyenTransportVo?.libelle : environment.emptyForExport ,
            'Nombre place Min': this.searchCourse.nombrePlaceMin ? this.searchCourse.nombrePlaceMin : environment.emptyForExport ,
            'Nombre place Max': this.searchCourse.nombrePlaceMax ? this.searchCourse.nombrePlaceMax : environment.emptyForExport ,
        'Operateur': this.searchCourse.operateurVo?.description ? this.searchCourse.operateurVo?.description : environment.emptyForExport ,
        'Client': this.searchCourse.clientVo?.description ? this.searchCourse.clientVo?.description : environment.emptyForExport ,
        'Chauffeur': this.searchCourse.chauffeurVo?.id ? this.searchCourse.chauffeurVo?.id : environment.emptyForExport ,
            'Telephone': this.searchCourse.telephone ? this.searchCourse.telephone : environment.emptyForExport ,
            'Commentaire': this.searchCourse.commentaire ? this.searchCourse.commentaire : environment.emptyForExport ,
            'Note interne': this.searchCourse.noteInterne ? this.searchCourse.noteInterne : environment.emptyForExport ,
        'Etat course': this.searchCourse.etatCourseVo?.libelle ? this.searchCourse.etatCourseVo?.libelle : environment.emptyForExport ,
            'Adresse depart': this.searchCourse.adresseDepart ? this.searchCourse.adresseDepart : environment.emptyForExport ,
            'Note depart': this.searchCourse.noteDepart ? this.searchCourse.noteDepart : environment.emptyForExport ,
            'Altitude depart Min': this.searchCourse.altitudeDepartMin ? this.searchCourse.altitudeDepartMin : environment.emptyForExport ,
            'Altitude depart Max': this.searchCourse.altitudeDepartMax ? this.searchCourse.altitudeDepartMax : environment.emptyForExport ,
            'Longitude depart Min': this.searchCourse.longitudeDepartMin ? this.searchCourse.longitudeDepartMin : environment.emptyForExport ,
            'Longitude depart Max': this.searchCourse.longitudeDepartMax ? this.searchCourse.longitudeDepartMax : environment.emptyForExport ,
            'Adresse arrive': this.searchCourse.adresseArrive ? this.searchCourse.adresseArrive : environment.emptyForExport ,
            'Note arrive': this.searchCourse.noteArrive ? this.searchCourse.noteArrive : environment.emptyForExport ,
            'Altitude arrive Min': this.searchCourse.altitudeArriveMin ? this.searchCourse.altitudeArriveMin : environment.emptyForExport ,
            'Altitude arrive Max': this.searchCourse.altitudeArriveMax ? this.searchCourse.altitudeArriveMax : environment.emptyForExport ,
            'Longitude arrive Min': this.searchCourse.longitudeArriveMin ? this.searchCourse.longitudeArriveMin : environment.emptyForExport ,
            'Longitude arrive Max': this.searchCourse.longitudeArriveMax ? this.searchCourse.longitudeArriveMax : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get courses() : Array<CourseVo> {
           return this.courseService.courses;
       }
    set courses(value: Array<CourseVo>) {
        this.courseService.courses = value;
       }

    get courseSelections() : Array<CourseVo> {
           return this.courseService.courseSelections;
       }
    set courseSelections(value: Array<CourseVo>) {
        this.courseService.courseSelections = value;
       }
   
     


    get selectedCourse() : CourseVo {
           return this.courseService.selectedCourse;
       }
    set selectedCourse(value: CourseVo) {
        this.courseService.selectedCourse = value;
       }
    
    get createCourseDialog() :boolean {
           return this.courseService.createCourseDialog;
       }
    set createCourseDialog(value: boolean) {
        this.courseService.createCourseDialog= value;
       }
    
    get editCourseDialog() :boolean {
           return this.courseService.editCourseDialog;
       }
    set editCourseDialog(value: boolean) {
        this.courseService.editCourseDialog= value;
       }
    get viewCourseDialog() :boolean {
           return this.courseService.viewCourseDialog;
       }
    set viewCourseDialog(value: boolean) {
        this.courseService.viewCourseDialog = value;
       }
       
     get searchCourse() : CourseVo {
        return this.courseService.searchCourse;
       }
    set searchCourse(value: CourseVo) {
        this.courseService.searchCourse = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

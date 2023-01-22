import {Component, OnInit} from '@angular/core';
import {CourseService} from 'src/app/controller/service/Course.service';
import {CourseVo} from 'src/app/controller/model/Course.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {SecteurVo} from 'src/app/controller/model/Secteur.model';
import {SecteurService} from 'src/app/controller/service/Secteur.service';
import {EtatCourseVo} from 'src/app/controller/model/EtatCourse.model';
import {EtatCourseService} from 'src/app/controller/service/EtatCourse.service';
import {OperateurVo} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {ChauffeurVo} from 'src/app/controller/model/Chauffeur.model';
import {ChauffeurService} from 'src/app/controller/service/Chauffeur.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';

@Component({
  selector: 'app-course-view-client',
  templateUrl: './course-view-client.component.html',
  styleUrls: ['./course-view-client.component.css']
})
export class CourseViewClientComponent implements OnInit {


constructor(private datePipe: DatePipe, private courseService: CourseService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private moyenTransportService: MoyenTransportService
    ,private secteurService: SecteurService
    ,private etatCourseService: EtatCourseService
    ,private operateurService: OperateurService
    ,private chauffeurService: ChauffeurService
    ,private clientService: ClientService
) {
}

// methods
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

hideViewDialog(){
    this.viewCourseDialog  = false;
}

// getters and setters

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

   get viewCourseDialog(): boolean {
           return this.courseService.viewCourseDialog;

       }
    set viewCourseDialog(value: boolean) {
        this.courseService.viewCourseDialog= value;
       }

       get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
      set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }
       get clients():Array<ClientVo> {
           return this.clientService.clients;
       }
       set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }
       get editClientDialog(): boolean {
           return this.clientService.editClientDialog;
       }
      set editClientDialog(value: boolean) {
        this.clientService.editClientDialog= value;
       }
       get selectedEtatCourse(): EtatCourseVo {
           return this.etatCourseService.selectedEtatCourse;
       }
      set selectedEtatCourse(value: EtatCourseVo) {
        this.etatCourseService.selectedEtatCourse = value;
       }
       get etatCourses():Array<EtatCourseVo> {
           return this.etatCourseService.etatCourses;
       }
       set etatCourses(value: Array<EtatCourseVo>) {
        this.etatCourseService.etatCourses = value;
       }
       get editEtatCourseDialog(): boolean {
           return this.etatCourseService.editEtatCourseDialog;
       }
      set editEtatCourseDialog(value: boolean) {
        this.etatCourseService.editEtatCourseDialog= value;
       }
       get selectedMoyenTransport(): MoyenTransportVo {
           return this.moyenTransportService.selectedMoyenTransport;
       }
      set selectedMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.selectedMoyenTransport = value;
       }
       get moyenTransports():Array<MoyenTransportVo> {
           return this.moyenTransportService.moyenTransports;
       }
       set moyenTransports(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransports = value;
       }
       get editMoyenTransportDialog(): boolean {
           return this.moyenTransportService.editMoyenTransportDialog;
       }
      set editMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.editMoyenTransportDialog= value;
       }
       get selectedOperateur(): OperateurVo {
           return this.operateurService.selectedOperateur;
       }
      set selectedOperateur(value: OperateurVo) {
        this.operateurService.selectedOperateur = value;
       }
       get operateurs():Array<OperateurVo> {
           return this.operateurService.operateurs;
       }
       set operateurs(value: Array<OperateurVo>) {
        this.operateurService.operateurs = value;
       }
       get editOperateurDialog(): boolean {
           return this.operateurService.editOperateurDialog;
       }
      set editOperateurDialog(value: boolean) {
        this.operateurService.editOperateurDialog= value;
       }
       get selectedSecteurDestination(): SecteurVo {
           return this.secteurService.selectedSecteur;
       }
      set selectedSecteurDestination(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }
       get secteurDestinations():Array<SecteurVo> {
           return this.secteurService.secteurDestinations;
       }
       set secteurDestinations(value: Array<SecteurVo>) {
        this.secteurService.secteurDestinations = value;
       }
       get editSecteurDestinationDialog(): boolean {
           return this.secteurService.editSecteurDestinationDialog;
       }
      set editSecteurDestinationDialog(value: boolean) {
        this.secteurService.editSecteurDestinationDialog= value;
       }
       get selectedChauffeur(): ChauffeurVo {
           return this.chauffeurService.selectedChauffeur;
       }
      set selectedChauffeur(value: ChauffeurVo) {
        this.chauffeurService.selectedChauffeur = value;
       }
       get chauffeurs():Array<ChauffeurVo> {
           return this.chauffeurService.chauffeurs;
       }
       set chauffeurs(value: Array<ChauffeurVo>) {
        this.chauffeurService.chauffeurs = value;
       }
       get editChauffeurDialog(): boolean {
           return this.chauffeurService.editChauffeurDialog;
       }
      set editChauffeurDialog(value: boolean) {
        this.chauffeurService.editChauffeurDialog= value;
       }
       get selectedSecteurSource(): SecteurVo {
           return this.secteurService.selectedSecteur;
       }
      set selectedSecteurSource(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }
       get secteurSources():Array<SecteurVo> {
           return this.secteurService.secteurSources;
       }
       set secteurSources(value: Array<SecteurVo>) {
        this.secteurService.secteurSources = value;
       }
       get editSecteurSourceDialog(): boolean {
           return this.secteurService.editSecteurSourceDialog;
       }
      set editSecteurSourceDialog(value: boolean) {
        this.secteurService.editSecteurSourceDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

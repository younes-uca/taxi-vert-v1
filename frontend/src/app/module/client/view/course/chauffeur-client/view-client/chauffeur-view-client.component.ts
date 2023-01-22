import {Component, OnInit} from '@angular/core';
import {ChauffeurService} from 'src/app/controller/service/Chauffeur.service';
import {ChauffeurVo} from 'src/app/controller/model/Chauffeur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {ModelApplicationVo} from 'src/app/controller/model/ModelApplication.model';
import {ModelApplicationService} from 'src/app/controller/service/ModelApplication.service';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {EtatChauffeurVo} from 'src/app/controller/model/EtatChauffeur.model';
import {EtatChauffeurService} from 'src/app/controller/service/EtatChauffeur.service';
import {LangueVo} from 'src/app/controller/model/Langue.model';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {MarqueVoitureVo} from 'src/app/controller/model/MarqueVoiture.model';
import {MarqueVoitureService} from 'src/app/controller/service/MarqueVoiture.service';
import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {ThemeService} from 'src/app/controller/service/Theme.service';
import {MarqueTelephoneVo} from 'src/app/controller/model/MarqueTelephone.model';
import {MarqueTelephoneService} from 'src/app/controller/service/MarqueTelephone.service';
import {VilleVo} from 'src/app/controller/model/Ville.model';
import {VilleService} from 'src/app/controller/service/Ville.service';

@Component({
  selector: 'app-chauffeur-view-client',
  templateUrl: './chauffeur-view-client.component.html',
  styleUrls: ['./chauffeur-view-client.component.css']
})
export class ChauffeurViewClientComponent implements OnInit {


constructor(private datePipe: DatePipe, private chauffeurService: ChauffeurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private modelApplicationService: ModelApplicationService
    ,private moyenTransportService: MoyenTransportService
    ,private etatChauffeurService: EtatChauffeurService
    ,private langueService: LangueService
    ,private marqueVoitureService: MarqueVoitureService
    ,private themeService: ThemeService
    ,private marqueTelephoneService: MarqueTelephoneService
    ,private villeService: VilleService
) {
}

// methods
ngOnInit(): void {
    this.selectedMoyenTransport = new MoyenTransportVo();
    this.moyenTransportService.findAll().subscribe((data) => this.moyenTransports = data);
    this.selectedModelApplication = new ModelApplicationVo();
    this.modelApplicationService.findAll().subscribe((data) => this.modelApplications = data);
    this.selectedMarqueTelephone = new MarqueTelephoneVo();
    this.marqueTelephoneService.findAll().subscribe((data) => this.marqueTelephones = data);
    this.selectedMarqueVoiture = new MarqueVoitureVo();
    this.marqueVoitureService.findAll().subscribe((data) => this.marqueVoitures = data);
    this.selectedEtatChauffeur = new EtatChauffeurVo();
    this.etatChauffeurService.findAll().subscribe((data) => this.etatChauffeurs = data);
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
    this.selectedLangue = new LangueVo();
    this.langueService.findAll().subscribe((data) => this.langues = data);
    this.selectedTheme = new ThemeVo();
    this.themeService.findAll().subscribe((data) => this.themes = data);
}

hideViewDialog(){
    this.viewChauffeurDialog  = false;
}

// getters and setters

get chauffeurs(): Array<ChauffeurVo> {
    return this.chauffeurService.chauffeurs;
       }
set chauffeurs(value: Array<ChauffeurVo>) {
        this.chauffeurService.chauffeurs = value;
       }

 get selectedChauffeur(): ChauffeurVo {
           return this.chauffeurService.selectedChauffeur;
       }
    set selectedChauffeur(value: ChauffeurVo) {
        this.chauffeurService.selectedChauffeur = value;
       }

   get viewChauffeurDialog(): boolean {
           return this.chauffeurService.viewChauffeurDialog;

       }
    set viewChauffeurDialog(value: boolean) {
        this.chauffeurService.viewChauffeurDialog= value;
       }

       get selectedLangue(): LangueVo {
           return this.langueService.selectedLangue;
       }
      set selectedLangue(value: LangueVo) {
        this.langueService.selectedLangue = value;
       }
       get langues():Array<LangueVo> {
           return this.langueService.langues;
       }
       set langues(value: Array<LangueVo>) {
        this.langueService.langues = value;
       }
       get editLangueDialog(): boolean {
           return this.langueService.editLangueDialog;
       }
      set editLangueDialog(value: boolean) {
        this.langueService.editLangueDialog= value;
       }
       get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
      set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
       get villes():Array<VilleVo> {
           return this.villeService.villes;
       }
       set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }
       get editVilleDialog(): boolean {
           return this.villeService.editVilleDialog;
       }
      set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog= value;
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
       get selectedMarqueTelephone(): MarqueTelephoneVo {
           return this.marqueTelephoneService.selectedMarqueTelephone;
       }
      set selectedMarqueTelephone(value: MarqueTelephoneVo) {
        this.marqueTelephoneService.selectedMarqueTelephone = value;
       }
       get marqueTelephones():Array<MarqueTelephoneVo> {
           return this.marqueTelephoneService.marqueTelephones;
       }
       set marqueTelephones(value: Array<MarqueTelephoneVo>) {
        this.marqueTelephoneService.marqueTelephones = value;
       }
       get editMarqueTelephoneDialog(): boolean {
           return this.marqueTelephoneService.editMarqueTelephoneDialog;
       }
      set editMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.editMarqueTelephoneDialog= value;
       }
       get selectedMarqueVoiture(): MarqueVoitureVo {
           return this.marqueVoitureService.selectedMarqueVoiture;
       }
      set selectedMarqueVoiture(value: MarqueVoitureVo) {
        this.marqueVoitureService.selectedMarqueVoiture = value;
       }
       get marqueVoitures():Array<MarqueVoitureVo> {
           return this.marqueVoitureService.marqueVoitures;
       }
       set marqueVoitures(value: Array<MarqueVoitureVo>) {
        this.marqueVoitureService.marqueVoitures = value;
       }
       get editMarqueVoitureDialog(): boolean {
           return this.marqueVoitureService.editMarqueVoitureDialog;
       }
      set editMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.editMarqueVoitureDialog= value;
       }
       get selectedTheme(): ThemeVo {
           return this.themeService.selectedTheme;
       }
      set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
       }
       get themes():Array<ThemeVo> {
           return this.themeService.themes;
       }
       set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }
       get editThemeDialog(): boolean {
           return this.themeService.editThemeDialog;
       }
      set editThemeDialog(value: boolean) {
        this.themeService.editThemeDialog= value;
       }
       get selectedModelApplication(): ModelApplicationVo {
           return this.modelApplicationService.selectedModelApplication;
       }
      set selectedModelApplication(value: ModelApplicationVo) {
        this.modelApplicationService.selectedModelApplication = value;
       }
       get modelApplications():Array<ModelApplicationVo> {
           return this.modelApplicationService.modelApplications;
       }
       set modelApplications(value: Array<ModelApplicationVo>) {
        this.modelApplicationService.modelApplications = value;
       }
       get editModelApplicationDialog(): boolean {
           return this.modelApplicationService.editModelApplicationDialog;
       }
      set editModelApplicationDialog(value: boolean) {
        this.modelApplicationService.editModelApplicationDialog= value;
       }
       get selectedEtatChauffeur(): EtatChauffeurVo {
           return this.etatChauffeurService.selectedEtatChauffeur;
       }
      set selectedEtatChauffeur(value: EtatChauffeurVo) {
        this.etatChauffeurService.selectedEtatChauffeur = value;
       }
       get etatChauffeurs():Array<EtatChauffeurVo> {
           return this.etatChauffeurService.etatChauffeurs;
       }
       set etatChauffeurs(value: Array<EtatChauffeurVo>) {
        this.etatChauffeurService.etatChauffeurs = value;
       }
       get editEtatChauffeurDialog(): boolean {
           return this.etatChauffeurService.editEtatChauffeurDialog;
       }
      set editEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.editEtatChauffeurDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

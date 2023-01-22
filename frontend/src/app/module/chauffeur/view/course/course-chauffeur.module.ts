import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { VilleCreateChauffeurComponent } from './ville-chauffeur/create-chauffeur/ville-create-chauffeur.component';
import { VilleEditChauffeurComponent } from './ville-chauffeur/edit-chauffeur/ville-edit-chauffeur.component';
import { VilleViewChauffeurComponent } from './ville-chauffeur/view-chauffeur/ville-view-chauffeur.component';
import { VilleListChauffeurComponent } from './ville-chauffeur/list-chauffeur/ville-list-chauffeur.component';
import { ChauffeurCreateChauffeurComponent } from './chauffeur-chauffeur/create-chauffeur/chauffeur-create-chauffeur.component';
import { ChauffeurEditChauffeurComponent } from './chauffeur-chauffeur/edit-chauffeur/chauffeur-edit-chauffeur.component';
import { ChauffeurViewChauffeurComponent } from './chauffeur-chauffeur/view-chauffeur/chauffeur-view-chauffeur.component';
import { ChauffeurListChauffeurComponent } from './chauffeur-chauffeur/list-chauffeur/chauffeur-list-chauffeur.component';
import { MoyenTransportCreateChauffeurComponent } from './moyen-transport-chauffeur/create-chauffeur/moyen-transport-create-chauffeur.component';
import { MoyenTransportEditChauffeurComponent } from './moyen-transport-chauffeur/edit-chauffeur/moyen-transport-edit-chauffeur.component';
import { MoyenTransportViewChauffeurComponent } from './moyen-transport-chauffeur/view-chauffeur/moyen-transport-view-chauffeur.component';
import { MoyenTransportListChauffeurComponent } from './moyen-transport-chauffeur/list-chauffeur/moyen-transport-list-chauffeur.component';
import { LangueCreateChauffeurComponent } from './langue-chauffeur/create-chauffeur/langue-create-chauffeur.component';
import { LangueEditChauffeurComponent } from './langue-chauffeur/edit-chauffeur/langue-edit-chauffeur.component';
import { LangueViewChauffeurComponent } from './langue-chauffeur/view-chauffeur/langue-view-chauffeur.component';
import { LangueListChauffeurComponent } from './langue-chauffeur/list-chauffeur/langue-list-chauffeur.component';
import { BlackListChauffeurCreateChauffeurComponent } from './black-list-chauffeur-chauffeur/create-chauffeur/black-list-chauffeur-create-chauffeur.component';
import { BlackListChauffeurEditChauffeurComponent } from './black-list-chauffeur-chauffeur/edit-chauffeur/black-list-chauffeur-edit-chauffeur.component';
import { BlackListChauffeurViewChauffeurComponent } from './black-list-chauffeur-chauffeur/view-chauffeur/black-list-chauffeur-view-chauffeur.component';
import { BlackListChauffeurListChauffeurComponent } from './black-list-chauffeur-chauffeur/list-chauffeur/black-list-chauffeur-list-chauffeur.component';
import { ClientCreateChauffeurComponent } from './client-chauffeur/create-chauffeur/client-create-chauffeur.component';
import { ClientEditChauffeurComponent } from './client-chauffeur/edit-chauffeur/client-edit-chauffeur.component';
import { ClientViewChauffeurComponent } from './client-chauffeur/view-chauffeur/client-view-chauffeur.component';
import { ClientListChauffeurComponent } from './client-chauffeur/list-chauffeur/client-list-chauffeur.component';
import { MarqueTelephoneCreateChauffeurComponent } from './marque-telephone-chauffeur/create-chauffeur/marque-telephone-create-chauffeur.component';
import { MarqueTelephoneEditChauffeurComponent } from './marque-telephone-chauffeur/edit-chauffeur/marque-telephone-edit-chauffeur.component';
import { MarqueTelephoneViewChauffeurComponent } from './marque-telephone-chauffeur/view-chauffeur/marque-telephone-view-chauffeur.component';
import { MarqueTelephoneListChauffeurComponent } from './marque-telephone-chauffeur/list-chauffeur/marque-telephone-list-chauffeur.component';
import { SecteurCreateChauffeurComponent } from './secteur-chauffeur/create-chauffeur/secteur-create-chauffeur.component';
import { SecteurEditChauffeurComponent } from './secteur-chauffeur/edit-chauffeur/secteur-edit-chauffeur.component';
import { SecteurViewChauffeurComponent } from './secteur-chauffeur/view-chauffeur/secteur-view-chauffeur.component';
import { SecteurListChauffeurComponent } from './secteur-chauffeur/list-chauffeur/secteur-list-chauffeur.component';
import { ModelApplicationCreateChauffeurComponent } from './model-application-chauffeur/create-chauffeur/model-application-create-chauffeur.component';
import { ModelApplicationEditChauffeurComponent } from './model-application-chauffeur/edit-chauffeur/model-application-edit-chauffeur.component';
import { ModelApplicationViewChauffeurComponent } from './model-application-chauffeur/view-chauffeur/model-application-view-chauffeur.component';
import { ModelApplicationListChauffeurComponent } from './model-application-chauffeur/list-chauffeur/model-application-list-chauffeur.component';
import { OperateurCreateChauffeurComponent } from './operateur-chauffeur/create-chauffeur/operateur-create-chauffeur.component';
import { OperateurEditChauffeurComponent } from './operateur-chauffeur/edit-chauffeur/operateur-edit-chauffeur.component';
import { OperateurViewChauffeurComponent } from './operateur-chauffeur/view-chauffeur/operateur-view-chauffeur.component';
import { OperateurListChauffeurComponent } from './operateur-chauffeur/list-chauffeur/operateur-list-chauffeur.component';
import { CourseCreateChauffeurComponent } from './course-chauffeur/create-chauffeur/course-create-chauffeur.component';
import { CourseEditChauffeurComponent } from './course-chauffeur/edit-chauffeur/course-edit-chauffeur.component';
import { CourseViewChauffeurComponent } from './course-chauffeur/view-chauffeur/course-view-chauffeur.component';
import { CourseListChauffeurComponent } from './course-chauffeur/list-chauffeur/course-list-chauffeur.component';
import { ThemeCreateChauffeurComponent } from './theme-chauffeur/create-chauffeur/theme-create-chauffeur.component';
import { ThemeEditChauffeurComponent } from './theme-chauffeur/edit-chauffeur/theme-edit-chauffeur.component';
import { ThemeViewChauffeurComponent } from './theme-chauffeur/view-chauffeur/theme-view-chauffeur.component';
import { ThemeListChauffeurComponent } from './theme-chauffeur/list-chauffeur/theme-list-chauffeur.component';
import { EtatChauffeurCreateChauffeurComponent } from './etat-chauffeur-chauffeur/create-chauffeur/etat-chauffeur-create-chauffeur.component';
import { EtatChauffeurEditChauffeurComponent } from './etat-chauffeur-chauffeur/edit-chauffeur/etat-chauffeur-edit-chauffeur.component';
import { EtatChauffeurViewChauffeurComponent } from './etat-chauffeur-chauffeur/view-chauffeur/etat-chauffeur-view-chauffeur.component';
import { EtatChauffeurListChauffeurComponent } from './etat-chauffeur-chauffeur/list-chauffeur/etat-chauffeur-list-chauffeur.component';
import { BlackListClientCreateChauffeurComponent } from './black-list-client-chauffeur/create-chauffeur/black-list-client-create-chauffeur.component';
import { BlackListClientEditChauffeurComponent } from './black-list-client-chauffeur/edit-chauffeur/black-list-client-edit-chauffeur.component';
import { BlackListClientViewChauffeurComponent } from './black-list-client-chauffeur/view-chauffeur/black-list-client-view-chauffeur.component';
import { BlackListClientListChauffeurComponent } from './black-list-client-chauffeur/list-chauffeur/black-list-client-list-chauffeur.component';
import { EtatCourseCreateChauffeurComponent } from './etat-course-chauffeur/create-chauffeur/etat-course-create-chauffeur.component';
import { EtatCourseEditChauffeurComponent } from './etat-course-chauffeur/edit-chauffeur/etat-course-edit-chauffeur.component';
import { EtatCourseViewChauffeurComponent } from './etat-course-chauffeur/view-chauffeur/etat-course-view-chauffeur.component';
import { EtatCourseListChauffeurComponent } from './etat-course-chauffeur/list-chauffeur/etat-course-list-chauffeur.component';
import { MarqueVoitureCreateChauffeurComponent } from './marque-voiture-chauffeur/create-chauffeur/marque-voiture-create-chauffeur.component';
import { MarqueVoitureEditChauffeurComponent } from './marque-voiture-chauffeur/edit-chauffeur/marque-voiture-edit-chauffeur.component';
import { MarqueVoitureViewChauffeurComponent } from './marque-voiture-chauffeur/view-chauffeur/marque-voiture-view-chauffeur.component';
import { MarqueVoitureListChauffeurComponent } from './marque-voiture-chauffeur/list-chauffeur/marque-voiture-list-chauffeur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [

    VilleCreateChauffeurComponent,
    VilleListChauffeurComponent,
    VilleViewChauffeurComponent,
    VilleEditChauffeurComponent,
    ChauffeurCreateChauffeurComponent,
    ChauffeurListChauffeurComponent,
    ChauffeurViewChauffeurComponent,
    ChauffeurEditChauffeurComponent,
    MoyenTransportCreateChauffeurComponent,
    MoyenTransportListChauffeurComponent,
    MoyenTransportViewChauffeurComponent,
    MoyenTransportEditChauffeurComponent,
    LangueCreateChauffeurComponent,
    LangueListChauffeurComponent,
    LangueViewChauffeurComponent,
    LangueEditChauffeurComponent,
    BlackListChauffeurCreateChauffeurComponent,
    BlackListChauffeurListChauffeurComponent,
    BlackListChauffeurViewChauffeurComponent,
    BlackListChauffeurEditChauffeurComponent,
    ClientCreateChauffeurComponent,
    ClientListChauffeurComponent,
    ClientViewChauffeurComponent,
    ClientEditChauffeurComponent,
    MarqueTelephoneCreateChauffeurComponent,
    MarqueTelephoneListChauffeurComponent,
    MarqueTelephoneViewChauffeurComponent,
    MarqueTelephoneEditChauffeurComponent,
    SecteurCreateChauffeurComponent,
    SecteurListChauffeurComponent,
    SecteurViewChauffeurComponent,
    SecteurEditChauffeurComponent,
    ModelApplicationCreateChauffeurComponent,
    ModelApplicationListChauffeurComponent,
    ModelApplicationViewChauffeurComponent,
    ModelApplicationEditChauffeurComponent,
    OperateurCreateChauffeurComponent,
    OperateurListChauffeurComponent,
    OperateurViewChauffeurComponent,
    OperateurEditChauffeurComponent,
    CourseCreateChauffeurComponent,
    CourseListChauffeurComponent,
    CourseViewChauffeurComponent,
    CourseEditChauffeurComponent,
    ThemeCreateChauffeurComponent,
    ThemeListChauffeurComponent,
    ThemeViewChauffeurComponent,
    ThemeEditChauffeurComponent,
    EtatChauffeurCreateChauffeurComponent,
    EtatChauffeurListChauffeurComponent,
    EtatChauffeurViewChauffeurComponent,
    EtatChauffeurEditChauffeurComponent,
    BlackListClientCreateChauffeurComponent,
    BlackListClientListChauffeurComponent,
    BlackListClientViewChauffeurComponent,
    BlackListClientEditChauffeurComponent,
    EtatCourseCreateChauffeurComponent,
    EtatCourseListChauffeurComponent,
    EtatCourseViewChauffeurComponent,
    EtatCourseEditChauffeurComponent,
    MarqueVoitureCreateChauffeurComponent,
    MarqueVoitureListChauffeurComponent,
    MarqueVoitureViewChauffeurComponent,
    MarqueVoitureEditChauffeurComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  ],
  exports: [
  VilleCreateChauffeurComponent,
  VilleListChauffeurComponent,
  VilleViewChauffeurComponent,
  VilleEditChauffeurComponent,
  ChauffeurCreateChauffeurComponent,
  ChauffeurListChauffeurComponent,
  ChauffeurViewChauffeurComponent,
  ChauffeurEditChauffeurComponent,
  MoyenTransportCreateChauffeurComponent,
  MoyenTransportListChauffeurComponent,
  MoyenTransportViewChauffeurComponent,
  MoyenTransportEditChauffeurComponent,
  LangueCreateChauffeurComponent,
  LangueListChauffeurComponent,
  LangueViewChauffeurComponent,
  LangueEditChauffeurComponent,
  BlackListChauffeurCreateChauffeurComponent,
  BlackListChauffeurListChauffeurComponent,
  BlackListChauffeurViewChauffeurComponent,
  BlackListChauffeurEditChauffeurComponent,
  ClientCreateChauffeurComponent,
  ClientListChauffeurComponent,
  ClientViewChauffeurComponent,
  ClientEditChauffeurComponent,
  MarqueTelephoneCreateChauffeurComponent,
  MarqueTelephoneListChauffeurComponent,
  MarqueTelephoneViewChauffeurComponent,
  MarqueTelephoneEditChauffeurComponent,
  SecteurCreateChauffeurComponent,
  SecteurListChauffeurComponent,
  SecteurViewChauffeurComponent,
  SecteurEditChauffeurComponent,
  ModelApplicationCreateChauffeurComponent,
  ModelApplicationListChauffeurComponent,
  ModelApplicationViewChauffeurComponent,
  ModelApplicationEditChauffeurComponent,
  OperateurCreateChauffeurComponent,
  OperateurListChauffeurComponent,
  OperateurViewChauffeurComponent,
  OperateurEditChauffeurComponent,
  CourseCreateChauffeurComponent,
  CourseListChauffeurComponent,
  CourseViewChauffeurComponent,
  CourseEditChauffeurComponent,
  ThemeCreateChauffeurComponent,
  ThemeListChauffeurComponent,
  ThemeViewChauffeurComponent,
  ThemeEditChauffeurComponent,
  EtatChauffeurCreateChauffeurComponent,
  EtatChauffeurListChauffeurComponent,
  EtatChauffeurViewChauffeurComponent,
  EtatChauffeurEditChauffeurComponent,
  BlackListClientCreateChauffeurComponent,
  BlackListClientListChauffeurComponent,
  BlackListClientViewChauffeurComponent,
  BlackListClientEditChauffeurComponent,
  EtatCourseCreateChauffeurComponent,
  EtatCourseListChauffeurComponent,
  EtatCourseViewChauffeurComponent,
  EtatCourseEditChauffeurComponent,
  MarqueVoitureCreateChauffeurComponent,
  MarqueVoitureListChauffeurComponent,
  MarqueVoitureViewChauffeurComponent,
  MarqueVoitureEditChauffeurComponent,
  ],
  entryComponents: [],
})
export class CourseChauffeurModule { }

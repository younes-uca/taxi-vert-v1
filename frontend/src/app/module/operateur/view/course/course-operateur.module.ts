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

import { VilleCreateOperateurComponent } from './ville-operateur/create-operateur/ville-create-operateur.component';
import { VilleEditOperateurComponent } from './ville-operateur/edit-operateur/ville-edit-operateur.component';
import { VilleViewOperateurComponent } from './ville-operateur/view-operateur/ville-view-operateur.component';
import { VilleListOperateurComponent } from './ville-operateur/list-operateur/ville-list-operateur.component';
import { ChauffeurCreateOperateurComponent } from './chauffeur-operateur/create-operateur/chauffeur-create-operateur.component';
import { ChauffeurEditOperateurComponent } from './chauffeur-operateur/edit-operateur/chauffeur-edit-operateur.component';
import { ChauffeurViewOperateurComponent } from './chauffeur-operateur/view-operateur/chauffeur-view-operateur.component';
import { ChauffeurListOperateurComponent } from './chauffeur-operateur/list-operateur/chauffeur-list-operateur.component';
import { MoyenTransportCreateOperateurComponent } from './moyen-transport-operateur/create-operateur/moyen-transport-create-operateur.component';
import { MoyenTransportEditOperateurComponent } from './moyen-transport-operateur/edit-operateur/moyen-transport-edit-operateur.component';
import { MoyenTransportViewOperateurComponent } from './moyen-transport-operateur/view-operateur/moyen-transport-view-operateur.component';
import { MoyenTransportListOperateurComponent } from './moyen-transport-operateur/list-operateur/moyen-transport-list-operateur.component';
import { LangueCreateOperateurComponent } from './langue-operateur/create-operateur/langue-create-operateur.component';
import { LangueEditOperateurComponent } from './langue-operateur/edit-operateur/langue-edit-operateur.component';
import { LangueViewOperateurComponent } from './langue-operateur/view-operateur/langue-view-operateur.component';
import { LangueListOperateurComponent } from './langue-operateur/list-operateur/langue-list-operateur.component';
import { BlackListChauffeurCreateOperateurComponent } from './black-list-chauffeur-operateur/create-operateur/black-list-chauffeur-create-operateur.component';
import { BlackListChauffeurEditOperateurComponent } from './black-list-chauffeur-operateur/edit-operateur/black-list-chauffeur-edit-operateur.component';
import { BlackListChauffeurViewOperateurComponent } from './black-list-chauffeur-operateur/view-operateur/black-list-chauffeur-view-operateur.component';
import { BlackListChauffeurListOperateurComponent } from './black-list-chauffeur-operateur/list-operateur/black-list-chauffeur-list-operateur.component';
import { ClientCreateOperateurComponent } from './client-operateur/create-operateur/client-create-operateur.component';
import { ClientEditOperateurComponent } from './client-operateur/edit-operateur/client-edit-operateur.component';
import { ClientViewOperateurComponent } from './client-operateur/view-operateur/client-view-operateur.component';
import { ClientListOperateurComponent } from './client-operateur/list-operateur/client-list-operateur.component';
import { MarqueTelephoneCreateOperateurComponent } from './marque-telephone-operateur/create-operateur/marque-telephone-create-operateur.component';
import { MarqueTelephoneEditOperateurComponent } from './marque-telephone-operateur/edit-operateur/marque-telephone-edit-operateur.component';
import { MarqueTelephoneViewOperateurComponent } from './marque-telephone-operateur/view-operateur/marque-telephone-view-operateur.component';
import { MarqueTelephoneListOperateurComponent } from './marque-telephone-operateur/list-operateur/marque-telephone-list-operateur.component';
import { SecteurCreateOperateurComponent } from './secteur-operateur/create-operateur/secteur-create-operateur.component';
import { SecteurEditOperateurComponent } from './secteur-operateur/edit-operateur/secteur-edit-operateur.component';
import { SecteurViewOperateurComponent } from './secteur-operateur/view-operateur/secteur-view-operateur.component';
import { SecteurListOperateurComponent } from './secteur-operateur/list-operateur/secteur-list-operateur.component';
import { ModelApplicationCreateOperateurComponent } from './model-application-operateur/create-operateur/model-application-create-operateur.component';
import { ModelApplicationEditOperateurComponent } from './model-application-operateur/edit-operateur/model-application-edit-operateur.component';
import { ModelApplicationViewOperateurComponent } from './model-application-operateur/view-operateur/model-application-view-operateur.component';
import { ModelApplicationListOperateurComponent } from './model-application-operateur/list-operateur/model-application-list-operateur.component';
import { OperateurCreateOperateurComponent } from './operateur-operateur/create-operateur/operateur-create-operateur.component';
import { OperateurEditOperateurComponent } from './operateur-operateur/edit-operateur/operateur-edit-operateur.component';
import { OperateurViewOperateurComponent } from './operateur-operateur/view-operateur/operateur-view-operateur.component';
import { OperateurListOperateurComponent } from './operateur-operateur/list-operateur/operateur-list-operateur.component';
import { CourseCreateOperateurComponent } from './course-operateur/create-operateur/course-create-operateur.component';
import { CourseEditOperateurComponent } from './course-operateur/edit-operateur/course-edit-operateur.component';
import { CourseViewOperateurComponent } from './course-operateur/view-operateur/course-view-operateur.component';
import { CourseListOperateurComponent } from './course-operateur/list-operateur/course-list-operateur.component';
import { ThemeCreateOperateurComponent } from './theme-operateur/create-operateur/theme-create-operateur.component';
import { ThemeEditOperateurComponent } from './theme-operateur/edit-operateur/theme-edit-operateur.component';
import { ThemeViewOperateurComponent } from './theme-operateur/view-operateur/theme-view-operateur.component';
import { ThemeListOperateurComponent } from './theme-operateur/list-operateur/theme-list-operateur.component';
import { EtatChauffeurCreateOperateurComponent } from './etat-chauffeur-operateur/create-operateur/etat-chauffeur-create-operateur.component';
import { EtatChauffeurEditOperateurComponent } from './etat-chauffeur-operateur/edit-operateur/etat-chauffeur-edit-operateur.component';
import { EtatChauffeurViewOperateurComponent } from './etat-chauffeur-operateur/view-operateur/etat-chauffeur-view-operateur.component';
import { EtatChauffeurListOperateurComponent } from './etat-chauffeur-operateur/list-operateur/etat-chauffeur-list-operateur.component';
import { BlackListClientCreateOperateurComponent } from './black-list-client-operateur/create-operateur/black-list-client-create-operateur.component';
import { BlackListClientEditOperateurComponent } from './black-list-client-operateur/edit-operateur/black-list-client-edit-operateur.component';
import { BlackListClientViewOperateurComponent } from './black-list-client-operateur/view-operateur/black-list-client-view-operateur.component';
import { BlackListClientListOperateurComponent } from './black-list-client-operateur/list-operateur/black-list-client-list-operateur.component';
import { EtatCourseCreateOperateurComponent } from './etat-course-operateur/create-operateur/etat-course-create-operateur.component';
import { EtatCourseEditOperateurComponent } from './etat-course-operateur/edit-operateur/etat-course-edit-operateur.component';
import { EtatCourseViewOperateurComponent } from './etat-course-operateur/view-operateur/etat-course-view-operateur.component';
import { EtatCourseListOperateurComponent } from './etat-course-operateur/list-operateur/etat-course-list-operateur.component';
import { MarqueVoitureCreateOperateurComponent } from './marque-voiture-operateur/create-operateur/marque-voiture-create-operateur.component';
import { MarqueVoitureEditOperateurComponent } from './marque-voiture-operateur/edit-operateur/marque-voiture-edit-operateur.component';
import { MarqueVoitureViewOperateurComponent } from './marque-voiture-operateur/view-operateur/marque-voiture-view-operateur.component';
import { MarqueVoitureListOperateurComponent } from './marque-voiture-operateur/list-operateur/marque-voiture-list-operateur.component';

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

    VilleCreateOperateurComponent,
    VilleListOperateurComponent,
    VilleViewOperateurComponent,
    VilleEditOperateurComponent,
    ChauffeurCreateOperateurComponent,
    ChauffeurListOperateurComponent,
    ChauffeurViewOperateurComponent,
    ChauffeurEditOperateurComponent,
    MoyenTransportCreateOperateurComponent,
    MoyenTransportListOperateurComponent,
    MoyenTransportViewOperateurComponent,
    MoyenTransportEditOperateurComponent,
    LangueCreateOperateurComponent,
    LangueListOperateurComponent,
    LangueViewOperateurComponent,
    LangueEditOperateurComponent,
    BlackListChauffeurCreateOperateurComponent,
    BlackListChauffeurListOperateurComponent,
    BlackListChauffeurViewOperateurComponent,
    BlackListChauffeurEditOperateurComponent,
    ClientCreateOperateurComponent,
    ClientListOperateurComponent,
    ClientViewOperateurComponent,
    ClientEditOperateurComponent,
    MarqueTelephoneCreateOperateurComponent,
    MarqueTelephoneListOperateurComponent,
    MarqueTelephoneViewOperateurComponent,
    MarqueTelephoneEditOperateurComponent,
    SecteurCreateOperateurComponent,
    SecteurListOperateurComponent,
    SecteurViewOperateurComponent,
    SecteurEditOperateurComponent,
    ModelApplicationCreateOperateurComponent,
    ModelApplicationListOperateurComponent,
    ModelApplicationViewOperateurComponent,
    ModelApplicationEditOperateurComponent,
    OperateurCreateOperateurComponent,
    OperateurListOperateurComponent,
    OperateurViewOperateurComponent,
    OperateurEditOperateurComponent,
    CourseCreateOperateurComponent,
    CourseListOperateurComponent,
    CourseViewOperateurComponent,
    CourseEditOperateurComponent,
    ThemeCreateOperateurComponent,
    ThemeListOperateurComponent,
    ThemeViewOperateurComponent,
    ThemeEditOperateurComponent,
    EtatChauffeurCreateOperateurComponent,
    EtatChauffeurListOperateurComponent,
    EtatChauffeurViewOperateurComponent,
    EtatChauffeurEditOperateurComponent,
    BlackListClientCreateOperateurComponent,
    BlackListClientListOperateurComponent,
    BlackListClientViewOperateurComponent,
    BlackListClientEditOperateurComponent,
    EtatCourseCreateOperateurComponent,
    EtatCourseListOperateurComponent,
    EtatCourseViewOperateurComponent,
    EtatCourseEditOperateurComponent,
    MarqueVoitureCreateOperateurComponent,
    MarqueVoitureListOperateurComponent,
    MarqueVoitureViewOperateurComponent,
    MarqueVoitureEditOperateurComponent,
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
  VilleCreateOperateurComponent,
  VilleListOperateurComponent,
  VilleViewOperateurComponent,
  VilleEditOperateurComponent,
  ChauffeurCreateOperateurComponent,
  ChauffeurListOperateurComponent,
  ChauffeurViewOperateurComponent,
  ChauffeurEditOperateurComponent,
  MoyenTransportCreateOperateurComponent,
  MoyenTransportListOperateurComponent,
  MoyenTransportViewOperateurComponent,
  MoyenTransportEditOperateurComponent,
  LangueCreateOperateurComponent,
  LangueListOperateurComponent,
  LangueViewOperateurComponent,
  LangueEditOperateurComponent,
  BlackListChauffeurCreateOperateurComponent,
  BlackListChauffeurListOperateurComponent,
  BlackListChauffeurViewOperateurComponent,
  BlackListChauffeurEditOperateurComponent,
  ClientCreateOperateurComponent,
  ClientListOperateurComponent,
  ClientViewOperateurComponent,
  ClientEditOperateurComponent,
  MarqueTelephoneCreateOperateurComponent,
  MarqueTelephoneListOperateurComponent,
  MarqueTelephoneViewOperateurComponent,
  MarqueTelephoneEditOperateurComponent,
  SecteurCreateOperateurComponent,
  SecteurListOperateurComponent,
  SecteurViewOperateurComponent,
  SecteurEditOperateurComponent,
  ModelApplicationCreateOperateurComponent,
  ModelApplicationListOperateurComponent,
  ModelApplicationViewOperateurComponent,
  ModelApplicationEditOperateurComponent,
  OperateurCreateOperateurComponent,
  OperateurListOperateurComponent,
  OperateurViewOperateurComponent,
  OperateurEditOperateurComponent,
  CourseCreateOperateurComponent,
  CourseListOperateurComponent,
  CourseViewOperateurComponent,
  CourseEditOperateurComponent,
  ThemeCreateOperateurComponent,
  ThemeListOperateurComponent,
  ThemeViewOperateurComponent,
  ThemeEditOperateurComponent,
  EtatChauffeurCreateOperateurComponent,
  EtatChauffeurListOperateurComponent,
  EtatChauffeurViewOperateurComponent,
  EtatChauffeurEditOperateurComponent,
  BlackListClientCreateOperateurComponent,
  BlackListClientListOperateurComponent,
  BlackListClientViewOperateurComponent,
  BlackListClientEditOperateurComponent,
  EtatCourseCreateOperateurComponent,
  EtatCourseListOperateurComponent,
  EtatCourseViewOperateurComponent,
  EtatCourseEditOperateurComponent,
  MarqueVoitureCreateOperateurComponent,
  MarqueVoitureListOperateurComponent,
  MarqueVoitureViewOperateurComponent,
  MarqueVoitureEditOperateurComponent,
  ],
  entryComponents: [],
})
export class CourseOperateurModule { }

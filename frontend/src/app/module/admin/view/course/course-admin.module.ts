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

import { VilleCreateAdminComponent } from './ville-admin/create-admin/ville-create-admin.component';
import { VilleEditAdminComponent } from './ville-admin/edit-admin/ville-edit-admin.component';
import { VilleViewAdminComponent } from './ville-admin/view-admin/ville-view-admin.component';
import { VilleListAdminComponent } from './ville-admin/list-admin/ville-list-admin.component';
import { ChauffeurCreateAdminComponent } from './chauffeur-admin/create-admin/chauffeur-create-admin.component';
import { ChauffeurEditAdminComponent } from './chauffeur-admin/edit-admin/chauffeur-edit-admin.component';
import { ChauffeurViewAdminComponent } from './chauffeur-admin/view-admin/chauffeur-view-admin.component';
import { ChauffeurListAdminComponent } from './chauffeur-admin/list-admin/chauffeur-list-admin.component';
import { MoyenTransportCreateAdminComponent } from './moyen-transport-admin/create-admin/moyen-transport-create-admin.component';
import { MoyenTransportEditAdminComponent } from './moyen-transport-admin/edit-admin/moyen-transport-edit-admin.component';
import { MoyenTransportViewAdminComponent } from './moyen-transport-admin/view-admin/moyen-transport-view-admin.component';
import { MoyenTransportListAdminComponent } from './moyen-transport-admin/list-admin/moyen-transport-list-admin.component';
import { LangueCreateAdminComponent } from './langue-admin/create-admin/langue-create-admin.component';
import { LangueEditAdminComponent } from './langue-admin/edit-admin/langue-edit-admin.component';
import { LangueViewAdminComponent } from './langue-admin/view-admin/langue-view-admin.component';
import { LangueListAdminComponent } from './langue-admin/list-admin/langue-list-admin.component';
import { BlackListChauffeurCreateAdminComponent } from './black-list-chauffeur-admin/create-admin/black-list-chauffeur-create-admin.component';
import { BlackListChauffeurEditAdminComponent } from './black-list-chauffeur-admin/edit-admin/black-list-chauffeur-edit-admin.component';
import { BlackListChauffeurViewAdminComponent } from './black-list-chauffeur-admin/view-admin/black-list-chauffeur-view-admin.component';
import { BlackListChauffeurListAdminComponent } from './black-list-chauffeur-admin/list-admin/black-list-chauffeur-list-admin.component';
import { ClientCreateAdminComponent } from './client-admin/create-admin/client-create-admin.component';
import { ClientEditAdminComponent } from './client-admin/edit-admin/client-edit-admin.component';
import { ClientViewAdminComponent } from './client-admin/view-admin/client-view-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { MarqueTelephoneCreateAdminComponent } from './marque-telephone-admin/create-admin/marque-telephone-create-admin.component';
import { MarqueTelephoneEditAdminComponent } from './marque-telephone-admin/edit-admin/marque-telephone-edit-admin.component';
import { MarqueTelephoneViewAdminComponent } from './marque-telephone-admin/view-admin/marque-telephone-view-admin.component';
import { MarqueTelephoneListAdminComponent } from './marque-telephone-admin/list-admin/marque-telephone-list-admin.component';
import { SecteurCreateAdminComponent } from './secteur-admin/create-admin/secteur-create-admin.component';
import { SecteurEditAdminComponent } from './secteur-admin/edit-admin/secteur-edit-admin.component';
import { SecteurViewAdminComponent } from './secteur-admin/view-admin/secteur-view-admin.component';
import { SecteurListAdminComponent } from './secteur-admin/list-admin/secteur-list-admin.component';
import { ModelApplicationCreateAdminComponent } from './model-application-admin/create-admin/model-application-create-admin.component';
import { ModelApplicationEditAdminComponent } from './model-application-admin/edit-admin/model-application-edit-admin.component';
import { ModelApplicationViewAdminComponent } from './model-application-admin/view-admin/model-application-view-admin.component';
import { ModelApplicationListAdminComponent } from './model-application-admin/list-admin/model-application-list-admin.component';
import { OperateurCreateAdminComponent } from './operateur-admin/create-admin/operateur-create-admin.component';
import { OperateurEditAdminComponent } from './operateur-admin/edit-admin/operateur-edit-admin.component';
import { OperateurViewAdminComponent } from './operateur-admin/view-admin/operateur-view-admin.component';
import { OperateurListAdminComponent } from './operateur-admin/list-admin/operateur-list-admin.component';
import { CourseCreateAdminComponent } from './course-admin/create-admin/course-create-admin.component';
import { CourseEditAdminComponent } from './course-admin/edit-admin/course-edit-admin.component';
import { CourseViewAdminComponent } from './course-admin/view-admin/course-view-admin.component';
import { CourseListAdminComponent } from './course-admin/list-admin/course-list-admin.component';
import { ThemeCreateAdminComponent } from './theme-admin/create-admin/theme-create-admin.component';
import { ThemeEditAdminComponent } from './theme-admin/edit-admin/theme-edit-admin.component';
import { ThemeViewAdminComponent } from './theme-admin/view-admin/theme-view-admin.component';
import { ThemeListAdminComponent } from './theme-admin/list-admin/theme-list-admin.component';
import { EtatChauffeurCreateAdminComponent } from './etat-chauffeur-admin/create-admin/etat-chauffeur-create-admin.component';
import { EtatChauffeurEditAdminComponent } from './etat-chauffeur-admin/edit-admin/etat-chauffeur-edit-admin.component';
import { EtatChauffeurViewAdminComponent } from './etat-chauffeur-admin/view-admin/etat-chauffeur-view-admin.component';
import { EtatChauffeurListAdminComponent } from './etat-chauffeur-admin/list-admin/etat-chauffeur-list-admin.component';
import { BlackListClientCreateAdminComponent } from './black-list-client-admin/create-admin/black-list-client-create-admin.component';
import { BlackListClientEditAdminComponent } from './black-list-client-admin/edit-admin/black-list-client-edit-admin.component';
import { BlackListClientViewAdminComponent } from './black-list-client-admin/view-admin/black-list-client-view-admin.component';
import { BlackListClientListAdminComponent } from './black-list-client-admin/list-admin/black-list-client-list-admin.component';
import { EtatCourseCreateAdminComponent } from './etat-course-admin/create-admin/etat-course-create-admin.component';
import { EtatCourseEditAdminComponent } from './etat-course-admin/edit-admin/etat-course-edit-admin.component';
import { EtatCourseViewAdminComponent } from './etat-course-admin/view-admin/etat-course-view-admin.component';
import { EtatCourseListAdminComponent } from './etat-course-admin/list-admin/etat-course-list-admin.component';
import { MarqueVoitureCreateAdminComponent } from './marque-voiture-admin/create-admin/marque-voiture-create-admin.component';
import { MarqueVoitureEditAdminComponent } from './marque-voiture-admin/edit-admin/marque-voiture-edit-admin.component';
import { MarqueVoitureViewAdminComponent } from './marque-voiture-admin/view-admin/marque-voiture-view-admin.component';
import { MarqueVoitureListAdminComponent } from './marque-voiture-admin/list-admin/marque-voiture-list-admin.component';

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

    VilleCreateAdminComponent,
    VilleListAdminComponent,
    VilleViewAdminComponent,
    VilleEditAdminComponent,
    ChauffeurCreateAdminComponent,
    ChauffeurListAdminComponent,
    ChauffeurViewAdminComponent,
    ChauffeurEditAdminComponent,
    MoyenTransportCreateAdminComponent,
    MoyenTransportListAdminComponent,
    MoyenTransportViewAdminComponent,
    MoyenTransportEditAdminComponent,
    LangueCreateAdminComponent,
    LangueListAdminComponent,
    LangueViewAdminComponent,
    LangueEditAdminComponent,
    BlackListChauffeurCreateAdminComponent,
    BlackListChauffeurListAdminComponent,
    BlackListChauffeurViewAdminComponent,
    BlackListChauffeurEditAdminComponent,
    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    MarqueTelephoneCreateAdminComponent,
    MarqueTelephoneListAdminComponent,
    MarqueTelephoneViewAdminComponent,
    MarqueTelephoneEditAdminComponent,
    SecteurCreateAdminComponent,
    SecteurListAdminComponent,
    SecteurViewAdminComponent,
    SecteurEditAdminComponent,
    ModelApplicationCreateAdminComponent,
    ModelApplicationListAdminComponent,
    ModelApplicationViewAdminComponent,
    ModelApplicationEditAdminComponent,
    OperateurCreateAdminComponent,
    OperateurListAdminComponent,
    OperateurViewAdminComponent,
    OperateurEditAdminComponent,
    CourseCreateAdminComponent,
    CourseListAdminComponent,
    CourseViewAdminComponent,
    CourseEditAdminComponent,
    ThemeCreateAdminComponent,
    ThemeListAdminComponent,
    ThemeViewAdminComponent,
    ThemeEditAdminComponent,
    EtatChauffeurCreateAdminComponent,
    EtatChauffeurListAdminComponent,
    EtatChauffeurViewAdminComponent,
    EtatChauffeurEditAdminComponent,
    BlackListClientCreateAdminComponent,
    BlackListClientListAdminComponent,
    BlackListClientViewAdminComponent,
    BlackListClientEditAdminComponent,
    EtatCourseCreateAdminComponent,
    EtatCourseListAdminComponent,
    EtatCourseViewAdminComponent,
    EtatCourseEditAdminComponent,
    MarqueVoitureCreateAdminComponent,
    MarqueVoitureListAdminComponent,
    MarqueVoitureViewAdminComponent,
    MarqueVoitureEditAdminComponent,
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
  VilleCreateAdminComponent,
  VilleListAdminComponent,
  VilleViewAdminComponent,
  VilleEditAdminComponent,
  ChauffeurCreateAdminComponent,
  ChauffeurListAdminComponent,
  ChauffeurViewAdminComponent,
  ChauffeurEditAdminComponent,
  MoyenTransportCreateAdminComponent,
  MoyenTransportListAdminComponent,
  MoyenTransportViewAdminComponent,
  MoyenTransportEditAdminComponent,
  LangueCreateAdminComponent,
  LangueListAdminComponent,
  LangueViewAdminComponent,
  LangueEditAdminComponent,
  BlackListChauffeurCreateAdminComponent,
  BlackListChauffeurListAdminComponent,
  BlackListChauffeurViewAdminComponent,
  BlackListChauffeurEditAdminComponent,
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  MarqueTelephoneCreateAdminComponent,
  MarqueTelephoneListAdminComponent,
  MarqueTelephoneViewAdminComponent,
  MarqueTelephoneEditAdminComponent,
  SecteurCreateAdminComponent,
  SecteurListAdminComponent,
  SecteurViewAdminComponent,
  SecteurEditAdminComponent,
  ModelApplicationCreateAdminComponent,
  ModelApplicationListAdminComponent,
  ModelApplicationViewAdminComponent,
  ModelApplicationEditAdminComponent,
  OperateurCreateAdminComponent,
  OperateurListAdminComponent,
  OperateurViewAdminComponent,
  OperateurEditAdminComponent,
  CourseCreateAdminComponent,
  CourseListAdminComponent,
  CourseViewAdminComponent,
  CourseEditAdminComponent,
  ThemeCreateAdminComponent,
  ThemeListAdminComponent,
  ThemeViewAdminComponent,
  ThemeEditAdminComponent,
  EtatChauffeurCreateAdminComponent,
  EtatChauffeurListAdminComponent,
  EtatChauffeurViewAdminComponent,
  EtatChauffeurEditAdminComponent,
  BlackListClientCreateAdminComponent,
  BlackListClientListAdminComponent,
  BlackListClientViewAdminComponent,
  BlackListClientEditAdminComponent,
  EtatCourseCreateAdminComponent,
  EtatCourseListAdminComponent,
  EtatCourseViewAdminComponent,
  EtatCourseEditAdminComponent,
  MarqueVoitureCreateAdminComponent,
  MarqueVoitureListAdminComponent,
  MarqueVoitureViewAdminComponent,
  MarqueVoitureEditAdminComponent,
  ],
  entryComponents: [],
})
export class CourseAdminModule { }

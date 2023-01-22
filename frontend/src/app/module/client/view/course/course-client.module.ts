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

import { VilleCreateClientComponent } from './ville-client/create-client/ville-create-client.component';
import { VilleEditClientComponent } from './ville-client/edit-client/ville-edit-client.component';
import { VilleViewClientComponent } from './ville-client/view-client/ville-view-client.component';
import { VilleListClientComponent } from './ville-client/list-client/ville-list-client.component';
import { ChauffeurCreateClientComponent } from './chauffeur-client/create-client/chauffeur-create-client.component';
import { ChauffeurEditClientComponent } from './chauffeur-client/edit-client/chauffeur-edit-client.component';
import { ChauffeurViewClientComponent } from './chauffeur-client/view-client/chauffeur-view-client.component';
import { ChauffeurListClientComponent } from './chauffeur-client/list-client/chauffeur-list-client.component';
import { MoyenTransportCreateClientComponent } from './moyen-transport-client/create-client/moyen-transport-create-client.component';
import { MoyenTransportEditClientComponent } from './moyen-transport-client/edit-client/moyen-transport-edit-client.component';
import { MoyenTransportViewClientComponent } from './moyen-transport-client/view-client/moyen-transport-view-client.component';
import { MoyenTransportListClientComponent } from './moyen-transport-client/list-client/moyen-transport-list-client.component';
import { LangueCreateClientComponent } from './langue-client/create-client/langue-create-client.component';
import { LangueEditClientComponent } from './langue-client/edit-client/langue-edit-client.component';
import { LangueViewClientComponent } from './langue-client/view-client/langue-view-client.component';
import { LangueListClientComponent } from './langue-client/list-client/langue-list-client.component';
import { BlackListChauffeurCreateClientComponent } from './black-list-chauffeur-client/create-client/black-list-chauffeur-create-client.component';
import { BlackListChauffeurEditClientComponent } from './black-list-chauffeur-client/edit-client/black-list-chauffeur-edit-client.component';
import { BlackListChauffeurViewClientComponent } from './black-list-chauffeur-client/view-client/black-list-chauffeur-view-client.component';
import { BlackListChauffeurListClientComponent } from './black-list-chauffeur-client/list-client/black-list-chauffeur-list-client.component';
import { ClientCreateClientComponent } from './client-client/create-client/client-create-client.component';
import { ClientEditClientComponent } from './client-client/edit-client/client-edit-client.component';
import { ClientViewClientComponent } from './client-client/view-client/client-view-client.component';
import { ClientListClientComponent } from './client-client/list-client/client-list-client.component';
import { MarqueTelephoneCreateClientComponent } from './marque-telephone-client/create-client/marque-telephone-create-client.component';
import { MarqueTelephoneEditClientComponent } from './marque-telephone-client/edit-client/marque-telephone-edit-client.component';
import { MarqueTelephoneViewClientComponent } from './marque-telephone-client/view-client/marque-telephone-view-client.component';
import { MarqueTelephoneListClientComponent } from './marque-telephone-client/list-client/marque-telephone-list-client.component';
import { SecteurCreateClientComponent } from './secteur-client/create-client/secteur-create-client.component';
import { SecteurEditClientComponent } from './secteur-client/edit-client/secteur-edit-client.component';
import { SecteurViewClientComponent } from './secteur-client/view-client/secteur-view-client.component';
import { SecteurListClientComponent } from './secteur-client/list-client/secteur-list-client.component';
import { ModelApplicationCreateClientComponent } from './model-application-client/create-client/model-application-create-client.component';
import { ModelApplicationEditClientComponent } from './model-application-client/edit-client/model-application-edit-client.component';
import { ModelApplicationViewClientComponent } from './model-application-client/view-client/model-application-view-client.component';
import { ModelApplicationListClientComponent } from './model-application-client/list-client/model-application-list-client.component';
import { OperateurCreateClientComponent } from './operateur-client/create-client/operateur-create-client.component';
import { OperateurEditClientComponent } from './operateur-client/edit-client/operateur-edit-client.component';
import { OperateurViewClientComponent } from './operateur-client/view-client/operateur-view-client.component';
import { OperateurListClientComponent } from './operateur-client/list-client/operateur-list-client.component';
import { CourseCreateClientComponent } from './course-client/create-client/course-create-client.component';
import { CourseEditClientComponent } from './course-client/edit-client/course-edit-client.component';
import { CourseViewClientComponent } from './course-client/view-client/course-view-client.component';
import { CourseListClientComponent } from './course-client/list-client/course-list-client.component';
import { ThemeCreateClientComponent } from './theme-client/create-client/theme-create-client.component';
import { ThemeEditClientComponent } from './theme-client/edit-client/theme-edit-client.component';
import { ThemeViewClientComponent } from './theme-client/view-client/theme-view-client.component';
import { ThemeListClientComponent } from './theme-client/list-client/theme-list-client.component';
import { EtatChauffeurCreateClientComponent } from './etat-chauffeur-client/create-client/etat-chauffeur-create-client.component';
import { EtatChauffeurEditClientComponent } from './etat-chauffeur-client/edit-client/etat-chauffeur-edit-client.component';
import { EtatChauffeurViewClientComponent } from './etat-chauffeur-client/view-client/etat-chauffeur-view-client.component';
import { EtatChauffeurListClientComponent } from './etat-chauffeur-client/list-client/etat-chauffeur-list-client.component';
import { BlackListClientCreateClientComponent } from './black-list-client-client/create-client/black-list-client-create-client.component';
import { BlackListClientEditClientComponent } from './black-list-client-client/edit-client/black-list-client-edit-client.component';
import { BlackListClientViewClientComponent } from './black-list-client-client/view-client/black-list-client-view-client.component';
import { BlackListClientListClientComponent } from './black-list-client-client/list-client/black-list-client-list-client.component';
import { EtatCourseCreateClientComponent } from './etat-course-client/create-client/etat-course-create-client.component';
import { EtatCourseEditClientComponent } from './etat-course-client/edit-client/etat-course-edit-client.component';
import { EtatCourseViewClientComponent } from './etat-course-client/view-client/etat-course-view-client.component';
import { EtatCourseListClientComponent } from './etat-course-client/list-client/etat-course-list-client.component';
import { MarqueVoitureCreateClientComponent } from './marque-voiture-client/create-client/marque-voiture-create-client.component';
import { MarqueVoitureEditClientComponent } from './marque-voiture-client/edit-client/marque-voiture-edit-client.component';
import { MarqueVoitureViewClientComponent } from './marque-voiture-client/view-client/marque-voiture-view-client.component';
import { MarqueVoitureListClientComponent } from './marque-voiture-client/list-client/marque-voiture-list-client.component';

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

    VilleCreateClientComponent,
    VilleListClientComponent,
    VilleViewClientComponent,
    VilleEditClientComponent,
    ChauffeurCreateClientComponent,
    ChauffeurListClientComponent,
    ChauffeurViewClientComponent,
    ChauffeurEditClientComponent,
    MoyenTransportCreateClientComponent,
    MoyenTransportListClientComponent,
    MoyenTransportViewClientComponent,
    MoyenTransportEditClientComponent,
    LangueCreateClientComponent,
    LangueListClientComponent,
    LangueViewClientComponent,
    LangueEditClientComponent,
    BlackListChauffeurCreateClientComponent,
    BlackListChauffeurListClientComponent,
    BlackListChauffeurViewClientComponent,
    BlackListChauffeurEditClientComponent,
    ClientCreateClientComponent,
    ClientListClientComponent,
    ClientViewClientComponent,
    ClientEditClientComponent,
    MarqueTelephoneCreateClientComponent,
    MarqueTelephoneListClientComponent,
    MarqueTelephoneViewClientComponent,
    MarqueTelephoneEditClientComponent,
    SecteurCreateClientComponent,
    SecteurListClientComponent,
    SecteurViewClientComponent,
    SecteurEditClientComponent,
    ModelApplicationCreateClientComponent,
    ModelApplicationListClientComponent,
    ModelApplicationViewClientComponent,
    ModelApplicationEditClientComponent,
    OperateurCreateClientComponent,
    OperateurListClientComponent,
    OperateurViewClientComponent,
    OperateurEditClientComponent,
    CourseCreateClientComponent,
    CourseListClientComponent,
    CourseViewClientComponent,
    CourseEditClientComponent,
    ThemeCreateClientComponent,
    ThemeListClientComponent,
    ThemeViewClientComponent,
    ThemeEditClientComponent,
    EtatChauffeurCreateClientComponent,
    EtatChauffeurListClientComponent,
    EtatChauffeurViewClientComponent,
    EtatChauffeurEditClientComponent,
    BlackListClientCreateClientComponent,
    BlackListClientListClientComponent,
    BlackListClientViewClientComponent,
    BlackListClientEditClientComponent,
    EtatCourseCreateClientComponent,
    EtatCourseListClientComponent,
    EtatCourseViewClientComponent,
    EtatCourseEditClientComponent,
    MarqueVoitureCreateClientComponent,
    MarqueVoitureListClientComponent,
    MarqueVoitureViewClientComponent,
    MarqueVoitureEditClientComponent,
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
  VilleCreateClientComponent,
  VilleListClientComponent,
  VilleViewClientComponent,
  VilleEditClientComponent,
  ChauffeurCreateClientComponent,
  ChauffeurListClientComponent,
  ChauffeurViewClientComponent,
  ChauffeurEditClientComponent,
  MoyenTransportCreateClientComponent,
  MoyenTransportListClientComponent,
  MoyenTransportViewClientComponent,
  MoyenTransportEditClientComponent,
  LangueCreateClientComponent,
  LangueListClientComponent,
  LangueViewClientComponent,
  LangueEditClientComponent,
  BlackListChauffeurCreateClientComponent,
  BlackListChauffeurListClientComponent,
  BlackListChauffeurViewClientComponent,
  BlackListChauffeurEditClientComponent,
  ClientCreateClientComponent,
  ClientListClientComponent,
  ClientViewClientComponent,
  ClientEditClientComponent,
  MarqueTelephoneCreateClientComponent,
  MarqueTelephoneListClientComponent,
  MarqueTelephoneViewClientComponent,
  MarqueTelephoneEditClientComponent,
  SecteurCreateClientComponent,
  SecteurListClientComponent,
  SecteurViewClientComponent,
  SecteurEditClientComponent,
  ModelApplicationCreateClientComponent,
  ModelApplicationListClientComponent,
  ModelApplicationViewClientComponent,
  ModelApplicationEditClientComponent,
  OperateurCreateClientComponent,
  OperateurListClientComponent,
  OperateurViewClientComponent,
  OperateurEditClientComponent,
  CourseCreateClientComponent,
  CourseListClientComponent,
  CourseViewClientComponent,
  CourseEditClientComponent,
  ThemeCreateClientComponent,
  ThemeListClientComponent,
  ThemeViewClientComponent,
  ThemeEditClientComponent,
  EtatChauffeurCreateClientComponent,
  EtatChauffeurListClientComponent,
  EtatChauffeurViewClientComponent,
  EtatChauffeurEditClientComponent,
  BlackListClientCreateClientComponent,
  BlackListClientListClientComponent,
  BlackListClientViewClientComponent,
  BlackListClientEditClientComponent,
  EtatCourseCreateClientComponent,
  EtatCourseListClientComponent,
  EtatCourseViewClientComponent,
  EtatCourseEditClientComponent,
  MarqueVoitureCreateClientComponent,
  MarqueVoitureListClientComponent,
  MarqueVoitureViewClientComponent,
  MarqueVoitureEditClientComponent,
  ],
  entryComponents: [],
})
export class CourseClientModule { }


// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { VilleListOperateurComponent } from './ville-operateur/list-admin/ville-list-operateur.component';
    import { ChauffeurListOperateurComponent } from './chauffeur-operateur/list-admin/chauffeur-list-operateur.component';
    import { MoyenTransportListOperateurComponent } from './moyen-transport-operateur/list-admin/moyen-transport-list-operateur.component';
    import { LangueListOperateurComponent } from './langue-operateur/list-admin/langue-list-operateur.component';
    import { BlackListChauffeurListOperateurComponent } from './black-list-chauffeur-operateur/list-admin/black-list-chauffeur-list-operateur.component';
    import { ClientListOperateurComponent } from './client-operateur/list-admin/client-list-operateur.component';
    import { MarqueTelephoneListOperateurComponent } from './marque-telephone-operateur/list-admin/marque-telephone-list-operateur.component';
    import { SecteurListOperateurComponent } from './secteur-operateur/list-admin/secteur-list-operateur.component';
    import { ModelApplicationListOperateurComponent } from './model-application-operateur/list-admin/model-application-list-operateur.component';
    import { OperateurListOperateurComponent } from './operateur-operateur/list-admin/operateur-list-operateur.component';
    import { CourseListOperateurComponent } from './course-operateur/list-admin/course-list-operateur.component';
    import { ThemeListOperateurComponent } from './theme-operateur/list-admin/theme-list-operateur.component';
    import { EtatChauffeurListOperateurComponent } from './etat-chauffeur-operateur/list-admin/etat-chauffeur-list-operateur.component';
    import { BlackListClientListOperateurComponent } from './black-list-client-operateur/list-admin/black-list-client-list-operateur.component';
    import { EtatCourseListOperateurComponent } from './etat-course-operateur/list-admin/etat-course-list-operateur.component';
    import { MarqueVoitureListOperateurComponent } from './marque-voiture-operateur/list-admin/marque-voiture-list-operateur.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'ville',
                            children: [
                                {
                                    path: 'list',
                                    component: VilleListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChauffeurListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'moyen-transport',
                            children: [
                                {
                                    path: 'list',
                                    component: MoyenTransportListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListChauffeurListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-telephone',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueTelephoneListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'secteur',
                            children: [
                                {
                                    path: 'list',
                                    component: SecteurListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-application',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelApplicationListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'course',
                            children: [
                                {
                                    path: 'list',
                                    component: CourseListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'theme',
                            children: [
                                {
                                    path: 'list',
                                    component: ThemeListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatChauffeurListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-client',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListClientListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-course',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCourseListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-voiture',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueVoitureListOperateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CourseOperateurRoutingModule { }


// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { VilleListChauffeurComponent } from './ville-chauffeur/list-admin/ville-list-chauffeur.component';
    import { ChauffeurListChauffeurComponent } from './chauffeur-chauffeur/list-admin/chauffeur-list-chauffeur.component';
    import { MoyenTransportListChauffeurComponent } from './moyen-transport-chauffeur/list-admin/moyen-transport-list-chauffeur.component';
    import { LangueListChauffeurComponent } from './langue-chauffeur/list-admin/langue-list-chauffeur.component';
    import { BlackListChauffeurListChauffeurComponent } from './black-list-chauffeur-chauffeur/list-admin/black-list-chauffeur-list-chauffeur.component';
    import { ClientListChauffeurComponent } from './client-chauffeur/list-admin/client-list-chauffeur.component';
    import { MarqueTelephoneListChauffeurComponent } from './marque-telephone-chauffeur/list-admin/marque-telephone-list-chauffeur.component';
    import { SecteurListChauffeurComponent } from './secteur-chauffeur/list-admin/secteur-list-chauffeur.component';
    import { ModelApplicationListChauffeurComponent } from './model-application-chauffeur/list-admin/model-application-list-chauffeur.component';
    import { OperateurListChauffeurComponent } from './operateur-chauffeur/list-admin/operateur-list-chauffeur.component';
    import { CourseListChauffeurComponent } from './course-chauffeur/list-admin/course-list-chauffeur.component';
    import { ThemeListChauffeurComponent } from './theme-chauffeur/list-admin/theme-list-chauffeur.component';
    import { EtatChauffeurListChauffeurComponent } from './etat-chauffeur-chauffeur/list-admin/etat-chauffeur-list-chauffeur.component';
    import { BlackListClientListChauffeurComponent } from './black-list-client-chauffeur/list-admin/black-list-client-list-chauffeur.component';
    import { EtatCourseListChauffeurComponent } from './etat-course-chauffeur/list-admin/etat-course-list-chauffeur.component';
    import { MarqueVoitureListChauffeurComponent } from './marque-voiture-chauffeur/list-admin/marque-voiture-list-chauffeur.component';
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
                                    component: VilleListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChauffeurListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'moyen-transport',
                            children: [
                                {
                                    path: 'list',
                                    component: MoyenTransportListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListChauffeurListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-telephone',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueTelephoneListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'secteur',
                            children: [
                                {
                                    path: 'list',
                                    component: SecteurListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-application',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelApplicationListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'course',
                            children: [
                                {
                                    path: 'list',
                                    component: CourseListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'theme',
                            children: [
                                {
                                    path: 'list',
                                    component: ThemeListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatChauffeurListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-client',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListClientListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-course',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCourseListChauffeurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-voiture',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueVoitureListChauffeurComponent ,
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
export class CourseChauffeurRoutingModule { }

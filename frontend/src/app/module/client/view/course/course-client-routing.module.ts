
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { VilleListClientComponent } from './ville-client/list-admin/ville-list-client.component';
    import { ChauffeurListClientComponent } from './chauffeur-client/list-admin/chauffeur-list-client.component';
    import { MoyenTransportListClientComponent } from './moyen-transport-client/list-admin/moyen-transport-list-client.component';
    import { LangueListClientComponent } from './langue-client/list-admin/langue-list-client.component';
    import { BlackListChauffeurListClientComponent } from './black-list-chauffeur-client/list-admin/black-list-chauffeur-list-client.component';
    import { ClientListClientComponent } from './client-client/list-admin/client-list-client.component';
    import { MarqueTelephoneListClientComponent } from './marque-telephone-client/list-admin/marque-telephone-list-client.component';
    import { SecteurListClientComponent } from './secteur-client/list-admin/secteur-list-client.component';
    import { ModelApplicationListClientComponent } from './model-application-client/list-admin/model-application-list-client.component';
    import { OperateurListClientComponent } from './operateur-client/list-admin/operateur-list-client.component';
    import { CourseListClientComponent } from './course-client/list-admin/course-list-client.component';
    import { ThemeListClientComponent } from './theme-client/list-admin/theme-list-client.component';
    import { EtatChauffeurListClientComponent } from './etat-chauffeur-client/list-admin/etat-chauffeur-list-client.component';
    import { BlackListClientListClientComponent } from './black-list-client-client/list-admin/black-list-client-list-client.component';
    import { EtatCourseListClientComponent } from './etat-course-client/list-admin/etat-course-list-client.component';
    import { MarqueVoitureListClientComponent } from './marque-voiture-client/list-admin/marque-voiture-list-client.component';
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
                                    component: VilleListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChauffeurListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'moyen-transport',
                            children: [
                                {
                                    path: 'list',
                                    component: MoyenTransportListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListChauffeurListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-telephone',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueTelephoneListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'secteur',
                            children: [
                                {
                                    path: 'list',
                                    component: SecteurListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-application',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelApplicationListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'course',
                            children: [
                                {
                                    path: 'list',
                                    component: CourseListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'theme',
                            children: [
                                {
                                    path: 'list',
                                    component: ThemeListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatChauffeurListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-client',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListClientListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-course',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCourseListClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-voiture',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueVoitureListClientComponent ,
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
export class CourseClientRoutingModule { }

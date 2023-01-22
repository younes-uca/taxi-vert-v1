
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { VilleListAdminComponent } from './ville-admin/list-admin/ville-list-admin.component';
    import { ChauffeurListAdminComponent } from './chauffeur-admin/list-admin/chauffeur-list-admin.component';
    import { MoyenTransportListAdminComponent } from './moyen-transport-admin/list-admin/moyen-transport-list-admin.component';
    import { LangueListAdminComponent } from './langue-admin/list-admin/langue-list-admin.component';
    import { BlackListChauffeurListAdminComponent } from './black-list-chauffeur-admin/list-admin/black-list-chauffeur-list-admin.component';
    import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
    import { MarqueTelephoneListAdminComponent } from './marque-telephone-admin/list-admin/marque-telephone-list-admin.component';
    import { SecteurListAdminComponent } from './secteur-admin/list-admin/secteur-list-admin.component';
    import { ModelApplicationListAdminComponent } from './model-application-admin/list-admin/model-application-list-admin.component';
    import { OperateurListAdminComponent } from './operateur-admin/list-admin/operateur-list-admin.component';
    import { CourseListAdminComponent } from './course-admin/list-admin/course-list-admin.component';
    import { ThemeListAdminComponent } from './theme-admin/list-admin/theme-list-admin.component';
    import { EtatChauffeurListAdminComponent } from './etat-chauffeur-admin/list-admin/etat-chauffeur-list-admin.component';
    import { BlackListClientListAdminComponent } from './black-list-client-admin/list-admin/black-list-client-list-admin.component';
    import { EtatCourseListAdminComponent } from './etat-course-admin/list-admin/etat-course-list-admin.component';
    import { MarqueVoitureListAdminComponent } from './marque-voiture-admin/list-admin/marque-voiture-list-admin.component';
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
                                    component: VilleListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChauffeurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'moyen-transport',
                            children: [
                                {
                                    path: 'list',
                                    component: MoyenTransportListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'langue',
                            children: [
                                {
                                    path: 'list',
                                    component: LangueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListChauffeurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-telephone',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueTelephoneListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'secteur',
                            children: [
                                {
                                    path: 'list',
                                    component: SecteurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-application',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelApplicationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'course',
                            children: [
                                {
                                    path: 'list',
                                    component: CourseListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'theme',
                            children: [
                                {
                                    path: 'list',
                                    component: ThemeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-chauffeur',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatChauffeurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'black-list-client',
                            children: [
                                {
                                    path: 'list',
                                    component: BlackListClientListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-course',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCourseListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque-voiture',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueVoitureListAdminComponent ,
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
export class CourseAdminRoutingModule { }

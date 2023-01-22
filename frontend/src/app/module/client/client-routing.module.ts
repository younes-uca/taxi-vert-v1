
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginClientComponent } from './login-client/login-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterClientComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'course',
                            loadChildren: './view/course/course-client-routing.module#CourseClientRoutingModule',
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ClientRoutingModule { }

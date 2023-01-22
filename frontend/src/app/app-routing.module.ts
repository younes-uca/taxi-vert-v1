import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './controller/guards/auth.guard';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { HomeComponent } from './demo/view/home/home.component';
import {LoginAdminComponent} from './module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from './module/admin/register-admin/register-admin.component';
import {LoginChauffeurComponent} from './module/chauffeur/login-chauffeur/login-chauffeur.component';
import {RegisterChauffeurComponent} from './module/chauffeur/register-chauffeur/register-chauffeur.component';
import {LoginOperateurComponent} from './module/operateur/login-operateur/login-operateur.component';
import {RegisterOperateurComponent} from './module/operateur/register-operateur/register-operateur.component';
import {LoginClientComponent} from './module/client/login-client/login-client.component';
import {RegisterClientComponent} from './module/client/register-client/register-client.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
          { path: '', component: HomeComponent },
        {path: 'admin/login', component: LoginAdminComponent },
        {path: 'admin/register', component: RegisterAdminComponent },
        {path: 'chauffeur/login', component: LoginChauffeurComponent },
        {path: 'chauffeur/register', component: RegisterChauffeurComponent },
        {path: 'operateur/login', component: LoginOperateurComponent },
        {path: 'operateur/register', component: RegisterOperateurComponent },
        {path: 'client/login', component: LoginClientComponent },
        {path: 'client/register', component: RegisterClientComponent },
         {
          path: 'app', // '\'' + root + '\'',
          component: AppMainComponent,
          children: [
            {
              path: 'admin',
              loadChildren: './module/admin/admin-routing.module#AdminRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'chauffeur',
              loadChildren: './module/chauffeur/chauffeur-routing.module#ChauffeurRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'operateur',
              loadChildren: './module/operateur/operateur-routing.module#OperateurRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'client',
              loadChildren: './module/client/client-routing.module#ClientRoutingModule',
              canActivate: [AuthGuard],
            },
            { path: 'denied', component: AccessDeniedComponent },
          ],
          canActivate: [AuthGuard]
        },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

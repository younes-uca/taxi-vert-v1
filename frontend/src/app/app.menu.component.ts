import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './controller/service/Auth.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { RoleService } from './controller/service/role.service';
@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  modelchauffeur : any[];
  modeloperateur : any[];
  modelclient : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Client Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/client/list']
                    },
                    {
                      label: 'Liste black list client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/black-list-client/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/ville/list']
                    },
                    {
                      label: 'Liste moyen transport',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/moyen-transport/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/langue/list']
                    },
                    {
                      label: 'Liste marque telephone',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/marque-telephone/list']
                    },
                    {
                      label: 'Liste secteur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/secteur/list']
                    },
                    {
                      label: 'Liste model application',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/model-application/list']
                    },
                    {
                      label: 'Liste operateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/operateur/list']
                    },
                    {
                      label: 'Liste theme',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/theme/list']
                    },
                    {
                      label: 'Liste etat chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/etat-chauffeur/list']
                    },
                    {
                      label: 'Liste etat course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/etat-course/list']
                    },
                    {
                      label: 'Liste marque voiture',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/marque-voiture/list']
                    },
                ]
              },
              {
                label: 'Chauffeur Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/chauffeur/list']
                    },
                    {
                      label: 'Liste black list chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/black-list-chauffeur/list']
                    },
                ]
              },
              {
                label: 'Gestion Course',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/course/course/list']
                    },
                ]
              },
    ]
    this.modelchauffeur =
      [
              {
                label: 'Client Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/client/list']
                    },
                    {
                      label: 'Liste black list client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/black-list-client/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/ville/list']
                    },
                    {
                      label: 'Liste moyen transport',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/moyen-transport/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/langue/list']
                    },
                    {
                      label: 'Liste marque telephone',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/marque-telephone/list']
                    },
                    {
                      label: 'Liste secteur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/secteur/list']
                    },
                    {
                      label: 'Liste model application',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/model-application/list']
                    },
                    {
                      label: 'Liste operateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/operateur/list']
                    },
                    {
                      label: 'Liste theme',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/theme/list']
                    },
                    {
                      label: 'Liste etat chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/etat-chauffeur/list']
                    },
                    {
                      label: 'Liste etat course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/etat-course/list']
                    },
                    {
                      label: 'Liste marque voiture',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/marque-voiture/list']
                    },
                ]
              },
              {
                label: 'Chauffeur Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/chauffeur/list']
                    },
                    {
                      label: 'Liste black list chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/black-list-chauffeur/list']
                    },
                ]
              },
              {
                label: 'Gestion Course',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chauffeur/course/course/list']
                    },
                ]
              },
    ]
    this.modeloperateur =
      [
              {
                label: 'Client Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/client/list']
                    },
                    {
                      label: 'Liste black list client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/black-list-client/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/ville/list']
                    },
                    {
                      label: 'Liste moyen transport',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/moyen-transport/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/langue/list']
                    },
                    {
                      label: 'Liste marque telephone',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/marque-telephone/list']
                    },
                    {
                      label: 'Liste secteur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/secteur/list']
                    },
                    {
                      label: 'Liste model application',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/model-application/list']
                    },
                    {
                      label: 'Liste operateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/operateur/list']
                    },
                    {
                      label: 'Liste theme',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/theme/list']
                    },
                    {
                      label: 'Liste etat chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/etat-chauffeur/list']
                    },
                    {
                      label: 'Liste etat course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/etat-course/list']
                    },
                    {
                      label: 'Liste marque voiture',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/marque-voiture/list']
                    },
                ]
              },
              {
                label: 'Chauffeur Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/chauffeur/list']
                    },
                    {
                      label: 'Liste black list chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/black-list-chauffeur/list']
                    },
                ]
              },
              {
                label: 'Gestion Course',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/operateur/course/course/list']
                    },
                ]
              },
    ]
    this.modelclient =
      [
              {
                label: 'Client Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/client/list']
                    },
                    {
                      label: 'Liste black list client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/black-list-client/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/ville/list']
                    },
                    {
                      label: 'Liste moyen transport',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/moyen-transport/list']
                    },
                    {
                      label: 'Liste langue',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/langue/list']
                    },
                    {
                      label: 'Liste marque telephone',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/marque-telephone/list']
                    },
                    {
                      label: 'Liste secteur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/secteur/list']
                    },
                    {
                      label: 'Liste model application',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/model-application/list']
                    },
                    {
                      label: 'Liste operateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/operateur/list']
                    },
                    {
                      label: 'Liste theme',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/theme/list']
                    },
                    {
                      label: 'Liste etat chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/etat-chauffeur/list']
                    },
                    {
                      label: 'Liste etat course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/etat-course/list']
                    },
                    {
                      label: 'Liste marque voiture',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/marque-voiture/list']
                    },
                ]
              },
              {
                label: 'Chauffeur Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/chauffeur/list']
                    },
                    {
                      label: 'Liste black list chauffeur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/black-list-chauffeur/list']
                    },
                ]
              },
              {
                label: 'Gestion Course',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste course',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/client/course/course/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}

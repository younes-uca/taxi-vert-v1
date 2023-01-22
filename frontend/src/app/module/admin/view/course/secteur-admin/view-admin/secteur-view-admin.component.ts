import {Component, OnInit} from '@angular/core';
import {SecteurService} from 'src/app/controller/service/Secteur.service';
import {SecteurVo} from 'src/app/controller/model/Secteur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {VilleVo} from 'src/app/controller/model/Ville.model';
import {VilleService} from 'src/app/controller/service/Ville.service';

@Component({
  selector: 'app-secteur-view-admin',
  templateUrl: './secteur-view-admin.component.html',
  styleUrls: ['./secteur-view-admin.component.css']
})
export class SecteurViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private secteurService: SecteurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private villeService: VilleService
) {
}

// methods
ngOnInit(): void {
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
}

hideViewDialog(){
    this.viewSecteurDialog  = false;
}

// getters and setters

get secteurs(): Array<SecteurVo> {
    return this.secteurService.secteurs;
       }
set secteurs(value: Array<SecteurVo>) {
        this.secteurService.secteurs = value;
       }

 get selectedSecteur(): SecteurVo {
           return this.secteurService.selectedSecteur;
       }
    set selectedSecteur(value: SecteurVo) {
        this.secteurService.selectedSecteur = value;
       }

   get viewSecteurDialog(): boolean {
           return this.secteurService.viewSecteurDialog;

       }
    set viewSecteurDialog(value: boolean) {
        this.secteurService.viewSecteurDialog= value;
       }

       get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
      set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
       get villes():Array<VilleVo> {
           return this.villeService.villes;
       }
       set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }
       get editVilleDialog(): boolean {
           return this.villeService.editVilleDialog;
       }
      set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

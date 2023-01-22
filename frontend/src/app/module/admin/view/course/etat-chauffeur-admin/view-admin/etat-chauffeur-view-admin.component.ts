import {Component, OnInit} from '@angular/core';
import {EtatChauffeurService} from 'src/app/controller/service/EtatChauffeur.service';
import {EtatChauffeurVo} from 'src/app/controller/model/EtatChauffeur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-etat-chauffeur-view-admin',
  templateUrl: './etat-chauffeur-view-admin.component.html',
  styleUrls: ['./etat-chauffeur-view-admin.component.css']
})
export class EtatChauffeurViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private etatChauffeurService: EtatChauffeurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewEtatChauffeurDialog  = false;
}

// getters and setters

get etatChauffeurs(): Array<EtatChauffeurVo> {
    return this.etatChauffeurService.etatChauffeurs;
       }
set etatChauffeurs(value: Array<EtatChauffeurVo>) {
        this.etatChauffeurService.etatChauffeurs = value;
       }

 get selectedEtatChauffeur(): EtatChauffeurVo {
           return this.etatChauffeurService.selectedEtatChauffeur;
       }
    set selectedEtatChauffeur(value: EtatChauffeurVo) {
        this.etatChauffeurService.selectedEtatChauffeur = value;
       }

   get viewEtatChauffeurDialog(): boolean {
           return this.etatChauffeurService.viewEtatChauffeurDialog;

       }
    set viewEtatChauffeurDialog(value: boolean) {
        this.etatChauffeurService.viewEtatChauffeurDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

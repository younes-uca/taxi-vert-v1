import {Component, OnInit} from '@angular/core';
import {BlackListChauffeurService} from 'src/app/controller/service/BlackListChauffeur.service';
import {BlackListChauffeurVo} from 'src/app/controller/model/BlackListChauffeur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-black-list-chauffeur-view-client',
  templateUrl: './black-list-chauffeur-view-client.component.html',
  styleUrls: ['./black-list-chauffeur-view-client.component.css']
})
export class BlackListChauffeurViewClientComponent implements OnInit {


constructor(private datePipe: DatePipe, private blackListChauffeurService: BlackListChauffeurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewBlackListChauffeurDialog  = false;
}

// getters and setters

get blackListChauffeurs(): Array<BlackListChauffeurVo> {
    return this.blackListChauffeurService.blackListChauffeurs;
       }
set blackListChauffeurs(value: Array<BlackListChauffeurVo>) {
        this.blackListChauffeurService.blackListChauffeurs = value;
       }

 get selectedBlackListChauffeur(): BlackListChauffeurVo {
           return this.blackListChauffeurService.selectedBlackListChauffeur;
       }
    set selectedBlackListChauffeur(value: BlackListChauffeurVo) {
        this.blackListChauffeurService.selectedBlackListChauffeur = value;
       }

   get viewBlackListChauffeurDialog(): boolean {
           return this.blackListChauffeurService.viewBlackListChauffeurDialog;

       }
    set viewBlackListChauffeurDialog(value: boolean) {
        this.blackListChauffeurService.viewBlackListChauffeurDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

import {Component, OnInit} from '@angular/core';
import {MoyenTransportService} from 'src/app/controller/service/MoyenTransport.service';
import {MoyenTransportVo} from 'src/app/controller/model/MoyenTransport.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-moyen-transport-view-chauffeur',
  templateUrl: './moyen-transport-view-chauffeur.component.html',
  styleUrls: ['./moyen-transport-view-chauffeur.component.css']
})
export class MoyenTransportViewChauffeurComponent implements OnInit {


constructor(private datePipe: DatePipe, private moyenTransportService: MoyenTransportService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewMoyenTransportDialog  = false;
}

// getters and setters

get moyenTransports(): Array<MoyenTransportVo> {
    return this.moyenTransportService.moyenTransports;
       }
set moyenTransports(value: Array<MoyenTransportVo>) {
        this.moyenTransportService.moyenTransports = value;
       }

 get selectedMoyenTransport(): MoyenTransportVo {
           return this.moyenTransportService.selectedMoyenTransport;
       }
    set selectedMoyenTransport(value: MoyenTransportVo) {
        this.moyenTransportService.selectedMoyenTransport = value;
       }

   get viewMoyenTransportDialog(): boolean {
           return this.moyenTransportService.viewMoyenTransportDialog;

       }
    set viewMoyenTransportDialog(value: boolean) {
        this.moyenTransportService.viewMoyenTransportDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

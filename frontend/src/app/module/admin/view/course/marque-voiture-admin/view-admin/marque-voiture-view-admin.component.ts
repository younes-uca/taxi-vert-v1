import {Component, OnInit} from '@angular/core';
import {MarqueVoitureService} from 'src/app/controller/service/MarqueVoiture.service';
import {MarqueVoitureVo} from 'src/app/controller/model/MarqueVoiture.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-marque-voiture-view-admin',
  templateUrl: './marque-voiture-view-admin.component.html',
  styleUrls: ['./marque-voiture-view-admin.component.css']
})
export class MarqueVoitureViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private marqueVoitureService: MarqueVoitureService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewMarqueVoitureDialog  = false;
}

// getters and setters

get marqueVoitures(): Array<MarqueVoitureVo> {
    return this.marqueVoitureService.marqueVoitures;
       }
set marqueVoitures(value: Array<MarqueVoitureVo>) {
        this.marqueVoitureService.marqueVoitures = value;
       }

 get selectedMarqueVoiture(): MarqueVoitureVo {
           return this.marqueVoitureService.selectedMarqueVoiture;
       }
    set selectedMarqueVoiture(value: MarqueVoitureVo) {
        this.marqueVoitureService.selectedMarqueVoiture = value;
       }

   get viewMarqueVoitureDialog(): boolean {
           return this.marqueVoitureService.viewMarqueVoitureDialog;

       }
    set viewMarqueVoitureDialog(value: boolean) {
        this.marqueVoitureService.viewMarqueVoitureDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

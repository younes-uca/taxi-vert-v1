import {Component, OnInit} from '@angular/core';
import {MarqueTelephoneService} from 'src/app/controller/service/MarqueTelephone.service';
import {MarqueTelephoneVo} from 'src/app/controller/model/MarqueTelephone.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-marque-telephone-view-client',
  templateUrl: './marque-telephone-view-client.component.html',
  styleUrls: ['./marque-telephone-view-client.component.css']
})
export class MarqueTelephoneViewClientComponent implements OnInit {


constructor(private datePipe: DatePipe, private marqueTelephoneService: MarqueTelephoneService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewMarqueTelephoneDialog  = false;
}

// getters and setters

get marqueTelephones(): Array<MarqueTelephoneVo> {
    return this.marqueTelephoneService.marqueTelephones;
       }
set marqueTelephones(value: Array<MarqueTelephoneVo>) {
        this.marqueTelephoneService.marqueTelephones = value;
       }

 get selectedMarqueTelephone(): MarqueTelephoneVo {
           return this.marqueTelephoneService.selectedMarqueTelephone;
       }
    set selectedMarqueTelephone(value: MarqueTelephoneVo) {
        this.marqueTelephoneService.selectedMarqueTelephone = value;
       }

   get viewMarqueTelephoneDialog(): boolean {
           return this.marqueTelephoneService.viewMarqueTelephoneDialog;

       }
    set viewMarqueTelephoneDialog(value: boolean) {
        this.marqueTelephoneService.viewMarqueTelephoneDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

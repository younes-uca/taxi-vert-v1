import {Component, OnInit} from '@angular/core';
import {BlackListClientService} from 'src/app/controller/service/BlackListClient.service';
import {BlackListClientVo} from 'src/app/controller/model/BlackListClient.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-black-list-client-view-admin',
  templateUrl: './black-list-client-view-admin.component.html',
  styleUrls: ['./black-list-client-view-admin.component.css']
})
export class BlackListClientViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private blackListClientService: BlackListClientService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewBlackListClientDialog  = false;
}

// getters and setters

get blackListClients(): Array<BlackListClientVo> {
    return this.blackListClientService.blackListClients;
       }
set blackListClients(value: Array<BlackListClientVo>) {
        this.blackListClientService.blackListClients = value;
       }

 get selectedBlackListClient(): BlackListClientVo {
           return this.blackListClientService.selectedBlackListClient;
       }
    set selectedBlackListClient(value: BlackListClientVo) {
        this.blackListClientService.selectedBlackListClient = value;
       }

   get viewBlackListClientDialog(): boolean {
           return this.blackListClientService.viewBlackListClientDialog;

       }
    set viewBlackListClientDialog(value: boolean) {
        this.blackListClientService.viewBlackListClientDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

import {Component, OnInit} from '@angular/core';
import {ModelApplicationService} from 'src/app/controller/service/ModelApplication.service';
import {ModelApplicationVo} from 'src/app/controller/model/ModelApplication.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-model-application-view-operateur',
  templateUrl: './model-application-view-operateur.component.html',
  styleUrls: ['./model-application-view-operateur.component.css']
})
export class ModelApplicationViewOperateurComponent implements OnInit {


constructor(private datePipe: DatePipe, private modelApplicationService: ModelApplicationService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewModelApplicationDialog  = false;
}

// getters and setters

get modelApplications(): Array<ModelApplicationVo> {
    return this.modelApplicationService.modelApplications;
       }
set modelApplications(value: Array<ModelApplicationVo>) {
        this.modelApplicationService.modelApplications = value;
       }

 get selectedModelApplication(): ModelApplicationVo {
           return this.modelApplicationService.selectedModelApplication;
       }
    set selectedModelApplication(value: ModelApplicationVo) {
        this.modelApplicationService.selectedModelApplication = value;
       }

   get viewModelApplicationDialog(): boolean {
           return this.modelApplicationService.viewModelApplicationDialog;

       }
    set viewModelApplicationDialog(value: boolean) {
        this.modelApplicationService.viewModelApplicationDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

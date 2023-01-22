import {Component, OnInit} from '@angular/core';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {OperateurVo} from 'src/app/controller/model/Operateur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-operateur-view-operateur',
  templateUrl: './operateur-view-operateur.component.html',
  styleUrls: ['./operateur-view-operateur.component.css']
})
export class OperateurViewOperateurComponent implements OnInit {


constructor(private datePipe: DatePipe, private operateurService: OperateurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewOperateurDialog  = false;
}

// getters and setters

get operateurs(): Array<OperateurVo> {
    return this.operateurService.operateurs;
       }
set operateurs(value: Array<OperateurVo>) {
        this.operateurService.operateurs = value;
       }

 get selectedOperateur(): OperateurVo {
           return this.operateurService.selectedOperateur;
       }
    set selectedOperateur(value: OperateurVo) {
        this.operateurService.selectedOperateur = value;
       }

   get viewOperateurDialog(): boolean {
           return this.operateurService.viewOperateurDialog;

       }
    set viewOperateurDialog(value: boolean) {
        this.operateurService.viewOperateurDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

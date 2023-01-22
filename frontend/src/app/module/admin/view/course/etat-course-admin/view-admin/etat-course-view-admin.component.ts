import {Component, OnInit} from '@angular/core';
import {EtatCourseService} from 'src/app/controller/service/EtatCourse.service';
import {EtatCourseVo} from 'src/app/controller/model/EtatCourse.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-etat-course-view-admin',
  templateUrl: './etat-course-view-admin.component.html',
  styleUrls: ['./etat-course-view-admin.component.css']
})
export class EtatCourseViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private etatCourseService: EtatCourseService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewEtatCourseDialog  = false;
}

// getters and setters

get etatCourses(): Array<EtatCourseVo> {
    return this.etatCourseService.etatCourses;
       }
set etatCourses(value: Array<EtatCourseVo>) {
        this.etatCourseService.etatCourses = value;
       }

 get selectedEtatCourse(): EtatCourseVo {
           return this.etatCourseService.selectedEtatCourse;
       }
    set selectedEtatCourse(value: EtatCourseVo) {
        this.etatCourseService.selectedEtatCourse = value;
       }

   get viewEtatCourseDialog(): boolean {
           return this.etatCourseService.viewEtatCourseDialog;

       }
    set viewEtatCourseDialog(value: boolean) {
        this.etatCourseService.viewEtatCourseDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

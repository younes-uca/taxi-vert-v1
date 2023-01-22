import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {CourseVo} from '../model/Course.model';
import {MoyenTransportVo} from '../model/MoyenTransport.model';
import {SecteurVo} from '../model/Secteur.model';
import {EtatCourseVo} from '../model/EtatCourse.model';
import {OperateurVo} from '../model/Operateur.model';
import {ChauffeurVo} from '../model/Chauffeur.model';
import {ClientVo} from '../model/Client.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/course/';
        });
    }
     private _courses: Array<CourseVo> ;
     private _selectedCourse: CourseVo;
     private _courseSelections: Array<CourseVo>;
     private _createCourseDialog: boolean;
     private _editCourseDialog: boolean;
     private _viewCourseDialog: boolean;
     public editCourse$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCourse: CourseVo ;




    public findAll(){
     return this.http.get<Array<CourseVo>>(this.API);
    }

    public save(): Observable<CourseVo> {
         return this.http.post<CourseVo>(this.API, this.selectedCourse);
    }

    delete(course: CourseVo) {
         return this.http.delete<number>(this.API + 'id/' + course.id);
    }


    public edit(): Observable<CourseVo> {
        return this.http.put<CourseVo>(this.API, this.selectedCourse);
    }


     public findByCriteria(course:CourseVo): Observable<Array<CourseVo>>{
           return this.http.post<Array<CourseVo>>(this.API + 'search', course);
    }

   public findByIdWithAssociatedList(course:CourseVo):Observable<CourseVo>{
         return this.http.get<CourseVo>(this.API + 'detail/id/' +course.id);
    }

    // getters and setters


    get courses(): Array<CourseVo> {
    if(this._courses == null){
    this._courses = new Array<CourseVo>();
    }
return this._courses;
       }

    set courses(value: Array<CourseVo>) {
        this._courses = value;
       }

    get selectedCourse(): CourseVo {
    if(this._selectedCourse == null){
    this._selectedCourse = new CourseVo();
    }
           return this._selectedCourse;
       }

    set selectedCourse(value: CourseVo) {
        this._selectedCourse = value;
       }

    get courseSelections(): Array<CourseVo> {
    if(this._courseSelections == null){
    this._courseSelections = new Array<CourseVo>();
    }
        return this._courseSelections;
       }


    set courseSelections(value: Array<CourseVo>) {
        this._courseSelections = value;
       }

    get createCourseDialog(): boolean {
        return this._createCourseDialog;
       }

    set createCourseDialog(value: boolean) {
        this._createCourseDialog = value;
       }

    get editCourseDialog(): boolean {
        return this._editCourseDialog;
       }

    set editCourseDialog(value: boolean) {
        this._editCourseDialog = value;
       }

    get viewCourseDialog(): boolean {
        return this._viewCourseDialog;
       }

    set viewCourseDialog(value: boolean) {
        this._viewCourseDialog = value;
       }

     get searchCourse(): CourseVo {
     if(this._searchCourse==null){
    this._searchCourse=new CourseVo();
    }
        return this._searchCourse;
    }

    set searchCourse(value: CourseVo) {
        this._searchCourse = value;
       }
}

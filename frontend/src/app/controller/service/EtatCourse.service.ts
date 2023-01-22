import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {EtatCourseVo} from '../model/EtatCourse.model';


@Injectable({
  providedIn: 'root'
})
export class EtatCourseService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/etatCourse/';
        });
    }
     private _etatCourses: Array<EtatCourseVo> ;
     private _selectedEtatCourse: EtatCourseVo;
     private _etatCourseSelections: Array<EtatCourseVo>;
     private _createEtatCourseDialog: boolean;
     private _editEtatCourseDialog: boolean;
     private _viewEtatCourseDialog: boolean;
     public editEtatCourse$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtatCourse: EtatCourseVo ;




    public findAll(){
     return this.http.get<Array<EtatCourseVo>>(this.API);
    }

    public save(): Observable<EtatCourseVo> {
         return this.http.post<EtatCourseVo>(this.API, this.selectedEtatCourse);
    }

    delete(etatCourse: EtatCourseVo) {
         return this.http.delete<number>(this.API + 'id/' + etatCourse.id);
    }


    public edit(): Observable<EtatCourseVo> {
        return this.http.put<EtatCourseVo>(this.API, this.selectedEtatCourse);
    }


     public findByCriteria(etatCourse:EtatCourseVo): Observable<Array<EtatCourseVo>>{
           return this.http.post<Array<EtatCourseVo>>(this.API + 'search', etatCourse);
    }

   public findByIdWithAssociatedList(etatCourse:EtatCourseVo):Observable<EtatCourseVo>{
         return this.http.get<EtatCourseVo>(this.API + 'detail/id/' +etatCourse.id);
    }

    // getters and setters


    get etatCourses(): Array<EtatCourseVo> {
    if(this._etatCourses == null){
    this._etatCourses = new Array<EtatCourseVo>();
    }
return this._etatCourses;
       }

    set etatCourses(value: Array<EtatCourseVo>) {
        this._etatCourses = value;
       }

    get selectedEtatCourse(): EtatCourseVo {
    if(this._selectedEtatCourse == null){
    this._selectedEtatCourse = new EtatCourseVo();
    }
           return this._selectedEtatCourse;
       }

    set selectedEtatCourse(value: EtatCourseVo) {
        this._selectedEtatCourse = value;
       }

    get etatCourseSelections(): Array<EtatCourseVo> {
    if(this._etatCourseSelections == null){
    this._etatCourseSelections = new Array<EtatCourseVo>();
    }
        return this._etatCourseSelections;
       }


    set etatCourseSelections(value: Array<EtatCourseVo>) {
        this._etatCourseSelections = value;
       }

    get createEtatCourseDialog(): boolean {
        return this._createEtatCourseDialog;
       }

    set createEtatCourseDialog(value: boolean) {
        this._createEtatCourseDialog = value;
       }

    get editEtatCourseDialog(): boolean {
        return this._editEtatCourseDialog;
       }

    set editEtatCourseDialog(value: boolean) {
        this._editEtatCourseDialog = value;
       }

    get viewEtatCourseDialog(): boolean {
        return this._viewEtatCourseDialog;
       }

    set viewEtatCourseDialog(value: boolean) {
        this._viewEtatCourseDialog = value;
       }

     get searchEtatCourse(): EtatCourseVo {
     if(this._searchEtatCourse==null){
    this._searchEtatCourse=new EtatCourseVo();
    }
        return this._searchEtatCourse;
    }

    set searchEtatCourse(value: EtatCourseVo) {
        this._searchEtatCourse = value;
       }
}

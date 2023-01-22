import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {ModelApplicationVo} from '../model/ModelApplication.model';


@Injectable({
  providedIn: 'root'
})
export class ModelApplicationService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/modelApplication/';
        });
    }
     private _modelApplications: Array<ModelApplicationVo> ;
     private _selectedModelApplication: ModelApplicationVo;
     private _modelApplicationSelections: Array<ModelApplicationVo>;
     private _createModelApplicationDialog: boolean;
     private _editModelApplicationDialog: boolean;
     private _viewModelApplicationDialog: boolean;
     public editModelApplication$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchModelApplication: ModelApplicationVo ;




    public findAll(){
     return this.http.get<Array<ModelApplicationVo>>(this.API);
    }

    public save(): Observable<ModelApplicationVo> {
         return this.http.post<ModelApplicationVo>(this.API, this.selectedModelApplication);
    }

    delete(modelApplication: ModelApplicationVo) {
         return this.http.delete<number>(this.API + 'id/' + modelApplication.id);
    }


    public edit(): Observable<ModelApplicationVo> {
        return this.http.put<ModelApplicationVo>(this.API, this.selectedModelApplication);
    }


     public findByCriteria(modelApplication:ModelApplicationVo): Observable<Array<ModelApplicationVo>>{
           return this.http.post<Array<ModelApplicationVo>>(this.API + 'search', modelApplication);
    }

   public findByIdWithAssociatedList(modelApplication:ModelApplicationVo):Observable<ModelApplicationVo>{
         return this.http.get<ModelApplicationVo>(this.API + 'detail/id/' +modelApplication.id);
    }

    // getters and setters


    get modelApplications(): Array<ModelApplicationVo> {
    if(this._modelApplications == null){
    this._modelApplications = new Array<ModelApplicationVo>();
    }
return this._modelApplications;
       }

    set modelApplications(value: Array<ModelApplicationVo>) {
        this._modelApplications = value;
       }

    get selectedModelApplication(): ModelApplicationVo {
    if(this._selectedModelApplication == null){
    this._selectedModelApplication = new ModelApplicationVo();
    }
           return this._selectedModelApplication;
       }

    set selectedModelApplication(value: ModelApplicationVo) {
        this._selectedModelApplication = value;
       }

    get modelApplicationSelections(): Array<ModelApplicationVo> {
    if(this._modelApplicationSelections == null){
    this._modelApplicationSelections = new Array<ModelApplicationVo>();
    }
        return this._modelApplicationSelections;
       }


    set modelApplicationSelections(value: Array<ModelApplicationVo>) {
        this._modelApplicationSelections = value;
       }

    get createModelApplicationDialog(): boolean {
        return this._createModelApplicationDialog;
       }

    set createModelApplicationDialog(value: boolean) {
        this._createModelApplicationDialog = value;
       }

    get editModelApplicationDialog(): boolean {
        return this._editModelApplicationDialog;
       }

    set editModelApplicationDialog(value: boolean) {
        this._editModelApplicationDialog = value;
       }

    get viewModelApplicationDialog(): boolean {
        return this._viewModelApplicationDialog;
       }

    set viewModelApplicationDialog(value: boolean) {
        this._viewModelApplicationDialog = value;
       }

     get searchModelApplication(): ModelApplicationVo {
     if(this._searchModelApplication==null){
    this._searchModelApplication=new ModelApplicationVo();
    }
        return this._searchModelApplication;
    }

    set searchModelApplication(value: ModelApplicationVo) {
        this._searchModelApplication = value;
       }
}

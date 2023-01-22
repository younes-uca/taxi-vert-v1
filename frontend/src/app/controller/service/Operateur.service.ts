import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {OperateurVo} from '../model/Operateur.model';


@Injectable({
  providedIn: 'root'
})
export class OperateurService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/operateur/';
        });
    }
     private _operateurs: Array<OperateurVo> ;
     private _selectedOperateur: OperateurVo;
     private _operateurSelections: Array<OperateurVo>;
     private _createOperateurDialog: boolean;
     private _editOperateurDialog: boolean;
     private _viewOperateurDialog: boolean;
     public editOperateur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchOperateur: OperateurVo ;




    public findAll(){
     return this.http.get<Array<OperateurVo>>(this.API);
    }

    public save(): Observable<OperateurVo> {
           return this.http.post<OperateurVo>(this.API, {...this.selectedOperateur,updatedAt: moment(this.selectedOperateur.updatedAt).format('YYYY-MM-DD')});
    }

    delete(operateur: OperateurVo) {
         return this.http.delete<number>(this.API + 'id/' + operateur.id);
    }


    public edit(): Observable<OperateurVo> {
        return this.http.put<OperateurVo>(this.API, this.selectedOperateur);
    }


     public findByCriteria(operateur:OperateurVo): Observable<Array<OperateurVo>>{
           return this.http.post<Array<OperateurVo>>(this.API + 'search', operateur);
    }

   public findByIdWithAssociatedList(operateur:OperateurVo):Observable<OperateurVo>{
         return this.http.get<OperateurVo>(this.API + 'detail/id/' +operateur.id);
    }

    // getters and setters


    get operateurs(): Array<OperateurVo> {
    if(this._operateurs == null){
    this._operateurs = new Array<OperateurVo>();
    }
return this._operateurs;
       }

    set operateurs(value: Array<OperateurVo>) {
        this._operateurs = value;
       }

    get selectedOperateur(): OperateurVo {
    if(this._selectedOperateur == null){
    this._selectedOperateur = new OperateurVo();
    }
           return this._selectedOperateur;
       }

    set selectedOperateur(value: OperateurVo) {
        this._selectedOperateur = value;
       }

    get operateurSelections(): Array<OperateurVo> {
    if(this._operateurSelections == null){
    this._operateurSelections = new Array<OperateurVo>();
    }
        return this._operateurSelections;
       }


    set operateurSelections(value: Array<OperateurVo>) {
        this._operateurSelections = value;
       }

    get createOperateurDialog(): boolean {
        return this._createOperateurDialog;
       }

    set createOperateurDialog(value: boolean) {
        this._createOperateurDialog = value;
       }

    get editOperateurDialog(): boolean {
        return this._editOperateurDialog;
       }

    set editOperateurDialog(value: boolean) {
        this._editOperateurDialog = value;
       }

    get viewOperateurDialog(): boolean {
        return this._viewOperateurDialog;
       }

    set viewOperateurDialog(value: boolean) {
        this._viewOperateurDialog = value;
       }

     get searchOperateur(): OperateurVo {
     if(this._searchOperateur==null){
    this._searchOperateur=new OperateurVo();
    }
        return this._searchOperateur;
    }

    set searchOperateur(value: OperateurVo) {
        this._searchOperateur = value;
       }
}

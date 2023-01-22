import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {BlackListChauffeurVo} from '../model/BlackListChauffeur.model';


@Injectable({
  providedIn: 'root'
})
export class BlackListChauffeurService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/blackListChauffeur/';
        });
    }
     private _blackListChauffeurs: Array<BlackListChauffeurVo> ;
     private _selectedBlackListChauffeur: BlackListChauffeurVo;
     private _blackListChauffeurSelections: Array<BlackListChauffeurVo>;
     private _createBlackListChauffeurDialog: boolean;
     private _editBlackListChauffeurDialog: boolean;
     private _viewBlackListChauffeurDialog: boolean;
     public editBlackListChauffeur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchBlackListChauffeur: BlackListChauffeurVo ;




    public findAll(){
     return this.http.get<Array<BlackListChauffeurVo>>(this.API);
    }

    public save(): Observable<BlackListChauffeurVo> {
         return this.http.post<BlackListChauffeurVo>(this.API, this.selectedBlackListChauffeur);
    }

    delete(blackListChauffeur: BlackListChauffeurVo) {
         return this.http.delete<number>(this.API + 'id/' + blackListChauffeur.id);
    }


    public edit(): Observable<BlackListChauffeurVo> {
        return this.http.put<BlackListChauffeurVo>(this.API, this.selectedBlackListChauffeur);
    }


     public findByCriteria(blackListChauffeur:BlackListChauffeurVo): Observable<Array<BlackListChauffeurVo>>{
           return this.http.post<Array<BlackListChauffeurVo>>(this.API + 'search', blackListChauffeur);
    }

   public findByIdWithAssociatedList(blackListChauffeur:BlackListChauffeurVo):Observable<BlackListChauffeurVo>{
         return this.http.get<BlackListChauffeurVo>(this.API + 'detail/id/' +blackListChauffeur.id);
    }

    // getters and setters


    get blackListChauffeurs(): Array<BlackListChauffeurVo> {
    if(this._blackListChauffeurs == null){
    this._blackListChauffeurs = new Array<BlackListChauffeurVo>();
    }
return this._blackListChauffeurs;
       }

    set blackListChauffeurs(value: Array<BlackListChauffeurVo>) {
        this._blackListChauffeurs = value;
       }

    get selectedBlackListChauffeur(): BlackListChauffeurVo {
    if(this._selectedBlackListChauffeur == null){
    this._selectedBlackListChauffeur = new BlackListChauffeurVo();
    }
           return this._selectedBlackListChauffeur;
       }

    set selectedBlackListChauffeur(value: BlackListChauffeurVo) {
        this._selectedBlackListChauffeur = value;
       }

    get blackListChauffeurSelections(): Array<BlackListChauffeurVo> {
    if(this._blackListChauffeurSelections == null){
    this._blackListChauffeurSelections = new Array<BlackListChauffeurVo>();
    }
        return this._blackListChauffeurSelections;
       }


    set blackListChauffeurSelections(value: Array<BlackListChauffeurVo>) {
        this._blackListChauffeurSelections = value;
       }

    get createBlackListChauffeurDialog(): boolean {
        return this._createBlackListChauffeurDialog;
       }

    set createBlackListChauffeurDialog(value: boolean) {
        this._createBlackListChauffeurDialog = value;
       }

    get editBlackListChauffeurDialog(): boolean {
        return this._editBlackListChauffeurDialog;
       }

    set editBlackListChauffeurDialog(value: boolean) {
        this._editBlackListChauffeurDialog = value;
       }

    get viewBlackListChauffeurDialog(): boolean {
        return this._viewBlackListChauffeurDialog;
       }

    set viewBlackListChauffeurDialog(value: boolean) {
        this._viewBlackListChauffeurDialog = value;
       }

     get searchBlackListChauffeur(): BlackListChauffeurVo {
     if(this._searchBlackListChauffeur==null){
    this._searchBlackListChauffeur=new BlackListChauffeurVo();
    }
        return this._searchBlackListChauffeur;
    }

    set searchBlackListChauffeur(value: BlackListChauffeurVo) {
        this._searchBlackListChauffeur = value;
       }
}

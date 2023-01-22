import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {EtatChauffeurVo} from '../model/EtatChauffeur.model';


@Injectable({
  providedIn: 'root'
})
export class EtatChauffeurService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/etatChauffeur/';
        });
    }
     private _etatChauffeurs: Array<EtatChauffeurVo> ;
     private _selectedEtatChauffeur: EtatChauffeurVo;
     private _etatChauffeurSelections: Array<EtatChauffeurVo>;
     private _createEtatChauffeurDialog: boolean;
     private _editEtatChauffeurDialog: boolean;
     private _viewEtatChauffeurDialog: boolean;
     public editEtatChauffeur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtatChauffeur: EtatChauffeurVo ;




    public findAll(){
     return this.http.get<Array<EtatChauffeurVo>>(this.API);
    }

    public save(): Observable<EtatChauffeurVo> {
         return this.http.post<EtatChauffeurVo>(this.API, this.selectedEtatChauffeur);
    }

    delete(etatChauffeur: EtatChauffeurVo) {
         return this.http.delete<number>(this.API + 'id/' + etatChauffeur.id);
    }


    public edit(): Observable<EtatChauffeurVo> {
        return this.http.put<EtatChauffeurVo>(this.API, this.selectedEtatChauffeur);
    }


     public findByCriteria(etatChauffeur:EtatChauffeurVo): Observable<Array<EtatChauffeurVo>>{
           return this.http.post<Array<EtatChauffeurVo>>(this.API + 'search', etatChauffeur);
    }

   public findByIdWithAssociatedList(etatChauffeur:EtatChauffeurVo):Observable<EtatChauffeurVo>{
         return this.http.get<EtatChauffeurVo>(this.API + 'detail/id/' +etatChauffeur.id);
    }

    // getters and setters


    get etatChauffeurs(): Array<EtatChauffeurVo> {
    if(this._etatChauffeurs == null){
    this._etatChauffeurs = new Array<EtatChauffeurVo>();
    }
return this._etatChauffeurs;
       }

    set etatChauffeurs(value: Array<EtatChauffeurVo>) {
        this._etatChauffeurs = value;
       }

    get selectedEtatChauffeur(): EtatChauffeurVo {
    if(this._selectedEtatChauffeur == null){
    this._selectedEtatChauffeur = new EtatChauffeurVo();
    }
           return this._selectedEtatChauffeur;
       }

    set selectedEtatChauffeur(value: EtatChauffeurVo) {
        this._selectedEtatChauffeur = value;
       }

    get etatChauffeurSelections(): Array<EtatChauffeurVo> {
    if(this._etatChauffeurSelections == null){
    this._etatChauffeurSelections = new Array<EtatChauffeurVo>();
    }
        return this._etatChauffeurSelections;
       }


    set etatChauffeurSelections(value: Array<EtatChauffeurVo>) {
        this._etatChauffeurSelections = value;
       }

    get createEtatChauffeurDialog(): boolean {
        return this._createEtatChauffeurDialog;
       }

    set createEtatChauffeurDialog(value: boolean) {
        this._createEtatChauffeurDialog = value;
       }

    get editEtatChauffeurDialog(): boolean {
        return this._editEtatChauffeurDialog;
       }

    set editEtatChauffeurDialog(value: boolean) {
        this._editEtatChauffeurDialog = value;
       }

    get viewEtatChauffeurDialog(): boolean {
        return this._viewEtatChauffeurDialog;
       }

    set viewEtatChauffeurDialog(value: boolean) {
        this._viewEtatChauffeurDialog = value;
       }

     get searchEtatChauffeur(): EtatChauffeurVo {
     if(this._searchEtatChauffeur==null){
    this._searchEtatChauffeur=new EtatChauffeurVo();
    }
        return this._searchEtatChauffeur;
    }

    set searchEtatChauffeur(value: EtatChauffeurVo) {
        this._searchEtatChauffeur = value;
       }
}

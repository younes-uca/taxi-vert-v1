import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {ChauffeurVo} from '../model/Chauffeur.model';
import {ModelApplicationVo} from '../model/ModelApplication.model';
import {MoyenTransportVo} from '../model/MoyenTransport.model';
import {EtatChauffeurVo} from '../model/EtatChauffeur.model';
import {LangueVo} from '../model/Langue.model';
import {MarqueVoitureVo} from '../model/MarqueVoiture.model';
import {ThemeVo} from '../model/Theme.model';
import {MarqueTelephoneVo} from '../model/MarqueTelephone.model';
import {VilleVo} from '../model/Ville.model';


@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/chauffeur/';
        });
    }
     private _chauffeurs: Array<ChauffeurVo> ;
     private _selectedChauffeur: ChauffeurVo;
     private _chauffeurSelections: Array<ChauffeurVo>;
     private _createChauffeurDialog: boolean;
     private _editChauffeurDialog: boolean;
     private _viewChauffeurDialog: boolean;
     public editChauffeur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchChauffeur: ChauffeurVo ;




    public findAll(){
     return this.http.get<Array<ChauffeurVo>>(this.API);
    }

    public save(): Observable<ChauffeurVo> {
           return this.http.post<ChauffeurVo>(this.API, {...this.selectedChauffeur,updatedAt: moment(this.selectedChauffeur.updatedAt).format('YYYY-MM-DD')});
    }

    delete(chauffeur: ChauffeurVo) {
         return this.http.delete<number>(this.API + 'id/' + chauffeur.id);
    }


    public edit(): Observable<ChauffeurVo> {
        return this.http.put<ChauffeurVo>(this.API, this.selectedChauffeur);
    }


     public findByCriteria(chauffeur:ChauffeurVo): Observable<Array<ChauffeurVo>>{
           return this.http.post<Array<ChauffeurVo>>(this.API + 'search', chauffeur);
    }

   public findByIdWithAssociatedList(chauffeur:ChauffeurVo):Observable<ChauffeurVo>{
         return this.http.get<ChauffeurVo>(this.API + 'detail/id/' +chauffeur.id);
    }

    // getters and setters


    get chauffeurs(): Array<ChauffeurVo> {
    if(this._chauffeurs == null){
    this._chauffeurs = new Array<ChauffeurVo>();
    }
return this._chauffeurs;
       }

    set chauffeurs(value: Array<ChauffeurVo>) {
        this._chauffeurs = value;
       }

    get selectedChauffeur(): ChauffeurVo {
    if(this._selectedChauffeur == null){
    this._selectedChauffeur = new ChauffeurVo();
    }
           return this._selectedChauffeur;
       }

    set selectedChauffeur(value: ChauffeurVo) {
        this._selectedChauffeur = value;
       }

    get chauffeurSelections(): Array<ChauffeurVo> {
    if(this._chauffeurSelections == null){
    this._chauffeurSelections = new Array<ChauffeurVo>();
    }
        return this._chauffeurSelections;
       }


    set chauffeurSelections(value: Array<ChauffeurVo>) {
        this._chauffeurSelections = value;
       }

    get createChauffeurDialog(): boolean {
        return this._createChauffeurDialog;
       }

    set createChauffeurDialog(value: boolean) {
        this._createChauffeurDialog = value;
       }

    get editChauffeurDialog(): boolean {
        return this._editChauffeurDialog;
       }

    set editChauffeurDialog(value: boolean) {
        this._editChauffeurDialog = value;
       }

    get viewChauffeurDialog(): boolean {
        return this._viewChauffeurDialog;
       }

    set viewChauffeurDialog(value: boolean) {
        this._viewChauffeurDialog = value;
       }

     get searchChauffeur(): ChauffeurVo {
     if(this._searchChauffeur==null){
    this._searchChauffeur=new ChauffeurVo();
    }
        return this._searchChauffeur;
    }

    set searchChauffeur(value: ChauffeurVo) {
        this._searchChauffeur = value;
       }
}

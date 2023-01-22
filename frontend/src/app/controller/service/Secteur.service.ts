import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {SecteurVo} from '../model/Secteur.model';
import {VilleVo} from '../model/Ville.model';


@Injectable({
  providedIn: 'root'
})
export class SecteurService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/secteur/';
        });
    }
     private _secteurs: Array<SecteurVo> ;
     private _selectedSecteur: SecteurVo;
     private _secteurSelections: Array<SecteurVo>;
     private _createSecteurDialog: boolean;
     private _editSecteurDialog: boolean;
     private _viewSecteurDialog: boolean;
     public editSecteur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchSecteur: SecteurVo ;




    public findAll(){
     return this.http.get<Array<SecteurVo>>(this.API);
    }

    public save(): Observable<SecteurVo> {
         return this.http.post<SecteurVo>(this.API, this.selectedSecteur);
    }

    delete(secteur: SecteurVo) {
         return this.http.delete<number>(this.API + 'id/' + secteur.id);
    }


    public edit(): Observable<SecteurVo> {
        return this.http.put<SecteurVo>(this.API, this.selectedSecteur);
    }


     public findByCriteria(secteur:SecteurVo): Observable<Array<SecteurVo>>{
           return this.http.post<Array<SecteurVo>>(this.API + 'search', secteur);
    }

   public findByIdWithAssociatedList(secteur:SecteurVo):Observable<SecteurVo>{
         return this.http.get<SecteurVo>(this.API + 'detail/id/' +secteur.id);
    }

    // getters and setters


    get secteurs(): Array<SecteurVo> {
    if(this._secteurs == null){
    this._secteurs = new Array<SecteurVo>();
    }
return this._secteurs;
       }

    set secteurs(value: Array<SecteurVo>) {
        this._secteurs = value;
       }

    get selectedSecteur(): SecteurVo {
    if(this._selectedSecteur == null){
    this._selectedSecteur = new SecteurVo();
    }
           return this._selectedSecteur;
       }

    set selectedSecteur(value: SecteurVo) {
        this._selectedSecteur = value;
       }

    get secteurSelections(): Array<SecteurVo> {
    if(this._secteurSelections == null){
    this._secteurSelections = new Array<SecteurVo>();
    }
        return this._secteurSelections;
       }


    set secteurSelections(value: Array<SecteurVo>) {
        this._secteurSelections = value;
       }

    get createSecteurDialog(): boolean {
        return this._createSecteurDialog;
       }

    set createSecteurDialog(value: boolean) {
        this._createSecteurDialog = value;
       }

    get editSecteurDialog(): boolean {
        return this._editSecteurDialog;
       }

    set editSecteurDialog(value: boolean) {
        this._editSecteurDialog = value;
       }

    get viewSecteurDialog(): boolean {
        return this._viewSecteurDialog;
       }

    set viewSecteurDialog(value: boolean) {
        this._viewSecteurDialog = value;
       }

     get searchSecteur(): SecteurVo {
     if(this._searchSecteur==null){
    this._searchSecteur=new SecteurVo();
    }
        return this._searchSecteur;
    }

    set searchSecteur(value: SecteurVo) {
        this._searchSecteur = value;
       }
}

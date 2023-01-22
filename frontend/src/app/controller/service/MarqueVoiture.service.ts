import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {MarqueVoitureVo} from '../model/MarqueVoiture.model';


@Injectable({
  providedIn: 'root'
})
export class MarqueVoitureService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/marqueVoiture/';
        });
    }
     private _marqueVoitures: Array<MarqueVoitureVo> ;
     private _selectedMarqueVoiture: MarqueVoitureVo;
     private _marqueVoitureSelections: Array<MarqueVoitureVo>;
     private _createMarqueVoitureDialog: boolean;
     private _editMarqueVoitureDialog: boolean;
     private _viewMarqueVoitureDialog: boolean;
     public editMarqueVoiture$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchMarqueVoiture: MarqueVoitureVo ;




    public findAll(){
     return this.http.get<Array<MarqueVoitureVo>>(this.API);
    }

    public save(): Observable<MarqueVoitureVo> {
         return this.http.post<MarqueVoitureVo>(this.API, this.selectedMarqueVoiture);
    }

    delete(marqueVoiture: MarqueVoitureVo) {
         return this.http.delete<number>(this.API + 'id/' + marqueVoiture.id);
    }


    public edit(): Observable<MarqueVoitureVo> {
        return this.http.put<MarqueVoitureVo>(this.API, this.selectedMarqueVoiture);
    }


     public findByCriteria(marqueVoiture:MarqueVoitureVo): Observable<Array<MarqueVoitureVo>>{
           return this.http.post<Array<MarqueVoitureVo>>(this.API + 'search', marqueVoiture);
    }

   public findByIdWithAssociatedList(marqueVoiture:MarqueVoitureVo):Observable<MarqueVoitureVo>{
         return this.http.get<MarqueVoitureVo>(this.API + 'detail/id/' +marqueVoiture.id);
    }

    // getters and setters


    get marqueVoitures(): Array<MarqueVoitureVo> {
    if(this._marqueVoitures == null){
    this._marqueVoitures = new Array<MarqueVoitureVo>();
    }
return this._marqueVoitures;
       }

    set marqueVoitures(value: Array<MarqueVoitureVo>) {
        this._marqueVoitures = value;
       }

    get selectedMarqueVoiture(): MarqueVoitureVo {
    if(this._selectedMarqueVoiture == null){
    this._selectedMarqueVoiture = new MarqueVoitureVo();
    }
           return this._selectedMarqueVoiture;
       }

    set selectedMarqueVoiture(value: MarqueVoitureVo) {
        this._selectedMarqueVoiture = value;
       }

    get marqueVoitureSelections(): Array<MarqueVoitureVo> {
    if(this._marqueVoitureSelections == null){
    this._marqueVoitureSelections = new Array<MarqueVoitureVo>();
    }
        return this._marqueVoitureSelections;
       }


    set marqueVoitureSelections(value: Array<MarqueVoitureVo>) {
        this._marqueVoitureSelections = value;
       }

    get createMarqueVoitureDialog(): boolean {
        return this._createMarqueVoitureDialog;
       }

    set createMarqueVoitureDialog(value: boolean) {
        this._createMarqueVoitureDialog = value;
       }

    get editMarqueVoitureDialog(): boolean {
        return this._editMarqueVoitureDialog;
       }

    set editMarqueVoitureDialog(value: boolean) {
        this._editMarqueVoitureDialog = value;
       }

    get viewMarqueVoitureDialog(): boolean {
        return this._viewMarqueVoitureDialog;
       }

    set viewMarqueVoitureDialog(value: boolean) {
        this._viewMarqueVoitureDialog = value;
       }

     get searchMarqueVoiture(): MarqueVoitureVo {
     if(this._searchMarqueVoiture==null){
    this._searchMarqueVoiture=new MarqueVoitureVo();
    }
        return this._searchMarqueVoiture;
    }

    set searchMarqueVoiture(value: MarqueVoitureVo) {
        this._searchMarqueVoiture = value;
       }
}

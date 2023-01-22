import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {MarqueTelephoneVo} from '../model/MarqueTelephone.model';


@Injectable({
  providedIn: 'root'
})
export class MarqueTelephoneService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/marqueTelephone/';
        });
    }
     private _marqueTelephones: Array<MarqueTelephoneVo> ;
     private _selectedMarqueTelephone: MarqueTelephoneVo;
     private _marqueTelephoneSelections: Array<MarqueTelephoneVo>;
     private _createMarqueTelephoneDialog: boolean;
     private _editMarqueTelephoneDialog: boolean;
     private _viewMarqueTelephoneDialog: boolean;
     public editMarqueTelephone$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchMarqueTelephone: MarqueTelephoneVo ;




    public findAll(){
     return this.http.get<Array<MarqueTelephoneVo>>(this.API);
    }

    public save(): Observable<MarqueTelephoneVo> {
         return this.http.post<MarqueTelephoneVo>(this.API, this.selectedMarqueTelephone);
    }

    delete(marqueTelephone: MarqueTelephoneVo) {
         return this.http.delete<number>(this.API + 'id/' + marqueTelephone.id);
    }


    public edit(): Observable<MarqueTelephoneVo> {
        return this.http.put<MarqueTelephoneVo>(this.API, this.selectedMarqueTelephone);
    }


     public findByCriteria(marqueTelephone:MarqueTelephoneVo): Observable<Array<MarqueTelephoneVo>>{
           return this.http.post<Array<MarqueTelephoneVo>>(this.API + 'search', marqueTelephone);
    }

   public findByIdWithAssociatedList(marqueTelephone:MarqueTelephoneVo):Observable<MarqueTelephoneVo>{
         return this.http.get<MarqueTelephoneVo>(this.API + 'detail/id/' +marqueTelephone.id);
    }

    // getters and setters


    get marqueTelephones(): Array<MarqueTelephoneVo> {
    if(this._marqueTelephones == null){
    this._marqueTelephones = new Array<MarqueTelephoneVo>();
    }
return this._marqueTelephones;
       }

    set marqueTelephones(value: Array<MarqueTelephoneVo>) {
        this._marqueTelephones = value;
       }

    get selectedMarqueTelephone(): MarqueTelephoneVo {
    if(this._selectedMarqueTelephone == null){
    this._selectedMarqueTelephone = new MarqueTelephoneVo();
    }
           return this._selectedMarqueTelephone;
       }

    set selectedMarqueTelephone(value: MarqueTelephoneVo) {
        this._selectedMarqueTelephone = value;
       }

    get marqueTelephoneSelections(): Array<MarqueTelephoneVo> {
    if(this._marqueTelephoneSelections == null){
    this._marqueTelephoneSelections = new Array<MarqueTelephoneVo>();
    }
        return this._marqueTelephoneSelections;
       }


    set marqueTelephoneSelections(value: Array<MarqueTelephoneVo>) {
        this._marqueTelephoneSelections = value;
       }

    get createMarqueTelephoneDialog(): boolean {
        return this._createMarqueTelephoneDialog;
       }

    set createMarqueTelephoneDialog(value: boolean) {
        this._createMarqueTelephoneDialog = value;
       }

    get editMarqueTelephoneDialog(): boolean {
        return this._editMarqueTelephoneDialog;
       }

    set editMarqueTelephoneDialog(value: boolean) {
        this._editMarqueTelephoneDialog = value;
       }

    get viewMarqueTelephoneDialog(): boolean {
        return this._viewMarqueTelephoneDialog;
       }

    set viewMarqueTelephoneDialog(value: boolean) {
        this._viewMarqueTelephoneDialog = value;
       }

     get searchMarqueTelephone(): MarqueTelephoneVo {
     if(this._searchMarqueTelephone==null){
    this._searchMarqueTelephone=new MarqueTelephoneVo();
    }
        return this._searchMarqueTelephone;
    }

    set searchMarqueTelephone(value: MarqueTelephoneVo) {
        this._searchMarqueTelephone = value;
       }
}

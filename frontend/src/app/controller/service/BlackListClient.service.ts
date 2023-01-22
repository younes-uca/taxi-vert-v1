import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {BlackListClientVo} from '../model/BlackListClient.model';


@Injectable({
  providedIn: 'root'
})
export class BlackListClientService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/blackListClient/';
        });
    }
     private _blackListClients: Array<BlackListClientVo> ;
     private _selectedBlackListClient: BlackListClientVo;
     private _blackListClientSelections: Array<BlackListClientVo>;
     private _createBlackListClientDialog: boolean;
     private _editBlackListClientDialog: boolean;
     private _viewBlackListClientDialog: boolean;
     public editBlackListClient$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchBlackListClient: BlackListClientVo ;




    public findAll(){
     return this.http.get<Array<BlackListClientVo>>(this.API);
    }

    public save(): Observable<BlackListClientVo> {
         return this.http.post<BlackListClientVo>(this.API, this.selectedBlackListClient);
    }

    delete(blackListClient: BlackListClientVo) {
         return this.http.delete<number>(this.API + 'id/' + blackListClient.id);
    }


    public edit(): Observable<BlackListClientVo> {
        return this.http.put<BlackListClientVo>(this.API, this.selectedBlackListClient);
    }


     public findByCriteria(blackListClient:BlackListClientVo): Observable<Array<BlackListClientVo>>{
           return this.http.post<Array<BlackListClientVo>>(this.API + 'search', blackListClient);
    }

   public findByIdWithAssociatedList(blackListClient:BlackListClientVo):Observable<BlackListClientVo>{
         return this.http.get<BlackListClientVo>(this.API + 'detail/id/' +blackListClient.id);
    }

    // getters and setters


    get blackListClients(): Array<BlackListClientVo> {
    if(this._blackListClients == null){
    this._blackListClients = new Array<BlackListClientVo>();
    }
return this._blackListClients;
       }

    set blackListClients(value: Array<BlackListClientVo>) {
        this._blackListClients = value;
       }

    get selectedBlackListClient(): BlackListClientVo {
    if(this._selectedBlackListClient == null){
    this._selectedBlackListClient = new BlackListClientVo();
    }
           return this._selectedBlackListClient;
       }

    set selectedBlackListClient(value: BlackListClientVo) {
        this._selectedBlackListClient = value;
       }

    get blackListClientSelections(): Array<BlackListClientVo> {
    if(this._blackListClientSelections == null){
    this._blackListClientSelections = new Array<BlackListClientVo>();
    }
        return this._blackListClientSelections;
       }


    set blackListClientSelections(value: Array<BlackListClientVo>) {
        this._blackListClientSelections = value;
       }

    get createBlackListClientDialog(): boolean {
        return this._createBlackListClientDialog;
       }

    set createBlackListClientDialog(value: boolean) {
        this._createBlackListClientDialog = value;
       }

    get editBlackListClientDialog(): boolean {
        return this._editBlackListClientDialog;
       }

    set editBlackListClientDialog(value: boolean) {
        this._editBlackListClientDialog = value;
       }

    get viewBlackListClientDialog(): boolean {
        return this._viewBlackListClientDialog;
       }

    set viewBlackListClientDialog(value: boolean) {
        this._viewBlackListClientDialog = value;
       }

     get searchBlackListClient(): BlackListClientVo {
     if(this._searchBlackListClient==null){
    this._searchBlackListClient=new BlackListClientVo();
    }
        return this._searchBlackListClient;
    }

    set searchBlackListClient(value: BlackListClientVo) {
        this._searchBlackListClient = value;
       }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {MoyenTransportVo} from '../model/MoyenTransport.model';


@Injectable({
  providedIn: 'root'
})
export class MoyenTransportService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/moyenTransport/';
        });
    }
     private _moyenTransports: Array<MoyenTransportVo> ;
     private _selectedMoyenTransport: MoyenTransportVo;
     private _moyenTransportSelections: Array<MoyenTransportVo>;
     private _createMoyenTransportDialog: boolean;
     private _editMoyenTransportDialog: boolean;
     private _viewMoyenTransportDialog: boolean;
     public editMoyenTransport$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchMoyenTransport: MoyenTransportVo ;




    public findAll(){
     return this.http.get<Array<MoyenTransportVo>>(this.API);
    }

    public save(): Observable<MoyenTransportVo> {
         return this.http.post<MoyenTransportVo>(this.API, this.selectedMoyenTransport);
    }

    delete(moyenTransport: MoyenTransportVo) {
         return this.http.delete<number>(this.API + 'id/' + moyenTransport.id);
    }


    public edit(): Observable<MoyenTransportVo> {
        return this.http.put<MoyenTransportVo>(this.API, this.selectedMoyenTransport);
    }


     public findByCriteria(moyenTransport:MoyenTransportVo): Observable<Array<MoyenTransportVo>>{
           return this.http.post<Array<MoyenTransportVo>>(this.API + 'search', moyenTransport);
    }

   public findByIdWithAssociatedList(moyenTransport:MoyenTransportVo):Observable<MoyenTransportVo>{
         return this.http.get<MoyenTransportVo>(this.API + 'detail/id/' +moyenTransport.id);
    }

    // getters and setters


    get moyenTransports(): Array<MoyenTransportVo> {
    if(this._moyenTransports == null){
    this._moyenTransports = new Array<MoyenTransportVo>();
    }
return this._moyenTransports;
       }

    set moyenTransports(value: Array<MoyenTransportVo>) {
        this._moyenTransports = value;
       }

    get selectedMoyenTransport(): MoyenTransportVo {
    if(this._selectedMoyenTransport == null){
    this._selectedMoyenTransport = new MoyenTransportVo();
    }
           return this._selectedMoyenTransport;
       }

    set selectedMoyenTransport(value: MoyenTransportVo) {
        this._selectedMoyenTransport = value;
       }

    get moyenTransportSelections(): Array<MoyenTransportVo> {
    if(this._moyenTransportSelections == null){
    this._moyenTransportSelections = new Array<MoyenTransportVo>();
    }
        return this._moyenTransportSelections;
       }


    set moyenTransportSelections(value: Array<MoyenTransportVo>) {
        this._moyenTransportSelections = value;
       }

    get createMoyenTransportDialog(): boolean {
        return this._createMoyenTransportDialog;
       }

    set createMoyenTransportDialog(value: boolean) {
        this._createMoyenTransportDialog = value;
       }

    get editMoyenTransportDialog(): boolean {
        return this._editMoyenTransportDialog;
       }

    set editMoyenTransportDialog(value: boolean) {
        this._editMoyenTransportDialog = value;
       }

    get viewMoyenTransportDialog(): boolean {
        return this._viewMoyenTransportDialog;
       }

    set viewMoyenTransportDialog(value: boolean) {
        this._viewMoyenTransportDialog = value;
       }

     get searchMoyenTransport(): MoyenTransportVo {
     if(this._searchMoyenTransport==null){
    this._searchMoyenTransport=new MoyenTransportVo();
    }
        return this._searchMoyenTransport;
    }

    set searchMoyenTransport(value: MoyenTransportVo) {
        this._searchMoyenTransport = value;
       }
}

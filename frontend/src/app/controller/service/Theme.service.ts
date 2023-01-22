import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {ThemeVo} from '../model/Theme.model';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/theme/';
        });
    }
     private _themes: Array<ThemeVo> ;
     private _selectedTheme: ThemeVo;
     private _themeSelections: Array<ThemeVo>;
     private _createThemeDialog: boolean;
     private _editThemeDialog: boolean;
     private _viewThemeDialog: boolean;
     public editTheme$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTheme: ThemeVo ;




    public findAll(){
     return this.http.get<Array<ThemeVo>>(this.API);
    }

    public save(): Observable<ThemeVo> {
         return this.http.post<ThemeVo>(this.API, this.selectedTheme);
    }

    delete(theme: ThemeVo) {
         return this.http.delete<number>(this.API + 'id/' + theme.id);
    }


    public edit(): Observable<ThemeVo> {
        return this.http.put<ThemeVo>(this.API, this.selectedTheme);
    }


     public findByCriteria(theme:ThemeVo): Observable<Array<ThemeVo>>{
           return this.http.post<Array<ThemeVo>>(this.API + 'search', theme);
    }

   public findByIdWithAssociatedList(theme:ThemeVo):Observable<ThemeVo>{
         return this.http.get<ThemeVo>(this.API + 'detail/id/' +theme.id);
    }

    // getters and setters


    get themes(): Array<ThemeVo> {
    if(this._themes == null){
    this._themes = new Array<ThemeVo>();
    }
return this._themes;
       }

    set themes(value: Array<ThemeVo>) {
        this._themes = value;
       }

    get selectedTheme(): ThemeVo {
    if(this._selectedTheme == null){
    this._selectedTheme = new ThemeVo();
    }
           return this._selectedTheme;
       }

    set selectedTheme(value: ThemeVo) {
        this._selectedTheme = value;
       }

    get themeSelections(): Array<ThemeVo> {
    if(this._themeSelections == null){
    this._themeSelections = new Array<ThemeVo>();
    }
        return this._themeSelections;
       }


    set themeSelections(value: Array<ThemeVo>) {
        this._themeSelections = value;
       }

    get createThemeDialog(): boolean {
        return this._createThemeDialog;
       }

    set createThemeDialog(value: boolean) {
        this._createThemeDialog = value;
       }

    get editThemeDialog(): boolean {
        return this._editThemeDialog;
       }

    set editThemeDialog(value: boolean) {
        this._editThemeDialog = value;
       }

    get viewThemeDialog(): boolean {
        return this._viewThemeDialog;
       }

    set viewThemeDialog(value: boolean) {
        this._viewThemeDialog = value;
       }

     get searchTheme(): ThemeVo {
     if(this._searchTheme==null){
    this._searchTheme=new ThemeVo();
    }
        return this._searchTheme;
    }

    set searchTheme(value: ThemeVo) {
        this._searchTheme = value;
       }
}

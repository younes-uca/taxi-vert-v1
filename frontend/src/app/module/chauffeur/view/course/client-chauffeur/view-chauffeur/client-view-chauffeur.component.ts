import {Component, OnInit} from '@angular/core';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {LangueVo} from 'src/app/controller/model/Langue.model';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {ThemeService} from 'src/app/controller/service/Theme.service';

@Component({
  selector: 'app-client-view-chauffeur',
  templateUrl: './client-view-chauffeur.component.html',
  styleUrls: ['./client-view-chauffeur.component.css']
})
export class ClientViewChauffeurComponent implements OnInit {


constructor(private datePipe: DatePipe, private clientService: ClientService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private langueService: LangueService
    ,private themeService: ThemeService
) {
}

// methods
ngOnInit(): void {
    this.selectedLangue = new LangueVo();
    this.langueService.findAll().subscribe((data) => this.langues = data);
    this.selectedTheme = new ThemeVo();
    this.themeService.findAll().subscribe((data) => this.themes = data);
}

hideViewDialog(){
    this.viewClientDialog  = false;
}

// getters and setters

get clients(): Array<ClientVo> {
    return this.clientService.clients;
       }
set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }

 get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
    set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }

   get viewClientDialog(): boolean {
           return this.clientService.viewClientDialog;

       }
    set viewClientDialog(value: boolean) {
        this.clientService.viewClientDialog= value;
       }

       get selectedLangue(): LangueVo {
           return this.langueService.selectedLangue;
       }
      set selectedLangue(value: LangueVo) {
        this.langueService.selectedLangue = value;
       }
       get langues():Array<LangueVo> {
           return this.langueService.langues;
       }
       set langues(value: Array<LangueVo>) {
        this.langueService.langues = value;
       }
       get editLangueDialog(): boolean {
           return this.langueService.editLangueDialog;
       }
      set editLangueDialog(value: boolean) {
        this.langueService.editLangueDialog= value;
       }
       get selectedTheme(): ThemeVo {
           return this.themeService.selectedTheme;
       }
      set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
       }
       get themes():Array<ThemeVo> {
           return this.themeService.themes;
       }
       set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }
       get editThemeDialog(): boolean {
           return this.themeService.editThemeDialog;
       }
      set editThemeDialog(value: boolean) {
        this.themeService.editThemeDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/controller/service/Theme.service';
import {ThemeVo} from 'src/app/controller/model/Theme.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-theme-view-client',
  templateUrl: './theme-view-client.component.html',
  styleUrls: ['./theme-view-client.component.css']
})
export class ThemeViewClientComponent implements OnInit {


constructor(private datePipe: DatePipe, private themeService: ThemeService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewThemeDialog  = false;
}

// getters and setters

get themes(): Array<ThemeVo> {
    return this.themeService.themes;
       }
set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }

 get selectedTheme(): ThemeVo {
           return this.themeService.selectedTheme;
       }
    set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
       }

   get viewThemeDialog(): boolean {
           return this.themeService.viewThemeDialog;

       }
    set viewThemeDialog(value: boolean) {
        this.themeService.viewThemeDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}

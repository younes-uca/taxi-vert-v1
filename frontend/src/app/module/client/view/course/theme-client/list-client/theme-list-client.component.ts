import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/controller/service/Theme.service';
import {ThemeVo} from 'src/app/controller/model/Theme.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';




import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-theme-list-client',
  templateUrl: './theme-list-client.component.html',
  styleUrls: ['./theme-list-client.component.css']
})
export class ThemeListClientComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Theme';


    constructor(private datePipe: DatePipe, private themeService: ThemeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadThemes();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadThemes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Theme', 'list');
        isPermistted ? this.themeService.findAll().subscribe(themes => this.themes = themes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.themeService.findByCriteria(this.searchTheme).subscribe(themes=>{
            
            this.themes = themes;
           // this.searchTheme = new ThemeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editTheme(theme: ThemeVo){
        const isPermistted = await this.roleService.isPermitted('Theme', 'edit');
         if(isPermistted){
          this.themeService.findByIdWithAssociatedList(theme).subscribe(res => {
           this.selectedTheme = res;

            this.editThemeDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTheme(theme: ThemeVo){
        const isPermistted = await this.roleService.isPermitted('Theme', 'view');
        if(isPermistted){
           this.themeService.findByIdWithAssociatedList(theme).subscribe(res => {
           this.selectedTheme = res;

            this.viewThemeDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateTheme(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTheme = new ThemeVo();
            this.createThemeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTheme(theme: ThemeVo){
       const isPermistted = await this.roleService.isPermitted('Theme', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Theme) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.themeService.delete(theme).subscribe(status=>{
                          if(status > 0){
                          const position = this.themes.indexOf(theme);
                          position > -1 ? this.themes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Theme Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateTheme(theme: ThemeVo) {

     this.themeService.findByIdWithAssociatedList(theme).subscribe(
	 res => {
	       this.initDuplicateTheme(res);
	       this.selectedTheme = res;
	       this.selectedTheme.id = null;


            this.createThemeDialog = true;

});

	}

	initDuplicateTheme(res: ThemeVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.themes.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTheme.libelle ? this.searchTheme.libelle : environment.emptyForExport ,
            'Code': this.searchTheme.code ? this.searchTheme.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get themes() : Array<ThemeVo> {
           return this.themeService.themes;
       }
    set themes(value: Array<ThemeVo>) {
        this.themeService.themes = value;
       }

    get themeSelections() : Array<ThemeVo> {
           return this.themeService.themeSelections;
       }
    set themeSelections(value: Array<ThemeVo>) {
        this.themeService.themeSelections = value;
       }
   
     


    get selectedTheme() : ThemeVo {
           return this.themeService.selectedTheme;
       }
    set selectedTheme(value: ThemeVo) {
        this.themeService.selectedTheme = value;
       }
    
    get createThemeDialog() :boolean {
           return this.themeService.createThemeDialog;
       }
    set createThemeDialog(value: boolean) {
        this.themeService.createThemeDialog= value;
       }
    
    get editThemeDialog() :boolean {
           return this.themeService.editThemeDialog;
       }
    set editThemeDialog(value: boolean) {
        this.themeService.editThemeDialog= value;
       }
    get viewThemeDialog() :boolean {
           return this.themeService.viewThemeDialog;
       }
    set viewThemeDialog(value: boolean) {
        this.themeService.viewThemeDialog = value;
       }
       
     get searchTheme() : ThemeVo {
        return this.themeService.searchTheme;
       }
    set searchTheme(value: ThemeVo) {
        this.themeService.searchTheme = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

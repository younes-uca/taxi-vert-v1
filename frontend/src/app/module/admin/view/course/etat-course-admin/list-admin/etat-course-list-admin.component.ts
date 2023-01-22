import {Component, OnInit} from '@angular/core';
import {EtatCourseService} from 'src/app/controller/service/EtatCourse.service';
import {EtatCourseVo} from 'src/app/controller/model/EtatCourse.model';
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
  selector: 'app-etat-course-list-admin',
  templateUrl: './etat-course-list-admin.component.html',
  styleUrls: ['./etat-course-list-admin.component.css']
})
export class EtatCourseListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'EtatCourse';


    constructor(private datePipe: DatePipe, private etatCourseService: EtatCourseService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadEtatCourses();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadEtatCourses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatCourse', 'list');
        isPermistted ? this.etatCourseService.findAll().subscribe(etatCourses => this.etatCourses = etatCourses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.etatCourseService.findByCriteria(this.searchEtatCourse).subscribe(etatCourses=>{
            
            this.etatCourses = etatCourses;
           // this.searchEtatCourse = new EtatCourseVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editEtatCourse(etatCourse: EtatCourseVo){
        const isPermistted = await this.roleService.isPermitted('EtatCourse', 'edit');
         if(isPermistted){
          this.etatCourseService.findByIdWithAssociatedList(etatCourse).subscribe(res => {
           this.selectedEtatCourse = res;

            this.editEtatCourseDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewEtatCourse(etatCourse: EtatCourseVo){
        const isPermistted = await this.roleService.isPermitted('EtatCourse', 'view');
        if(isPermistted){
           this.etatCourseService.findByIdWithAssociatedList(etatCourse).subscribe(res => {
           this.selectedEtatCourse = res;

            this.viewEtatCourseDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateEtatCourse(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEtatCourse = new EtatCourseVo();
            this.createEtatCourseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteEtatCourse(etatCourse: EtatCourseVo){
       const isPermistted = await this.roleService.isPermitted('EtatCourse', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Etat course) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etatCourseService.delete(etatCourse).subscribe(status=>{
                          if(status > 0){
                          const position = this.etatCourses.indexOf(etatCourse);
                          position > -1 ? this.etatCourses.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Etat course Supprimé',
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


public async duplicateEtatCourse(etatCourse: EtatCourseVo) {

     this.etatCourseService.findByIdWithAssociatedList(etatCourse).subscribe(
	 res => {
	       this.initDuplicateEtatCourse(res);
	       this.selectedEtatCourse = res;
	       this.selectedEtatCourse.id = null;


            this.createEtatCourseDialog = true;

});

	}

	initDuplicateEtatCourse(res: EtatCourseVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.etatCourses.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchEtatCourse.libelle ? this.searchEtatCourse.libelle : environment.emptyForExport ,
            'Code': this.searchEtatCourse.code ? this.searchEtatCourse.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get etatCourses() : Array<EtatCourseVo> {
           return this.etatCourseService.etatCourses;
       }
    set etatCourses(value: Array<EtatCourseVo>) {
        this.etatCourseService.etatCourses = value;
       }

    get etatCourseSelections() : Array<EtatCourseVo> {
           return this.etatCourseService.etatCourseSelections;
       }
    set etatCourseSelections(value: Array<EtatCourseVo>) {
        this.etatCourseService.etatCourseSelections = value;
       }
   
     


    get selectedEtatCourse() : EtatCourseVo {
           return this.etatCourseService.selectedEtatCourse;
       }
    set selectedEtatCourse(value: EtatCourseVo) {
        this.etatCourseService.selectedEtatCourse = value;
       }
    
    get createEtatCourseDialog() :boolean {
           return this.etatCourseService.createEtatCourseDialog;
       }
    set createEtatCourseDialog(value: boolean) {
        this.etatCourseService.createEtatCourseDialog= value;
       }
    
    get editEtatCourseDialog() :boolean {
           return this.etatCourseService.editEtatCourseDialog;
       }
    set editEtatCourseDialog(value: boolean) {
        this.etatCourseService.editEtatCourseDialog= value;
       }
    get viewEtatCourseDialog() :boolean {
           return this.etatCourseService.viewEtatCourseDialog;
       }
    set viewEtatCourseDialog(value: boolean) {
        this.etatCourseService.viewEtatCourseDialog = value;
       }
       
     get searchEtatCourse() : EtatCourseVo {
        return this.etatCourseService.searchEtatCourse;
       }
    set searchEtatCourse(value: EtatCourseVo) {
        this.etatCourseService.searchEtatCourse = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

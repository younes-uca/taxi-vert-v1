import {Component, OnInit} from '@angular/core';
import {VilleService} from 'src/app/controller/service/Ville.service';
import {VilleVo} from 'src/app/controller/model/Ville.model';
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
  selector: 'app-ville-list-client',
  templateUrl: './ville-list-client.component.html',
  styleUrls: ['./ville-list-client.component.css']
})
export class VilleListClientComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Ville';


    constructor(private datePipe: DatePipe, private villeService: VilleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadVilles();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadVilles(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Ville', 'list');
        isPermistted ? this.villeService.findAll().subscribe(villes => this.villes = villes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.villeService.findByCriteria(this.searchVille).subscribe(villes=>{
            
            this.villes = villes;
           // this.searchVille = new VilleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editVille(ville: VilleVo){
        const isPermistted = await this.roleService.isPermitted('Ville', 'edit');
         if(isPermistted){
          this.villeService.findByIdWithAssociatedList(ville).subscribe(res => {
           this.selectedVille = res;

            this.editVilleDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewVille(ville: VilleVo){
        const isPermistted = await this.roleService.isPermitted('Ville', 'view');
        if(isPermistted){
           this.villeService.findByIdWithAssociatedList(ville).subscribe(res => {
           this.selectedVille = res;

            this.viewVilleDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateVille(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedVille = new VilleVo();
            this.createVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteVille(ville: VilleVo){
       const isPermistted = await this.roleService.isPermitted('Ville', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Ville) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.villeService.delete(ville).subscribe(status=>{
                          if(status > 0){
                          const position = this.villes.indexOf(ville);
                          position > -1 ? this.villes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Ville Supprimé',
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


public async duplicateVille(ville: VilleVo) {

     this.villeService.findByIdWithAssociatedList(ville).subscribe(
	 res => {
	       this.initDuplicateVille(res);
	       this.selectedVille = res;
	       this.selectedVille.id = null;


            this.createVilleDialog = true;

});

	}

	initDuplicateVille(res: VilleVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.villes.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchVille.libelle ? this.searchVille.libelle : environment.emptyForExport ,
            'Code': this.searchVille.code ? this.searchVille.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get villes() : Array<VilleVo> {
           return this.villeService.villes;
       }
    set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }

    get villeSelections() : Array<VilleVo> {
           return this.villeService.villeSelections;
       }
    set villeSelections(value: Array<VilleVo>) {
        this.villeService.villeSelections = value;
       }
   
     


    get selectedVille() : VilleVo {
           return this.villeService.selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
    
    get createVilleDialog() :boolean {
           return this.villeService.createVilleDialog;
       }
    set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
       }
    
    get editVilleDialog() :boolean {
           return this.villeService.editVilleDialog;
       }
    set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog= value;
       }
    get viewVilleDialog() :boolean {
           return this.villeService.viewVilleDialog;
       }
    set viewVilleDialog(value: boolean) {
        this.villeService.viewVilleDialog = value;
       }
       
     get searchVille() : VilleVo {
        return this.villeService.searchVille;
       }
    set searchVille(value: VilleVo) {
        this.villeService.searchVille = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

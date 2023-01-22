import {Component, OnInit} from '@angular/core';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {OperateurVo} from 'src/app/controller/model/Operateur.model';
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
  selector: 'app-operateur-list-admin',
  templateUrl: './operateur-list-admin.component.html',
  styleUrls: ['./operateur-list-admin.component.css']
})
export class OperateurListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Operateur';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private operateurService: OperateurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadOperateurs();
      this.initExport();
      this.initCol();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadOperateurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Operateur', 'list');
        isPermistted ? this.operateurService.findAll().subscribe(operateurs => this.operateurs = operateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.operateurService.findByCriteria(this.searchOperateur).subscribe(operateurs=>{
            
            this.operateurs = operateurs;
           // this.searchOperateur = new OperateurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'description', header: 'Description'},
                            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
                            {field: 'enabled', header: 'Enabled'},
                            {field: 'accountNonExpired', header: 'Account non expired'},
                            {field: 'accountNonLocked', header: 'Account non locked'},
                            {field: 'passwordChanged', header: 'Password changed'},
                            {field: 'createdAt', header: 'Created at'},
                            {field: 'updatedAt', header: 'Updated at'},
                            {field: 'username', header: 'Username'},
                            {field: 'password', header: 'Password'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'nom', header: 'Nom'},
        ];
    }
    
    public async editOperateur(operateur: OperateurVo){
        const isPermistted = await this.roleService.isPermitted('Operateur', 'edit');
         if(isPermistted){
          this.operateurService.findByIdWithAssociatedList(operateur).subscribe(res => {
           this.selectedOperateur = res;
                        this.selectedOperateur.createdAt = new Date(operateur.createdAt);
                        this.selectedOperateur.updatedAt = new Date(operateur.updatedAt);

            this.editOperateurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewOperateur(operateur: OperateurVo){
        const isPermistted = await this.roleService.isPermitted('Operateur', 'view');
        if(isPermistted){
           this.operateurService.findByIdWithAssociatedList(operateur).subscribe(res => {
           this.selectedOperateur = res;
                this.selectedOperateur.createdAt = new Date(operateur.createdAt);
                this.selectedOperateur.updatedAt = new Date(operateur.updatedAt);

            this.viewOperateurDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateOperateur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedOperateur = new OperateurVo();
            this.createOperateurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteOperateur(operateur: OperateurVo){
       const isPermistted = await this.roleService.isPermitted('Operateur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Operateur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.operateurService.delete(operateur).subscribe(status=>{
                          if(status > 0){
                          const position = this.operateurs.indexOf(operateur);
                          position > -1 ? this.operateurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Operateur Supprimé',
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


public async duplicateOperateur(operateur: OperateurVo) {

     this.operateurService.findByIdWithAssociatedList(operateur).subscribe(
	 res => {
	       this.initDuplicateOperateur(res);
	       this.selectedOperateur = res;
	       this.selectedOperateur.id = null;


            this.createOperateurDialog = true;

});

	}

	initDuplicateOperateur(res: OperateurVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.operateurs.map(e => {
    return {
                    'Description': e.description ,
                    'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                    'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                    'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                    'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                    'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                    'Created at': this.datePipe.transform(e.createdAt , 'dd/MM/yyyy hh:mm'),
                    'Updated at': this.datePipe.transform(e.updatedAt , 'dd/MM/yyyy hh:mm'),
                    'Username': e.username ,
                    'Password': e.password ,
                    'Prenom': e.prenom ,
                    'Nom': e.nom ,
     }
      });

      this.criteriaData = [{
            'Description': this.searchOperateur.description ? this.searchOperateur.description : environment.emptyForExport ,
            'Credentials non expired': this.searchOperateur.credentialsNonExpired ? (this.searchOperateur.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchOperateur.enabled ? (this.searchOperateur.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchOperateur.accountNonExpired ? (this.searchOperateur.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchOperateur.accountNonLocked ? (this.searchOperateur.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchOperateur.passwordChanged ? (this.searchOperateur.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchOperateur.createdAtMin ? this.datePipe.transform(this.searchOperateur.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchOperateur.createdAtMax ? this.datePipe.transform(this.searchOperateur.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchOperateur.updatedAtMin ? this.datePipe.transform(this.searchOperateur.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchOperateur.updatedAtMax ? this.datePipe.transform(this.searchOperateur.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchOperateur.username ? this.searchOperateur.username : environment.emptyForExport ,
            'Password': this.searchOperateur.password ? this.searchOperateur.password : environment.emptyForExport ,
            'Prenom': this.searchOperateur.prenom ? this.searchOperateur.prenom : environment.emptyForExport ,
            'Nom': this.searchOperateur.nom ? this.searchOperateur.nom : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get operateurs() : Array<OperateurVo> {
           return this.operateurService.operateurs;
       }
    set operateurs(value: Array<OperateurVo>) {
        this.operateurService.operateurs = value;
       }

    get operateurSelections() : Array<OperateurVo> {
           return this.operateurService.operateurSelections;
       }
    set operateurSelections(value: Array<OperateurVo>) {
        this.operateurService.operateurSelections = value;
       }
   
     


    get selectedOperateur() : OperateurVo {
           return this.operateurService.selectedOperateur;
       }
    set selectedOperateur(value: OperateurVo) {
        this.operateurService.selectedOperateur = value;
       }
    
    get createOperateurDialog() :boolean {
           return this.operateurService.createOperateurDialog;
       }
    set createOperateurDialog(value: boolean) {
        this.operateurService.createOperateurDialog= value;
       }
    
    get editOperateurDialog() :boolean {
           return this.operateurService.editOperateurDialog;
       }
    set editOperateurDialog(value: boolean) {
        this.operateurService.editOperateurDialog= value;
       }
    get viewOperateurDialog() :boolean {
           return this.operateurService.viewOperateurDialog;
       }
    set viewOperateurDialog(value: boolean) {
        this.operateurService.viewOperateurDialog = value;
       }
       
     get searchOperateur() : OperateurVo {
        return this.operateurService.searchOperateur;
       }
    set searchOperateur(value: OperateurVo) {
        this.operateurService.searchOperateur = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

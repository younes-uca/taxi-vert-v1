import {Component, OnInit} from '@angular/core';
import {BlackListClientService} from 'src/app/controller/service/BlackListClient.service';
import {BlackListClientVo} from 'src/app/controller/model/BlackListClient.model';
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
  selector: 'app-black-list-client-list-chauffeur',
  templateUrl: './black-list-client-list-chauffeur.component.html',
  styleUrls: ['./black-list-client-list-chauffeur.component.css']
})
export class BlackListClientListChauffeurComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'BlackListClient';


    constructor(private datePipe: DatePipe, private blackListClientService: BlackListClientService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadBlackListClients();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadBlackListClients(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('BlackListClient', 'list');
        isPermistted ? this.blackListClientService.findAll().subscribe(blackListClients => this.blackListClients = blackListClients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.blackListClientService.findByCriteria(this.searchBlackListClient).subscribe(blackListClients=>{
            
            this.blackListClients = blackListClients;
           // this.searchBlackListClient = new BlackListClientVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'chauffeur', header: 'Chauffeur'},
                            {field: 'client', header: 'Client'},
                            {field: 'dateBlackList', header: 'Date black list'},
                            {field: 'commentaire', header: 'Commentaire'},
        ];
    }
    
    public async editBlackListClient(blackListClient: BlackListClientVo){
        const isPermistted = await this.roleService.isPermitted('BlackListClient', 'edit');
         if(isPermistted){
          this.blackListClientService.findByIdWithAssociatedList(blackListClient).subscribe(res => {
           this.selectedBlackListClient = res;

            this.editBlackListClientDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewBlackListClient(blackListClient: BlackListClientVo){
        const isPermistted = await this.roleService.isPermitted('BlackListClient', 'view');
        if(isPermistted){
           this.blackListClientService.findByIdWithAssociatedList(blackListClient).subscribe(res => {
           this.selectedBlackListClient = res;

            this.viewBlackListClientDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    }
    
    public async openCreateBlackListClient(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedBlackListClient = new BlackListClientVo();
            this.createBlackListClientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteBlackListClient(blackListClient: BlackListClientVo){
       const isPermistted = await this.roleService.isPermitted('BlackListClient', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Black list client) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.blackListClientService.delete(blackListClient).subscribe(status=>{
                          if(status > 0){
                          const position = this.blackListClients.indexOf(blackListClient);
                          position > -1 ? this.blackListClients.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Black list client Supprimé',
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


public async duplicateBlackListClient(blackListClient: BlackListClientVo) {

     this.blackListClientService.findByIdWithAssociatedList(blackListClient).subscribe(
	 res => {
	       this.initDuplicateBlackListClient(res);
	       this.selectedBlackListClient = res;
	       this.selectedBlackListClient.id = null;


            this.createBlackListClientDialog = true;

});

	}

	initDuplicateBlackListClient(res: BlackListClientVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.blackListClients.map(e => {
    return {
                    'Chauffeur': e.chauffeur ,
                    'Client': e.client ,
                    'Date black list': e.dateBlackList ,
                    'Commentaire': e.commentaire ,
     }
      });

      this.criteriaData = [{
            'Chauffeur': this.searchBlackListClient.chauffeur ? this.searchBlackListClient.chauffeur : environment.emptyForExport ,
            'Client': this.searchBlackListClient.client ? this.searchBlackListClient.client : environment.emptyForExport ,
            'Date black list': this.searchBlackListClient.dateBlackList ? this.searchBlackListClient.dateBlackList : environment.emptyForExport ,
            'Commentaire': this.searchBlackListClient.commentaire ? this.searchBlackListClient.commentaire : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get blackListClients() : Array<BlackListClientVo> {
           return this.blackListClientService.blackListClients;
       }
    set blackListClients(value: Array<BlackListClientVo>) {
        this.blackListClientService.blackListClients = value;
       }

    get blackListClientSelections() : Array<BlackListClientVo> {
           return this.blackListClientService.blackListClientSelections;
       }
    set blackListClientSelections(value: Array<BlackListClientVo>) {
        this.blackListClientService.blackListClientSelections = value;
       }
   
     


    get selectedBlackListClient() : BlackListClientVo {
           return this.blackListClientService.selectedBlackListClient;
       }
    set selectedBlackListClient(value: BlackListClientVo) {
        this.blackListClientService.selectedBlackListClient = value;
       }
    
    get createBlackListClientDialog() :boolean {
           return this.blackListClientService.createBlackListClientDialog;
       }
    set createBlackListClientDialog(value: boolean) {
        this.blackListClientService.createBlackListClientDialog= value;
       }
    
    get editBlackListClientDialog() :boolean {
           return this.blackListClientService.editBlackListClientDialog;
       }
    set editBlackListClientDialog(value: boolean) {
        this.blackListClientService.editBlackListClientDialog= value;
       }
    get viewBlackListClientDialog() :boolean {
           return this.blackListClientService.viewBlackListClientDialog;
       }
    set viewBlackListClientDialog(value: boolean) {
        this.blackListClientService.viewBlackListClientDialog = value;
       }
       
     get searchBlackListClient() : BlackListClientVo {
        return this.blackListClientService.searchBlackListClient;
       }
    set searchBlackListClient(value: BlackListClientVo) {
        this.blackListClientService.searchBlackListClient = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}

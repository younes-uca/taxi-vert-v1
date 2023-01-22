import {MoyenTransportVo} from './MoyenTransport.model';
import {SecteurVo} from './Secteur.model';
import {EtatCourseVo} from './EtatCourse.model';
import {OperateurVo} from './Operateur.model';
import {ChauffeurVo} from './Chauffeur.model';
import {ClientVo} from './Client.model';



export class CourseVo {

    public id: number;

     public nombrePlace: number;
    public telephone: string;
    public commentaire: string;
    public noteInterne: string;
    public adresseDepart: string;
    public noteDepart: string;
     public altitudeDepart: number;
     public longitudeDepart: number;
    public adresseArrive: string;
    public noteArrive: string;
     public altitudeArrive: number;
     public longitudeArrive: number;
                public dateDemandeCourseMax: string ;
                public dateDemandeCourseMin: string ;
                public dateReponseChauffeurMax: string ;
                public dateReponseChauffeurMin: string ;
                public dateArriveChauffeurMax: string ;
                public dateArriveChauffeurMin: string ;
                public dateArriveClientMax: string ;
                public dateArriveClientMin: string ;
                public nombrePlaceMax: string ;
                public nombrePlaceMin: string ;
                public altitudeDepartMax: string ;
                public altitudeDepartMin: string ;
                public longitudeDepartMax: string ;
                public longitudeDepartMin: string ;
                public altitudeArriveMax: string ;
                public altitudeArriveMin: string ;
                public longitudeArriveMax: string ;
                public longitudeArriveMin: string ;
      public secteurSourceVo: SecteurVo ;
      public secteurDestinationVo: SecteurVo ;
      public moyenTransportVo: MoyenTransportVo ;
      public operateurVo: OperateurVo ;
      public clientVo: ClientVo ;
      public chauffeurVo: ChauffeurVo ;
      public etatCourseVo: EtatCourseVo ;

}

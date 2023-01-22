import {ModelApplicationVo} from './ModelApplication.model';
import {MoyenTransportVo} from './MoyenTransport.model';
import {EtatChauffeurVo} from './EtatChauffeur.model';
import {LangueVo} from './Langue.model';
import {MarqueVoitureVo} from './MarqueVoiture.model';
import {ThemeVo} from './Theme.model';
import {MarqueTelephoneVo} from './MarqueTelephone.model';
import {VilleVo} from './Ville.model';
import {User} from './User.model';



export class ChauffeurVo  extends User{


    public matricule: string;
    public mobile: string;
    public codePostale: string;
     public nombrePlace: number;
    public imageVoiture: string;
     public orderAffichage: number;
     public altitudeActuelle: number;
     public longitudeActuelle: number;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public createdAt: Date;
    public updatedAt: Date;
    public username: string;
    public password: string;
    public prenom: string;
    public nom: string;
                public nombrePlaceMax: string ;
                public nombrePlaceMin: string ;
                public orderAffichageMax: string ;
                public orderAffichageMin: string ;
                public altitudeActuelleMax: string ;
                public altitudeActuelleMin: string ;
                public longitudeActuelleMax: string ;
                public longitudeActuelleMin: string ;
                public createdAtMax: string ;
                public createdAtMin: string ;
                public updatedAtMax: string ;
                public updatedAtMin: string ;
      public moyenTransportVo: MoyenTransportVo ;
      public modelApplicationVo: ModelApplicationVo ;
      public marqueTelephoneVo: MarqueTelephoneVo ;
      public marqueVoitureVo: MarqueVoitureVo ;
      public etatChauffeurVo: EtatChauffeurVo ;
      public villeVo: VilleVo ;
      public langueVo: LangueVo ;
      public themeVo: ThemeVo ;

}

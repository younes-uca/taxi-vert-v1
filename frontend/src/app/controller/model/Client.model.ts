import {LangueVo} from './Langue.model';
import {ThemeVo} from './Theme.model';
import {User} from './User.model';



export class ClientVo  extends User{


    public description: string;
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
                public createdAtMax: string ;
                public createdAtMin: string ;
                public updatedAtMax: string ;
                public updatedAtMin: string ;
      public langueVo: LangueVo ;
      public themeVo: ThemeVo ;

}

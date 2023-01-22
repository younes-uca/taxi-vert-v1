package  ma.zsmart.taxi.ws.dto;

import ma.zsmart.taxi.zynerator.audit.Log;
import ma.zsmart.taxi.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class SecteurDto  extends AuditBaseDto {

    private String libelle  ;
    private String code  ;

    private VilleDto ville ;


    public SecteurDto(){
        super();
    }



    @Log
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
         this.libelle = libelle;
    }

    @Log
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
         this.code = code;
    }


    public VilleDto getVille(){
        return this.ville;
    }

    public void setVilleDto(VilleDto ville){
        this.ville = ville;
    }


}

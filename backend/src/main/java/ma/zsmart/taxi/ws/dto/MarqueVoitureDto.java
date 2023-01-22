package  ma.zsmart.taxi.ws.dto;

import ma.zsmart.taxi.zynerator.audit.Log;
import ma.zsmart.taxi.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class MarqueVoitureDto  extends AuditBaseDto {

    private String libelle  ;
    private String code  ;
    private Boolean actif  ;



    public MarqueVoitureDto(){
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

    @Log
    public Boolean getActif(){
        return this.actif;
    }
    public void setActif(Boolean actif){
         this.actif = actif;
    }




}

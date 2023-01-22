package  ma.zsmart.taxi.ws.dto;

import ma.zsmart.taxi.zynerator.audit.Log;
import ma.zsmart.taxi.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class MarqueTelephoneDto  extends AuditBaseDto {

    private String libelle  ;
    private String code  ;



    public MarqueTelephoneDto(){
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




}

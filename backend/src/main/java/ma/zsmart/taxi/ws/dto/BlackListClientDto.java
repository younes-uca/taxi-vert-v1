package  ma.zsmart.taxi.ws.dto;

import ma.zsmart.taxi.zynerator.audit.Log;
import ma.zsmart.taxi.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class BlackListClientDto  extends AuditBaseDto {

    private String chauffeur  ;
    private String client  ;
    private String dateBlackList ;
    private String commentaire  ;



    public BlackListClientDto(){
        super();
    }



    @Log
    public String getChauffeur(){
        return this.chauffeur;
    }
    public void setChauffeur(String chauffeur){
         this.chauffeur = chauffeur;
    }

    @Log
    public String getClient(){
        return this.client;
    }
    public void setClient(String client){
         this.client = client;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateBlackList(){
        return this.dateBlackList;
    }
    public void setDateBlackList(String dateBlackList){
        this.dateBlackList = dateBlackList;
    }

    @Log
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
         this.commentaire = commentaire;
    }




}

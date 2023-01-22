package  ma.zsmart.taxi.dao.criteria.core;


import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import com.fasterxml.jackson.annotation.JsonFormat;
import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import java.time.LocalDateTime;

public class BlackListChauffeurCriteria extends BaseCriteria {

    private String chauffeur;
    private String chauffeurLike;
    private String client;
    private String clientLike;
    private LocalDateTime dateBlackList;
    private LocalDateTime dateBlackListFrom;
    private LocalDateTime dateBlackListTo;
    private String commentaire;
    private String commentaireLike;



    public BlackListChauffeurCriteria(){}

    public String getChauffeur(){
        return this.chauffeur;
    }
    public void setChauffeur(String chauffeur){
        this.chauffeur = chauffeur;
    }
    public String getChauffeurLike(){
        return this.chauffeurLike;
    }
    public void setChauffeurLike(String chauffeurLike){
        this.chauffeurLike = chauffeurLike;
    }

    public String getClient(){
        return this.client;
    }
    public void setClient(String client){
        this.client = client;
    }
    public String getClientLike(){
        return this.clientLike;
    }
    public void setClientLike(String clientLike){
        this.clientLike = clientLike;
    }

    public LocalDateTime getDateBlackList(){
        return this.dateBlackList;
    }
    public void setDateBlackList(LocalDateTime dateBlackList){
        this.dateBlackList = dateBlackList;
    }
    public LocalDateTime getDateBlackListFrom(){
        return this.dateBlackListFrom;
    }
    public void setDateBlackListFrom(LocalDateTime dateBlackListFrom){
        this.dateBlackListFrom = dateBlackListFrom;
    }
    public LocalDateTime getDateBlackListTo(){
        return this.dateBlackListFrom;
    }
    public void setDateBlackListTo(LocalDateTime dateBlackListTo){
        this.dateBlackListTo = dateBlackListTo;
    }
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }
    public String getCommentaireLike(){
        return this.commentaireLike;
    }
    public void setCommentaireLike(String commentaireLike){
        this.commentaireLike = commentaireLike;
    }




    }

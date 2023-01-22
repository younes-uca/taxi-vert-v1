package  ma.zsmart.taxi.dao.criteria.core;


import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;

public class SecteurCriteria extends BaseCriteria {

    private String libelle;
    private String libelleLike;
    private String code;
    private String codeLike;

    private Long villeId ;


    public SecteurCriteria(){}

    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getLibelleLike(){
        return this.libelleLike;
    }
    public void setLibelleLike(String libelleLike){
        this.libelleLike = libelleLike;
    }

    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getCodeLike(){
        return this.codeLike;
    }
    public void setCodeLike(String codeLike){
        this.codeLike = codeLike;
    }



    public Long getVilleId(){
        return this.id;
    }

    public void setVilleId(Long id){
        this.id = id;
    }




    }

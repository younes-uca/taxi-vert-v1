package  ma.zsmart.taxi.dao.criteria.core;


import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import java.math.BigDecimal;

public class ChauffeurCriteria extends BaseCriteria {

    private String matricule;
    private String matriculeLike;
    private String mobile;
    private String mobileLike;
    private String codePostale;
    private String codePostaleLike;
    private String nombrePlace;
    private String imageVoiture;
    private String imageVoitureLike;
    private String orderAffichage;
    private String altitudeActuelle;
    private String longitudeActuelle;
    private Boolean credentialsNonExpired;
    private Boolean enabled;
    private Boolean accountNonExpired;
    private Boolean accountNonLocked;
    private Boolean passwordChanged;
    private String createdAt;
    private String createdAtLike;
    private String updatedAt;
    private String updatedAtLike;
    private String username;
    private String usernameLike;
    private String password;
    private String passwordLike;
    private String prenom;
    private String prenomLike;
    private String nom;
    private String nomLike;

    private Long moyenTransportId ;
    private Long modelApplicationId ;
    private Long marqueTelephoneId ;
    private Long marqueVoitureId ;
    private Long etatChauffeurId ;
    private Long villeId ;
    private Long langueId ;
    private Long themeId ;


    public ChauffeurCriteria(){}

    public String getMatricule(){
        return this.matricule;
    }
    public void setMatricule(String matricule){
        this.matricule = matricule;
    }
    public String getMatriculeLike(){
        return this.matriculeLike;
    }
    public void setMatriculeLike(String matriculeLike){
        this.matriculeLike = matriculeLike;
    }

    public String getMobile(){
        return this.mobile;
    }
    public void setMobile(String mobile){
        this.mobile = mobile;
    }
    public String getMobileLike(){
        return this.mobileLike;
    }
    public void setMobileLike(String mobileLike){
        this.mobileLike = mobileLike;
    }

    public String getCodePostale(){
        return this.codePostale;
    }
    public void setCodePostale(String codePostale){
        this.codePostale = codePostale;
    }
    public String getCodePostaleLike(){
        return this.codePostaleLike;
    }
    public void setCodePostaleLike(String codePostaleLike){
        this.codePostaleLike = codePostaleLike;
    }

    public String getNombrePlace(){
        return this.nombrePlace;
    }
    public void setNombrePlace(String nombrePlace){
        this.nombrePlace = nombrePlace;
    }
    public String getImageVoiture(){
        return this.imageVoiture;
    }
    public void setImageVoiture(String imageVoiture){
        this.imageVoiture = imageVoiture;
    }
    public String getImageVoitureLike(){
        return this.imageVoitureLike;
    }
    public void setImageVoitureLike(String imageVoitureLike){
        this.imageVoitureLike = imageVoitureLike;
    }

    public String getOrderAffichage(){
        return this.orderAffichage;
    }
    public void setOrderAffichage(String orderAffichage){
        this.orderAffichage = orderAffichage;
    }
    public String getAltitudeActuelle(){
        return this.altitudeActuelle;
    }
    public void setAltitudeActuelle(String altitudeActuelle){
        this.altitudeActuelle = altitudeActuelle;
    }
    public String getLongitudeActuelle(){
        return this.longitudeActuelle;
    }
    public void setLongitudeActuelle(String longitudeActuelle){
        this.longitudeActuelle = longitudeActuelle;
    }
    public Boolean getCredentialsNonExpired(){
        return this.credentialsNonExpired;
    }
    public void setCredentialsNonExpired(Boolean credentialsNonExpired){
        this.credentialsNonExpired = credentialsNonExpired;
    }
    public Boolean getEnabled(){
        return this.enabled;
    }
    public void setEnabled(Boolean enabled){
        this.enabled = enabled;
    }
    public Boolean getAccountNonExpired(){
        return this.accountNonExpired;
    }
    public void setAccountNonExpired(Boolean accountNonExpired){
        this.accountNonExpired = accountNonExpired;
    }
    public Boolean getAccountNonLocked(){
        return this.accountNonLocked;
    }
    public void setAccountNonLocked(Boolean accountNonLocked){
        this.accountNonLocked = accountNonLocked;
    }
    public Boolean getPasswordChanged(){
        return this.passwordChanged;
    }
    public void setPasswordChanged(Boolean passwordChanged){
        this.passwordChanged = passwordChanged;
    }
    public String getCreatedAt(){
        return this.createdAt;
    }
    public void setCreatedAt(String createdAt){
        this.createdAt = createdAt;
    }
    public String getCreatedAtLike(){
        return this.createdAtLike;
    }
    public void setCreatedAtLike(String createdAtLike){
        this.createdAtLike = createdAtLike;
    }

    public String getUpdatedAt(){
        return this.updatedAt;
    }
    public void setUpdatedAt(String updatedAt){
        this.updatedAt = updatedAt;
    }
    public String getUpdatedAtLike(){
        return this.updatedAtLike;
    }
    public void setUpdatedAtLike(String updatedAtLike){
        this.updatedAtLike = updatedAtLike;
    }

    public String getUsername(){
        return this.username;
    }
    public void setUsername(String username){
        this.username = username;
    }
    public String getUsernameLike(){
        return this.usernameLike;
    }
    public void setUsernameLike(String usernameLike){
        this.usernameLike = usernameLike;
    }

    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public String getPasswordLike(){
        return this.passwordLike;
    }
    public void setPasswordLike(String passwordLike){
        this.passwordLike = passwordLike;
    }

    public String getPrenom(){
        return this.prenom;
    }
    public void setPrenom(String prenom){
        this.prenom = prenom;
    }
    public String getPrenomLike(){
        return this.prenomLike;
    }
    public void setPrenomLike(String prenomLike){
        this.prenomLike = prenomLike;
    }

    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    public String getNomLike(){
        return this.nomLike;
    }
    public void setNomLike(String nomLike){
        this.nomLike = nomLike;
    }



    public Long getMoyenTransportId(){
        return this.id;
    }

    public void setMoyenTransportId(Long id){
        this.id = id;
    }



    public Long getModelApplicationId(){
        return this.id;
    }

    public void setModelApplicationId(Long id){
        this.id = id;
    }



    public Long getMarqueTelephoneId(){
        return this.id;
    }

    public void setMarqueTelephoneId(Long id){
        this.id = id;
    }



    public Long getMarqueVoitureId(){
        return this.id;
    }

    public void setMarqueVoitureId(Long id){
        this.id = id;
    }



    public Long getEtatChauffeurId(){
        return this.id;
    }

    public void setEtatChauffeurId(Long id){
        this.id = id;
    }



    public Long getVilleId(){
        return this.id;
    }

    public void setVilleId(Long id){
        this.id = id;
    }



    public Long getLangueId(){
        return this.id;
    }

    public void setLangueId(Long id){
        this.id = id;
    }



    public Long getThemeId(){
        return this.id;
    }

    public void setThemeId(Long id){
        this.id = id;
    }




    }

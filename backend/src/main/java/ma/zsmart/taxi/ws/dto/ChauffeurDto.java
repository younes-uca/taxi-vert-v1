package  ma.zsmart.taxi.ws.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import ma.zsmart.taxi.zynerator.audit.Log;
import ma.zsmart.taxi.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class ChauffeurDto  extends AuditBaseDto {

    private String matricule  ;
    private String mobile  ;
    private String codePostale  ;
    private Integer nombrePlace  = 0 ;
    private String imageVoiture  ;
    private Integer orderAffichage  = 0 ;
    private BigDecimal altitudeActuelle  ;
    private BigDecimal longitudeActuelle  ;
    private Boolean credentialsNonExpired  ;
    private Boolean enabled  ;
    private Boolean accountNonExpired  ;
    private Boolean accountNonLocked  ;
    private Boolean passwordChanged  ;
    private String createdAt ;
    private String updatedAt ;
    private String username  ;
    private String password  ;
    private String prenom  ;
    private String nom  ;

    private MoyenTransportDto moyenTransport ;
    private ModelApplicationDto modelApplication ;
    private MarqueTelephoneDto marqueTelephone ;
    private MarqueVoitureDto marqueVoiture ;
    private EtatChauffeurDto etatChauffeur ;
    private VilleDto ville ;
    private LangueDto langue ;
    private ThemeDto theme ;


    public ChauffeurDto(){
        super();
    }



    @Log
    public String getMatricule(){
        return this.matricule;
    }
    public void setMatricule(String matricule){
         this.matricule = matricule;
    }

    @Log
    public String getMobile(){
        return this.mobile;
    }
    public void setMobile(String mobile){
         this.mobile = mobile;
    }

    @Log
    public String getCodePostale(){
        return this.codePostale;
    }
    public void setCodePostale(String codePostale){
         this.codePostale = codePostale;
    }

    @Log
    public Integer getNombrePlace(){
        return this.nombrePlace;
    }
    public void setNombrePlace(Integer nombrePlace){
         this.nombrePlace = nombrePlace;
    }

    @Log
    public String getImageVoiture(){
        return this.imageVoiture;
    }
    public void setImageVoiture(String imageVoiture){
         this.imageVoiture = imageVoiture;
    }

    @Log
    public Integer getOrderAffichage(){
        return this.orderAffichage;
    }
    public void setOrderAffichage(Integer orderAffichage){
         this.orderAffichage = orderAffichage;
    }

    @Log
    public BigDecimal getAltitudeActuelle(){
        return this.altitudeActuelle;
    }
    public void setAltitudeActuelle(BigDecimal altitudeActuelle){
         this.altitudeActuelle = altitudeActuelle;
    }

    @Log
    public BigDecimal getLongitudeActuelle(){
        return this.longitudeActuelle;
    }
    public void setLongitudeActuelle(BigDecimal longitudeActuelle){
         this.longitudeActuelle = longitudeActuelle;
    }

    @Log
    public Boolean getCredentialsNonExpired(){
        return this.credentialsNonExpired;
    }
    public void setCredentialsNonExpired(Boolean credentialsNonExpired){
         this.credentialsNonExpired = credentialsNonExpired;
    }

    @Log
    public Boolean getEnabled(){
        return this.enabled;
    }
    public void setEnabled(Boolean enabled){
         this.enabled = enabled;
    }

    @Log
    public Boolean getAccountNonExpired(){
        return this.accountNonExpired;
    }
    public void setAccountNonExpired(Boolean accountNonExpired){
         this.accountNonExpired = accountNonExpired;
    }

    @Log
    public Boolean getAccountNonLocked(){
        return this.accountNonLocked;
    }
    public void setAccountNonLocked(Boolean accountNonLocked){
         this.accountNonLocked = accountNonLocked;
    }

    @Log
    public Boolean getPasswordChanged(){
        return this.passwordChanged;
    }
    public void setPasswordChanged(Boolean passwordChanged){
         this.passwordChanged = passwordChanged;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getCreatedAt(){
        return this.createdAt;
    }
    public void setCreatedAt(String createdAt){
        this.createdAt = createdAt;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getUpdatedAt(){
        return this.updatedAt;
    }
    public void setUpdatedAt(String updatedAt){
        this.updatedAt = updatedAt;
    }

    @Log
    public String getUsername(){
        return this.username;
    }
    public void setUsername(String username){
         this.username = username;
    }

    @Log
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password){
         this.password = password;
    }

    @Log
    public String getPrenom(){
        return this.prenom;
    }
    public void setPrenom(String prenom){
         this.prenom = prenom;
    }

    @Log
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
         this.nom = nom;
    }


    public MoyenTransportDto getMoyenTransport(){
        return this.moyenTransport;
    }

    public void setMoyenTransportDto(MoyenTransportDto moyenTransport){
        this.moyenTransport = moyenTransport;
    }
    public ModelApplicationDto getModelApplication(){
        return this.modelApplication;
    }

    public void setModelApplicationDto(ModelApplicationDto modelApplication){
        this.modelApplication = modelApplication;
    }
    public MarqueTelephoneDto getMarqueTelephone(){
        return this.marqueTelephone;
    }

    public void setMarqueTelephoneDto(MarqueTelephoneDto marqueTelephone){
        this.marqueTelephone = marqueTelephone;
    }
    public MarqueVoitureDto getMarqueVoiture(){
        return this.marqueVoiture;
    }

    public void setMarqueVoitureDto(MarqueVoitureDto marqueVoiture){
        this.marqueVoiture = marqueVoiture;
    }
    public EtatChauffeurDto getEtatChauffeur(){
        return this.etatChauffeur;
    }

    public void setEtatChauffeurDto(EtatChauffeurDto etatChauffeur){
        this.etatChauffeur = etatChauffeur;
    }
    public VilleDto getVille(){
        return this.ville;
    }

    public void setVilleDto(VilleDto ville){
        this.ville = ville;
    }
    public LangueDto getLangue(){
        return this.langue;
    }

    public void setLangueDto(LangueDto langue){
        this.langue = langue;
    }
    public ThemeDto getTheme(){
        return this.theme;
    }

    public void setThemeDto(ThemeDto theme){
        this.theme = theme;
    }


}

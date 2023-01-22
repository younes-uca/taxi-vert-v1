package ma.zsmart.taxi.bean.core;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.security.bean.User;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Objects;


@Entity
@Table(name = "chauffeur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name = "chauffeur_seq", sequenceName = "chauffeur_seq", allocationSize = 1, initialValue = 1)
public class Chauffeur extends User {


    public Chauffeur(String username) {
        super(username);
    }

    @Column(length = 500)
    private String matricule;
    @Column(length = 500)
    private String mobile;
    @Column(length = 500)
    private String codePostale;
    private Integer nombrePlace = 0;
    @Column(length = 500)
    private String imageVoiture;
    private Integer orderAffichage = 0;
    private BigDecimal altitudeActuelle = BigDecimal.ZERO;
    private BigDecimal longitudeActuelle = BigDecimal.ZERO;
    @Column(columnDefinition = "boolean default false")
    private boolean credentialsNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private boolean enabled = false;
    @Column(columnDefinition = "boolean default false")
    private boolean accountNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private boolean accountNonLocked = false;
    @Column(columnDefinition = "boolean default false")
    private boolean passwordChanged = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date updatedAt;
    @Column(length = 500)
    private String username;
    @Column(length = 500)
    private String password;
    @Column(length = 500)
    private String prenom;
    @Column(length = 500)
    private String nom;

    @ManyToOne(fetch = FetchType.LAZY)
    private MoyenTransport moyenTransport;
    @ManyToOne(fetch = FetchType.LAZY)
    private ModelApplication modelApplication;
    @ManyToOne(fetch = FetchType.LAZY)
    private MarqueTelephone marqueTelephone;
    @ManyToOne(fetch = FetchType.LAZY)
    private MarqueVoiture marqueVoiture;
    @ManyToOne(fetch = FetchType.LAZY)
    private EtatChauffeur etatChauffeur;
    @ManyToOne(fetch = FetchType.LAZY)
    private Ville ville;
    @ManyToOne(fetch = FetchType.LAZY)
    private Langue langue;
    @ManyToOne(fetch = FetchType.LAZY)
    private Theme theme;


    public Chauffeur() {
        super();
    }


    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chauffeur_seq")
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMatricule() {
        return this.matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getMobile() {
        return this.mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public MoyenTransport getMoyenTransport() {
        return this.moyenTransport;
    }

    public void setMoyenTransport(MoyenTransport moyenTransport) {
        this.moyenTransport = moyenTransport;
    }

    public ModelApplication getModelApplication() {
        return this.modelApplication;
    }

    public void setModelApplication(ModelApplication modelApplication) {
        this.modelApplication = modelApplication;
    }

    public MarqueTelephone getMarqueTelephone() {
        return this.marqueTelephone;
    }

    public void setMarqueTelephone(MarqueTelephone marqueTelephone) {
        this.marqueTelephone = marqueTelephone;
    }

    public MarqueVoiture getMarqueVoiture() {
        return this.marqueVoiture;
    }

    public void setMarqueVoiture(MarqueVoiture marqueVoiture) {
        this.marqueVoiture = marqueVoiture;
    }

    public EtatChauffeur getEtatChauffeur() {
        return this.etatChauffeur;
    }

    public void setEtatChauffeur(EtatChauffeur etatChauffeur) {
        this.etatChauffeur = etatChauffeur;
    }

    public Ville getVille() {
        return this.ville;
    }

    public void setVille(Ville ville) {
        this.ville = ville;
    }

    public String getCodePostale() {
        return this.codePostale;
    }

    public void setCodePostale(String codePostale) {
        this.codePostale = codePostale;
    }

    public Integer getNombrePlace() {
        return this.nombrePlace;
    }

    public void setNombrePlace(Integer nombrePlace) {
        this.nombrePlace = nombrePlace;
    }

    public String getImageVoiture() {
        return this.imageVoiture;
    }

    public void setImageVoiture(String imageVoiture) {
        this.imageVoiture = imageVoiture;
    }

    public Integer getOrderAffichage() {
        return this.orderAffichage;
    }

    public void setOrderAffichage(Integer orderAffichage) {
        this.orderAffichage = orderAffichage;
    }

    public BigDecimal getAltitudeActuelle() {
        return this.altitudeActuelle;
    }

    public void setAltitudeActuelle(BigDecimal altitudeActuelle) {
        this.altitudeActuelle = altitudeActuelle;
    }

    public BigDecimal getLongitudeActuelle() {
        return this.longitudeActuelle;
    }

    public void setLongitudeActuelle(BigDecimal longitudeActuelle) {
        this.longitudeActuelle = longitudeActuelle;
    }

    public Langue getLangue() {
        return this.langue;
    }

    public void setLangue(Langue langue) {
        this.langue = langue;
    }

    public Theme getTheme() {
        return this.theme;
    }

    public void setTheme(Theme theme) {
        this.theme = theme;
    }

    public boolean getCredentialsNonExpired() {
        return this.credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean getAccountNonExpired() {
        return this.accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public boolean getAccountNonLocked() {
        return this.accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public boolean getPasswordChanged() {
        return this.passwordChanged;
    }

    public void setPasswordChanged(boolean passwordChanged) {
        this.passwordChanged = passwordChanged;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Chauffeur chauffeur = (Chauffeur) o;
        return id != null && id.equals(chauffeur.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}


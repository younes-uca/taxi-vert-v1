package ma.zsmart.taxi.bean.core;

import java.util.Objects;

import java.time.LocalDateTime;


import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;




@Entity
@Table(name = "course")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="course_seq",sequenceName="course_seq",allocationSize=1, initialValue = 1)
public class Course   extends AuditBusinessObject  {

    private Long id;

    private LocalDateTime dateDemandeCourse ;
    private LocalDateTime dateReponseChauffeur ;
    private LocalDateTime dateArriveChauffeur ;
    private LocalDateTime dateArriveClient ;
    private Integer nombrePlace = 0;
    @Column(length = 500)
    private String telephone;
    @Column(length = 500)
    private String commentaire;
    @Column(length = 500)
    private String noteInterne;
    @Column(length = 500)
    private String adresseDepart;
    @Column(length = 500)
    private String noteDepart;
    private BigDecimal altitudeDepart = BigDecimal.ZERO;
    private BigDecimal longitudeDepart = BigDecimal.ZERO;
    @Column(length = 500)
    private String adresseArrive;
    @Column(length = 500)
    private String noteArrive;
    private BigDecimal altitudeArrive = BigDecimal.ZERO;
    private BigDecimal longitudeArrive = BigDecimal.ZERO;

    @ManyToOne(fetch = FetchType.LAZY)
    private Secteur secteurSource ;
    @ManyToOne(fetch = FetchType.LAZY)
    private Secteur secteurDestination ;
    @ManyToOne(fetch = FetchType.LAZY)
    private MoyenTransport moyenTransport ;
    @ManyToOne(fetch = FetchType.LAZY)
    private Operateur operateur ;
    @ManyToOne(fetch = FetchType.LAZY)
    private Client client ;
    @ManyToOne(fetch = FetchType.LAZY)
    private Chauffeur chauffeur ;
    @ManyToOne(fetch = FetchType.LAZY)
    private EtatCourse etatCourse ;


    public Course(){
        super();
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="course_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public LocalDateTime getDateDemandeCourse(){
        return this.dateDemandeCourse;
    }
    public void setDateDemandeCourse(LocalDateTime dateDemandeCourse){
        this.dateDemandeCourse = dateDemandeCourse;
    }
    public LocalDateTime getDateReponseChauffeur(){
        return this.dateReponseChauffeur;
    }
    public void setDateReponseChauffeur(LocalDateTime dateReponseChauffeur){
        this.dateReponseChauffeur = dateReponseChauffeur;
    }
    public LocalDateTime getDateArriveChauffeur(){
        return this.dateArriveChauffeur;
    }
    public void setDateArriveChauffeur(LocalDateTime dateArriveChauffeur){
        this.dateArriveChauffeur = dateArriveChauffeur;
    }
    public LocalDateTime getDateArriveClient(){
        return this.dateArriveClient;
    }
    public void setDateArriveClient(LocalDateTime dateArriveClient){
        this.dateArriveClient = dateArriveClient;
    }
    public Secteur getSecteurSource(){
        return this.secteurSource;
    }
    public void setSecteurSource(Secteur secteurSource){
        this.secteurSource = secteurSource;
    }
    public Secteur getSecteurDestination(){
        return this.secteurDestination;
    }
    public void setSecteurDestination(Secteur secteurDestination){
        this.secteurDestination = secteurDestination;
    }
    public MoyenTransport getMoyenTransport(){
        return this.moyenTransport;
    }
    public void setMoyenTransport(MoyenTransport moyenTransport){
        this.moyenTransport = moyenTransport;
    }
    public Integer getNombrePlace(){
        return this.nombrePlace;
    }
    public void setNombrePlace(Integer nombrePlace){
        this.nombrePlace = nombrePlace;
    }
    public Operateur getOperateur(){
        return this.operateur;
    }
    public void setOperateur(Operateur operateur){
        this.operateur = operateur;
    }
    public Client getClient(){
        return this.client;
    }
    public void setClient(Client client){
        this.client = client;
    }
    public Chauffeur getChauffeur(){
        return this.chauffeur;
    }
    public void setChauffeur(Chauffeur chauffeur){
        this.chauffeur = chauffeur;
    }
    public String getTelephone(){
        return this.telephone;
    }
    public void setTelephone(String telephone){
        this.telephone = telephone;
    }
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }
    public String getNoteInterne(){
        return this.noteInterne;
    }
    public void setNoteInterne(String noteInterne){
        this.noteInterne = noteInterne;
    }
    public EtatCourse getEtatCourse(){
        return this.etatCourse;
    }
    public void setEtatCourse(EtatCourse etatCourse){
        this.etatCourse = etatCourse;
    }
    public String getAdresseDepart(){
        return this.adresseDepart;
    }
    public void setAdresseDepart(String adresseDepart){
        this.adresseDepart = adresseDepart;
    }
    public String getNoteDepart(){
        return this.noteDepart;
    }
    public void setNoteDepart(String noteDepart){
        this.noteDepart = noteDepart;
    }
    public BigDecimal getAltitudeDepart(){
        return this.altitudeDepart;
    }
    public void setAltitudeDepart(BigDecimal altitudeDepart){
        this.altitudeDepart = altitudeDepart;
    }
    public BigDecimal getLongitudeDepart(){
        return this.longitudeDepart;
    }
    public void setLongitudeDepart(BigDecimal longitudeDepart){
        this.longitudeDepart = longitudeDepart;
    }
    public String getAdresseArrive(){
        return this.adresseArrive;
    }
    public void setAdresseArrive(String adresseArrive){
        this.adresseArrive = adresseArrive;
    }
    public String getNoteArrive(){
        return this.noteArrive;
    }
    public void setNoteArrive(String noteArrive){
        this.noteArrive = noteArrive;
    }
    public BigDecimal getAltitudeArrive(){
        return this.altitudeArrive;
    }
    public void setAltitudeArrive(BigDecimal altitudeArrive){
        this.altitudeArrive = altitudeArrive;
    }
    public BigDecimal getLongitudeArrive(){
        return this.longitudeArrive;
    }
    public void setLongitudeArrive(BigDecimal longitudeArrive){
        this.longitudeArrive = longitudeArrive;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return id != null && id.equals(course.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}


package  ma.zsmart.taxi.dao.criteria.core;


import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import com.fasterxml.jackson.annotation.JsonFormat;
import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import java.time.LocalDateTime;
import java.math.BigDecimal;

public class CourseCriteria extends BaseCriteria {

    private LocalDateTime dateDemandeCourse;
    private LocalDateTime dateDemandeCourseFrom;
    private LocalDateTime dateDemandeCourseTo;
    private LocalDateTime dateReponseChauffeur;
    private LocalDateTime dateReponseChauffeurFrom;
    private LocalDateTime dateReponseChauffeurTo;
    private LocalDateTime dateArriveChauffeur;
    private LocalDateTime dateArriveChauffeurFrom;
    private LocalDateTime dateArriveChauffeurTo;
    private LocalDateTime dateArriveClient;
    private LocalDateTime dateArriveClientFrom;
    private LocalDateTime dateArriveClientTo;
    private String nombrePlace;
    private String telephone;
    private String telephoneLike;
    private String commentaire;
    private String commentaireLike;
    private String noteInterne;
    private String noteInterneLike;
    private String adresseDepart;
    private String adresseDepartLike;
    private String noteDepart;
    private String noteDepartLike;
    private String altitudeDepart;
    private String longitudeDepart;
    private String adresseArrive;
    private String adresseArriveLike;
    private String noteArrive;
    private String noteArriveLike;
    private String altitudeArrive;
    private String longitudeArrive;

    private Long secteurSourceId ;
    private Long secteurDestinationId ;
    private Long moyenTransportId ;
    private Long operateurId ;
    private Long clientId ;
    private Long chauffeurId ;
    private Long etatCourseId ;


    public CourseCriteria(){}

    public LocalDateTime getDateDemandeCourse(){
        return this.dateDemandeCourse;
    }
    public void setDateDemandeCourse(LocalDateTime dateDemandeCourse){
        this.dateDemandeCourse = dateDemandeCourse;
    }
    public LocalDateTime getDateDemandeCourseFrom(){
        return this.dateDemandeCourseFrom;
    }
    public void setDateDemandeCourseFrom(LocalDateTime dateDemandeCourseFrom){
        this.dateDemandeCourseFrom = dateDemandeCourseFrom;
    }
    public LocalDateTime getDateDemandeCourseTo(){
        return this.dateDemandeCourseFrom;
    }
    public void setDateDemandeCourseTo(LocalDateTime dateDemandeCourseTo){
        this.dateDemandeCourseTo = dateDemandeCourseTo;
    }
    public LocalDateTime getDateReponseChauffeur(){
        return this.dateReponseChauffeur;
    }
    public void setDateReponseChauffeur(LocalDateTime dateReponseChauffeur){
        this.dateReponseChauffeur = dateReponseChauffeur;
    }
    public LocalDateTime getDateReponseChauffeurFrom(){
        return this.dateReponseChauffeurFrom;
    }
    public void setDateReponseChauffeurFrom(LocalDateTime dateReponseChauffeurFrom){
        this.dateReponseChauffeurFrom = dateReponseChauffeurFrom;
    }
    public LocalDateTime getDateReponseChauffeurTo(){
        return this.dateReponseChauffeurFrom;
    }
    public void setDateReponseChauffeurTo(LocalDateTime dateReponseChauffeurTo){
        this.dateReponseChauffeurTo = dateReponseChauffeurTo;
    }
    public LocalDateTime getDateArriveChauffeur(){
        return this.dateArriveChauffeur;
    }
    public void setDateArriveChauffeur(LocalDateTime dateArriveChauffeur){
        this.dateArriveChauffeur = dateArriveChauffeur;
    }
    public LocalDateTime getDateArriveChauffeurFrom(){
        return this.dateArriveChauffeurFrom;
    }
    public void setDateArriveChauffeurFrom(LocalDateTime dateArriveChauffeurFrom){
        this.dateArriveChauffeurFrom = dateArriveChauffeurFrom;
    }
    public LocalDateTime getDateArriveChauffeurTo(){
        return this.dateArriveChauffeurFrom;
    }
    public void setDateArriveChauffeurTo(LocalDateTime dateArriveChauffeurTo){
        this.dateArriveChauffeurTo = dateArriveChauffeurTo;
    }
    public LocalDateTime getDateArriveClient(){
        return this.dateArriveClient;
    }
    public void setDateArriveClient(LocalDateTime dateArriveClient){
        this.dateArriveClient = dateArriveClient;
    }
    public LocalDateTime getDateArriveClientFrom(){
        return this.dateArriveClientFrom;
    }
    public void setDateArriveClientFrom(LocalDateTime dateArriveClientFrom){
        this.dateArriveClientFrom = dateArriveClientFrom;
    }
    public LocalDateTime getDateArriveClientTo(){
        return this.dateArriveClientFrom;
    }
    public void setDateArriveClientTo(LocalDateTime dateArriveClientTo){
        this.dateArriveClientTo = dateArriveClientTo;
    }
    public String getNombrePlace(){
        return this.nombrePlace;
    }
    public void setNombrePlace(String nombrePlace){
        this.nombrePlace = nombrePlace;
    }
    public String getTelephone(){
        return this.telephone;
    }
    public void setTelephone(String telephone){
        this.telephone = telephone;
    }
    public String getTelephoneLike(){
        return this.telephoneLike;
    }
    public void setTelephoneLike(String telephoneLike){
        this.telephoneLike = telephoneLike;
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

    public String getNoteInterne(){
        return this.noteInterne;
    }
    public void setNoteInterne(String noteInterne){
        this.noteInterne = noteInterne;
    }
    public String getNoteInterneLike(){
        return this.noteInterneLike;
    }
    public void setNoteInterneLike(String noteInterneLike){
        this.noteInterneLike = noteInterneLike;
    }

    public String getAdresseDepart(){
        return this.adresseDepart;
    }
    public void setAdresseDepart(String adresseDepart){
        this.adresseDepart = adresseDepart;
    }
    public String getAdresseDepartLike(){
        return this.adresseDepartLike;
    }
    public void setAdresseDepartLike(String adresseDepartLike){
        this.adresseDepartLike = adresseDepartLike;
    }

    public String getNoteDepart(){
        return this.noteDepart;
    }
    public void setNoteDepart(String noteDepart){
        this.noteDepart = noteDepart;
    }
    public String getNoteDepartLike(){
        return this.noteDepartLike;
    }
    public void setNoteDepartLike(String noteDepartLike){
        this.noteDepartLike = noteDepartLike;
    }

    public String getAltitudeDepart(){
        return this.altitudeDepart;
    }
    public void setAltitudeDepart(String altitudeDepart){
        this.altitudeDepart = altitudeDepart;
    }
    public String getLongitudeDepart(){
        return this.longitudeDepart;
    }
    public void setLongitudeDepart(String longitudeDepart){
        this.longitudeDepart = longitudeDepart;
    }
    public String getAdresseArrive(){
        return this.adresseArrive;
    }
    public void setAdresseArrive(String adresseArrive){
        this.adresseArrive = adresseArrive;
    }
    public String getAdresseArriveLike(){
        return this.adresseArriveLike;
    }
    public void setAdresseArriveLike(String adresseArriveLike){
        this.adresseArriveLike = adresseArriveLike;
    }

    public String getNoteArrive(){
        return this.noteArrive;
    }
    public void setNoteArrive(String noteArrive){
        this.noteArrive = noteArrive;
    }
    public String getNoteArriveLike(){
        return this.noteArriveLike;
    }
    public void setNoteArriveLike(String noteArriveLike){
        this.noteArriveLike = noteArriveLike;
    }

    public String getAltitudeArrive(){
        return this.altitudeArrive;
    }
    public void setAltitudeArrive(String altitudeArrive){
        this.altitudeArrive = altitudeArrive;
    }
    public String getLongitudeArrive(){
        return this.longitudeArrive;
    }
    public void setLongitudeArrive(String longitudeArrive){
        this.longitudeArrive = longitudeArrive;
    }


    public Long getSecteurSourceId(){
        return this.id;
    }

    public void setSecteurSourceId(Long id){
        this.id = id;
    }



    public Long getSecteurDestinationId(){
        return this.id;
    }

    public void setSecteurDestinationId(Long id){
        this.id = id;
    }



    public Long getMoyenTransportId(){
        return this.id;
    }

    public void setMoyenTransportId(Long id){
        this.id = id;
    }



    public Long getOperateurId(){
        return this.id;
    }

    public void setOperateurId(Long id){
        this.id = id;
    }



    public Long getClientId(){
        return this.id;
    }

    public void setClientId(Long id){
        this.id = id;
    }



    public Long getChauffeurId(){
        return this.id;
    }

    public void setChauffeurId(Long id){
        this.id = id;
    }



    public Long getEtatCourseId(){
        return this.id;
    }

    public void setEtatCourseId(Long id){
        this.id = id;
    }




    }

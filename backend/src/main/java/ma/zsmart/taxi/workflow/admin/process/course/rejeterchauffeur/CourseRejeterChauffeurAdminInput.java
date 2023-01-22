package ma.zsmart.taxi.workflow.admin.process.course.rejeterchauffeur;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.ws.dto.*;
import ma.zsmart.taxi.zynerator.audit.Log;
import ma.zsmart.taxi.zynerator.process.AbstractProcessInput;

import java.math.BigDecimal;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class CourseRejeterChauffeurAdminInput extends AbstractProcessInput {

    private String dateDemandeCourse ;
    private String dateReponseChauffeur ;
    private String dateArriveChauffeur ;
    private String dateArriveClient ;
    private Integer nombrePlace  = 0 ;
    private String telephone  ;
    private String commentaire  ;
    private String noteInterne  ;
    private String adresseDepart  ;
    private String noteDepart  ;
    private BigDecimal altitudeDepart  ;
    private BigDecimal longitudeDepart  ;
    private String adresseArrive  ;
    private String noteArrive  ;
    private BigDecimal altitudeArrive  ;
    private BigDecimal longitudeArrive  ;

    private SecteurDto secteurSource ;
    private SecteurDto secteurDestination ;
    private MoyenTransportDto moyenTransport ;
    private OperateurDto operateur ;
    private ClientDto client ;
    private ChauffeurDto chauffeur ;
    private EtatCourseDto etatCourse ;



    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateDemandeCourse(){
        return this.dateDemandeCourse;
    }
    public void setDateDemandeCourse(String dateDemandeCourse){
        this.dateDemandeCourse = dateDemandeCourse;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateReponseChauffeur(){
        return this.dateReponseChauffeur;
    }
    public void setDateReponseChauffeur(String dateReponseChauffeur){
        this.dateReponseChauffeur = dateReponseChauffeur;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateArriveChauffeur(){
        return this.dateArriveChauffeur;
    }
    public void setDateArriveChauffeur(String dateArriveChauffeur){
        this.dateArriveChauffeur = dateArriveChauffeur;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateArriveClient(){
        return this.dateArriveClient;
    }
    public void setDateArriveClient(String dateArriveClient){
        this.dateArriveClient = dateArriveClient;
    }

    @Log
    public Integer getNombrePlace(){
        return this.nombrePlace;
    }
    public void setNombrePlace(Integer nombrePlace){
        this.nombrePlace = nombrePlace;
    }

    @Log
    public String getTelephone(){
        return this.telephone;
    }
    public void setTelephone(String telephone){
        this.telephone = telephone;
    }

    @Log
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }

    @Log
    public String getNoteInterne(){
        return this.noteInterne;
    }
    public void setNoteInterne(String noteInterne){
        this.noteInterne = noteInterne;
    }

    @Log
    public String getAdresseDepart(){
        return this.adresseDepart;
    }
    public void setAdresseDepart(String adresseDepart){
        this.adresseDepart = adresseDepart;
    }

    @Log
    public String getNoteDepart(){
        return this.noteDepart;
    }
    public void setNoteDepart(String noteDepart){
        this.noteDepart = noteDepart;
    }

    @Log
    public BigDecimal getAltitudeDepart(){
        return this.altitudeDepart;
    }
    public void setAltitudeDepart(BigDecimal altitudeDepart){
        this.altitudeDepart = altitudeDepart;
    }

    @Log
    public BigDecimal getLongitudeDepart(){
        return this.longitudeDepart;
    }
    public void setLongitudeDepart(BigDecimal longitudeDepart){
        this.longitudeDepart = longitudeDepart;
    }

    @Log
    public String getAdresseArrive(){
        return this.adresseArrive;
    }
    public void setAdresseArrive(String adresseArrive){
        this.adresseArrive = adresseArrive;
    }

    @Log
    public String getNoteArrive(){
        return this.noteArrive;
    }
    public void setNoteArrive(String noteArrive){
        this.noteArrive = noteArrive;
    }

    @Log
    public BigDecimal getAltitudeArrive(){
        return this.altitudeArrive;
    }
    public void setAltitudeArrive(BigDecimal altitudeArrive){
        this.altitudeArrive = altitudeArrive;
    }

    @Log
    public BigDecimal getLongitudeArrive(){
        return this.longitudeArrive;
    }
    public void setLongitudeArrive(BigDecimal longitudeArrive){
        this.longitudeArrive = longitudeArrive;
    }


    public SecteurDto getSecteurSource(){
        return this.secteurSource;
    }

    public void setSecteurSourceDto(SecteurDto secteurSource){
        this.secteurSource = secteurSource;
    }
    public SecteurDto getSecteurDestination(){
        return this.secteurDestination;
    }

    public void setSecteurDestinationDto(SecteurDto secteurDestination){
        this.secteurDestination = secteurDestination;
    }
    public MoyenTransportDto getMoyenTransport(){
        return this.moyenTransport;
    }

    public void setMoyenTransportDto(MoyenTransportDto moyenTransport){
        this.moyenTransport = moyenTransport;
    }
    public OperateurDto getOperateur(){
        return this.operateur;
    }

    public void setOperateurDto(OperateurDto operateur){
        this.operateur = operateur;
    }
    public ClientDto getClient(){
        return this.client;
    }

    public void setClientDto(ClientDto client){
        this.client = client;
    }
    public ChauffeurDto getChauffeur(){
        return this.chauffeur;
    }

    public void setChauffeurDto(ChauffeurDto chauffeur){
        this.chauffeur = chauffeur;
    }
    public EtatCourseDto getEtatCourse(){
        return this.etatCourse;
    }

    public void setEtatCourseDto(EtatCourseDto etatCourse){
        this.etatCourse = etatCourse;
    }

}




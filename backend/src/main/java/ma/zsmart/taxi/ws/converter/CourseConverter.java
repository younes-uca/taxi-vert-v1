package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.CourseHistory;
import ma.zsmart.taxi.bean.core.Course;
import ma.zsmart.taxi.ws.dto.CourseDto;

@Component
public class CourseConverter extends AbstractConverter<Course, CourseDto, CourseHistory> {

    @Autowired
    private MoyenTransportConverter moyenTransportConverter ;
    @Autowired
    private SecteurConverter secteurConverter ;
    @Autowired
    private EtatCourseConverter etatCourseConverter ;
    @Autowired
    private OperateurConverter operateurConverter ;
    @Autowired
    private ChauffeurConverter chauffeurConverter ;
    @Autowired
    private ClientConverter clientConverter ;

    private boolean secteurSource;
    private boolean secteurDestination;
    private boolean moyenTransport;
    private boolean operateur;
    private boolean client;
    private boolean chauffeur;
    private boolean etatCourse;

    public  CourseConverter(){
        super(Course.class, CourseDto.class, CourseHistory.class);
    }

    @Override
    public Course toItem(CourseDto dto) {
        if (dto == null) {
            return null;
        } else {
        Course item = new Course();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getDateDemandeCourse()))
                item.setDateDemandeCourse(DateUtil.stringEnToDate(dto.getDateDemandeCourse()));
            if(StringUtil.isNotEmpty(dto.getDateReponseChauffeur()))
                item.setDateReponseChauffeur(DateUtil.stringEnToDate(dto.getDateReponseChauffeur()));
            if(StringUtil.isNotEmpty(dto.getDateArriveChauffeur()))
                item.setDateArriveChauffeur(DateUtil.stringEnToDate(dto.getDateArriveChauffeur()));
            if(StringUtil.isNotEmpty(dto.getDateArriveClient()))
                item.setDateArriveClient(DateUtil.stringEnToDate(dto.getDateArriveClient()));
            if(StringUtil.isNotEmpty(dto.getNombrePlace()))
                item.setNombrePlace(dto.getNombrePlace());
            if(StringUtil.isNotEmpty(dto.getTelephone()))
                item.setTelephone(dto.getTelephone());
            if(StringUtil.isNotEmpty(dto.getCommentaire()))
                item.setCommentaire(dto.getCommentaire());
            if(StringUtil.isNotEmpty(dto.getNoteInterne()))
                item.setNoteInterne(dto.getNoteInterne());
            if(StringUtil.isNotEmpty(dto.getAdresseDepart()))
                item.setAdresseDepart(dto.getAdresseDepart());
            if(StringUtil.isNotEmpty(dto.getNoteDepart()))
                item.setNoteDepart(dto.getNoteDepart());
            if(StringUtil.isNotEmpty(dto.getAltitudeDepart()))
                item.setAltitudeDepart(dto.getAltitudeDepart());
            if(StringUtil.isNotEmpty(dto.getLongitudeDepart()))
                item.setLongitudeDepart(dto.getLongitudeDepart());
            if(StringUtil.isNotEmpty(dto.getAdresseArrive()))
                item.setAdresseArrive(dto.getAdresseArrive());
            if(StringUtil.isNotEmpty(dto.getNoteArrive()))
                item.setNoteArrive(dto.getNoteArrive());
            if(StringUtil.isNotEmpty(dto.getAltitudeArrive()))
                item.setAltitudeArrive(dto.getAltitudeArrive());
            if(StringUtil.isNotEmpty(dto.getLongitudeArrive()))
                item.setLongitudeArrive(dto.getLongitudeArrive());
            if(this.secteurSource && dto.getSecteurSource()!=null)
                item.setSecteurSource(secteurConverter.toItem(dto.getSecteurSource())) ;
            if(this.secteurDestination && dto.getSecteurDestination()!=null)
                item.setSecteurDestination(secteurConverter.toItem(dto.getSecteurDestination())) ;
            if(this.moyenTransport && dto.getMoyenTransport()!=null)
                item.setMoyenTransport(moyenTransportConverter.toItem(dto.getMoyenTransport())) ;
            if(this.operateur && dto.getOperateur()!=null)
                item.setOperateur(operateurConverter.toItem(dto.getOperateur())) ;
            if(this.client && dto.getClient()!=null)
                item.setClient(clientConverter.toItem(dto.getClient())) ;
            if(this.chauffeur && dto.getChauffeur()!=null)
                item.setChauffeur(chauffeurConverter.toItem(dto.getChauffeur())) ;
            if(this.etatCourse && dto.getEtatCourse()!=null)
                item.setEtatCourse(etatCourseConverter.toItem(dto.getEtatCourse())) ;


        return item;
        }
    }

    @Override
    public CourseDto toDto(Course item) {
        if (item == null) {
            return null;
        } else {
    CourseDto dto = new CourseDto();
        if(StringUtil.isNotEmpty(item.getId()))
             dto.setId(item.getId());
        if(item.getDateDemandeCourse()!=null)
             dto.setDateDemandeCourse(DateUtil.dateTimeToString(item.getDateDemandeCourse()));
        if(item.getDateReponseChauffeur()!=null)
             dto.setDateReponseChauffeur(DateUtil.dateTimeToString(item.getDateReponseChauffeur()));
        if(item.getDateArriveChauffeur()!=null)
             dto.setDateArriveChauffeur(DateUtil.dateTimeToString(item.getDateArriveChauffeur()));
        if(item.getDateArriveClient()!=null)
             dto.setDateArriveClient(DateUtil.dateTimeToString(item.getDateArriveClient()));
        if(StringUtil.isNotEmpty(item.getNombrePlace()))
             dto.setNombrePlace(item.getNombrePlace());
        if(StringUtil.isNotEmpty(item.getTelephone()))
             dto.setTelephone(item.getTelephone());
        if(StringUtil.isNotEmpty(item.getCommentaire()))
             dto.setCommentaire(item.getCommentaire());
        if(StringUtil.isNotEmpty(item.getNoteInterne()))
             dto.setNoteInterne(item.getNoteInterne());
        if(StringUtil.isNotEmpty(item.getAdresseDepart()))
             dto.setAdresseDepart(item.getAdresseDepart());
        if(StringUtil.isNotEmpty(item.getNoteDepart()))
             dto.setNoteDepart(item.getNoteDepart());
        if(StringUtil.isNotEmpty(item.getAltitudeDepart()))
             dto.setAltitudeDepart(item.getAltitudeDepart());
        if(StringUtil.isNotEmpty(item.getLongitudeDepart()))
             dto.setLongitudeDepart(item.getLongitudeDepart());
        if(StringUtil.isNotEmpty(item.getAdresseArrive()))
             dto.setAdresseArrive(item.getAdresseArrive());
        if(StringUtil.isNotEmpty(item.getNoteArrive()))
             dto.setNoteArrive(item.getNoteArrive());
        if(StringUtil.isNotEmpty(item.getAltitudeArrive()))
             dto.setAltitudeArrive(item.getAltitudeArrive());
        if(StringUtil.isNotEmpty(item.getLongitudeArrive()))
             dto.setLongitudeArrive(item.getLongitudeArrive());
        if(this.secteurSource && item.getSecteurSource()!=null) {
            dto.setSecteurSourceDto(secteurConverter.toDto(item.getSecteurSource())) ;
        }
        if(this.secteurDestination && item.getSecteurDestination()!=null) {
            dto.setSecteurDestinationDto(secteurConverter.toDto(item.getSecteurDestination())) ;
        }
        if(this.moyenTransport && item.getMoyenTransport()!=null) {
            dto.setMoyenTransportDto(moyenTransportConverter.toDto(item.getMoyenTransport())) ;
        }
        if(this.operateur && item.getOperateur()!=null) {
            dto.setOperateurDto(operateurConverter.toDto(item.getOperateur())) ;
        }
        if(this.client && item.getClient()!=null) {
            dto.setClientDto(clientConverter.toDto(item.getClient())) ;
        }
        if(this.chauffeur && item.getChauffeur()!=null) {
            dto.setChauffeurDto(chauffeurConverter.toDto(item.getChauffeur())) ;
        }
        if(this.etatCourse && item.getEtatCourse()!=null) {
            dto.setEtatCourseDto(etatCourseConverter.toDto(item.getEtatCourse())) ;
        }
        return dto;
        }
    }



    public MoyenTransportConverter getMoyenTransportConverter(){
        return this.moyenTransportConverter;
    }
    public void setMoyenTransportConverter(MoyenTransportConverter moyenTransportConverter ){
        this.moyenTransportConverter = moyenTransportConverter;
    }
    public SecteurConverter getSecteurConverter(){
        return this.secteurConverter;
    }
    public void setSecteurConverter(SecteurConverter secteurConverter ){
        this.secteurConverter = secteurConverter;
    }
    public EtatCourseConverter getEtatCourseConverter(){
        return this.etatCourseConverter;
    }
    public void setEtatCourseConverter(EtatCourseConverter etatCourseConverter ){
        this.etatCourseConverter = etatCourseConverter;
    }
    public OperateurConverter getOperateurConverter(){
        return this.operateurConverter;
    }
    public void setOperateurConverter(OperateurConverter operateurConverter ){
        this.operateurConverter = operateurConverter;
    }
    public ChauffeurConverter getChauffeurConverter(){
        return this.chauffeurConverter;
    }
    public void setChauffeurConverter(ChauffeurConverter chauffeurConverter ){
        this.chauffeurConverter = chauffeurConverter;
    }
    public ClientConverter getClientConverter(){
        return this.clientConverter;
    }
    public void setClientConverter(ClientConverter clientConverter ){
        this.clientConverter = clientConverter;
    }

    public boolean  isSecteurSource(){
        return this.secteurSource;
    }
    public void  setSecteurSource(boolean secteurSource){
        this.secteurSource = secteurSource;
    }
    public boolean  isSecteurDestination(){
        return this.secteurDestination;
    }
    public void  setSecteurDestination(boolean secteurDestination){
        this.secteurDestination = secteurDestination;
    }
    public boolean  isMoyenTransport(){
        return this.moyenTransport;
    }
    public void  setMoyenTransport(boolean moyenTransport){
        this.moyenTransport = moyenTransport;
    }
    public boolean  isOperateur(){
        return this.operateur;
    }
    public void  setOperateur(boolean operateur){
        this.operateur = operateur;
    }
    public boolean  isClient(){
        return this.client;
    }
    public void  setClient(boolean client){
        this.client = client;
    }
    public boolean  isChauffeur(){
        return this.chauffeur;
    }
    public void  setChauffeur(boolean chauffeur){
        this.chauffeur = chauffeur;
    }
    public boolean  isEtatCourse(){
        return this.etatCourse;
    }
    public void  setEtatCourse(boolean etatCourse){
        this.etatCourse = etatCourse;
    }
}

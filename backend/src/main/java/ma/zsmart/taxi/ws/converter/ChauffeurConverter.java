package ma.zsmart.taxi.ws.converter;

import ma.zsmart.taxi.bean.core.Chauffeur;
import ma.zsmart.taxi.bean.history.ChauffeurHistory;
import ma.zsmart.taxi.ws.dto.ChauffeurDto;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ChauffeurConverter extends AbstractConverter<Chauffeur, ChauffeurDto, ChauffeurHistory> {

    @Autowired
    private ModelApplicationConverter modelApplicationConverter;
    @Autowired
    private MoyenTransportConverter moyenTransportConverter;
    @Autowired
    private EtatChauffeurConverter etatChauffeurConverter;
    @Autowired
    private LangueConverter langueConverter;
    @Autowired
    private MarqueVoitureConverter marqueVoitureConverter;
    @Autowired
    private ThemeConverter themeConverter;
    @Autowired
    private MarqueTelephoneConverter marqueTelephoneConverter;
    @Autowired
    private VilleConverter villeConverter;

    private boolean moyenTransport;
    private boolean modelApplication;
    private boolean marqueTelephone;
    private boolean marqueVoiture;
    private boolean etatChauffeur;
    private boolean ville;
    private boolean langue;
    private boolean theme;

    public ChauffeurConverter() {
        super(Chauffeur.class, ChauffeurDto.class, ChauffeurHistory.class);
    }

    @Override
    public Chauffeur toItem(ChauffeurDto dto) {
        if (dto == null) {
            return null;
        } else {
            Chauffeur item = new Chauffeur();
            if (StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if (StringUtil.isNotEmpty(dto.getMatricule()))
                item.setMatricule(dto.getMatricule());
            if (StringUtil.isNotEmpty(dto.getMobile()))
                item.setMobile(dto.getMobile());
            if (StringUtil.isNotEmpty(dto.getCodePostale()))
                item.setCodePostale(dto.getCodePostale());
            if (StringUtil.isNotEmpty(dto.getNombrePlace()))
                item.setNombrePlace(dto.getNombrePlace());
            if (StringUtil.isNotEmpty(dto.getImageVoiture()))
                item.setImageVoiture(dto.getImageVoiture());
            if (StringUtil.isNotEmpty(dto.getOrderAffichage()))
                item.setOrderAffichage(dto.getOrderAffichage());
            if (StringUtil.isNotEmpty(dto.getAltitudeActuelle()))
                item.setAltitudeActuelle(dto.getAltitudeActuelle());
            if (StringUtil.isNotEmpty(dto.getLongitudeActuelle()))
                item.setLongitudeActuelle(dto.getLongitudeActuelle());
            item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            item.setEnabled(dto.getEnabled());
            item.setAccountNonExpired(dto.getAccountNonExpired());
            item.setAccountNonLocked(dto.getAccountNonLocked());
            item.setPasswordChanged(dto.getPasswordChanged());
            if (StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if (StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());
            if (StringUtil.isNotEmpty(dto.getPrenom()))
                item.setPrenom(dto.getPrenom());
            if (StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());
            if (this.moyenTransport && dto.getMoyenTransport() != null)
                item.setMoyenTransport(moyenTransportConverter.toItem(dto.getMoyenTransport()));
            if (this.modelApplication && dto.getModelApplication() != null)
                item.setModelApplication(modelApplicationConverter.toItem(dto.getModelApplication()));
            if (this.marqueTelephone && dto.getMarqueTelephone() != null)
                item.setMarqueTelephone(marqueTelephoneConverter.toItem(dto.getMarqueTelephone()));
            if (this.marqueVoiture && dto.getMarqueVoiture() != null)
                item.setMarqueVoiture(marqueVoitureConverter.toItem(dto.getMarqueVoiture()));
            if (this.etatChauffeur && dto.getEtatChauffeur() != null)
                item.setEtatChauffeur(etatChauffeurConverter.toItem(dto.getEtatChauffeur()));
            if (this.ville && dto.getVille() != null)
                item.setVille(villeConverter.toItem(dto.getVille()));
            if (this.langue && dto.getLangue() != null)
                item.setLangue(langueConverter.toItem(dto.getLangue()));
            if (this.theme && dto.getTheme() != null)
                item.setTheme(themeConverter.toItem(dto.getTheme()));


            return item;
        }
    }

    @Override
    public ChauffeurDto toDto(Chauffeur item) {
        if (item == null) {
            return null;
        } else {
            ChauffeurDto dto = new ChauffeurDto();
            if (StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if (StringUtil.isNotEmpty(item.getMatricule()))
                dto.setMatricule(item.getMatricule());
            if (StringUtil.isNotEmpty(item.getMobile()))
                dto.setMobile(item.getMobile());
            if (StringUtil.isNotEmpty(item.getCodePostale()))
                dto.setCodePostale(item.getCodePostale());
            if (StringUtil.isNotEmpty(item.getNombrePlace()))
                dto.setNombrePlace(item.getNombrePlace());
            if (StringUtil.isNotEmpty(item.getImageVoiture()))
                dto.setImageVoiture(item.getImageVoiture());
            if (StringUtil.isNotEmpty(item.getOrderAffichage()))
                dto.setOrderAffichage(item.getOrderAffichage());
            if (StringUtil.isNotEmpty(item.getAltitudeActuelle()))
                dto.setAltitudeActuelle(item.getAltitudeActuelle());
            if (StringUtil.isNotEmpty(item.getLongitudeActuelle()))
                dto.setLongitudeActuelle(item.getLongitudeActuelle());
            dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
            dto.setEnabled(item.getEnabled());
            dto.setAccountNonExpired(item.getAccountNonExpired());
            dto.setAccountNonLocked(item.getAccountNonLocked());
            dto.setPasswordChanged(item.getPasswordChanged());
            if (StringUtil.isNotEmpty(item.getUsername()))
                dto.setUsername(item.getUsername());
            if (StringUtil.isNotEmpty(item.getPassword()))
                dto.setPassword(item.getPassword());
            if (StringUtil.isNotEmpty(item.getPrenom()))
                dto.setPrenom(item.getPrenom());
            if (StringUtil.isNotEmpty(item.getNom()))
                dto.setNom(item.getNom());
            if (this.moyenTransport && item.getMoyenTransport() != null) {
                dto.setMoyenTransportDto(moyenTransportConverter.toDto(item.getMoyenTransport()));
            }
            if (this.modelApplication && item.getModelApplication() != null) {
                dto.setModelApplicationDto(modelApplicationConverter.toDto(item.getModelApplication()));
            }
            if (this.marqueTelephone && item.getMarqueTelephone() != null) {
                dto.setMarqueTelephoneDto(marqueTelephoneConverter.toDto(item.getMarqueTelephone()));
            }
            if (this.marqueVoiture && item.getMarqueVoiture() != null) {
                dto.setMarqueVoitureDto(marqueVoitureConverter.toDto(item.getMarqueVoiture()));
            }
            if (this.etatChauffeur && item.getEtatChauffeur() != null) {
                dto.setEtatChauffeurDto(etatChauffeurConverter.toDto(item.getEtatChauffeur()));
            }
            if (this.ville && item.getVille() != null) {
                dto.setVilleDto(villeConverter.toDto(item.getVille()));
            }
            if (this.langue && item.getLangue() != null) {
                dto.setLangueDto(langueConverter.toDto(item.getLangue()));
            }
            if (this.theme && item.getTheme() != null) {
                dto.setThemeDto(themeConverter.toDto(item.getTheme()));
            }
            return dto;
        }
    }


    public ModelApplicationConverter getModelApplicationConverter() {
        return this.modelApplicationConverter;
    }

    public void setModelApplicationConverter(ModelApplicationConverter modelApplicationConverter) {
        this.modelApplicationConverter = modelApplicationConverter;
    }

    public MoyenTransportConverter getMoyenTransportConverter() {
        return this.moyenTransportConverter;
    }

    public void setMoyenTransportConverter(MoyenTransportConverter moyenTransportConverter) {
        this.moyenTransportConverter = moyenTransportConverter;
    }

    public EtatChauffeurConverter getEtatChauffeurConverter() {
        return this.etatChauffeurConverter;
    }

    public void setEtatChauffeurConverter(EtatChauffeurConverter etatChauffeurConverter) {
        this.etatChauffeurConverter = etatChauffeurConverter;
    }

    public LangueConverter getLangueConverter() {
        return this.langueConverter;
    }

    public void setLangueConverter(LangueConverter langueConverter) {
        this.langueConverter = langueConverter;
    }

    public MarqueVoitureConverter getMarqueVoitureConverter() {
        return this.marqueVoitureConverter;
    }

    public void setMarqueVoitureConverter(MarqueVoitureConverter marqueVoitureConverter) {
        this.marqueVoitureConverter = marqueVoitureConverter;
    }

    public ThemeConverter getThemeConverter() {
        return this.themeConverter;
    }

    public void setThemeConverter(ThemeConverter themeConverter) {
        this.themeConverter = themeConverter;
    }

    public MarqueTelephoneConverter getMarqueTelephoneConverter() {
        return this.marqueTelephoneConverter;
    }

    public void setMarqueTelephoneConverter(MarqueTelephoneConverter marqueTelephoneConverter) {
        this.marqueTelephoneConverter = marqueTelephoneConverter;
    }

    public VilleConverter getVilleConverter() {
        return this.villeConverter;
    }

    public void setVilleConverter(VilleConverter villeConverter) {
        this.villeConverter = villeConverter;
    }

    public boolean isMoyenTransport() {
        return this.moyenTransport;
    }

    public void setMoyenTransport(boolean moyenTransport) {
        this.moyenTransport = moyenTransport;
    }

    public boolean isModelApplication() {
        return this.modelApplication;
    }

    public void setModelApplication(boolean modelApplication) {
        this.modelApplication = modelApplication;
    }

    public boolean isMarqueTelephone() {
        return this.marqueTelephone;
    }

    public void setMarqueTelephone(boolean marqueTelephone) {
        this.marqueTelephone = marqueTelephone;
    }

    public boolean isMarqueVoiture() {
        return this.marqueVoiture;
    }

    public void setMarqueVoiture(boolean marqueVoiture) {
        this.marqueVoiture = marqueVoiture;
    }

    public boolean isEtatChauffeur() {
        return this.etatChauffeur;
    }

    public void setEtatChauffeur(boolean etatChauffeur) {
        this.etatChauffeur = etatChauffeur;
    }

    public boolean isVille() {
        return this.ville;
    }

    public void setVille(boolean ville) {
        this.ville = ville;
    }

    public boolean isLangue() {
        return this.langue;
    }

    public void setLangue(boolean langue) {
        this.langue = langue;
    }

    public boolean isTheme() {
        return this.theme;
    }

    public void setTheme(boolean theme) {
        this.theme = theme;
    }
}

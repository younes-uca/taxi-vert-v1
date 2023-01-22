package ma.zsmart.taxi.service.facade.operateur;

import java.util.List;
import ma.zsmart.taxi.bean.core.EtatChauffeur;
import ma.zsmart.taxi.ws.dto.EtatChauffeurDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.EtatChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.EtatChauffeurHistoryCriteria;



public interface EtatChauffeurOperateurService extends IService<EtatChauffeur, EtatChauffeurDto,EtatChauffeurCriteria, EtatChauffeurHistoryCriteria> {
    //EtatChauffeur findOrSave(EtatChauffeur etatChauffeur);


}

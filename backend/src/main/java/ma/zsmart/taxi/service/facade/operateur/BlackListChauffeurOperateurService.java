package ma.zsmart.taxi.service.facade.operateur;

import java.util.List;
import ma.zsmart.taxi.bean.core.BlackListChauffeur;
import ma.zsmart.taxi.ws.dto.BlackListChauffeurDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.BlackListChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.BlackListChauffeurHistoryCriteria;



public interface BlackListChauffeurOperateurService extends IService<BlackListChauffeur, BlackListChauffeurDto,BlackListChauffeurCriteria, BlackListChauffeurHistoryCriteria> {
    //BlackListChauffeur findOrSave(BlackListChauffeur blackListChauffeur);


}

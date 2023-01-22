package ma.zsmart.taxi.service.facade.chauffeur;

import java.util.List;
import ma.zsmart.taxi.bean.core.Chauffeur;
import ma.zsmart.taxi.ws.dto.ChauffeurDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.ChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.ChauffeurHistoryCriteria;



public interface ChauffeurChauffeurService extends IService<Chauffeur, ChauffeurDto,ChauffeurCriteria, ChauffeurHistoryCriteria> {
    Chauffeur findByUsername(String username);
    //Chauffeur findOrSave(Chauffeur chauffeur);


}

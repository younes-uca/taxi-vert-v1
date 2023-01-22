package ma.zsmart.taxi.service.facade.chauffeur;

import java.util.List;
import ma.zsmart.taxi.bean.core.ModelApplication;
import ma.zsmart.taxi.ws.dto.ModelApplicationDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.ModelApplicationCriteria;
import ma.zsmart.taxi.dao.criteria.history.ModelApplicationHistoryCriteria;



public interface ModelApplicationChauffeurService extends IService<ModelApplication, ModelApplicationDto,ModelApplicationCriteria, ModelApplicationHistoryCriteria> {
    //ModelApplication findOrSave(ModelApplication modelApplication);


}
package ma.zsmart.taxi.service.impl.chauffeur;

import ma.zsmart.taxi.bean.core.ModelApplication;
import ma.zsmart.taxi.bean.history.ModelApplicationHistory;
import ma.zsmart.taxi.dao.criteria.core.ModelApplicationCriteria;
import ma.zsmart.taxi.dao.criteria.history.ModelApplicationHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.ModelApplicationDao;
import ma.zsmart.taxi.dao.facade.history.ModelApplicationHistoryDao;
import ma.zsmart.taxi.dao.specification.history.ModelApplicationHistorySpecification;
import ma.zsmart.taxi.service.facade.chauffeur.ModelApplicationChauffeurService;
import ma.zsmart.taxi.ws.converter.ModelApplicationConverter;
import ma.zsmart.taxi.ws.dto.ModelApplicationDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class ModelApplicationChauffeurServiceImpl extends AbstractServiceImpl<ModelApplication, ModelApplicationDto,ModelApplicationHistory, ModelApplicationCriteria, ModelApplicationHistoryCriteria, ModelApplicationDao,
ModelApplicationHistoryDao, ModelApplicationConverter> implements ModelApplicationChauffeurService {

    public ModelApplicationChauffeurServiceImpl(ModelApplicationDao dao, ModelApplicationHistoryDao historyDao, ModelApplicationConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(ModelApplication.class, ModelApplicationDto.class, ModelApplicationHistory.class, ModelApplicationHistoryCriteria.class, ModelApplicationHistorySpecification.class);
    }




}
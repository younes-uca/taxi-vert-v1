package ma.zsmart.taxi.service.impl.client;

import ma.zsmart.taxi.bean.core.Chauffeur;
import ma.zsmart.taxi.bean.history.ChauffeurHistory;
import ma.zsmart.taxi.dao.criteria.core.ChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.ChauffeurHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.ChauffeurDao;
import ma.zsmart.taxi.dao.facade.history.ChauffeurHistoryDao;
import ma.zsmart.taxi.dao.specification.history.ChauffeurHistorySpecification;
import ma.zsmart.taxi.service.facade.client.ChauffeurClientService;
import ma.zsmart.taxi.ws.converter.ChauffeurConverter;
import ma.zsmart.taxi.ws.dto.ChauffeurDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class ChauffeurClientServiceImpl extends AbstractServiceImpl<Chauffeur, ChauffeurDto,ChauffeurHistory, ChauffeurCriteria, ChauffeurHistoryCriteria, ChauffeurDao,
ChauffeurHistoryDao, ChauffeurConverter> implements ChauffeurClientService {

    public ChauffeurClientServiceImpl(ChauffeurDao dao, ChauffeurHistoryDao historyDao, ChauffeurConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Chauffeur.class, ChauffeurDto.class, ChauffeurHistory.class, ChauffeurHistoryCriteria.class, ChauffeurHistorySpecification.class);
    }


    @Override
    public Chauffeur findByUsername(String username) {
        return null;
    }
}
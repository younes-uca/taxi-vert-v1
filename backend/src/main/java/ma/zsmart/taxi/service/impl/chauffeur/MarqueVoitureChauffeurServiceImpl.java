package ma.zsmart.taxi.service.impl.chauffeur;

import ma.zsmart.taxi.bean.core.MarqueVoiture;
import ma.zsmart.taxi.bean.history.MarqueVoitureHistory;
import ma.zsmart.taxi.dao.criteria.core.MarqueVoitureCriteria;
import ma.zsmart.taxi.dao.criteria.history.MarqueVoitureHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.MarqueVoitureDao;
import ma.zsmart.taxi.dao.facade.history.MarqueVoitureHistoryDao;
import ma.zsmart.taxi.dao.specification.history.MarqueVoitureHistorySpecification;
import ma.zsmart.taxi.service.facade.chauffeur.MarqueVoitureChauffeurService;
import ma.zsmart.taxi.ws.converter.MarqueVoitureConverter;
import ma.zsmart.taxi.ws.dto.MarqueVoitureDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class MarqueVoitureChauffeurServiceImpl extends AbstractServiceImpl<MarqueVoiture, MarqueVoitureDto,MarqueVoitureHistory, MarqueVoitureCriteria, MarqueVoitureHistoryCriteria, MarqueVoitureDao,
MarqueVoitureHistoryDao, MarqueVoitureConverter> implements MarqueVoitureChauffeurService {

    public MarqueVoitureChauffeurServiceImpl(MarqueVoitureDao dao, MarqueVoitureHistoryDao historyDao, MarqueVoitureConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(MarqueVoiture.class, MarqueVoitureDto.class, MarqueVoitureHistory.class, MarqueVoitureHistoryCriteria.class, MarqueVoitureHistorySpecification.class);
    }




}
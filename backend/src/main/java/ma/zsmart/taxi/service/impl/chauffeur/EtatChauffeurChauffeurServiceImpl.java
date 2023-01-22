package ma.zsmart.taxi.service.impl.chauffeur;

import ma.zsmart.taxi.bean.core.EtatChauffeur;
import ma.zsmart.taxi.bean.history.EtatChauffeurHistory;
import ma.zsmart.taxi.dao.criteria.core.EtatChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.EtatChauffeurHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.EtatChauffeurDao;
import ma.zsmart.taxi.dao.facade.history.EtatChauffeurHistoryDao;
import ma.zsmart.taxi.dao.specification.history.EtatChauffeurHistorySpecification;
import ma.zsmart.taxi.service.facade.chauffeur.EtatChauffeurChauffeurService;
import ma.zsmart.taxi.ws.converter.EtatChauffeurConverter;
import ma.zsmart.taxi.ws.dto.EtatChauffeurDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class EtatChauffeurChauffeurServiceImpl extends AbstractServiceImpl<EtatChauffeur, EtatChauffeurDto,EtatChauffeurHistory, EtatChauffeurCriteria, EtatChauffeurHistoryCriteria, EtatChauffeurDao,
EtatChauffeurHistoryDao, EtatChauffeurConverter> implements EtatChauffeurChauffeurService {

    public EtatChauffeurChauffeurServiceImpl(EtatChauffeurDao dao, EtatChauffeurHistoryDao historyDao, EtatChauffeurConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(EtatChauffeur.class, EtatChauffeurDto.class, EtatChauffeurHistory.class, EtatChauffeurHistoryCriteria.class, EtatChauffeurHistorySpecification.class);
    }




}
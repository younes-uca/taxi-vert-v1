package ma.zsmart.taxi.service.impl.operateur;

import ma.zsmart.taxi.bean.core.Operateur;
import ma.zsmart.taxi.bean.history.OperateurHistory;
import ma.zsmart.taxi.dao.criteria.core.OperateurCriteria;
import ma.zsmart.taxi.dao.criteria.history.OperateurHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.OperateurDao;
import ma.zsmart.taxi.dao.facade.history.OperateurHistoryDao;
import ma.zsmart.taxi.dao.specification.history.OperateurHistorySpecification;
import ma.zsmart.taxi.service.facade.operateur.OperateurOperateurService;
import ma.zsmart.taxi.ws.converter.OperateurConverter;
import ma.zsmart.taxi.ws.dto.OperateurDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class OperateurOperateurServiceImpl extends AbstractServiceImpl<Operateur, OperateurDto,OperateurHistory, OperateurCriteria, OperateurHistoryCriteria, OperateurDao,
OperateurHistoryDao, OperateurConverter> implements OperateurOperateurService {

    public OperateurOperateurServiceImpl(OperateurDao dao, OperateurHistoryDao historyDao, OperateurConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Operateur.class, OperateurDto.class, OperateurHistory.class, OperateurHistoryCriteria.class, OperateurHistorySpecification.class);
    }


    @Override
    public Operateur findByUsername(String username) {
        return null;
    }
}
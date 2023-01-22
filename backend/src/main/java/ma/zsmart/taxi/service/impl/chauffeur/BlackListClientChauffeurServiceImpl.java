package ma.zsmart.taxi.service.impl.chauffeur;

import ma.zsmart.taxi.bean.core.BlackListClient;
import ma.zsmart.taxi.bean.history.BlackListClientHistory;
import ma.zsmart.taxi.dao.criteria.core.BlackListClientCriteria;
import ma.zsmart.taxi.dao.criteria.history.BlackListClientHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.BlackListClientDao;
import ma.zsmart.taxi.dao.facade.history.BlackListClientHistoryDao;
import ma.zsmart.taxi.dao.specification.history.BlackListClientHistorySpecification;
import ma.zsmart.taxi.service.facade.chauffeur.BlackListClientChauffeurService;
import ma.zsmart.taxi.ws.converter.BlackListClientConverter;
import ma.zsmart.taxi.ws.dto.BlackListClientDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class BlackListClientChauffeurServiceImpl extends AbstractServiceImpl<BlackListClient, BlackListClientDto,BlackListClientHistory, BlackListClientCriteria, BlackListClientHistoryCriteria, BlackListClientDao,
BlackListClientHistoryDao, BlackListClientConverter> implements BlackListClientChauffeurService {

    public BlackListClientChauffeurServiceImpl(BlackListClientDao dao, BlackListClientHistoryDao historyDao, BlackListClientConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(BlackListClient.class, BlackListClientDto.class, BlackListClientHistory.class, BlackListClientHistoryCriteria.class, BlackListClientHistorySpecification.class);
    }




}
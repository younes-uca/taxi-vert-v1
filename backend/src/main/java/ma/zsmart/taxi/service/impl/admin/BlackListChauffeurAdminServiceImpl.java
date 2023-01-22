package ma.zsmart.taxi.service.impl.admin;

import ma.zsmart.taxi.bean.core.BlackListChauffeur;
import ma.zsmart.taxi.bean.history.BlackListChauffeurHistory;
import ma.zsmart.taxi.dao.criteria.core.BlackListChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.BlackListChauffeurHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.BlackListChauffeurDao;
import ma.zsmart.taxi.dao.facade.history.BlackListChauffeurHistoryDao;
import ma.zsmart.taxi.dao.specification.history.BlackListChauffeurHistorySpecification;
import ma.zsmart.taxi.service.facade.admin.BlackListChauffeurAdminService;
import ma.zsmart.taxi.ws.converter.BlackListChauffeurConverter;
import ma.zsmart.taxi.ws.dto.BlackListChauffeurDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class BlackListChauffeurAdminServiceImpl extends AbstractServiceImpl<BlackListChauffeur, BlackListChauffeurDto,BlackListChauffeurHistory, BlackListChauffeurCriteria, BlackListChauffeurHistoryCriteria, BlackListChauffeurDao,
BlackListChauffeurHistoryDao, BlackListChauffeurConverter> implements BlackListChauffeurAdminService {

    public BlackListChauffeurAdminServiceImpl(BlackListChauffeurDao dao, BlackListChauffeurHistoryDao historyDao, BlackListChauffeurConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(BlackListChauffeur.class, BlackListChauffeurDto.class, BlackListChauffeurHistory.class, BlackListChauffeurHistoryCriteria.class, BlackListChauffeurHistorySpecification.class);
    }




}
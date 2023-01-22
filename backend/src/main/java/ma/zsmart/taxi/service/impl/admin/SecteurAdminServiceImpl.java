package ma.zsmart.taxi.service.impl.admin;

import ma.zsmart.taxi.bean.core.Secteur;
import ma.zsmart.taxi.bean.history.SecteurHistory;
import ma.zsmart.taxi.dao.criteria.core.SecteurCriteria;
import ma.zsmart.taxi.dao.criteria.history.SecteurHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.SecteurDao;
import ma.zsmart.taxi.dao.facade.history.SecteurHistoryDao;
import ma.zsmart.taxi.dao.specification.history.SecteurHistorySpecification;
import ma.zsmart.taxi.service.facade.admin.SecteurAdminService;
import ma.zsmart.taxi.ws.converter.SecteurConverter;
import ma.zsmart.taxi.ws.dto.SecteurDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class SecteurAdminServiceImpl extends AbstractServiceImpl<Secteur, SecteurDto,SecteurHistory, SecteurCriteria, SecteurHistoryCriteria, SecteurDao,
SecteurHistoryDao, SecteurConverter> implements SecteurAdminService {

    public SecteurAdminServiceImpl(SecteurDao dao, SecteurHistoryDao historyDao, SecteurConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Secteur.class, SecteurDto.class, SecteurHistory.class, SecteurHistoryCriteria.class, SecteurHistorySpecification.class);
    }




}
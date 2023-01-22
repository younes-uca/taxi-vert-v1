package ma.zsmart.taxi.service.impl.admin;

import ma.zsmart.taxi.bean.core.Langue;
import ma.zsmart.taxi.bean.history.LangueHistory;
import ma.zsmart.taxi.dao.criteria.core.LangueCriteria;
import ma.zsmart.taxi.dao.criteria.history.LangueHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.LangueDao;
import ma.zsmart.taxi.dao.facade.history.LangueHistoryDao;
import ma.zsmart.taxi.dao.specification.history.LangueHistorySpecification;
import ma.zsmart.taxi.service.facade.admin.LangueAdminService;
import ma.zsmart.taxi.ws.converter.LangueConverter;
import ma.zsmart.taxi.ws.dto.LangueDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class LangueAdminServiceImpl extends AbstractServiceImpl<Langue, LangueDto,LangueHistory, LangueCriteria, LangueHistoryCriteria, LangueDao,
LangueHistoryDao, LangueConverter> implements LangueAdminService {

    public LangueAdminServiceImpl(LangueDao dao, LangueHistoryDao historyDao, LangueConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Langue.class, LangueDto.class, LangueHistory.class, LangueHistoryCriteria.class, LangueHistorySpecification.class);
    }




}
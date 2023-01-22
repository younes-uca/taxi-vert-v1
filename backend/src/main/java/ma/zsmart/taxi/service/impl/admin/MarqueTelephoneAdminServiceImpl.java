package ma.zsmart.taxi.service.impl.admin;

import ma.zsmart.taxi.bean.core.MarqueTelephone;
import ma.zsmart.taxi.bean.history.MarqueTelephoneHistory;
import ma.zsmart.taxi.dao.criteria.core.MarqueTelephoneCriteria;
import ma.zsmart.taxi.dao.criteria.history.MarqueTelephoneHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.MarqueTelephoneDao;
import ma.zsmart.taxi.dao.facade.history.MarqueTelephoneHistoryDao;
import ma.zsmart.taxi.dao.specification.history.MarqueTelephoneHistorySpecification;
import ma.zsmart.taxi.service.facade.admin.MarqueTelephoneAdminService;
import ma.zsmart.taxi.ws.converter.MarqueTelephoneConverter;
import ma.zsmart.taxi.ws.dto.MarqueTelephoneDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class MarqueTelephoneAdminServiceImpl extends AbstractServiceImpl<MarqueTelephone, MarqueTelephoneDto,MarqueTelephoneHistory, MarqueTelephoneCriteria, MarqueTelephoneHistoryCriteria, MarqueTelephoneDao,
MarqueTelephoneHistoryDao, MarqueTelephoneConverter> implements MarqueTelephoneAdminService {

    public MarqueTelephoneAdminServiceImpl(MarqueTelephoneDao dao, MarqueTelephoneHistoryDao historyDao, MarqueTelephoneConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(MarqueTelephone.class, MarqueTelephoneDto.class, MarqueTelephoneHistory.class, MarqueTelephoneHistoryCriteria.class, MarqueTelephoneHistorySpecification.class);
    }




}
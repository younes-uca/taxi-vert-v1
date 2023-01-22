package ma.zsmart.taxi.service.impl.admin;

import ma.zsmart.taxi.bean.core.MoyenTransport;
import ma.zsmart.taxi.bean.history.MoyenTransportHistory;
import ma.zsmart.taxi.dao.criteria.core.MoyenTransportCriteria;
import ma.zsmart.taxi.dao.criteria.history.MoyenTransportHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.MoyenTransportDao;
import ma.zsmart.taxi.dao.facade.history.MoyenTransportHistoryDao;
import ma.zsmart.taxi.dao.specification.history.MoyenTransportHistorySpecification;
import ma.zsmart.taxi.service.facade.admin.MoyenTransportAdminService;
import ma.zsmart.taxi.ws.converter.MoyenTransportConverter;
import ma.zsmart.taxi.ws.dto.MoyenTransportDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class MoyenTransportAdminServiceImpl extends AbstractServiceImpl<MoyenTransport, MoyenTransportDto,MoyenTransportHistory, MoyenTransportCriteria, MoyenTransportHistoryCriteria, MoyenTransportDao,
MoyenTransportHistoryDao, MoyenTransportConverter> implements MoyenTransportAdminService {

    public MoyenTransportAdminServiceImpl(MoyenTransportDao dao, MoyenTransportHistoryDao historyDao, MoyenTransportConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(MoyenTransport.class, MoyenTransportDto.class, MoyenTransportHistory.class, MoyenTransportHistoryCriteria.class, MoyenTransportHistorySpecification.class);
    }




}
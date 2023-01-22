package ma.zsmart.taxi.service.facade.client;

import java.util.List;
import ma.zsmart.taxi.bean.core.MoyenTransport;
import ma.zsmart.taxi.ws.dto.MoyenTransportDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.MoyenTransportCriteria;
import ma.zsmart.taxi.dao.criteria.history.MoyenTransportHistoryCriteria;



public interface MoyenTransportClientService extends IService<MoyenTransport, MoyenTransportDto,MoyenTransportCriteria, MoyenTransportHistoryCriteria> {
    //MoyenTransport findOrSave(MoyenTransport moyenTransport);


}

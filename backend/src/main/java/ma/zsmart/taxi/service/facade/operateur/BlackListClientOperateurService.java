package ma.zsmart.taxi.service.facade.operateur;

import java.util.List;
import ma.zsmart.taxi.bean.core.BlackListClient;
import ma.zsmart.taxi.ws.dto.BlackListClientDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.BlackListClientCriteria;
import ma.zsmart.taxi.dao.criteria.history.BlackListClientHistoryCriteria;



public interface BlackListClientOperateurService extends IService<BlackListClient, BlackListClientDto,BlackListClientCriteria, BlackListClientHistoryCriteria> {
    //BlackListClient findOrSave(BlackListClient blackListClient);


}

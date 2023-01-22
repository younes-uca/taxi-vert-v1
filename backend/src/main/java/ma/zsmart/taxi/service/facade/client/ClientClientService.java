package ma.zsmart.taxi.service.facade.client;

import java.util.List;
import ma.zsmart.taxi.bean.core.Client;
import ma.zsmart.taxi.ws.dto.ClientDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.ClientCriteria;
import ma.zsmart.taxi.dao.criteria.history.ClientHistoryCriteria;



public interface ClientClientService extends IService<Client, ClientDto,ClientCriteria, ClientHistoryCriteria> {
    Client findByUsername(String username);
    //Client findOrSave(Client client);


}

package ma.zsmart.taxi.service.impl.operateur;

import ma.zsmart.taxi.bean.core.Client;
import ma.zsmart.taxi.bean.history.ClientHistory;
import ma.zsmart.taxi.dao.criteria.core.ClientCriteria;
import ma.zsmart.taxi.dao.criteria.history.ClientHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.ClientDao;
import ma.zsmart.taxi.dao.facade.history.ClientHistoryDao;
import ma.zsmart.taxi.dao.specification.history.ClientHistorySpecification;
import ma.zsmart.taxi.service.facade.operateur.ClientOperateurService;
import ma.zsmart.taxi.ws.converter.ClientConverter;
import ma.zsmart.taxi.ws.dto.ClientDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class ClientOperateurServiceImpl extends AbstractServiceImpl<Client, ClientDto,ClientHistory, ClientCriteria, ClientHistoryCriteria, ClientDao,
ClientHistoryDao, ClientConverter> implements ClientOperateurService {

    public ClientOperateurServiceImpl(ClientDao dao, ClientHistoryDao historyDao, ClientConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Client.class, ClientDto.class, ClientHistory.class, ClientHistoryCriteria.class, ClientHistorySpecification.class);
    }


    @Override
    public Client findByUsername(String username) {
        return null;
    }
}
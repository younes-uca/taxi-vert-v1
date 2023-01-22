package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Client;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClientDao extends AbstractRepository<Client,Long> {
    Client findByUsername(String username);
}

package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.BlackListClient;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.BlackListClient;

import java.util.List;


@Repository
public interface BlackListClientDao extends AbstractRepository<BlackListClient,Long> {
    BlackListClient findByClient(String client);
    int deleteByClient(String client);
}

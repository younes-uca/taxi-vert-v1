package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.MoyenTransport;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.MoyenTransport;

import java.util.List;


@Repository
public interface MoyenTransportDao extends AbstractRepository<MoyenTransport,Long> {
    MoyenTransport findByCode(String code);
    int deleteByCode(String code);
}

package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.MarqueTelephone;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.MarqueTelephone;

import java.util.List;


@Repository
public interface MarqueTelephoneDao extends AbstractRepository<MarqueTelephone,Long> {
    MarqueTelephone findByCode(String code);
    int deleteByCode(String code);
}

package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Langue;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.Langue;

import java.util.List;


@Repository
public interface LangueDao extends AbstractRepository<Langue,Long> {
    Langue findByCode(String code);
    int deleteByCode(String code);
}

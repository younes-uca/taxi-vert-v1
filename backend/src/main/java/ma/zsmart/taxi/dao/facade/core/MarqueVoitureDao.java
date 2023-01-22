package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.MarqueVoiture;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.MarqueVoiture;

import java.util.List;


@Repository
public interface MarqueVoitureDao extends AbstractRepository<MarqueVoiture,Long> {
    MarqueVoiture findByCode(String code);
    int deleteByCode(String code);
}

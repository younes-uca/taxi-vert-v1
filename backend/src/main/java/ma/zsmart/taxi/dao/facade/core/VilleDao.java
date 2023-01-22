package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Ville;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.Ville;

import java.util.List;


@Repository
public interface VilleDao extends AbstractRepository<Ville,Long> {
    Ville findByCode(String code);
    int deleteByCode(String code);
}

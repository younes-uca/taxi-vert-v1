package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Secteur;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.Secteur;

import java.util.List;


@Repository
public interface SecteurDao extends AbstractRepository<Secteur,Long> {
    Secteur findByCode(String code);
    int deleteByCode(String code);
}

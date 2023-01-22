package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Chauffeur;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ChauffeurDao extends AbstractRepository<Chauffeur,Long> {
    Chauffeur findByUsername(String username);
}

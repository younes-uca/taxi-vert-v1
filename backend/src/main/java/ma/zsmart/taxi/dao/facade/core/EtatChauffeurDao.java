package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.EtatChauffeur;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.EtatChauffeur;

import java.util.List;


@Repository
public interface EtatChauffeurDao extends AbstractRepository<EtatChauffeur,Long> {
    EtatChauffeur findByCode(String code);
    int deleteByCode(String code);
}

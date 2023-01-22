package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.BlackListChauffeur;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.BlackListChauffeur;

import java.util.List;


@Repository
public interface BlackListChauffeurDao extends AbstractRepository<BlackListChauffeur,Long> {
    BlackListChauffeur findByClient(String client);
    int deleteByClient(String client);
}

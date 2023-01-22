package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Operateur;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OperateurDao extends AbstractRepository<Operateur,Long> {
    Operateur findByUsername(String username);
}

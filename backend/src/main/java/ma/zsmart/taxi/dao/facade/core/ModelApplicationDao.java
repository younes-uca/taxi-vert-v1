package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.ModelApplication;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.ModelApplication;

import java.util.List;


@Repository
public interface ModelApplicationDao extends AbstractRepository<ModelApplication,Long> {
    ModelApplication findByCode(String code);
    int deleteByCode(String code);
}

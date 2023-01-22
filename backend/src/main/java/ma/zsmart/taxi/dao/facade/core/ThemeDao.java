package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Theme;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.Theme;

import java.util.List;


@Repository
public interface ThemeDao extends AbstractRepository<Theme,Long> {
    Theme findByCode(String code);
    int deleteByCode(String code);
}

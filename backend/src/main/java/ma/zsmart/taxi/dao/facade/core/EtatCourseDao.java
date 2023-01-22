package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.EtatCourse;
import org.springframework.stereotype.Repository;
import ma.zsmart.taxi.bean.core.EtatCourse;

import java.util.List;


@Repository
public interface EtatCourseDao extends AbstractRepository<EtatCourse,Long> {
    EtatCourse findByCode(String code);
    int deleteByCode(String code);
}

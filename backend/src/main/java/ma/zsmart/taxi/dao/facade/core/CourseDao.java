package ma.zsmart.taxi.dao.facade.core;



import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.bean.core.Course;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CourseDao extends AbstractRepository<Course,Long> {
}

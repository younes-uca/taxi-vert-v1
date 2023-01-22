package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.CourseHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseHistoryDao extends AbstractHistoryRepository<CourseHistory,Long> {

}

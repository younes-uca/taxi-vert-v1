package ma.zsmart.taxi.service.impl.operateur;

import ma.zsmart.taxi.bean.core.Course;
import ma.zsmart.taxi.bean.history.CourseHistory;
import ma.zsmart.taxi.dao.criteria.core.CourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.CourseHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.CourseDao;
import ma.zsmart.taxi.dao.facade.history.CourseHistoryDao;
import ma.zsmart.taxi.dao.specification.history.CourseHistorySpecification;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.ws.converter.CourseConverter;
import ma.zsmart.taxi.ws.dto.CourseDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class CourseOperateurServiceImpl extends AbstractServiceImpl<Course, CourseDto,CourseHistory, CourseCriteria, CourseHistoryCriteria, CourseDao,
CourseHistoryDao, CourseConverter> implements CourseOperateurService {

    public CourseOperateurServiceImpl(CourseDao dao, CourseHistoryDao historyDao, CourseConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Course.class, CourseDto.class, CourseHistory.class, CourseHistoryCriteria.class, CourseHistorySpecification.class);
    }




}
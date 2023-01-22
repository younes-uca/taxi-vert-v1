package ma.zsmart.taxi.service.impl.client;

import ma.zsmart.taxi.bean.core.EtatCourse;
import ma.zsmart.taxi.bean.history.EtatCourseHistory;
import ma.zsmart.taxi.dao.criteria.core.EtatCourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.EtatCourseHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.EtatCourseDao;
import ma.zsmart.taxi.dao.facade.history.EtatCourseHistoryDao;
import ma.zsmart.taxi.dao.specification.history.EtatCourseHistorySpecification;
import ma.zsmart.taxi.service.facade.client.EtatCourseClientService;
import ma.zsmart.taxi.ws.converter.EtatCourseConverter;
import ma.zsmart.taxi.ws.dto.EtatCourseDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class EtatCourseClientServiceImpl extends AbstractServiceImpl<EtatCourse, EtatCourseDto,EtatCourseHistory, EtatCourseCriteria, EtatCourseHistoryCriteria, EtatCourseDao,
EtatCourseHistoryDao, EtatCourseConverter> implements EtatCourseClientService {

    public EtatCourseClientServiceImpl(EtatCourseDao dao, EtatCourseHistoryDao historyDao, EtatCourseConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(EtatCourse.class, EtatCourseDto.class, EtatCourseHistory.class, EtatCourseHistoryCriteria.class, EtatCourseHistorySpecification.class);
    }




}
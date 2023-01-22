package ma.zsmart.taxi.service.facade.client;

import java.util.List;
import ma.zsmart.taxi.bean.core.EtatCourse;
import ma.zsmart.taxi.ws.dto.EtatCourseDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.EtatCourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.EtatCourseHistoryCriteria;



public interface EtatCourseClientService extends IService<EtatCourse, EtatCourseDto,EtatCourseCriteria, EtatCourseHistoryCriteria> {
    //EtatCourse findOrSave(EtatCourse etatCourse);


}

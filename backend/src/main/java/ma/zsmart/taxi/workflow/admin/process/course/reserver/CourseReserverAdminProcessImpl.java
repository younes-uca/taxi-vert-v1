package ma.zsmart.taxi.workflow.admin.process.course.reserver;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseReserverAdminProcessImpl extends AbstractProcessImpl<CourseReserverAdminInput, CourseReserverAdminOutput> implements CourseReserverAdminProcess {

    @Override
    public void init(CourseReserverAdminInput input, CourseReserverAdminOutput output) {
        
    }

    @Override
    public void validate(CourseReserverAdminInput input, CourseReserverAdminOutput output, Result<CourseReserverAdminInput, CourseReserverAdminOutput> result) {
        
    }

    @Override
    public void run(CourseReserverAdminInput input, CourseReserverAdminOutput output, Result<CourseReserverAdminInput, CourseReserverAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseReserverAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

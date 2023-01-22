package ma.zsmart.taxi.workflow.admin.process.course.terminer;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseTerminerAdminProcessImpl extends AbstractProcessImpl<CourseTerminerAdminInput, CourseTerminerAdminOutput> implements CourseTerminerAdminProcess {

    @Override
    public void init(CourseTerminerAdminInput input, CourseTerminerAdminOutput output) {
        
    }

    @Override
    public void validate(CourseTerminerAdminInput input, CourseTerminerAdminOutput output, Result<CourseTerminerAdminInput, CourseTerminerAdminOutput> result) {
        
    }

    @Override
    public void run(CourseTerminerAdminInput input, CourseTerminerAdminOutput output, Result<CourseTerminerAdminInput, CourseTerminerAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseTerminerAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

package ma.zsmart.taxi.workflow.admin.process.course.demarrer;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseDemarrerAdminProcessImpl extends AbstractProcessImpl<CourseDemarrerAdminInput, CourseDemarrerAdminOutput> implements CourseDemarrerAdminProcess {

    @Override
    public void init(CourseDemarrerAdminInput input, CourseDemarrerAdminOutput output) {
        
    }

    @Override
    public void validate(CourseDemarrerAdminInput input, CourseDemarrerAdminOutput output, Result<CourseDemarrerAdminInput, CourseDemarrerAdminOutput> result) {
        
    }

    @Override
    public void run(CourseDemarrerAdminInput input, CourseDemarrerAdminOutput output, Result<CourseDemarrerAdminInput, CourseDemarrerAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseDemarrerAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

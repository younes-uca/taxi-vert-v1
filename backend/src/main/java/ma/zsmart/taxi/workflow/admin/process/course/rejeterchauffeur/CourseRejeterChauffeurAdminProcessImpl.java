package ma.zsmart.taxi.workflow.admin.process.course.rejeterchauffeur;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseRejeterChauffeurAdminProcessImpl extends AbstractProcessImpl<CourseRejeterChauffeurAdminInput, CourseRejeterChauffeurAdminOutput> implements CourseRejeterChauffeurAdminProcess {

    @Override
    public void init(CourseRejeterChauffeurAdminInput input, CourseRejeterChauffeurAdminOutput output) {
        
    }

    @Override
    public void validate(CourseRejeterChauffeurAdminInput input, CourseRejeterChauffeurAdminOutput output, Result<CourseRejeterChauffeurAdminInput, CourseRejeterChauffeurAdminOutput> result) {
        
    }

    @Override
    public void run(CourseRejeterChauffeurAdminInput input, CourseRejeterChauffeurAdminOutput output, Result<CourseRejeterChauffeurAdminInput, CourseRejeterChauffeurAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseRejeterChauffeurAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

package ma.zsmart.taxi.workflow.admin.process.course.accepterchauffeur;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseAccepterChauffeurAdminProcessImpl extends AbstractProcessImpl<CourseAccepterChauffeurAdminInput, CourseAccepterChauffeurAdminOutput> implements CourseAccepterChauffeurAdminProcess {

    @Override
    public void init(CourseAccepterChauffeurAdminInput input, CourseAccepterChauffeurAdminOutput output) {
        
    }

    @Override
    public void validate(CourseAccepterChauffeurAdminInput input, CourseAccepterChauffeurAdminOutput output, Result<CourseAccepterChauffeurAdminInput, CourseAccepterChauffeurAdminOutput> result) {
        
    }

    @Override
    public void run(CourseAccepterChauffeurAdminInput input, CourseAccepterChauffeurAdminOutput output, Result<CourseAccepterChauffeurAdminInput, CourseAccepterChauffeurAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseAccepterChauffeurAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

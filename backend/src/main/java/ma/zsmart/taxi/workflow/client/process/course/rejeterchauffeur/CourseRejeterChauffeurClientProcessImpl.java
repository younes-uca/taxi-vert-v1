package ma.zsmart.taxi.workflow.client.process.course.rejeterchauffeur;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseRejeterChauffeurClientProcessImpl extends AbstractProcessImpl<CourseRejeterChauffeurClientInput, CourseRejeterChauffeurClientOutput> implements CourseRejeterChauffeurClientProcess {

    @Override
    public void init(CourseRejeterChauffeurClientInput input, CourseRejeterChauffeurClientOutput output) {
        
    }

    @Override
    public void validate(CourseRejeterChauffeurClientInput input, CourseRejeterChauffeurClientOutput output, Result<CourseRejeterChauffeurClientInput, CourseRejeterChauffeurClientOutput> result) {
        
    }

    @Override
    public void run(CourseRejeterChauffeurClientInput input, CourseRejeterChauffeurClientOutput output, Result<CourseRejeterChauffeurClientInput, CourseRejeterChauffeurClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseRejeterChauffeurClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

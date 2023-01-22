package ma.zsmart.taxi.workflow.client.process.course.accepterchauffeur;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseAccepterChauffeurClientProcessImpl extends AbstractProcessImpl<CourseAccepterChauffeurClientInput, CourseAccepterChauffeurClientOutput> implements CourseAccepterChauffeurClientProcess {

    @Override
    public void init(CourseAccepterChauffeurClientInput input, CourseAccepterChauffeurClientOutput output) {
        
    }

    @Override
    public void validate(CourseAccepterChauffeurClientInput input, CourseAccepterChauffeurClientOutput output, Result<CourseAccepterChauffeurClientInput, CourseAccepterChauffeurClientOutput> result) {
        
    }

    @Override
    public void run(CourseAccepterChauffeurClientInput input, CourseAccepterChauffeurClientOutput output, Result<CourseAccepterChauffeurClientInput, CourseAccepterChauffeurClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseAccepterChauffeurClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

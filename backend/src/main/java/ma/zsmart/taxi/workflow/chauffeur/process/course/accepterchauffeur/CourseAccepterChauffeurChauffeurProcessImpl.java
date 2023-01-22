package ma.zsmart.taxi.workflow.chauffeur.process.course.accepterchauffeur;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseAccepterChauffeurChauffeurProcessImpl extends AbstractProcessImpl<CourseAccepterChauffeurChauffeurInput, CourseAccepterChauffeurChauffeurOutput> implements CourseAccepterChauffeurChauffeurProcess {

    @Override
    public void init(CourseAccepterChauffeurChauffeurInput input, CourseAccepterChauffeurChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseAccepterChauffeurChauffeurInput input, CourseAccepterChauffeurChauffeurOutput output, Result<CourseAccepterChauffeurChauffeurInput, CourseAccepterChauffeurChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseAccepterChauffeurChauffeurInput input, CourseAccepterChauffeurChauffeurOutput output, Result<CourseAccepterChauffeurChauffeurInput, CourseAccepterChauffeurChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseAccepterChauffeurChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

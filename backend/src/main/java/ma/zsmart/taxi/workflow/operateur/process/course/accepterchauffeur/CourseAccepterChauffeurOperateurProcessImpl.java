package ma.zsmart.taxi.workflow.operateur.process.course.accepterchauffeur;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseAccepterChauffeurOperateurProcessImpl extends AbstractProcessImpl<CourseAccepterChauffeurOperateurInput, CourseAccepterChauffeurOperateurOutput> implements CourseAccepterChauffeurOperateurProcess {

    @Override
    public void init(CourseAccepterChauffeurOperateurInput input, CourseAccepterChauffeurOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseAccepterChauffeurOperateurInput input, CourseAccepterChauffeurOperateurOutput output, Result<CourseAccepterChauffeurOperateurInput, CourseAccepterChauffeurOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseAccepterChauffeurOperateurInput input, CourseAccepterChauffeurOperateurOutput output, Result<CourseAccepterChauffeurOperateurInput, CourseAccepterChauffeurOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseAccepterChauffeurOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

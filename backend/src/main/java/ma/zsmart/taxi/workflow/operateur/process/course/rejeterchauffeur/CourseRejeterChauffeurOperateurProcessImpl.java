package ma.zsmart.taxi.workflow.operateur.process.course.rejeterchauffeur;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseRejeterChauffeurOperateurProcessImpl extends AbstractProcessImpl<CourseRejeterChauffeurOperateurInput, CourseRejeterChauffeurOperateurOutput> implements CourseRejeterChauffeurOperateurProcess {

    @Override
    public void init(CourseRejeterChauffeurOperateurInput input, CourseRejeterChauffeurOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseRejeterChauffeurOperateurInput input, CourseRejeterChauffeurOperateurOutput output, Result<CourseRejeterChauffeurOperateurInput, CourseRejeterChauffeurOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseRejeterChauffeurOperateurInput input, CourseRejeterChauffeurOperateurOutput output, Result<CourseRejeterChauffeurOperateurInput, CourseRejeterChauffeurOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseRejeterChauffeurOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

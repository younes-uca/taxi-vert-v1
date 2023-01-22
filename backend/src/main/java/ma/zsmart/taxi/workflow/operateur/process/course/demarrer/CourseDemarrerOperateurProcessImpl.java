package ma.zsmart.taxi.workflow.operateur.process.course.demarrer;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseDemarrerOperateurProcessImpl extends AbstractProcessImpl<CourseDemarrerOperateurInput, CourseDemarrerOperateurOutput> implements CourseDemarrerOperateurProcess {

    @Override
    public void init(CourseDemarrerOperateurInput input, CourseDemarrerOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseDemarrerOperateurInput input, CourseDemarrerOperateurOutput output, Result<CourseDemarrerOperateurInput, CourseDemarrerOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseDemarrerOperateurInput input, CourseDemarrerOperateurOutput output, Result<CourseDemarrerOperateurInput, CourseDemarrerOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseDemarrerOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

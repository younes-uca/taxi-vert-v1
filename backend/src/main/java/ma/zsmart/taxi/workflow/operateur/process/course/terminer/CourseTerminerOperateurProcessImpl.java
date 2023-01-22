package ma.zsmart.taxi.workflow.operateur.process.course.terminer;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseTerminerOperateurProcessImpl extends AbstractProcessImpl<CourseTerminerOperateurInput, CourseTerminerOperateurOutput> implements CourseTerminerOperateurProcess {

    @Override
    public void init(CourseTerminerOperateurInput input, CourseTerminerOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseTerminerOperateurInput input, CourseTerminerOperateurOutput output, Result<CourseTerminerOperateurInput, CourseTerminerOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseTerminerOperateurInput input, CourseTerminerOperateurOutput output, Result<CourseTerminerOperateurInput, CourseTerminerOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseTerminerOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

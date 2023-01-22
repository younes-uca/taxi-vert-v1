package ma.zsmart.taxi.workflow.operateur.process.course.reserver;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseReserverOperateurProcessImpl extends AbstractProcessImpl<CourseReserverOperateurInput, CourseReserverOperateurOutput> implements CourseReserverOperateurProcess {

    @Override
    public void init(CourseReserverOperateurInput input, CourseReserverOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseReserverOperateurInput input, CourseReserverOperateurOutput output, Result<CourseReserverOperateurInput, CourseReserverOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseReserverOperateurInput input, CourseReserverOperateurOutput output, Result<CourseReserverOperateurInput, CourseReserverOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseReserverOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

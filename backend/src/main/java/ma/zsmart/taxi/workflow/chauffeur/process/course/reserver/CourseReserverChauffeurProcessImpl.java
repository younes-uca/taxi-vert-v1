package ma.zsmart.taxi.workflow.chauffeur.process.course.reserver;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseReserverChauffeurProcessImpl extends AbstractProcessImpl<CourseReserverChauffeurInput, CourseReserverChauffeurOutput> implements CourseReserverChauffeurProcess {

    @Override
    public void init(CourseReserverChauffeurInput input, CourseReserverChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseReserverChauffeurInput input, CourseReserverChauffeurOutput output, Result<CourseReserverChauffeurInput, CourseReserverChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseReserverChauffeurInput input, CourseReserverChauffeurOutput output, Result<CourseReserverChauffeurInput, CourseReserverChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseReserverChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

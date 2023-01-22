package ma.zsmart.taxi.workflow.chauffeur.process.course.terminer;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseTerminerChauffeurProcessImpl extends AbstractProcessImpl<CourseTerminerChauffeurInput, CourseTerminerChauffeurOutput> implements CourseTerminerChauffeurProcess {

    @Override
    public void init(CourseTerminerChauffeurInput input, CourseTerminerChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseTerminerChauffeurInput input, CourseTerminerChauffeurOutput output, Result<CourseTerminerChauffeurInput, CourseTerminerChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseTerminerChauffeurInput input, CourseTerminerChauffeurOutput output, Result<CourseTerminerChauffeurInput, CourseTerminerChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseTerminerChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

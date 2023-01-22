package ma.zsmart.taxi.workflow.chauffeur.process.course.rejeterchauffeur;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseRejeterChauffeurChauffeurProcessImpl extends AbstractProcessImpl<CourseRejeterChauffeurChauffeurInput, CourseRejeterChauffeurChauffeurOutput> implements CourseRejeterChauffeurChauffeurProcess {

    @Override
    public void init(CourseRejeterChauffeurChauffeurInput input, CourseRejeterChauffeurChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseRejeterChauffeurChauffeurInput input, CourseRejeterChauffeurChauffeurOutput output, Result<CourseRejeterChauffeurChauffeurInput, CourseRejeterChauffeurChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseRejeterChauffeurChauffeurInput input, CourseRejeterChauffeurChauffeurOutput output, Result<CourseRejeterChauffeurChauffeurInput, CourseRejeterChauffeurChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseRejeterChauffeurChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

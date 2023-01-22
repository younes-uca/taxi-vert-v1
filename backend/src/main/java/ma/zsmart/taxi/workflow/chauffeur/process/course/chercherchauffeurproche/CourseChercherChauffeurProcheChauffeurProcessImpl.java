package ma.zsmart.taxi.workflow.chauffeur.process.course.chercherchauffeurproche;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseChercherChauffeurProcheChauffeurProcessImpl extends AbstractProcessImpl<CourseChercherChauffeurProcheChauffeurInput, CourseChercherChauffeurProcheChauffeurOutput> implements CourseChercherChauffeurProcheChauffeurProcess {

    @Override
    public void init(CourseChercherChauffeurProcheChauffeurInput input, CourseChercherChauffeurProcheChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseChercherChauffeurProcheChauffeurInput input, CourseChercherChauffeurProcheChauffeurOutput output, Result<CourseChercherChauffeurProcheChauffeurInput, CourseChercherChauffeurProcheChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseChercherChauffeurProcheChauffeurInput input, CourseChercherChauffeurProcheChauffeurOutput output, Result<CourseChercherChauffeurProcheChauffeurInput, CourseChercherChauffeurProcheChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseChercherChauffeurProcheChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

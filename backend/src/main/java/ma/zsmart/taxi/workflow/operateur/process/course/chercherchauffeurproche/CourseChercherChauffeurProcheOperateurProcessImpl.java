package ma.zsmart.taxi.workflow.operateur.process.course.chercherchauffeurproche;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseChercherChauffeurProcheOperateurProcessImpl extends AbstractProcessImpl<CourseChercherChauffeurProcheOperateurInput, CourseChercherChauffeurProcheOperateurOutput> implements CourseChercherChauffeurProcheOperateurProcess {

    @Override
    public void init(CourseChercherChauffeurProcheOperateurInput input, CourseChercherChauffeurProcheOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseChercherChauffeurProcheOperateurInput input, CourseChercherChauffeurProcheOperateurOutput output, Result<CourseChercherChauffeurProcheOperateurInput, CourseChercherChauffeurProcheOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseChercherChauffeurProcheOperateurInput input, CourseChercherChauffeurProcheOperateurOutput output, Result<CourseChercherChauffeurProcheOperateurInput, CourseChercherChauffeurProcheOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseChercherChauffeurProcheOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

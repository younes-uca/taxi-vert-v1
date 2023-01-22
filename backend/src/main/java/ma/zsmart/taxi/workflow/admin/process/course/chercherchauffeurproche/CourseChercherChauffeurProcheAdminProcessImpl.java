package ma.zsmart.taxi.workflow.admin.process.course.chercherchauffeurproche;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseChercherChauffeurProcheAdminProcessImpl extends AbstractProcessImpl<CourseChercherChauffeurProcheAdminInput, CourseChercherChauffeurProcheAdminOutput> implements CourseChercherChauffeurProcheAdminProcess {

    @Override
    public void init(CourseChercherChauffeurProcheAdminInput input, CourseChercherChauffeurProcheAdminOutput output) {
        
    }

    @Override
    public void validate(CourseChercherChauffeurProcheAdminInput input, CourseChercherChauffeurProcheAdminOutput output, Result<CourseChercherChauffeurProcheAdminInput, CourseChercherChauffeurProcheAdminOutput> result) {
        
    }

    @Override
    public void run(CourseChercherChauffeurProcheAdminInput input, CourseChercherChauffeurProcheAdminOutput output, Result<CourseChercherChauffeurProcheAdminInput, CourseChercherChauffeurProcheAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseChercherChauffeurProcheAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

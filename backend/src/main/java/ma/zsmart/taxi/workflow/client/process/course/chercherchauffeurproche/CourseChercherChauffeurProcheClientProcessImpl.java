package ma.zsmart.taxi.workflow.client.process.course.chercherchauffeurproche;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseChercherChauffeurProcheClientProcessImpl extends AbstractProcessImpl<CourseChercherChauffeurProcheClientInput, CourseChercherChauffeurProcheClientOutput> implements CourseChercherChauffeurProcheClientProcess {

    @Override
    public void init(CourseChercherChauffeurProcheClientInput input, CourseChercherChauffeurProcheClientOutput output) {
        
    }

    @Override
    public void validate(CourseChercherChauffeurProcheClientInput input, CourseChercherChauffeurProcheClientOutput output, Result<CourseChercherChauffeurProcheClientInput, CourseChercherChauffeurProcheClientOutput> result) {
        
    }

    @Override
    public void run(CourseChercherChauffeurProcheClientInput input, CourseChercherChauffeurProcheClientOutput output, Result<CourseChercherChauffeurProcheClientInput, CourseChercherChauffeurProcheClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseChercherChauffeurProcheClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

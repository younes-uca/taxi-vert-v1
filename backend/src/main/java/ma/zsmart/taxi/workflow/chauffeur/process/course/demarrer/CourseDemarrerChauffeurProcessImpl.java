package ma.zsmart.taxi.workflow.chauffeur.process.course.demarrer;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseDemarrerChauffeurProcessImpl extends AbstractProcessImpl<CourseDemarrerChauffeurInput, CourseDemarrerChauffeurOutput> implements CourseDemarrerChauffeurProcess {

    @Override
    public void init(CourseDemarrerChauffeurInput input, CourseDemarrerChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseDemarrerChauffeurInput input, CourseDemarrerChauffeurOutput output, Result<CourseDemarrerChauffeurInput, CourseDemarrerChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseDemarrerChauffeurInput input, CourseDemarrerChauffeurOutput output, Result<CourseDemarrerChauffeurInput, CourseDemarrerChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseDemarrerChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

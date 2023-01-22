package ma.zsmart.taxi.workflow.client.process.course.demarrer;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseDemarrerClientProcessImpl extends AbstractProcessImpl<CourseDemarrerClientInput, CourseDemarrerClientOutput> implements CourseDemarrerClientProcess {

    @Override
    public void init(CourseDemarrerClientInput input, CourseDemarrerClientOutput output) {
        
    }

    @Override
    public void validate(CourseDemarrerClientInput input, CourseDemarrerClientOutput output, Result<CourseDemarrerClientInput, CourseDemarrerClientOutput> result) {
        
    }

    @Override
    public void run(CourseDemarrerClientInput input, CourseDemarrerClientOutput output, Result<CourseDemarrerClientInput, CourseDemarrerClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseDemarrerClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

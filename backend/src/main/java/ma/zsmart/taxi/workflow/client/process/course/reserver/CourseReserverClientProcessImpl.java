package ma.zsmart.taxi.workflow.client.process.course.reserver;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseReserverClientProcessImpl extends AbstractProcessImpl<CourseReserverClientInput, CourseReserverClientOutput> implements CourseReserverClientProcess {

    @Override
    public void init(CourseReserverClientInput input, CourseReserverClientOutput output) {
        
    }

    @Override
    public void validate(CourseReserverClientInput input, CourseReserverClientOutput output, Result<CourseReserverClientInput, CourseReserverClientOutput> result) {
        
    }

    @Override
    public void run(CourseReserverClientInput input, CourseReserverClientOutput output, Result<CourseReserverClientInput, CourseReserverClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseReserverClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

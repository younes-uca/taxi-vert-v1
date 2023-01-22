package ma.zsmart.taxi.workflow.client.process.course.terminer;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseTerminerClientProcessImpl extends AbstractProcessImpl<CourseTerminerClientInput, CourseTerminerClientOutput> implements CourseTerminerClientProcess {

    @Override
    public void init(CourseTerminerClientInput input, CourseTerminerClientOutput output) {
        
    }

    @Override
    public void validate(CourseTerminerClientInput input, CourseTerminerClientOutput output, Result<CourseTerminerClientInput, CourseTerminerClientOutput> result) {
        
    }

    @Override
    public void run(CourseTerminerClientInput input, CourseTerminerClientOutput output, Result<CourseTerminerClientInput, CourseTerminerClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseTerminerClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

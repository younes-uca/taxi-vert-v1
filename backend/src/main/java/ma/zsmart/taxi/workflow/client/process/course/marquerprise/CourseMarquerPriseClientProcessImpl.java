package ma.zsmart.taxi.workflow.client.process.course.marquerprise;

import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseMarquerPriseClientProcessImpl extends AbstractProcessImpl<CourseMarquerPriseClientInput, CourseMarquerPriseClientOutput> implements CourseMarquerPriseClientProcess {

    @Override
    public void init(CourseMarquerPriseClientInput input, CourseMarquerPriseClientOutput output) {
        
    }

    @Override
    public void validate(CourseMarquerPriseClientInput input, CourseMarquerPriseClientOutput output, Result<CourseMarquerPriseClientInput, CourseMarquerPriseClientOutput> result) {
        
    }

    @Override
    public void run(CourseMarquerPriseClientInput input, CourseMarquerPriseClientOutput output, Result<CourseMarquerPriseClientInput, CourseMarquerPriseClientOutput> result) {
        
    }
    


    private CourseClientService service;
    public CourseMarquerPriseClientProcessImpl(CourseClientService service) {
        this.service = service;
    }

}

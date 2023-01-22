package ma.zsmart.taxi.workflow.admin.process.course.marquerprise;

import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseMarquerPriseAdminProcessImpl extends AbstractProcessImpl<CourseMarquerPriseAdminInput, CourseMarquerPriseAdminOutput> implements CourseMarquerPriseAdminProcess {

    @Override
    public void init(CourseMarquerPriseAdminInput input, CourseMarquerPriseAdminOutput output) {
        
    }

    @Override
    public void validate(CourseMarquerPriseAdminInput input, CourseMarquerPriseAdminOutput output, Result<CourseMarquerPriseAdminInput, CourseMarquerPriseAdminOutput> result) {
        
    }

    @Override
    public void run(CourseMarquerPriseAdminInput input, CourseMarquerPriseAdminOutput output, Result<CourseMarquerPriseAdminInput, CourseMarquerPriseAdminOutput> result) {
        
    }
    


    private CourseAdminService service;
    public CourseMarquerPriseAdminProcessImpl(CourseAdminService service) {
        this.service = service;
    }

}

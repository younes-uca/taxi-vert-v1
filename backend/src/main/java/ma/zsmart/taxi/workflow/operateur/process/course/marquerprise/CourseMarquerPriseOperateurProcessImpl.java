package ma.zsmart.taxi.workflow.operateur.process.course.marquerprise;

import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseMarquerPriseOperateurProcessImpl extends AbstractProcessImpl<CourseMarquerPriseOperateurInput, CourseMarquerPriseOperateurOutput> implements CourseMarquerPriseOperateurProcess {

    @Override
    public void init(CourseMarquerPriseOperateurInput input, CourseMarquerPriseOperateurOutput output) {
        
    }

    @Override
    public void validate(CourseMarquerPriseOperateurInput input, CourseMarquerPriseOperateurOutput output, Result<CourseMarquerPriseOperateurInput, CourseMarquerPriseOperateurOutput> result) {
        
    }

    @Override
    public void run(CourseMarquerPriseOperateurInput input, CourseMarquerPriseOperateurOutput output, Result<CourseMarquerPriseOperateurInput, CourseMarquerPriseOperateurOutput> result) {
        
    }
    


    private CourseOperateurService service;
    public CourseMarquerPriseOperateurProcessImpl(CourseOperateurService service) {
        this.service = service;
    }

}

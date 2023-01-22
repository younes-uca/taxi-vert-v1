package ma.zsmart.taxi.workflow.chauffeur.process.course.marquerprise;

import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import ma.zsmart.taxi.zynerator.process.AbstractProcessImpl;
import ma.zsmart.taxi.zynerator.process.Result;

public class CourseMarquerPriseChauffeurProcessImpl extends AbstractProcessImpl<CourseMarquerPriseChauffeurInput, CourseMarquerPriseChauffeurOutput> implements CourseMarquerPriseChauffeurProcess {

    @Override
    public void init(CourseMarquerPriseChauffeurInput input, CourseMarquerPriseChauffeurOutput output) {
        
    }

    @Override
    public void validate(CourseMarquerPriseChauffeurInput input, CourseMarquerPriseChauffeurOutput output, Result<CourseMarquerPriseChauffeurInput, CourseMarquerPriseChauffeurOutput> result) {
        
    }

    @Override
    public void run(CourseMarquerPriseChauffeurInput input, CourseMarquerPriseChauffeurOutput output, Result<CourseMarquerPriseChauffeurInput, CourseMarquerPriseChauffeurOutput> result) {
        
    }
    


    private CourseChauffeurService service;
    public CourseMarquerPriseChauffeurProcessImpl(CourseChauffeurService service) {
        this.service = service;
    }

}

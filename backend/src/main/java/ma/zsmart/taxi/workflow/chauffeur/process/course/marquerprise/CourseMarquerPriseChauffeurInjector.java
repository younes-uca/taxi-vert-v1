package ma.zsmart.taxi.workflow.chauffeur.process.course.marquerprise;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseMarquerPriseChauffeurInjector{

    @Bean
    public CourseMarquerPriseChauffeurProcess courseMarquerPriseChauffeur(CourseChauffeurService service) {
        return new CourseMarquerPriseChauffeurProcessImpl(service);
    }

}

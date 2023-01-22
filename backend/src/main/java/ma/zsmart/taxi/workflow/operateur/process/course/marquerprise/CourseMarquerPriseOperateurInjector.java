package ma.zsmart.taxi.workflow.operateur.process.course.marquerprise;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseMarquerPriseOperateurInjector{

    @Bean
    public CourseMarquerPriseOperateurProcess courseMarquerPriseOperateur(CourseOperateurService service) {
        return new CourseMarquerPriseOperateurProcessImpl(service);
    }

}

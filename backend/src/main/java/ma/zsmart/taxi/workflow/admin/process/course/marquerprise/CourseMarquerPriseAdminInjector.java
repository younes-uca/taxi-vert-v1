package ma.zsmart.taxi.workflow.admin.process.course.marquerprise;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseMarquerPriseAdminInjector{

    @Bean
    public CourseMarquerPriseAdminProcess courseMarquerPriseAdmin(CourseAdminService service) {
        return new CourseMarquerPriseAdminProcessImpl(service);
    }

}

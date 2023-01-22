package ma.zsmart.taxi.workflow.client.process.course.marquerprise;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseMarquerPriseClientInjector{

    @Bean
    public CourseMarquerPriseClientProcess courseMarquerPriseClient(CourseClientService service) {
        return new CourseMarquerPriseClientProcessImpl(service);
    }

}

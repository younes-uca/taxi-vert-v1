package ma.zsmart.taxi.workflow.client.process.course.terminer;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseTerminerClientInjector{

    @Bean
    public CourseTerminerClientProcess courseTerminerClient(CourseClientService service) {
        return new CourseTerminerClientProcessImpl(service);
    }

}

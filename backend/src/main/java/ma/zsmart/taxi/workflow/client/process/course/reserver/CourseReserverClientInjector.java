package ma.zsmart.taxi.workflow.client.process.course.reserver;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseReserverClientInjector{

    @Bean
    public CourseReserverClientProcess courseReserverClient(CourseClientService service) {
        return new CourseReserverClientProcessImpl(service);
    }

}

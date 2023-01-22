package ma.zsmart.taxi.workflow.client.process.course.demarrer;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseDemarrerClientInjector{

    @Bean
    public CourseDemarrerClientProcess courseDemarrerClient(CourseClientService service) {
        return new CourseDemarrerClientProcessImpl(service);
    }

}

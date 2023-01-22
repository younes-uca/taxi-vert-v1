package ma.zsmart.taxi.workflow.client.process.course.accepterchauffeur;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseAccepterChauffeurClientInjector{

    @Bean
    public CourseAccepterChauffeurClientProcess courseAccepterChauffeurClient(CourseClientService service) {
        return new CourseAccepterChauffeurClientProcessImpl(service);
    }

}

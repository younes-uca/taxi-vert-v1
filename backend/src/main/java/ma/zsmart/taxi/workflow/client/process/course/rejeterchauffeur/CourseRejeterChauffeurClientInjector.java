package ma.zsmart.taxi.workflow.client.process.course.rejeterchauffeur;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseRejeterChauffeurClientInjector{

    @Bean
    public CourseRejeterChauffeurClientProcess courseRejeterChauffeurClient(CourseClientService service) {
        return new CourseRejeterChauffeurClientProcessImpl(service);
    }

}

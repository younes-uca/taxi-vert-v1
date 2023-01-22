package ma.zsmart.taxi.workflow.client.process.course.chercherchauffeurproche;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseChercherChauffeurProcheClientInjector{

    @Bean
    public CourseChercherChauffeurProcheClientProcess courseChercherChauffeurProcheClient(CourseClientService service) {
        return new CourseChercherChauffeurProcheClientProcessImpl(service);
    }

}

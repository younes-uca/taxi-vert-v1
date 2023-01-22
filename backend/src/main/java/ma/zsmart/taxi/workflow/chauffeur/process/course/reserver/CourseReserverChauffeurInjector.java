package ma.zsmart.taxi.workflow.chauffeur.process.course.reserver;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseReserverChauffeurInjector{

    @Bean
    public CourseReserverChauffeurProcess courseReserverChauffeur(CourseChauffeurService service) {
        return new CourseReserverChauffeurProcessImpl(service);
    }

}

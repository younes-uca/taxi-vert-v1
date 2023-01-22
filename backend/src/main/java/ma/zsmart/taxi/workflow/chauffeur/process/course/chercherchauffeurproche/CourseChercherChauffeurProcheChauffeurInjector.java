package ma.zsmart.taxi.workflow.chauffeur.process.course.chercherchauffeurproche;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseChercherChauffeurProcheChauffeurInjector{

    @Bean
    public CourseChercherChauffeurProcheChauffeurProcess courseChercherChauffeurProcheChauffeur(CourseChauffeurService service) {
        return new CourseChercherChauffeurProcheChauffeurProcessImpl(service);
    }

}

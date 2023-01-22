package ma.zsmart.taxi.workflow.chauffeur.process.course.accepterchauffeur;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseAccepterChauffeurChauffeurInjector{

    @Bean
    public CourseAccepterChauffeurChauffeurProcess courseAccepterChauffeurChauffeur(CourseChauffeurService service) {
        return new CourseAccepterChauffeurChauffeurProcessImpl(service);
    }

}

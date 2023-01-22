package ma.zsmart.taxi.workflow.chauffeur.process.course.rejeterchauffeur;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseRejeterChauffeurChauffeurInjector{

    @Bean
    public CourseRejeterChauffeurChauffeurProcess courseRejeterChauffeurChauffeur(CourseChauffeurService service) {
        return new CourseRejeterChauffeurChauffeurProcessImpl(service);
    }

}

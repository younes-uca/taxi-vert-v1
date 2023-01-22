package ma.zsmart.taxi.workflow.chauffeur.process.course.demarrer;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseDemarrerChauffeurInjector{

    @Bean
    public CourseDemarrerChauffeurProcess courseDemarrerChauffeur(CourseChauffeurService service) {
        return new CourseDemarrerChauffeurProcessImpl(service);
    }

}

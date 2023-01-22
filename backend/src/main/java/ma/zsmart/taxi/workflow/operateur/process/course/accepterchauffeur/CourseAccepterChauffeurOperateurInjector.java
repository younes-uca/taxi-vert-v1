package ma.zsmart.taxi.workflow.operateur.process.course.accepterchauffeur;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseAccepterChauffeurOperateurInjector{

    @Bean
    public CourseAccepterChauffeurOperateurProcess courseAccepterChauffeurOperateur(CourseOperateurService service) {
        return new CourseAccepterChauffeurOperateurProcessImpl(service);
    }

}

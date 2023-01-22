package ma.zsmart.taxi.workflow.operateur.process.course.rejeterchauffeur;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseRejeterChauffeurOperateurInjector{

    @Bean
    public CourseRejeterChauffeurOperateurProcess courseRejeterChauffeurOperateur(CourseOperateurService service) {
        return new CourseRejeterChauffeurOperateurProcessImpl(service);
    }

}

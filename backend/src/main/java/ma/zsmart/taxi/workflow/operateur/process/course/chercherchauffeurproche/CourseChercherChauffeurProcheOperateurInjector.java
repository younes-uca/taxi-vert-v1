package ma.zsmart.taxi.workflow.operateur.process.course.chercherchauffeurproche;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseChercherChauffeurProcheOperateurInjector{

    @Bean
    public CourseChercherChauffeurProcheOperateurProcess courseChercherChauffeurProcheOperateur(CourseOperateurService service) {
        return new CourseChercherChauffeurProcheOperateurProcessImpl(service);
    }

}

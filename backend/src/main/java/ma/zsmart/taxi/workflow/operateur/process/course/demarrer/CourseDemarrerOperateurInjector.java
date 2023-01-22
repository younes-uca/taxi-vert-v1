package ma.zsmart.taxi.workflow.operateur.process.course.demarrer;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseDemarrerOperateurInjector{

    @Bean
    public CourseDemarrerOperateurProcess courseDemarrerOperateur(CourseOperateurService service) {
        return new CourseDemarrerOperateurProcessImpl(service);
    }

}

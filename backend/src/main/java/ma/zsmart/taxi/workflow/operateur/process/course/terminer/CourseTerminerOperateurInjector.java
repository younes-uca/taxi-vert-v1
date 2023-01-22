package ma.zsmart.taxi.workflow.operateur.process.course.terminer;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseTerminerOperateurInjector{

    @Bean
    public CourseTerminerOperateurProcess courseTerminerOperateur(CourseOperateurService service) {
        return new CourseTerminerOperateurProcessImpl(service);
    }

}

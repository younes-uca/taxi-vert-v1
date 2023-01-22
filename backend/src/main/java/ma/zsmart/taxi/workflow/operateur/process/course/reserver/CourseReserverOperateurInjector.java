package ma.zsmart.taxi.workflow.operateur.process.course.reserver;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseReserverOperateurInjector{

    @Bean
    public CourseReserverOperateurProcess courseReserverOperateur(CourseOperateurService service) {
        return new CourseReserverOperateurProcessImpl(service);
    }

}

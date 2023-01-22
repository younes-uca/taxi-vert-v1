package ma.zsmart.taxi.workflow.chauffeur.process.course.terminer;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseTerminerChauffeurInjector{

    @Bean
    public CourseTerminerChauffeurProcess courseTerminerChauffeur(CourseChauffeurService service) {
        return new CourseTerminerChauffeurProcessImpl(service);
    }

}

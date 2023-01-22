package ma.zsmart.taxi.workflow.admin.process.course.accepterchauffeur;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseAccepterChauffeurAdminInjector{

    @Bean
    public CourseAccepterChauffeurAdminProcess courseAccepterChauffeurAdmin(CourseAdminService service) {
        return new CourseAccepterChauffeurAdminProcessImpl(service);
    }

}

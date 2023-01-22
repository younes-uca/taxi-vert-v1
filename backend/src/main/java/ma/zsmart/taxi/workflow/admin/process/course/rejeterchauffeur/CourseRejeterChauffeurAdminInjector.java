package ma.zsmart.taxi.workflow.admin.process.course.rejeterchauffeur;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseRejeterChauffeurAdminInjector{

    @Bean
    public CourseRejeterChauffeurAdminProcess courseRejeterChauffeurAdmin(CourseAdminService service) {
        return new CourseRejeterChauffeurAdminProcessImpl(service);
    }

}

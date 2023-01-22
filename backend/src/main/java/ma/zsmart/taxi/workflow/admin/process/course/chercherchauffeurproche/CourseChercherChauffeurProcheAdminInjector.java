package ma.zsmart.taxi.workflow.admin.process.course.chercherchauffeurproche;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseChercherChauffeurProcheAdminInjector{

    @Bean
    public CourseChercherChauffeurProcheAdminProcess courseChercherChauffeurProcheAdmin(CourseAdminService service) {
        return new CourseChercherChauffeurProcheAdminProcessImpl(service);
    }

}

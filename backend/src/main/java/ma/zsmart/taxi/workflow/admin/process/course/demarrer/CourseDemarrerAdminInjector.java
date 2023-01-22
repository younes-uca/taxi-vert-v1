package ma.zsmart.taxi.workflow.admin.process.course.demarrer;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseDemarrerAdminInjector{

    @Bean
    public CourseDemarrerAdminProcess courseDemarrerAdmin(CourseAdminService service) {
        return new CourseDemarrerAdminProcessImpl(service);
    }

}

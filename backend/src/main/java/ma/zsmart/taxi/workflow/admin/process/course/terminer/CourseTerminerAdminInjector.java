package ma.zsmart.taxi.workflow.admin.process.course.terminer;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseTerminerAdminInjector{

    @Bean
    public CourseTerminerAdminProcess courseTerminerAdmin(CourseAdminService service) {
        return new CourseTerminerAdminProcessImpl(service);
    }

}

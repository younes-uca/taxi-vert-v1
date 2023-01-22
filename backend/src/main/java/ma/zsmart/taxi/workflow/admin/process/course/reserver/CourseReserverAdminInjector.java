package ma.zsmart.taxi.workflow.admin.process.course.reserver;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseReserverAdminInjector{

    @Bean
    public CourseReserverAdminProcess courseReserverAdmin(CourseAdminService service) {
        return new CourseReserverAdminProcessImpl(service);
    }

}

package  ma.zsmart.taxi.ws.facade.client;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Course;
import ma.zsmart.taxi.bean.history.CourseHistory;
import ma.zsmart.taxi.dao.criteria.core.CourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.CourseHistoryCriteria;
import ma.zsmart.taxi.service.facade.client.CourseClientService;
import ma.zsmart.taxi.ws.converter.CourseConverter;
import ma.zsmart.taxi.ws.dto.CourseDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zsmart.taxi.zynerator.process.Result;
import ma.zsmart.taxi.workflow.client.process.course.demarrer.CourseDemarrerClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.demarrer.CourseDemarrerClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.demarrer.CourseDemarrerClientOutput ;
import ma.zsmart.taxi.workflow.client.process.course.reserver.CourseReserverClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.reserver.CourseReserverClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.reserver.CourseReserverClientOutput ;
import ma.zsmart.taxi.workflow.client.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheClientOutput ;
import ma.zsmart.taxi.workflow.client.process.course.accepterchauffeur.CourseAccepterChauffeurClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.accepterchauffeur.CourseAccepterChauffeurClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.accepterchauffeur.CourseAccepterChauffeurClientOutput ;
import ma.zsmart.taxi.workflow.client.process.course.rejeterchauffeur.CourseRejeterChauffeurClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.rejeterchauffeur.CourseRejeterChauffeurClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.rejeterchauffeur.CourseRejeterChauffeurClientOutput ;
import ma.zsmart.taxi.workflow.client.process.course.marquerprise.CourseMarquerPriseClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.marquerprise.CourseMarquerPriseClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.marquerprise.CourseMarquerPriseClientOutput ;
import ma.zsmart.taxi.workflow.client.process.course.terminer.CourseTerminerClientProcess ;
import ma.zsmart.taxi.workflow.client.process.course.terminer.CourseTerminerClientInput ;
import ma.zsmart.taxi.workflow.client.process.course.terminer.CourseTerminerClientOutput ;

@Api("Manages course services")
@RestController
@RequestMapping("/api/client/course")
public class CourseRestClient  extends AbstractController<Course, CourseDto, CourseHistory, CourseCriteria, CourseHistoryCriteria, CourseClientService, CourseConverter> {

    @Autowired
    private CourseDemarrerClientProcess courseDemarrerClientProcess;
    @Autowired
    private CourseReserverClientProcess courseReserverClientProcess;
    @Autowired
    private CourseChercherChauffeurProcheClientProcess courseChercherChauffeurProcheClientProcess;
    @Autowired
    private CourseAccepterChauffeurClientProcess courseAccepterChauffeurClientProcess;
    @Autowired
    private CourseRejeterChauffeurClientProcess courseRejeterChauffeurClientProcess;
    @Autowired
    private CourseMarquerPriseClientProcess courseMarquerPriseClientProcess;
    @Autowired
    private CourseTerminerClientProcess courseTerminerClientProcess;

    @ApiOperation("demarrer a course")
    @PostMapping("/process/demarrer")
    public ResponseEntity<Result<CourseDemarrerClientInput,CourseDemarrerClientOutput>> demarrerProcess(@RequestBody CourseDemarrerClientInput input) throws Exception {
        CourseDemarrerClientOutput output = new CourseDemarrerClientOutput();
        Result<CourseDemarrerClientInput, CourseDemarrerClientOutput> result = courseDemarrerClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("reserver a course")
    @PostMapping("/process/reserver")
    public ResponseEntity<Result<CourseReserverClientInput,CourseReserverClientOutput>> reserverProcess(@RequestBody CourseReserverClientInput input) throws Exception {
        CourseReserverClientOutput output = new CourseReserverClientOutput();
        Result<CourseReserverClientInput, CourseReserverClientOutput> result = courseReserverClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("chercherChauffeurProche a course")
    @PostMapping("/process/chercherchauffeurproche")
    public ResponseEntity<Result<CourseChercherChauffeurProcheClientInput,CourseChercherChauffeurProcheClientOutput>> chercherChauffeurProcheProcess(@RequestBody CourseChercherChauffeurProcheClientInput input) throws Exception {
        CourseChercherChauffeurProcheClientOutput output = new CourseChercherChauffeurProcheClientOutput();
        Result<CourseChercherChauffeurProcheClientInput, CourseChercherChauffeurProcheClientOutput> result = courseChercherChauffeurProcheClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("accepterChauffeur a course")
    @PostMapping("/process/accepterchauffeur")
    public ResponseEntity<Result<CourseAccepterChauffeurClientInput,CourseAccepterChauffeurClientOutput>> accepterChauffeurProcess(@RequestBody CourseAccepterChauffeurClientInput input) throws Exception {
        CourseAccepterChauffeurClientOutput output = new CourseAccepterChauffeurClientOutput();
        Result<CourseAccepterChauffeurClientInput, CourseAccepterChauffeurClientOutput> result = courseAccepterChauffeurClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("rejeterChauffeur a course")
    @PostMapping("/process/rejeterchauffeur")
    public ResponseEntity<Result<CourseRejeterChauffeurClientInput,CourseRejeterChauffeurClientOutput>> rejeterChauffeurProcess(@RequestBody CourseRejeterChauffeurClientInput input) throws Exception {
        CourseRejeterChauffeurClientOutput output = new CourseRejeterChauffeurClientOutput();
        Result<CourseRejeterChauffeurClientInput, CourseRejeterChauffeurClientOutput> result = courseRejeterChauffeurClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("marquerPrise a course")
    @PostMapping("/process/marquerprise")
    public ResponseEntity<Result<CourseMarquerPriseClientInput,CourseMarquerPriseClientOutput>> marquerPriseProcess(@RequestBody CourseMarquerPriseClientInput input) throws Exception {
        CourseMarquerPriseClientOutput output = new CourseMarquerPriseClientOutput();
        Result<CourseMarquerPriseClientInput, CourseMarquerPriseClientOutput> result = courseMarquerPriseClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("terminer a course")
    @PostMapping("/process/terminer")
    public ResponseEntity<Result<CourseTerminerClientInput,CourseTerminerClientOutput>> terminerProcess(@RequestBody CourseTerminerClientInput input) throws Exception {
        CourseTerminerClientOutput output = new CourseTerminerClientOutput();
        Result<CourseTerminerClientInput, CourseTerminerClientOutput> result = courseTerminerClientProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }

    @ApiOperation("Updates the specified  course")
    @PutMapping("")
    public ResponseEntity<CourseDto> update(@RequestBody CourseDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all courses")
    @GetMapping("")
    public ResponseEntity<List<CourseDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a course by id")
    @GetMapping("id/{id}")
    public ResponseEntity<CourseDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a course and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<CourseDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  course")
    @PostMapping("")
    public ResponseEntity<CourseDto> save(@RequestBody CourseDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified course")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<CourseDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }










    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<CourseDto>> findByCriteria(@RequestBody CourseCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody CourseCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody CourseCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody CourseCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody CourseHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody CourseHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody CourseHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public CourseRestClient (CourseClientService service, CourseConverter converter) {
        super(service, converter);
    }

}
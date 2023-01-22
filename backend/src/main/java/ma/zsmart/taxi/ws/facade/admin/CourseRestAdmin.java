package  ma.zsmart.taxi.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Course;
import ma.zsmart.taxi.bean.history.CourseHistory;
import ma.zsmart.taxi.dao.criteria.core.CourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.CourseHistoryCriteria;
import ma.zsmart.taxi.service.facade.admin.CourseAdminService;
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
import ma.zsmart.taxi.workflow.admin.process.course.demarrer.CourseDemarrerAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.demarrer.CourseDemarrerAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.demarrer.CourseDemarrerAdminOutput ;
import ma.zsmart.taxi.workflow.admin.process.course.reserver.CourseReserverAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.reserver.CourseReserverAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.reserver.CourseReserverAdminOutput ;
import ma.zsmart.taxi.workflow.admin.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheAdminOutput ;
import ma.zsmart.taxi.workflow.admin.process.course.accepterchauffeur.CourseAccepterChauffeurAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.accepterchauffeur.CourseAccepterChauffeurAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.accepterchauffeur.CourseAccepterChauffeurAdminOutput ;
import ma.zsmart.taxi.workflow.admin.process.course.rejeterchauffeur.CourseRejeterChauffeurAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.rejeterchauffeur.CourseRejeterChauffeurAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.rejeterchauffeur.CourseRejeterChauffeurAdminOutput ;
import ma.zsmart.taxi.workflow.admin.process.course.marquerprise.CourseMarquerPriseAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.marquerprise.CourseMarquerPriseAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.marquerprise.CourseMarquerPriseAdminOutput ;
import ma.zsmart.taxi.workflow.admin.process.course.terminer.CourseTerminerAdminProcess ;
import ma.zsmart.taxi.workflow.admin.process.course.terminer.CourseTerminerAdminInput ;
import ma.zsmart.taxi.workflow.admin.process.course.terminer.CourseTerminerAdminOutput ;

@Api("Manages course services")
@RestController
@RequestMapping("/api/admin/course")
public class CourseRestAdmin  extends AbstractController<Course, CourseDto, CourseHistory, CourseCriteria, CourseHistoryCriteria, CourseAdminService, CourseConverter> {

    @Autowired
    private CourseDemarrerAdminProcess courseDemarrerAdminProcess;
    @Autowired
    private CourseReserverAdminProcess courseReserverAdminProcess;
    @Autowired
    private CourseChercherChauffeurProcheAdminProcess courseChercherChauffeurProcheAdminProcess;
    @Autowired
    private CourseAccepterChauffeurAdminProcess courseAccepterChauffeurAdminProcess;
    @Autowired
    private CourseRejeterChauffeurAdminProcess courseRejeterChauffeurAdminProcess;
    @Autowired
    private CourseMarquerPriseAdminProcess courseMarquerPriseAdminProcess;
    @Autowired
    private CourseTerminerAdminProcess courseTerminerAdminProcess;

    @ApiOperation("demarrer a course")
    @PostMapping("/process/demarrer")
    public ResponseEntity<Result<CourseDemarrerAdminInput,CourseDemarrerAdminOutput>> demarrerProcess(@RequestBody CourseDemarrerAdminInput input) throws Exception {
        CourseDemarrerAdminOutput output = new CourseDemarrerAdminOutput();
        Result<CourseDemarrerAdminInput, CourseDemarrerAdminOutput> result = courseDemarrerAdminProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("reserver a course")
    @PostMapping("/process/reserver")
    public ResponseEntity<Result<CourseReserverAdminInput,CourseReserverAdminOutput>> reserverProcess(@RequestBody CourseReserverAdminInput input) throws Exception {
        CourseReserverAdminOutput output = new CourseReserverAdminOutput();
        Result<CourseReserverAdminInput, CourseReserverAdminOutput> result = courseReserverAdminProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("chercherChauffeurProche a course")
    @PostMapping("/process/chercherchauffeurproche")
    public ResponseEntity<Result<CourseChercherChauffeurProcheAdminInput,CourseChercherChauffeurProcheAdminOutput>> chercherChauffeurProcheProcess(@RequestBody CourseChercherChauffeurProcheAdminInput input) throws Exception {
        CourseChercherChauffeurProcheAdminOutput output = new CourseChercherChauffeurProcheAdminOutput();
        Result<CourseChercherChauffeurProcheAdminInput, CourseChercherChauffeurProcheAdminOutput> result = courseChercherChauffeurProcheAdminProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("accepterChauffeur a course")
    @PostMapping("/process/accepterchauffeur")
    public ResponseEntity<Result<CourseAccepterChauffeurAdminInput,CourseAccepterChauffeurAdminOutput>> accepterChauffeurProcess(@RequestBody CourseAccepterChauffeurAdminInput input) throws Exception {
        CourseAccepterChauffeurAdminOutput output = new CourseAccepterChauffeurAdminOutput();
        Result<CourseAccepterChauffeurAdminInput, CourseAccepterChauffeurAdminOutput> result = courseAccepterChauffeurAdminProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("rejeterChauffeur a course")
    @PostMapping("/process/rejeterchauffeur")
    public ResponseEntity<Result<CourseRejeterChauffeurAdminInput,CourseRejeterChauffeurAdminOutput>> rejeterChauffeurProcess(@RequestBody CourseRejeterChauffeurAdminInput input) throws Exception {
        CourseRejeterChauffeurAdminOutput output = new CourseRejeterChauffeurAdminOutput();
        Result<CourseRejeterChauffeurAdminInput, CourseRejeterChauffeurAdminOutput> result = courseRejeterChauffeurAdminProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("marquerPrise a course")
    @PostMapping("/process/marquerprise")
    public ResponseEntity<Result<CourseMarquerPriseAdminInput,CourseMarquerPriseAdminOutput>> marquerPriseProcess(@RequestBody CourseMarquerPriseAdminInput input) throws Exception {
        CourseMarquerPriseAdminOutput output = new CourseMarquerPriseAdminOutput();
        Result<CourseMarquerPriseAdminInput, CourseMarquerPriseAdminOutput> result = courseMarquerPriseAdminProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("terminer a course")
    @PostMapping("/process/terminer")
    public ResponseEntity<Result<CourseTerminerAdminInput,CourseTerminerAdminOutput>> terminerProcess(@RequestBody CourseTerminerAdminInput input) throws Exception {
        CourseTerminerAdminOutput output = new CourseTerminerAdminOutput();
        Result<CourseTerminerAdminInput, CourseTerminerAdminOutput> result = courseTerminerAdminProcess.execute(input, output);
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

    public CourseRestAdmin (CourseAdminService service, CourseConverter converter) {
        super(service, converter);
    }

}
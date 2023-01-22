package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Course;
import ma.zsmart.taxi.bean.history.CourseHistory;
import ma.zsmart.taxi.dao.criteria.core.CourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.CourseHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.CourseOperateurService;
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
import ma.zsmart.taxi.workflow.operateur.process.course.demarrer.CourseDemarrerOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.demarrer.CourseDemarrerOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.demarrer.CourseDemarrerOperateurOutput ;
import ma.zsmart.taxi.workflow.operateur.process.course.reserver.CourseReserverOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.reserver.CourseReserverOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.reserver.CourseReserverOperateurOutput ;
import ma.zsmart.taxi.workflow.operateur.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheOperateurOutput ;
import ma.zsmart.taxi.workflow.operateur.process.course.accepterchauffeur.CourseAccepterChauffeurOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.accepterchauffeur.CourseAccepterChauffeurOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.accepterchauffeur.CourseAccepterChauffeurOperateurOutput ;
import ma.zsmart.taxi.workflow.operateur.process.course.rejeterchauffeur.CourseRejeterChauffeurOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.rejeterchauffeur.CourseRejeterChauffeurOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.rejeterchauffeur.CourseRejeterChauffeurOperateurOutput ;
import ma.zsmart.taxi.workflow.operateur.process.course.marquerprise.CourseMarquerPriseOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.marquerprise.CourseMarquerPriseOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.marquerprise.CourseMarquerPriseOperateurOutput ;
import ma.zsmart.taxi.workflow.operateur.process.course.terminer.CourseTerminerOperateurProcess ;
import ma.zsmart.taxi.workflow.operateur.process.course.terminer.CourseTerminerOperateurInput ;
import ma.zsmart.taxi.workflow.operateur.process.course.terminer.CourseTerminerOperateurOutput ;

@Api("Manages course services")
@RestController
@RequestMapping("/api/operateur/course")
public class CourseRestOperateur  extends AbstractController<Course, CourseDto, CourseHistory, CourseCriteria, CourseHistoryCriteria, CourseOperateurService, CourseConverter> {

    @Autowired
    private CourseDemarrerOperateurProcess courseDemarrerOperateurProcess;
    @Autowired
    private CourseReserverOperateurProcess courseReserverOperateurProcess;
    @Autowired
    private CourseChercherChauffeurProcheOperateurProcess courseChercherChauffeurProcheOperateurProcess;
    @Autowired
    private CourseAccepterChauffeurOperateurProcess courseAccepterChauffeurOperateurProcess;
    @Autowired
    private CourseRejeterChauffeurOperateurProcess courseRejeterChauffeurOperateurProcess;
    @Autowired
    private CourseMarquerPriseOperateurProcess courseMarquerPriseOperateurProcess;
    @Autowired
    private CourseTerminerOperateurProcess courseTerminerOperateurProcess;

    @ApiOperation("demarrer a course")
    @PostMapping("/process/demarrer")
    public ResponseEntity<Result<CourseDemarrerOperateurInput,CourseDemarrerOperateurOutput>> demarrerProcess(@RequestBody CourseDemarrerOperateurInput input) throws Exception {
        CourseDemarrerOperateurOutput output = new CourseDemarrerOperateurOutput();
        Result<CourseDemarrerOperateurInput, CourseDemarrerOperateurOutput> result = courseDemarrerOperateurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("reserver a course")
    @PostMapping("/process/reserver")
    public ResponseEntity<Result<CourseReserverOperateurInput,CourseReserverOperateurOutput>> reserverProcess(@RequestBody CourseReserverOperateurInput input) throws Exception {
        CourseReserverOperateurOutput output = new CourseReserverOperateurOutput();
        Result<CourseReserverOperateurInput, CourseReserverOperateurOutput> result = courseReserverOperateurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("chercherChauffeurProche a course")
    @PostMapping("/process/chercherchauffeurproche")
    public ResponseEntity<Result<CourseChercherChauffeurProcheOperateurInput,CourseChercherChauffeurProcheOperateurOutput>> chercherChauffeurProcheProcess(@RequestBody CourseChercherChauffeurProcheOperateurInput input) throws Exception {
        CourseChercherChauffeurProcheOperateurOutput output = new CourseChercherChauffeurProcheOperateurOutput();
        Result<CourseChercherChauffeurProcheOperateurInput, CourseChercherChauffeurProcheOperateurOutput> result = courseChercherChauffeurProcheOperateurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("accepterChauffeur a course")
    @PostMapping("/process/accepterchauffeur")
    public ResponseEntity<Result<CourseAccepterChauffeurOperateurInput,CourseAccepterChauffeurOperateurOutput>> accepterChauffeurProcess(@RequestBody CourseAccepterChauffeurOperateurInput input) throws Exception {
        CourseAccepterChauffeurOperateurOutput output = new CourseAccepterChauffeurOperateurOutput();
        Result<CourseAccepterChauffeurOperateurInput, CourseAccepterChauffeurOperateurOutput> result = courseAccepterChauffeurOperateurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("rejeterChauffeur a course")
    @PostMapping("/process/rejeterchauffeur")
    public ResponseEntity<Result<CourseRejeterChauffeurOperateurInput,CourseRejeterChauffeurOperateurOutput>> rejeterChauffeurProcess(@RequestBody CourseRejeterChauffeurOperateurInput input) throws Exception {
        CourseRejeterChauffeurOperateurOutput output = new CourseRejeterChauffeurOperateurOutput();
        Result<CourseRejeterChauffeurOperateurInput, CourseRejeterChauffeurOperateurOutput> result = courseRejeterChauffeurOperateurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("marquerPrise a course")
    @PostMapping("/process/marquerprise")
    public ResponseEntity<Result<CourseMarquerPriseOperateurInput,CourseMarquerPriseOperateurOutput>> marquerPriseProcess(@RequestBody CourseMarquerPriseOperateurInput input) throws Exception {
        CourseMarquerPriseOperateurOutput output = new CourseMarquerPriseOperateurOutput();
        Result<CourseMarquerPriseOperateurInput, CourseMarquerPriseOperateurOutput> result = courseMarquerPriseOperateurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("terminer a course")
    @PostMapping("/process/terminer")
    public ResponseEntity<Result<CourseTerminerOperateurInput,CourseTerminerOperateurOutput>> terminerProcess(@RequestBody CourseTerminerOperateurInput input) throws Exception {
        CourseTerminerOperateurOutput output = new CourseTerminerOperateurOutput();
        Result<CourseTerminerOperateurInput, CourseTerminerOperateurOutput> result = courseTerminerOperateurProcess.execute(input, output);
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

    public CourseRestOperateur (CourseOperateurService service, CourseConverter converter) {
        super(service, converter);
    }

}
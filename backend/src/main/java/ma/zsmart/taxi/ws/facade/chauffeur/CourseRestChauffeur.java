package  ma.zsmart.taxi.ws.facade.chauffeur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Course;
import ma.zsmart.taxi.bean.history.CourseHistory;
import ma.zsmart.taxi.dao.criteria.core.CourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.CourseHistoryCriteria;
import ma.zsmart.taxi.service.facade.chauffeur.CourseChauffeurService;
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
import ma.zsmart.taxi.workflow.chauffeur.process.course.demarrer.CourseDemarrerChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.demarrer.CourseDemarrerChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.demarrer.CourseDemarrerChauffeurOutput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.reserver.CourseReserverChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.reserver.CourseReserverChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.reserver.CourseReserverChauffeurOutput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.chercherchauffeurproche.CourseChercherChauffeurProcheChauffeurOutput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.accepterchauffeur.CourseAccepterChauffeurChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.accepterchauffeur.CourseAccepterChauffeurChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.accepterchauffeur.CourseAccepterChauffeurChauffeurOutput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.rejeterchauffeur.CourseRejeterChauffeurChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.rejeterchauffeur.CourseRejeterChauffeurChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.rejeterchauffeur.CourseRejeterChauffeurChauffeurOutput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.marquerprise.CourseMarquerPriseChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.marquerprise.CourseMarquerPriseChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.marquerprise.CourseMarquerPriseChauffeurOutput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.terminer.CourseTerminerChauffeurProcess ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.terminer.CourseTerminerChauffeurInput ;
import ma.zsmart.taxi.workflow.chauffeur.process.course.terminer.CourseTerminerChauffeurOutput ;

@Api("Manages course services")
@RestController
@RequestMapping("/api/chauffeur/course")
public class CourseRestChauffeur  extends AbstractController<Course, CourseDto, CourseHistory, CourseCriteria, CourseHistoryCriteria, CourseChauffeurService, CourseConverter> {

    @Autowired
    private CourseDemarrerChauffeurProcess courseDemarrerChauffeurProcess;
    @Autowired
    private CourseReserverChauffeurProcess courseReserverChauffeurProcess;
    @Autowired
    private CourseChercherChauffeurProcheChauffeurProcess courseChercherChauffeurProcheChauffeurProcess;
    @Autowired
    private CourseAccepterChauffeurChauffeurProcess courseAccepterChauffeurChauffeurProcess;
    @Autowired
    private CourseRejeterChauffeurChauffeurProcess courseRejeterChauffeurChauffeurProcess;
    @Autowired
    private CourseMarquerPriseChauffeurProcess courseMarquerPriseChauffeurProcess;
    @Autowired
    private CourseTerminerChauffeurProcess courseTerminerChauffeurProcess;

    @ApiOperation("demarrer a course")
    @PostMapping("/process/demarrer")
    public ResponseEntity<Result<CourseDemarrerChauffeurInput,CourseDemarrerChauffeurOutput>> demarrerProcess(@RequestBody CourseDemarrerChauffeurInput input) throws Exception {
        CourseDemarrerChauffeurOutput output = new CourseDemarrerChauffeurOutput();
        Result<CourseDemarrerChauffeurInput, CourseDemarrerChauffeurOutput> result = courseDemarrerChauffeurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("reserver a course")
    @PostMapping("/process/reserver")
    public ResponseEntity<Result<CourseReserverChauffeurInput,CourseReserverChauffeurOutput>> reserverProcess(@RequestBody CourseReserverChauffeurInput input) throws Exception {
        CourseReserverChauffeurOutput output = new CourseReserverChauffeurOutput();
        Result<CourseReserverChauffeurInput, CourseReserverChauffeurOutput> result = courseReserverChauffeurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("chercherChauffeurProche a course")
    @PostMapping("/process/chercherchauffeurproche")
    public ResponseEntity<Result<CourseChercherChauffeurProcheChauffeurInput,CourseChercherChauffeurProcheChauffeurOutput>> chercherChauffeurProcheProcess(@RequestBody CourseChercherChauffeurProcheChauffeurInput input) throws Exception {
        CourseChercherChauffeurProcheChauffeurOutput output = new CourseChercherChauffeurProcheChauffeurOutput();
        Result<CourseChercherChauffeurProcheChauffeurInput, CourseChercherChauffeurProcheChauffeurOutput> result = courseChercherChauffeurProcheChauffeurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("accepterChauffeur a course")
    @PostMapping("/process/accepterchauffeur")
    public ResponseEntity<Result<CourseAccepterChauffeurChauffeurInput,CourseAccepterChauffeurChauffeurOutput>> accepterChauffeurProcess(@RequestBody CourseAccepterChauffeurChauffeurInput input) throws Exception {
        CourseAccepterChauffeurChauffeurOutput output = new CourseAccepterChauffeurChauffeurOutput();
        Result<CourseAccepterChauffeurChauffeurInput, CourseAccepterChauffeurChauffeurOutput> result = courseAccepterChauffeurChauffeurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("rejeterChauffeur a course")
    @PostMapping("/process/rejeterchauffeur")
    public ResponseEntity<Result<CourseRejeterChauffeurChauffeurInput,CourseRejeterChauffeurChauffeurOutput>> rejeterChauffeurProcess(@RequestBody CourseRejeterChauffeurChauffeurInput input) throws Exception {
        CourseRejeterChauffeurChauffeurOutput output = new CourseRejeterChauffeurChauffeurOutput();
        Result<CourseRejeterChauffeurChauffeurInput, CourseRejeterChauffeurChauffeurOutput> result = courseRejeterChauffeurChauffeurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("marquerPrise a course")
    @PostMapping("/process/marquerprise")
    public ResponseEntity<Result<CourseMarquerPriseChauffeurInput,CourseMarquerPriseChauffeurOutput>> marquerPriseProcess(@RequestBody CourseMarquerPriseChauffeurInput input) throws Exception {
        CourseMarquerPriseChauffeurOutput output = new CourseMarquerPriseChauffeurOutput();
        Result<CourseMarquerPriseChauffeurInput, CourseMarquerPriseChauffeurOutput> result = courseMarquerPriseChauffeurProcess.execute(input, output);
        return new ResponseEntity<>(result, result.getStatus());
    }
    @ApiOperation("terminer a course")
    @PostMapping("/process/terminer")
    public ResponseEntity<Result<CourseTerminerChauffeurInput,CourseTerminerChauffeurOutput>> terminerProcess(@RequestBody CourseTerminerChauffeurInput input) throws Exception {
        CourseTerminerChauffeurOutput output = new CourseTerminerChauffeurOutput();
        Result<CourseTerminerChauffeurInput, CourseTerminerChauffeurOutput> result = courseTerminerChauffeurProcess.execute(input, output);
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

    public CourseRestChauffeur (CourseChauffeurService service, CourseConverter converter) {
        super(service, converter);
    }

}
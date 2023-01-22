package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.EtatCourse;
import ma.zsmart.taxi.bean.history.EtatCourseHistory;
import ma.zsmart.taxi.dao.criteria.core.EtatCourseCriteria;
import ma.zsmart.taxi.dao.criteria.history.EtatCourseHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.EtatCourseOperateurService;
import ma.zsmart.taxi.ws.converter.EtatCourseConverter;
import ma.zsmart.taxi.ws.dto.EtatCourseDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages etatCourse services")
@RestController
@RequestMapping("/api/operateur/etatCourse")
public class EtatCourseRestOperateur  extends AbstractController<EtatCourse, EtatCourseDto, EtatCourseHistory, EtatCourseCriteria, EtatCourseHistoryCriteria, EtatCourseOperateurService, EtatCourseConverter> {



    @ApiOperation("Updates the specified  etatCourse")
    @PutMapping("")
    public ResponseEntity<EtatCourseDto> update(@RequestBody EtatCourseDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all etatCourses")
    @GetMapping("")
    public ResponseEntity<List<EtatCourseDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a etatCourse by id")
    @GetMapping("id/{id}")
    public ResponseEntity<EtatCourseDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a etatCourse and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<EtatCourseDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  etatCourse")
    @PostMapping("")
    public ResponseEntity<EtatCourseDto> save(@RequestBody EtatCourseDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified etatCourse")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<EtatCourseDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<EtatCourseDto>> findByCriteria(@RequestBody EtatCourseCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody EtatCourseCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody EtatCourseCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody EtatCourseCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody EtatCourseHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody EtatCourseHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody EtatCourseHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public EtatCourseRestOperateur (EtatCourseOperateurService service, EtatCourseConverter converter) {
        super(service, converter);
    }

}
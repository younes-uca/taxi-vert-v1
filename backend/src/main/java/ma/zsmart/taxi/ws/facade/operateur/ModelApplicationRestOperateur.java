package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.ModelApplication;
import ma.zsmart.taxi.bean.history.ModelApplicationHistory;
import ma.zsmart.taxi.dao.criteria.core.ModelApplicationCriteria;
import ma.zsmart.taxi.dao.criteria.history.ModelApplicationHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.ModelApplicationOperateurService;
import ma.zsmart.taxi.ws.converter.ModelApplicationConverter;
import ma.zsmart.taxi.ws.dto.ModelApplicationDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages modelApplication services")
@RestController
@RequestMapping("/api/operateur/modelApplication")
public class ModelApplicationRestOperateur  extends AbstractController<ModelApplication, ModelApplicationDto, ModelApplicationHistory, ModelApplicationCriteria, ModelApplicationHistoryCriteria, ModelApplicationOperateurService, ModelApplicationConverter> {



    @ApiOperation("Updates the specified  modelApplication")
    @PutMapping("")
    public ResponseEntity<ModelApplicationDto> update(@RequestBody ModelApplicationDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all modelApplications")
    @GetMapping("")
    public ResponseEntity<List<ModelApplicationDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a modelApplication by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ModelApplicationDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a modelApplication and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<ModelApplicationDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  modelApplication")
    @PostMapping("")
    public ResponseEntity<ModelApplicationDto> save(@RequestBody ModelApplicationDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified modelApplication")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<ModelApplicationDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<ModelApplicationDto>> findByCriteria(@RequestBody ModelApplicationCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ModelApplicationCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody ModelApplicationCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ModelApplicationCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody ModelApplicationHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody ModelApplicationHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody ModelApplicationHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public ModelApplicationRestOperateur (ModelApplicationOperateurService service, ModelApplicationConverter converter) {
        super(service, converter);
    }

}
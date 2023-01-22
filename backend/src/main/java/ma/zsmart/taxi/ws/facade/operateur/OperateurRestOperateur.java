package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Operateur;
import ma.zsmart.taxi.bean.history.OperateurHistory;
import ma.zsmart.taxi.dao.criteria.core.OperateurCriteria;
import ma.zsmart.taxi.dao.criteria.history.OperateurHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.OperateurOperateurService;
import ma.zsmart.taxi.ws.converter.OperateurConverter;
import ma.zsmart.taxi.ws.dto.OperateurDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages operateur services")
@RestController
@RequestMapping("/api/operateur/operateur")
public class OperateurRestOperateur  extends AbstractController<Operateur, OperateurDto, OperateurHistory, OperateurCriteria, OperateurHistoryCriteria, OperateurOperateurService, OperateurConverter> {



    @ApiOperation("Updates the specified  operateur")
    @PutMapping("")
    public ResponseEntity<OperateurDto> update(@RequestBody OperateurDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all operateurs")
    @GetMapping("")
    public ResponseEntity<List<OperateurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a operateur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<OperateurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a operateur and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<OperateurDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  operateur")
    @PostMapping("")
    public ResponseEntity<OperateurDto> save(@RequestBody OperateurDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified operateur")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<OperateurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<OperateurDto>> findByCriteria(@RequestBody OperateurCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody OperateurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody OperateurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody OperateurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody OperateurHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody OperateurHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody OperateurHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public OperateurRestOperateur (OperateurOperateurService service, OperateurConverter converter) {
        super(service, converter);
    }

}
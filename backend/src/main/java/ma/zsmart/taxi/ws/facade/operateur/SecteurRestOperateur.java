package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Secteur;
import ma.zsmart.taxi.bean.history.SecteurHistory;
import ma.zsmart.taxi.dao.criteria.core.SecteurCriteria;
import ma.zsmart.taxi.dao.criteria.history.SecteurHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.SecteurOperateurService;
import ma.zsmart.taxi.ws.converter.SecteurConverter;
import ma.zsmart.taxi.ws.dto.SecteurDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages secteur services")
@RestController
@RequestMapping("/api/operateur/secteur")
public class SecteurRestOperateur  extends AbstractController<Secteur, SecteurDto, SecteurHistory, SecteurCriteria, SecteurHistoryCriteria, SecteurOperateurService, SecteurConverter> {



    @ApiOperation("Updates the specified  secteur")
    @PutMapping("")
    public ResponseEntity<SecteurDto> update(@RequestBody SecteurDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all secteurs")
    @GetMapping("")
    public ResponseEntity<List<SecteurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a secteur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<SecteurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a secteur and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<SecteurDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  secteur")
    @PostMapping("")
    public ResponseEntity<SecteurDto> save(@RequestBody SecteurDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified secteur")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<SecteurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }




    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<SecteurDto>> findByCriteria(@RequestBody SecteurCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody SecteurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody SecteurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody SecteurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody SecteurHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody SecteurHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody SecteurHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public SecteurRestOperateur (SecteurOperateurService service, SecteurConverter converter) {
        super(service, converter);
    }

}
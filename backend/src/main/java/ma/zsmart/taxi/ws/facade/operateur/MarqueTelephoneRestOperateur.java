package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.MarqueTelephone;
import ma.zsmart.taxi.bean.history.MarqueTelephoneHistory;
import ma.zsmart.taxi.dao.criteria.core.MarqueTelephoneCriteria;
import ma.zsmart.taxi.dao.criteria.history.MarqueTelephoneHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.MarqueTelephoneOperateurService;
import ma.zsmart.taxi.ws.converter.MarqueTelephoneConverter;
import ma.zsmart.taxi.ws.dto.MarqueTelephoneDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages marqueTelephone services")
@RestController
@RequestMapping("/api/operateur/marqueTelephone")
public class MarqueTelephoneRestOperateur  extends AbstractController<MarqueTelephone, MarqueTelephoneDto, MarqueTelephoneHistory, MarqueTelephoneCriteria, MarqueTelephoneHistoryCriteria, MarqueTelephoneOperateurService, MarqueTelephoneConverter> {



    @ApiOperation("Updates the specified  marqueTelephone")
    @PutMapping("")
    public ResponseEntity<MarqueTelephoneDto> update(@RequestBody MarqueTelephoneDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all marqueTelephones")
    @GetMapping("")
    public ResponseEntity<List<MarqueTelephoneDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a marqueTelephone by id")
    @GetMapping("id/{id}")
    public ResponseEntity<MarqueTelephoneDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a marqueTelephone and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<MarqueTelephoneDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  marqueTelephone")
    @PostMapping("")
    public ResponseEntity<MarqueTelephoneDto> save(@RequestBody MarqueTelephoneDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified marqueTelephone")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<MarqueTelephoneDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<MarqueTelephoneDto>> findByCriteria(@RequestBody MarqueTelephoneCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody MarqueTelephoneCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody MarqueTelephoneCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody MarqueTelephoneCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody MarqueTelephoneHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody MarqueTelephoneHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody MarqueTelephoneHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public MarqueTelephoneRestOperateur (MarqueTelephoneOperateurService service, MarqueTelephoneConverter converter) {
        super(service, converter);
    }

}
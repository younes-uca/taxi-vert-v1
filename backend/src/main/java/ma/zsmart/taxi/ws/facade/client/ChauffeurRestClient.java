package  ma.zsmart.taxi.ws.facade.client;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Chauffeur;
import ma.zsmart.taxi.bean.history.ChauffeurHistory;
import ma.zsmart.taxi.dao.criteria.core.ChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.ChauffeurHistoryCriteria;
import ma.zsmart.taxi.service.facade.client.ChauffeurClientService;
import ma.zsmart.taxi.ws.converter.ChauffeurConverter;
import ma.zsmart.taxi.ws.dto.ChauffeurDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages chauffeur services")
@RestController
@RequestMapping("/api/client/chauffeur")
public class ChauffeurRestClient  extends AbstractController<Chauffeur, ChauffeurDto, ChauffeurHistory, ChauffeurCriteria, ChauffeurHistoryCriteria, ChauffeurClientService, ChauffeurConverter> {



    @ApiOperation("Updates the specified  chauffeur")
    @PutMapping("")
    public ResponseEntity<ChauffeurDto> update(@RequestBody ChauffeurDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all chauffeurs")
    @GetMapping("")
    public ResponseEntity<List<ChauffeurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a chauffeur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ChauffeurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a chauffeur and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<ChauffeurDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  chauffeur")
    @PostMapping("")
    public ResponseEntity<ChauffeurDto> save(@RequestBody ChauffeurDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified chauffeur")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<ChauffeurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }











    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<ChauffeurDto>> findByCriteria(@RequestBody ChauffeurCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ChauffeurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody ChauffeurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ChauffeurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody ChauffeurHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody ChauffeurHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody ChauffeurHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public ChauffeurRestClient (ChauffeurClientService service, ChauffeurConverter converter) {
        super(service, converter);
    }

}
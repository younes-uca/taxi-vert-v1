package  ma.zsmart.taxi.ws.facade.client;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Ville;
import ma.zsmart.taxi.bean.history.VilleHistory;
import ma.zsmart.taxi.dao.criteria.core.VilleCriteria;
import ma.zsmart.taxi.dao.criteria.history.VilleHistoryCriteria;
import ma.zsmart.taxi.service.facade.client.VilleClientService;
import ma.zsmart.taxi.ws.converter.VilleConverter;
import ma.zsmart.taxi.ws.dto.VilleDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages ville services")
@RestController
@RequestMapping("/api/client/ville")
public class VilleRestClient  extends AbstractController<Ville, VilleDto, VilleHistory, VilleCriteria, VilleHistoryCriteria, VilleClientService, VilleConverter> {



    @ApiOperation("Updates the specified  ville")
    @PutMapping("")
    public ResponseEntity<VilleDto> update(@RequestBody VilleDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all villes")
    @GetMapping("")
    public ResponseEntity<List<VilleDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a ville by id")
    @GetMapping("id/{id}")
    public ResponseEntity<VilleDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a ville and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<VilleDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  ville")
    @PostMapping("")
    public ResponseEntity<VilleDto> save(@RequestBody VilleDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified ville")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<VilleDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<VilleDto>> findByCriteria(@RequestBody VilleCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody VilleCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody VilleCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody VilleCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody VilleHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody VilleHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody VilleHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public VilleRestClient (VilleClientService service, VilleConverter converter) {
        super(service, converter);
    }

}
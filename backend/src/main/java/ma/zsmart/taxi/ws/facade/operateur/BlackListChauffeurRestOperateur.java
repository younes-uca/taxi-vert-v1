package  ma.zsmart.taxi.ws.facade.operateur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.BlackListChauffeur;
import ma.zsmart.taxi.bean.history.BlackListChauffeurHistory;
import ma.zsmart.taxi.dao.criteria.core.BlackListChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.BlackListChauffeurHistoryCriteria;
import ma.zsmart.taxi.service.facade.operateur.BlackListChauffeurOperateurService;
import ma.zsmart.taxi.ws.converter.BlackListChauffeurConverter;
import ma.zsmart.taxi.ws.dto.BlackListChauffeurDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages blackListChauffeur services")
@RestController
@RequestMapping("/api/operateur/blackListChauffeur")
public class BlackListChauffeurRestOperateur  extends AbstractController<BlackListChauffeur, BlackListChauffeurDto, BlackListChauffeurHistory, BlackListChauffeurCriteria, BlackListChauffeurHistoryCriteria, BlackListChauffeurOperateurService, BlackListChauffeurConverter> {



    @ApiOperation("Updates the specified  blackListChauffeur")
    @PutMapping("")
    public ResponseEntity<BlackListChauffeurDto> update(@RequestBody BlackListChauffeurDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all blackListChauffeurs")
    @GetMapping("")
    public ResponseEntity<List<BlackListChauffeurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a blackListChauffeur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<BlackListChauffeurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a blackListChauffeur and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<BlackListChauffeurDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  blackListChauffeur")
    @PostMapping("")
    public ResponseEntity<BlackListChauffeurDto> save(@RequestBody BlackListChauffeurDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified blackListChauffeur")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<BlackListChauffeurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<BlackListChauffeurDto>> findByCriteria(@RequestBody BlackListChauffeurCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody BlackListChauffeurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody BlackListChauffeurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody BlackListChauffeurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody BlackListChauffeurHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody BlackListChauffeurHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody BlackListChauffeurHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public BlackListChauffeurRestOperateur (BlackListChauffeurOperateurService service, BlackListChauffeurConverter converter) {
        super(service, converter);
    }

}
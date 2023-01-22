package  ma.zsmart.taxi.ws.facade.chauffeur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.EtatChauffeur;
import ma.zsmart.taxi.bean.history.EtatChauffeurHistory;
import ma.zsmart.taxi.dao.criteria.core.EtatChauffeurCriteria;
import ma.zsmart.taxi.dao.criteria.history.EtatChauffeurHistoryCriteria;
import ma.zsmart.taxi.service.facade.chauffeur.EtatChauffeurChauffeurService;
import ma.zsmart.taxi.ws.converter.EtatChauffeurConverter;
import ma.zsmart.taxi.ws.dto.EtatChauffeurDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages etatChauffeur services")
@RestController
@RequestMapping("/api/chauffeur/etatChauffeur")
public class EtatChauffeurRestChauffeur  extends AbstractController<EtatChauffeur, EtatChauffeurDto, EtatChauffeurHistory, EtatChauffeurCriteria, EtatChauffeurHistoryCriteria, EtatChauffeurChauffeurService, EtatChauffeurConverter> {



    @ApiOperation("Updates the specified  etatChauffeur")
    @PutMapping("")
    public ResponseEntity<EtatChauffeurDto> update(@RequestBody EtatChauffeurDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all etatChauffeurs")
    @GetMapping("")
    public ResponseEntity<List<EtatChauffeurDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a etatChauffeur by id")
    @GetMapping("id/{id}")
    public ResponseEntity<EtatChauffeurDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a etatChauffeur and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<EtatChauffeurDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  etatChauffeur")
    @PostMapping("")
    public ResponseEntity<EtatChauffeurDto> save(@RequestBody EtatChauffeurDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified etatChauffeur")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<EtatChauffeurDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<EtatChauffeurDto>> findByCriteria(@RequestBody EtatChauffeurCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody EtatChauffeurCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody EtatChauffeurCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody EtatChauffeurCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody EtatChauffeurHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody EtatChauffeurHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody EtatChauffeurHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public EtatChauffeurRestChauffeur (EtatChauffeurChauffeurService service, EtatChauffeurConverter converter) {
        super(service, converter);
    }

}
package  ma.zsmart.taxi.ws.facade.chauffeur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.MarqueVoiture;
import ma.zsmart.taxi.bean.history.MarqueVoitureHistory;
import ma.zsmart.taxi.dao.criteria.core.MarqueVoitureCriteria;
import ma.zsmart.taxi.dao.criteria.history.MarqueVoitureHistoryCriteria;
import ma.zsmart.taxi.service.facade.chauffeur.MarqueVoitureChauffeurService;
import ma.zsmart.taxi.ws.converter.MarqueVoitureConverter;
import ma.zsmart.taxi.ws.dto.MarqueVoitureDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages marqueVoiture services")
@RestController
@RequestMapping("/api/chauffeur/marqueVoiture")
public class MarqueVoitureRestChauffeur  extends AbstractController<MarqueVoiture, MarqueVoitureDto, MarqueVoitureHistory, MarqueVoitureCriteria, MarqueVoitureHistoryCriteria, MarqueVoitureChauffeurService, MarqueVoitureConverter> {



    @ApiOperation("Updates the specified  marqueVoiture")
    @PutMapping("")
    public ResponseEntity<MarqueVoitureDto> update(@RequestBody MarqueVoitureDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all marqueVoitures")
    @GetMapping("")
    public ResponseEntity<List<MarqueVoitureDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a marqueVoiture by id")
    @GetMapping("id/{id}")
    public ResponseEntity<MarqueVoitureDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a marqueVoiture and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<MarqueVoitureDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  marqueVoiture")
    @PostMapping("")
    public ResponseEntity<MarqueVoitureDto> save(@RequestBody MarqueVoitureDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified marqueVoiture")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<MarqueVoitureDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<MarqueVoitureDto>> findByCriteria(@RequestBody MarqueVoitureCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody MarqueVoitureCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody MarqueVoitureCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody MarqueVoitureCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody MarqueVoitureHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody MarqueVoitureHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody MarqueVoitureHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public MarqueVoitureRestChauffeur (MarqueVoitureChauffeurService service, MarqueVoitureConverter converter) {
        super(service, converter);
    }

}
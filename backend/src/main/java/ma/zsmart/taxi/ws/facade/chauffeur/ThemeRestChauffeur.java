package  ma.zsmart.taxi.ws.facade.chauffeur;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.Theme;
import ma.zsmart.taxi.bean.history.ThemeHistory;
import ma.zsmart.taxi.dao.criteria.core.ThemeCriteria;
import ma.zsmart.taxi.dao.criteria.history.ThemeHistoryCriteria;
import ma.zsmart.taxi.service.facade.chauffeur.ThemeChauffeurService;
import ma.zsmart.taxi.ws.converter.ThemeConverter;
import ma.zsmart.taxi.ws.dto.ThemeDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages theme services")
@RestController
@RequestMapping("/api/chauffeur/theme")
public class ThemeRestChauffeur  extends AbstractController<Theme, ThemeDto, ThemeHistory, ThemeCriteria, ThemeHistoryCriteria, ThemeChauffeurService, ThemeConverter> {



    @ApiOperation("Updates the specified  theme")
    @PutMapping("")
    public ResponseEntity<ThemeDto> update(@RequestBody ThemeDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all themes")
    @GetMapping("")
    public ResponseEntity<List<ThemeDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a theme by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ThemeDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a theme and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<ThemeDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  theme")
    @PostMapping("")
    public ResponseEntity<ThemeDto> save(@RequestBody ThemeDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified theme")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<ThemeDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<ThemeDto>> findByCriteria(@RequestBody ThemeCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ThemeCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody ThemeCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ThemeCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody ThemeHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody ThemeHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody ThemeHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public ThemeRestChauffeur (ThemeChauffeurService service, ThemeConverter converter) {
        super(service, converter);
    }

}
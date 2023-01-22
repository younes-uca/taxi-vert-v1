package  ma.zsmart.taxi.ws.facade.client;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.taxi.bean.core.BlackListClient;
import ma.zsmart.taxi.bean.history.BlackListClientHistory;
import ma.zsmart.taxi.dao.criteria.core.BlackListClientCriteria;
import ma.zsmart.taxi.dao.criteria.history.BlackListClientHistoryCriteria;
import ma.zsmart.taxi.service.facade.client.BlackListClientClientService;
import ma.zsmart.taxi.ws.converter.BlackListClientConverter;
import ma.zsmart.taxi.ws.dto.BlackListClientDto;
import ma.zsmart.taxi.zynerator.controller.AbstractController;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("Manages blackListClient services")
@RestController
@RequestMapping("/api/client/blackListClient")
public class BlackListClientRestClient  extends AbstractController<BlackListClient, BlackListClientDto, BlackListClientHistory, BlackListClientCriteria, BlackListClientHistoryCriteria, BlackListClientClientService, BlackListClientConverter> {



    @ApiOperation("Updates the specified  blackListClient")
    @PutMapping("")
    public ResponseEntity<BlackListClientDto> update(@RequestBody BlackListClientDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Finds a list of all blackListClients")
    @GetMapping("")
    public ResponseEntity<List<BlackListClientDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a blackListClient by id")
    @GetMapping("id/{id}")
    public ResponseEntity<BlackListClientDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }

//    @ApiOperation("Finds a blackListClient and associated list by id")
//    @GetMapping("/detail/id/{id}")
//    public ResponseEntity<BlackListClientDto> findByIdWithAssociatedList(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
//        return super.findByIdWithAssociatedList(id,includes,excludes);
//    }



    @ApiOperation("Saves the specified  blackListClient")
    @PostMapping("")
    public ResponseEntity<BlackListClientDto> save(@RequestBody BlackListClientDto dto) throws Exception {
        return super.save(dto);
    }


    @ApiOperation("Delete the specified blackListClient")
    @DeleteMapping("/multiple")
    public ResponseEntity<Void> delete(@RequestBody List<BlackListClientDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }



    @PostMapping("find-by-criteria/")
    public ResponseEntity<List<BlackListClientDto>> findByCriteria(@RequestBody BlackListClientCriteria criteria) throws Exception {
        return super.findMultipleByCriteria(criteria);
    }


    @PostMapping("find-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody BlackListClientCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @PostMapping("export/")
    public ResponseEntity<InputStreamResource> export(@RequestBody BlackListClientCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody BlackListClientCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }


    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @PostMapping("history-paginated-by-criteria/")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody BlackListClientHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @PostMapping("export-history/")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody BlackListClientHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody BlackListClientHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }

    public BlackListClientRestClient (BlackListClientClientService service, BlackListClientConverter converter) {
        super(service, converter);
    }

}
package ma.zsmart.taxi.zynerator.service;

import ma.zsmart.taxi.security.bean.User;
import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import ma.zsmart.taxi.zynerator.dto.AuditEntityDto;
import ma.zsmart.taxi.zynerator.dto.BaseDto;
import ma.zsmart.taxi.zynerator.enumeration.ACTION_TYPE;
import ma.zsmart.taxi.zynerator.exception.EntityNotFoundException;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import ma.zsmart.taxi.zynerator.history.HistCriteria;
import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.zynerator.repository.AbstractRepository;
import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.zynerator.specification.AbstractSpecification;
import ma.zsmart.taxi.zynerator.util.RefelexivityUtil;
import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.util.Utils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public abstract class AbstractServiceImpl<T extends AuditBusinessObject, DTO extends BaseDto, H extends HistBusinessObject, CRITERIA extends BaseCriteria, HC extends HistCriteria, REPO extends AbstractRepository<T, Long>, HISTREPO extends AbstractHistoryRepository<H, Long>, CONV extends AbstractConverter<T, DTO, H>> extends AbstractServiceImplHelper<T>{

    protected AbstractSpecification<CRITERIA, T> specification;
    protected Class<? extends AbstractSpecification<CRITERIA, T>> specificationClass;

    protected HISTREPO historyRepository;
    protected Class<H> historyClass;
    protected Class<HC> historyCriteriaClass;
    protected Class<? extends AbstractHistorySpecification<HC, H>> historySPecificationClass;


    protected REPO dao;

    protected AbstractConverter<T, DTO, H> abstractConverter;

    protected Class<T> itemClass;
    protected Class<DTO> dtoClass;


    public AbstractServiceImpl(REPO dao, HISTREPO historyRepository, CONV abstractConverter) {
        this.dao = dao;
        this.abstractConverter = abstractConverter;
        this.historyRepository = historyRepository;
        this.configure();
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public DTO create(DTO dto) {
        T t = abstractConverter.toItem(dto);
        T saved = dao.save(t);
        dto.setId(saved.getId());
        return dto;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public DTO update(DTO dto) throws Exception {
        saveAuditData(dto, ACTION_TYPE.UPDATE);
        T loadedItem = dao.findById(dto.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{itemClass.getSimpleName(), dto.getId().toString()});
        }
        T item = abstractConverter.toItem(dto);
        dao.saveAndFlush(item);
        return dto;
    }

    public List<DTO> findMultipleByCriteria(CRITERIA criteria) {
        List<T> content = null;
        if (criteria != null) {
            AbstractSpecification<CRITERIA, T> mySpecification = constructSpecification(criteria);
            if (criteria.isPeagable()) {
                Pageable pageable = PageRequest.of(0, criteria.getMaxResults());
                content = dao.findAll(mySpecification, pageable).getContent();
            } else {
                content = dao.findAll(mySpecification);
            }
        } else {
            content = dao.findAll();
        }
        return abstractConverter.toDto(content);

    }




    public List<DTO> findPaginatedByCriteria(CRITERIA criteria, int page, int pageSize, String order, String sortField) {
        AbstractSpecification<CRITERIA, T> mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return abstractConverter.toDto(dao.findAll(mySpecification, pageable).getContent());
    }

    public int getDataSize(CRITERIA criteria) {
        AbstractSpecification<CRITERIA, T> mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public void delete(List<DTO> list) {
        if (list != null) {
            for (DTO dto : list) {
                dao.deleteById(dto.getId()); // il fait find by id apres delete !!!
                constructAndSaveHistory(dto, ACTION_TYPE.DELETE);
            }
        }
    }


    public List<T> findAll() {
        return dao.findAll();
    }


    private AbstractSpecification<CRITERIA, T> constructSpecification(CRITERIA criteria) {
        AbstractSpecification<CRITERIA, T> mySpecification = RefelexivityUtil.constructObjectUsingDefaultConstr(specificationClass);
        mySpecification.setCriteria(criteria);
        return mySpecification;
    }

    //****************************** HISTORY


    // History methode
    public void saveAuditData(DTO dto, ACTION_TYPE action) throws Exception {
        DTO old = findById(dto.getId());
        if (Utils.compareObjectsDiff(dto, old)) {
            constructAndSaveHistory(dto, action);
        }
    }

    public AuditEntityDto findHistoryById(Long id) {
        H h = historyRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("errors.notFound", new String[]{historyClass.getSimpleName(), id.toString()}));
        return (AuditEntityDto) abstractConverter.copyFromHistory(h);
    }


    public List<AuditEntityDto> findHistoryPaginatedByCriteria(HC historyCriteria, int page, int pageSize, String order, String sortField) {
        AbstractHistorySpecification<HC, H> mySpecification = constructSpecificationHistory(historyCriteria);
        order = StringUtil.isNotEmpty(order) ? order : "desc";
        sortField = StringUtil.isNotEmpty(sortField) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        List<H> content = historyRepository.findAll(mySpecification, pageable).getContent();
        return content.stream().map(h -> (AuditEntityDto) abstractConverter.copyFromHistory(h)).collect(Collectors.toList());
    }

    public List<AuditEntityDto> findHistoryByCriteria(HC historyCriteria) {
        AbstractHistorySpecification<HC, H> mySpecification = constructSpecificationHistory(historyCriteria);
        List<H> content = null;
        if (historyCriteria.isPeagable()) {
            Pageable pageable = PageRequest.of(0, historyCriteria.getMaxResults());
            content = historyRepository.findAll(mySpecification, pageable).getContent();
        } else {
            content = historyRepository.findAll(mySpecification);
        }
        return content.stream().map(h -> (AuditEntityDto) abstractConverter.copyFromHistory(h)).collect(Collectors.toList());
    }

    public int getHistoryDataSize(HC historyCriteria) {
        AbstractHistorySpecification<HC, H> mySpecification = constructSpecificationHistory(historyCriteria);
        mySpecification.setDistinct(true);
        return ((Long) historyRepository.count(mySpecification)).intValue();
    }

    public void constructAndSaveHistory(DTO dto, ACTION_TYPE action) {
        User currentUser = getCurrentUser();
        H history = RefelexivityUtil.constructObjectUsingDefaultConstr(historyClass);
        history.setActionType(action.name());
        history.setObjectName(itemClass.getSimpleName());
        history.setObjectId(dto.getId());
        history.setUserId(currentUser.getId());
        history.setUsername(currentUser.getUsername());
        String dtoAsJson = null;
        try {
            dtoAsJson = new ObjectMapper().writeValueAsString(dto);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        history.setData(dtoAsJson);
        history.setDate(LocalDateTime.now());
        historyRepository.save(history);
    }


    private AbstractHistorySpecification<HC, H> constructSpecificationHistory(HC hc) {
        AbstractHistorySpecification<HC, H> mySpecification = RefelexivityUtil.constructObjectUsingDefaultConstr(historySPecificationClass);
        mySpecification.setCriteria(hc);
        return mySpecification;
    }

    public void configure(Class<T> itemClass,Class<DTO> dtoClass,Class<H> historyClass,Class<HC> historyCriteriaClass,Class<? extends AbstractHistorySpecification<HC, H>> historySPecificationClass){
        this.itemClass = itemClass;
        this.dtoClass = dtoClass;
        this.historyClass = historyClass;
        this.historyCriteriaClass = historyCriteriaClass;
        this.specificationClass = specificationClass;
    }

    public abstract void configure();

    public DTO findById(Long id) {
        Optional<T> item = dao.findById(id);
        return item.isPresent() ? abstractConverter.toDto(item.get()) : null;
    }


    public User getCurrentUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

 }

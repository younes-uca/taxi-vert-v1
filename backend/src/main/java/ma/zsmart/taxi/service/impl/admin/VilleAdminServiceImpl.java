package ma.zsmart.taxi.service.impl.admin;

import ma.zsmart.taxi.bean.core.Ville;
import ma.zsmart.taxi.bean.history.VilleHistory;
import ma.zsmart.taxi.dao.criteria.core.VilleCriteria;
import ma.zsmart.taxi.dao.criteria.history.VilleHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.VilleDao;
import ma.zsmart.taxi.dao.facade.history.VilleHistoryDao;
import ma.zsmart.taxi.dao.specification.history.VilleHistorySpecification;
import ma.zsmart.taxi.service.facade.admin.VilleAdminService;
import ma.zsmart.taxi.ws.converter.VilleConverter;
import ma.zsmart.taxi.ws.dto.VilleDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class VilleAdminServiceImpl extends AbstractServiceImpl<Ville, VilleDto,VilleHistory, VilleCriteria, VilleHistoryCriteria, VilleDao,
VilleHistoryDao, VilleConverter> implements VilleAdminService {

    public VilleAdminServiceImpl(VilleDao dao, VilleHistoryDao historyDao, VilleConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Ville.class, VilleDto.class, VilleHistory.class, VilleHistoryCriteria.class, VilleHistorySpecification.class);
    }




}
package ma.zsmart.taxi.service.facade.admin;

import java.util.List;
import ma.zsmart.taxi.bean.core.MarqueVoiture;
import ma.zsmart.taxi.ws.dto.MarqueVoitureDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.MarqueVoitureCriteria;
import ma.zsmart.taxi.dao.criteria.history.MarqueVoitureHistoryCriteria;



public interface MarqueVoitureAdminService extends IService<MarqueVoiture, MarqueVoitureDto,MarqueVoitureCriteria, MarqueVoitureHistoryCriteria> {
    //MarqueVoiture findOrSave(MarqueVoiture marqueVoiture);


}
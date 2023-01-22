package ma.zsmart.taxi.service.facade.admin;

import java.util.List;
import ma.zsmart.taxi.bean.core.Ville;
import ma.zsmart.taxi.ws.dto.VilleDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.VilleCriteria;
import ma.zsmart.taxi.dao.criteria.history.VilleHistoryCriteria;



public interface VilleAdminService extends IService<Ville, VilleDto,VilleCriteria, VilleHistoryCriteria> {
    //Ville findOrSave(Ville ville);


}

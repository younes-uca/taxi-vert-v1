package ma.zsmart.taxi.service.facade.operateur;

import java.util.List;
import ma.zsmart.taxi.bean.core.Langue;
import ma.zsmart.taxi.ws.dto.LangueDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.LangueCriteria;
import ma.zsmart.taxi.dao.criteria.history.LangueHistoryCriteria;



public interface LangueOperateurService extends IService<Langue, LangueDto,LangueCriteria, LangueHistoryCriteria> {
    //Langue findOrSave(Langue langue);


}

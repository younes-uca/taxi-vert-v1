package ma.zsmart.taxi.service.facade.operateur;

import java.util.List;
import ma.zsmart.taxi.bean.core.Operateur;
import ma.zsmart.taxi.ws.dto.OperateurDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.OperateurCriteria;
import ma.zsmart.taxi.dao.criteria.history.OperateurHistoryCriteria;



public interface OperateurOperateurService extends IService<Operateur, OperateurDto,OperateurCriteria, OperateurHistoryCriteria> {
    Operateur findByUsername(String username);
    //Operateur findOrSave(Operateur operateur);


}

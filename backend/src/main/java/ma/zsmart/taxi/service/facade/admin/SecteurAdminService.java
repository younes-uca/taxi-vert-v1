package ma.zsmart.taxi.service.facade.admin;

import java.util.List;
import ma.zsmart.taxi.bean.core.Secteur;
import ma.zsmart.taxi.ws.dto.SecteurDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.SecteurCriteria;
import ma.zsmart.taxi.dao.criteria.history.SecteurHistoryCriteria;



public interface SecteurAdminService extends IService<Secteur, SecteurDto,SecteurCriteria, SecteurHistoryCriteria> {
    //Secteur findOrSave(Secteur secteur);


}

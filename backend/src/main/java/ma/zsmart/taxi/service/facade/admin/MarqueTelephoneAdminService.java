package ma.zsmart.taxi.service.facade.admin;

import java.util.List;
import ma.zsmart.taxi.bean.core.MarqueTelephone;
import ma.zsmart.taxi.ws.dto.MarqueTelephoneDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.MarqueTelephoneCriteria;
import ma.zsmart.taxi.dao.criteria.history.MarqueTelephoneHistoryCriteria;



public interface MarqueTelephoneAdminService extends IService<MarqueTelephone, MarqueTelephoneDto,MarqueTelephoneCriteria, MarqueTelephoneHistoryCriteria> {
    //MarqueTelephone findOrSave(MarqueTelephone marqueTelephone);


}

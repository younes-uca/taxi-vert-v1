package ma.zsmart.taxi.service.facade.client;

import java.util.List;
import ma.zsmart.taxi.bean.core.Theme;
import ma.zsmart.taxi.ws.dto.ThemeDto;
import ma.zsmart.taxi.zynerator.service.IService;
import ma.zsmart.taxi.dao.criteria.core.ThemeCriteria;
import ma.zsmart.taxi.dao.criteria.history.ThemeHistoryCriteria;



public interface ThemeClientService extends IService<Theme, ThemeDto,ThemeCriteria, ThemeHistoryCriteria> {
    //Theme findOrSave(Theme theme);


}

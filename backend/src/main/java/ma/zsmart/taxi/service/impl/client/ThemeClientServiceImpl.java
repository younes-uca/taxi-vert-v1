package ma.zsmart.taxi.service.impl.client;

import ma.zsmart.taxi.bean.core.Theme;
import ma.zsmart.taxi.bean.history.ThemeHistory;
import ma.zsmart.taxi.dao.criteria.core.ThemeCriteria;
import ma.zsmart.taxi.dao.criteria.history.ThemeHistoryCriteria;
import ma.zsmart.taxi.dao.facade.core.ThemeDao;
import ma.zsmart.taxi.dao.facade.history.ThemeHistoryDao;
import ma.zsmart.taxi.dao.specification.history.ThemeHistorySpecification;
import ma.zsmart.taxi.service.facade.client.ThemeClientService;
import ma.zsmart.taxi.ws.converter.ThemeConverter;
import ma.zsmart.taxi.ws.dto.ThemeDto;
import ma.zsmart.taxi.zynerator.service.AbstractServiceImpl;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class ThemeClientServiceImpl extends AbstractServiceImpl<Theme, ThemeDto,ThemeHistory, ThemeCriteria, ThemeHistoryCriteria, ThemeDao,
ThemeHistoryDao, ThemeConverter> implements ThemeClientService {

    public ThemeClientServiceImpl(ThemeDao dao, ThemeHistoryDao historyDao, ThemeConverter converter) {
        super(dao, historyDao, converter);
    }


    public void configure() {
        super.configure(Theme.class, ThemeDto.class, ThemeHistory.class, ThemeHistoryCriteria.class, ThemeHistorySpecification.class);
    }




}
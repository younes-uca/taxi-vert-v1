package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.ThemeHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeHistoryDao extends AbstractHistoryRepository<ThemeHistory,Long> {

}

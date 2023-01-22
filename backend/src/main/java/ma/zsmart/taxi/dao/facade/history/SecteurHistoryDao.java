package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.SecteurHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface SecteurHistoryDao extends AbstractHistoryRepository<SecteurHistory,Long> {

}

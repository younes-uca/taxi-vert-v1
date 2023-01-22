package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.ModelApplicationHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelApplicationHistoryDao extends AbstractHistoryRepository<ModelApplicationHistory,Long> {

}

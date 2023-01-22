package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.MarqueVoitureHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface MarqueVoitureHistoryDao extends AbstractHistoryRepository<MarqueVoitureHistory,Long> {

}

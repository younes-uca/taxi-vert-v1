package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.VilleHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface VilleHistoryDao extends AbstractHistoryRepository<VilleHistory,Long> {

}

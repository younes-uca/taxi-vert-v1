package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.MoyenTransportHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface MoyenTransportHistoryDao extends AbstractHistoryRepository<MoyenTransportHistory,Long> {

}

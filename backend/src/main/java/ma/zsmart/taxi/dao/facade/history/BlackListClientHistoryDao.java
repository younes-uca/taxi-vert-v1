package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.BlackListClientHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface BlackListClientHistoryDao extends AbstractHistoryRepository<BlackListClientHistory,Long> {

}

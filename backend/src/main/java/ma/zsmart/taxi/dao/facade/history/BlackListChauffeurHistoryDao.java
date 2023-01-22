package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.BlackListChauffeurHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface BlackListChauffeurHistoryDao extends AbstractHistoryRepository<BlackListChauffeurHistory,Long> {

}

package ma.zsmart.taxi.dao.facade.history;

import ma.zsmart.taxi.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.taxi.bean.history.ChauffeurHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ChauffeurHistoryDao extends AbstractHistoryRepository<ChauffeurHistory,Long> {

}

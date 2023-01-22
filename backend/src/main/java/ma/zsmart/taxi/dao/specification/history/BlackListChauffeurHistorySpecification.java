package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.BlackListChauffeurHistoryCriteria;
import ma.zsmart.taxi.bean.history.BlackListChauffeurHistory;


public class BlackListChauffeurHistorySpecification extends AbstractHistorySpecification<BlackListChauffeurHistoryCriteria, BlackListChauffeurHistory> {

    public BlackListChauffeurHistorySpecification(BlackListChauffeurHistoryCriteria criteria) {
        super(criteria);
    }

    public BlackListChauffeurHistorySpecification(BlackListChauffeurHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.ChauffeurHistoryCriteria;
import ma.zsmart.taxi.bean.history.ChauffeurHistory;


public class ChauffeurHistorySpecification extends AbstractHistorySpecification<ChauffeurHistoryCriteria, ChauffeurHistory> {

    public ChauffeurHistorySpecification(ChauffeurHistoryCriteria criteria) {
        super(criteria);
    }

    public ChauffeurHistorySpecification(ChauffeurHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.OperateurHistoryCriteria;
import ma.zsmart.taxi.bean.history.OperateurHistory;


public class OperateurHistorySpecification extends AbstractHistorySpecification<OperateurHistoryCriteria, OperateurHistory> {

    public OperateurHistorySpecification(OperateurHistoryCriteria criteria) {
        super(criteria);
    }

    public OperateurHistorySpecification(OperateurHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

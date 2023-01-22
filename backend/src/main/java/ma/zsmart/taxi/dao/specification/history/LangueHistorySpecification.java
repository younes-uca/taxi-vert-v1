package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.LangueHistoryCriteria;
import ma.zsmart.taxi.bean.history.LangueHistory;


public class LangueHistorySpecification extends AbstractHistorySpecification<LangueHistoryCriteria, LangueHistory> {

    public LangueHistorySpecification(LangueHistoryCriteria criteria) {
        super(criteria);
    }

    public LangueHistorySpecification(LangueHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

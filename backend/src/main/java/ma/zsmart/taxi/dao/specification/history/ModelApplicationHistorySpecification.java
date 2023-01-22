package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.ModelApplicationHistoryCriteria;
import ma.zsmart.taxi.bean.history.ModelApplicationHistory;


public class ModelApplicationHistorySpecification extends AbstractHistorySpecification<ModelApplicationHistoryCriteria, ModelApplicationHistory> {

    public ModelApplicationHistorySpecification(ModelApplicationHistoryCriteria criteria) {
        super(criteria);
    }

    public ModelApplicationHistorySpecification(ModelApplicationHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

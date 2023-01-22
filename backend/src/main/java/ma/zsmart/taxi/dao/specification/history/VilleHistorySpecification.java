package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.VilleHistoryCriteria;
import ma.zsmart.taxi.bean.history.VilleHistory;


public class VilleHistorySpecification extends AbstractHistorySpecification<VilleHistoryCriteria, VilleHistory> {

    public VilleHistorySpecification(VilleHistoryCriteria criteria) {
        super(criteria);
    }

    public VilleHistorySpecification(VilleHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

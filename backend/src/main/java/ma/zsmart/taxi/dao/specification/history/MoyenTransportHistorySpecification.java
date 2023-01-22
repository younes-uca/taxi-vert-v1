package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.MoyenTransportHistoryCriteria;
import ma.zsmart.taxi.bean.history.MoyenTransportHistory;


public class MoyenTransportHistorySpecification extends AbstractHistorySpecification<MoyenTransportHistoryCriteria, MoyenTransportHistory> {

    public MoyenTransportHistorySpecification(MoyenTransportHistoryCriteria criteria) {
        super(criteria);
    }

    public MoyenTransportHistorySpecification(MoyenTransportHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

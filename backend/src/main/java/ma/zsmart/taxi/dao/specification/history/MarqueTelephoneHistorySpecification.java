package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.MarqueTelephoneHistoryCriteria;
import ma.zsmart.taxi.bean.history.MarqueTelephoneHistory;


public class MarqueTelephoneHistorySpecification extends AbstractHistorySpecification<MarqueTelephoneHistoryCriteria, MarqueTelephoneHistory> {

    public MarqueTelephoneHistorySpecification(MarqueTelephoneHistoryCriteria criteria) {
        super(criteria);
    }

    public MarqueTelephoneHistorySpecification(MarqueTelephoneHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

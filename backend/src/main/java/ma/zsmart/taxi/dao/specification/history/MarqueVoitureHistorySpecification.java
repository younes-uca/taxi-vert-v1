package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.MarqueVoitureHistoryCriteria;
import ma.zsmart.taxi.bean.history.MarqueVoitureHistory;


public class MarqueVoitureHistorySpecification extends AbstractHistorySpecification<MarqueVoitureHistoryCriteria, MarqueVoitureHistory> {

    public MarqueVoitureHistorySpecification(MarqueVoitureHistoryCriteria criteria) {
        super(criteria);
    }

    public MarqueVoitureHistorySpecification(MarqueVoitureHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.ThemeHistoryCriteria;
import ma.zsmart.taxi.bean.history.ThemeHistory;


public class ThemeHistorySpecification extends AbstractHistorySpecification<ThemeHistoryCriteria, ThemeHistory> {

    public ThemeHistorySpecification(ThemeHistoryCriteria criteria) {
        super(criteria);
    }

    public ThemeHistorySpecification(ThemeHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

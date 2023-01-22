package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.SecteurHistoryCriteria;
import ma.zsmart.taxi.bean.history.SecteurHistory;


public class SecteurHistorySpecification extends AbstractHistorySpecification<SecteurHistoryCriteria, SecteurHistory> {

    public SecteurHistorySpecification(SecteurHistoryCriteria criteria) {
        super(criteria);
    }

    public SecteurHistorySpecification(SecteurHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

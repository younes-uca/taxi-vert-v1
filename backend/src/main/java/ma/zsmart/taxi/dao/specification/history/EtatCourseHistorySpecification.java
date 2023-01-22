package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.EtatCourseHistoryCriteria;
import ma.zsmart.taxi.bean.history.EtatCourseHistory;


public class EtatCourseHistorySpecification extends AbstractHistorySpecification<EtatCourseHistoryCriteria, EtatCourseHistory> {

    public EtatCourseHistorySpecification(EtatCourseHistoryCriteria criteria) {
        super(criteria);
    }

    public EtatCourseHistorySpecification(EtatCourseHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

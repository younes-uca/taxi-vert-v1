package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.CourseHistoryCriteria;
import ma.zsmart.taxi.bean.history.CourseHistory;


public class CourseHistorySpecification extends AbstractHistorySpecification<CourseHistoryCriteria, CourseHistory> {

    public CourseHistorySpecification(CourseHistoryCriteria criteria) {
        super(criteria);
    }

    public CourseHistorySpecification(CourseHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.BlackListClientHistoryCriteria;
import ma.zsmart.taxi.bean.history.BlackListClientHistory;


public class BlackListClientHistorySpecification extends AbstractHistorySpecification<BlackListClientHistoryCriteria, BlackListClientHistory> {

    public BlackListClientHistorySpecification(BlackListClientHistoryCriteria criteria) {
        super(criteria);
    }

    public BlackListClientHistorySpecification(BlackListClientHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

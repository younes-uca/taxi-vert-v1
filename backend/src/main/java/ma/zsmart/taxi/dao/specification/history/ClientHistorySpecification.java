package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.ClientHistoryCriteria;
import ma.zsmart.taxi.bean.history.ClientHistory;


public class ClientHistorySpecification extends AbstractHistorySpecification<ClientHistoryCriteria, ClientHistory> {

    public ClientHistorySpecification(ClientHistoryCriteria criteria) {
        super(criteria);
    }

    public ClientHistorySpecification(ClientHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

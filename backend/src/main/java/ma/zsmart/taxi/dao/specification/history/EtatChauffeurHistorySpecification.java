package  ma.zsmart.taxi.dao.specification.history;

import ma.zsmart.taxi.zynerator.specification.AbstractHistorySpecification;
import ma.zsmart.taxi.dao.criteria.history.EtatChauffeurHistoryCriteria;
import ma.zsmart.taxi.bean.history.EtatChauffeurHistory;


public class EtatChauffeurHistorySpecification extends AbstractHistorySpecification<EtatChauffeurHistoryCriteria, EtatChauffeurHistory> {

    public EtatChauffeurHistorySpecification(EtatChauffeurHistoryCriteria criteria) {
        super(criteria);
    }

    public EtatChauffeurHistorySpecification(EtatChauffeurHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}

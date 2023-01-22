package  ma.zsmart.taxi.dao.specification.core;




import ma.zsmart.taxi.zynerator.specification.AbstractSpecification;
import ma.zsmart.taxi.dao.criteria.core.MarqueTelephoneCriteria;
import ma.zsmart.taxi.bean.core.MarqueTelephone;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class MarqueTelephoneSpecification extends AbstractSpecification<MarqueTelephoneCriteria, MarqueTelephone> {

    public MarqueTelephoneSpecification(MarqueTelephoneCriteria criteria) {
        super(criteria);
    }

    public MarqueTelephoneSpecification(MarqueTelephoneCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }


    @Override
    public Predicate toPredicate(Root<MarqueTelephone> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        List<Predicate> predicates = new ArrayList<>();
            attachSearchElement(root, query, builder, predicates);
            if (criteria != null) {
             addPredicateId("id", criteria.getId(), criteria.getNotId(), criteria.getIdsIn(), criteria.getIdsNotIn());
             addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
             addPredicate("code", criteria.getCode(),criteria.getCodeLike());
            addOrderAndFilter();
          }
        return getResult();
    }

}

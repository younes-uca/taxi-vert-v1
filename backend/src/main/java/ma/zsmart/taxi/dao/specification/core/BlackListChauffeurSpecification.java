package  ma.zsmart.taxi.dao.specification.core;




import ma.zsmart.taxi.zynerator.specification.AbstractSpecification;
import ma.zsmart.taxi.dao.criteria.core.BlackListChauffeurCriteria;
import ma.zsmart.taxi.bean.core.BlackListChauffeur;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class BlackListChauffeurSpecification extends AbstractSpecification<BlackListChauffeurCriteria, BlackListChauffeur> {

    public BlackListChauffeurSpecification(BlackListChauffeurCriteria criteria) {
        super(criteria);
    }

    public BlackListChauffeurSpecification(BlackListChauffeurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }


    @Override
    public Predicate toPredicate(Root<BlackListChauffeur> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        List<Predicate> predicates = new ArrayList<>();
            attachSearchElement(root, query, builder, predicates);
            if (criteria != null) {
             addPredicateId("id", criteria.getId(), criteria.getNotId(), criteria.getIdsIn(), criteria.getIdsNotIn());
             addPredicate("chauffeur", criteria.getChauffeur(),criteria.getChauffeurLike());
             addPredicate("client", criteria.getClient(),criteria.getClientLike());
             addPredicate("dateBlackList", criteria.getDateBlackList(), criteria.getDateBlackListFrom(), criteria.getDateBlackListTo());
             addPredicate("commentaire", criteria.getCommentaire(),criteria.getCommentaireLike());
            addOrderAndFilter();
          }
        return getResult();
    }

}

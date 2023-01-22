package ma.zsmart.taxi.zynerator.specification;

import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import ma.zsmart.taxi.zynerator.criteria.BaseCriteria;
import org.springframework.data.jpa.domain.Specification;

public abstract class AbstractSpecification<Criteria extends BaseCriteria, T extends AuditBusinessObject> extends SpecificationHelper<Criteria, T> implements Specification<T> {


    public AbstractSpecification(Criteria criteria) {
        this.criteria = criteria;
    }

    public AbstractSpecification(Criteria criteria, boolean distinct) {
        this.criteria = criteria;
        this.distinct = distinct;
    }

    public void addEtablissementPredicate() {
        if (criteria.getEtablissementId() != null && criteria.getEtablissementId() > 0) {
            predicates.add(builder.equal(root.<Long>get("etablissement"), criteria.getEtablissementId()));
        }
    }
}

package  ma.zsmart.taxi.dao.specification.core;




import ma.zsmart.taxi.zynerator.specification.AbstractSpecification;
import ma.zsmart.taxi.dao.criteria.core.ChauffeurCriteria;
import ma.zsmart.taxi.bean.core.Chauffeur;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class ChauffeurSpecification extends AbstractSpecification<ChauffeurCriteria, Chauffeur> {

    public ChauffeurSpecification(ChauffeurCriteria criteria) {
        super(criteria);
    }

    public ChauffeurSpecification(ChauffeurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }


    @Override
    public Predicate toPredicate(Root<Chauffeur> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        List<Predicate> predicates = new ArrayList<>();
            attachSearchElement(root, query, builder, predicates);
            if (criteria != null) {
             addPredicateId("id", criteria.getId(), criteria.getNotId(), criteria.getIdsIn(), criteria.getIdsNotIn());
             addPredicate("matricule", criteria.getMatricule(),criteria.getMatriculeLike());
             addPredicate("mobile", criteria.getMobile(),criteria.getMobileLike());
             addPredicate("codePostale", criteria.getCodePostale(),criteria.getCodePostaleLike());
             addPredicateInt("nombrePlace", criteria.getNombrePlace());
             addPredicate("imageVoiture", criteria.getImageVoiture(),criteria.getImageVoitureLike());
             addPredicateInt("orderAffichage", criteria.getOrderAffichage());
             addPredicateBigDecimal("altitudeActuelle", criteria.getAltitudeActuelle());
             addPredicateBigDecimal("longitudeActuelle", criteria.getLongitudeActuelle());
             addPredicateBool("credentialsNonExpired", criteria.getCredentialsNonExpired());
             addPredicateBool("enabled", criteria.getEnabled());
             addPredicateBool("accountNonExpired", criteria.getAccountNonExpired());
             addPredicateBool("accountNonLocked", criteria.getAccountNonLocked());
             addPredicateBool("passwordChanged", criteria.getPasswordChanged());
             addPredicate("createdAt", criteria.getCreatedAt(),criteria.getCreatedAtLike());
             addPredicate("updatedAt", criteria.getUpdatedAt(),criteria.getUpdatedAtLike());
             addPredicate("username", criteria.getUsername(),criteria.getUsernameLike());
             addPredicate("password", criteria.getPassword(),criteria.getPasswordLike());
             addPredicate("prenom", criteria.getPrenom(),criteria.getPrenomLike());
             addPredicate("nom", criteria.getNom(),criteria.getNomLike());
            addOrderAndFilter();
          }
        return getResult();
    }

}

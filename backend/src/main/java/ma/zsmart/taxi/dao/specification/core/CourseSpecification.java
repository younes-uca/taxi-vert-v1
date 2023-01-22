package  ma.zsmart.taxi.dao.specification.core;




import ma.zsmart.taxi.zynerator.specification.AbstractSpecification;
import ma.zsmart.taxi.dao.criteria.core.CourseCriteria;
import ma.zsmart.taxi.bean.core.Course;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class CourseSpecification extends AbstractSpecification<CourseCriteria, Course> {

    public CourseSpecification(CourseCriteria criteria) {
        super(criteria);
    }

    public CourseSpecification(CourseCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }


    @Override
    public Predicate toPredicate(Root<Course> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        List<Predicate> predicates = new ArrayList<>();
            attachSearchElement(root, query, builder, predicates);
            if (criteria != null) {
             addPredicateId("id", criteria.getId(), criteria.getNotId(), criteria.getIdsIn(), criteria.getIdsNotIn());
             addPredicate("dateDemandeCourse", criteria.getDateDemandeCourse(), criteria.getDateDemandeCourseFrom(), criteria.getDateDemandeCourseTo());
             addPredicate("dateReponseChauffeur", criteria.getDateReponseChauffeur(), criteria.getDateReponseChauffeurFrom(), criteria.getDateReponseChauffeurTo());
             addPredicate("dateArriveChauffeur", criteria.getDateArriveChauffeur(), criteria.getDateArriveChauffeurFrom(), criteria.getDateArriveChauffeurTo());
             addPredicate("dateArriveClient", criteria.getDateArriveClient(), criteria.getDateArriveClientFrom(), criteria.getDateArriveClientTo());
             addPredicateInt("nombrePlace", criteria.getNombrePlace());
             addPredicate("telephone", criteria.getTelephone(),criteria.getTelephoneLike());
             addPredicate("commentaire", criteria.getCommentaire(),criteria.getCommentaireLike());
             addPredicate("noteInterne", criteria.getNoteInterne(),criteria.getNoteInterneLike());
             addPredicate("adresseDepart", criteria.getAdresseDepart(),criteria.getAdresseDepartLike());
             addPredicate("noteDepart", criteria.getNoteDepart(),criteria.getNoteDepartLike());
             addPredicateBigDecimal("altitudeDepart", criteria.getAltitudeDepart());
             addPredicateBigDecimal("longitudeDepart", criteria.getLongitudeDepart());
             addPredicate("adresseArrive", criteria.getAdresseArrive(),criteria.getAdresseArriveLike());
             addPredicate("noteArrive", criteria.getNoteArrive(),criteria.getNoteArriveLike());
             addPredicateBigDecimal("altitudeArrive", criteria.getAltitudeArrive());
             addPredicateBigDecimal("longitudeArrive", criteria.getLongitudeArrive());
            addOrderAndFilter();
          }
        return getResult();
    }

}

package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "etat_course")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="etat_course_seq",sequenceName="etat_course_seq",allocationSize=1, initialValue = 1)
public class EtatCourseHistory extends HistBusinessObject  {


    public EtatCourseHistory() {
    super();
    }

    public EtatCourseHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="etat_course_seq")
    public Long getId() {
    return id;
    }
}


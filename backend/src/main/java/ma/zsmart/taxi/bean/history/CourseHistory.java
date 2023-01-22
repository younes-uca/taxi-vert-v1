package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "course")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="course_seq",sequenceName="course_seq",allocationSize=1, initialValue = 1)
public class CourseHistory extends HistBusinessObject  {


    public CourseHistory() {
    super();
    }

    public CourseHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="course_seq")
    public Long getId() {
    return id;
    }
}


package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "langue")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="langue_seq",sequenceName="langue_seq",allocationSize=1, initialValue = 1)
public class LangueHistory extends HistBusinessObject  {


    public LangueHistory() {
    super();
    }

    public LangueHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="langue_seq")
    public Long getId() {
    return id;
    }
}


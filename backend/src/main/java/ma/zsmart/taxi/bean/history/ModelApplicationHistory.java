package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "model_application")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="model_application_seq",sequenceName="model_application_seq",allocationSize=1, initialValue = 1)
public class ModelApplicationHistory extends HistBusinessObject  {


    public ModelApplicationHistory() {
    super();
    }

    public ModelApplicationHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="model_application_seq")
    public Long getId() {
    return id;
    }
}


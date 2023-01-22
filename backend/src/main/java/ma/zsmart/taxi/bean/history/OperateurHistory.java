package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "operateur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="operateur_seq",sequenceName="operateur_seq",allocationSize=1, initialValue = 1)
public class OperateurHistory extends HistBusinessObject  {


    public OperateurHistory() {
    super();
    }

    public OperateurHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="operateur_seq")
    public Long getId() {
    return id;
    }
}


package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "marque_voiture")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="marque_voiture_seq",sequenceName="marque_voiture_seq",allocationSize=1, initialValue = 1)
public class MarqueVoitureHistory extends HistBusinessObject  {


    public MarqueVoitureHistory() {
    super();
    }

    public MarqueVoitureHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="marque_voiture_seq")
    public Long getId() {
    return id;
    }
}


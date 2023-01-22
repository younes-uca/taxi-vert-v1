package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "marque_telephone")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="marque_telephone_seq",sequenceName="marque_telephone_seq",allocationSize=1, initialValue = 1)
public class MarqueTelephoneHistory extends HistBusinessObject  {


    public MarqueTelephoneHistory() {
    super();
    }

    public MarqueTelephoneHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="marque_telephone_seq")
    public Long getId() {
    return id;
    }
}


package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "secteur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="secteur_seq",sequenceName="secteur_seq",allocationSize=1, initialValue = 1)
public class SecteurHistory extends HistBusinessObject  {


    public SecteurHistory() {
    super();
    }

    public SecteurHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="secteur_seq")
    public Long getId() {
    return id;
    }
}


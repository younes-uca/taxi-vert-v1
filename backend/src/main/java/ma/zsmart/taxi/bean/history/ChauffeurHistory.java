package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "chauffeur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="chauffeur_seq",sequenceName="chauffeur_seq",allocationSize=1, initialValue = 1)
public class ChauffeurHistory extends HistBusinessObject  {


    public ChauffeurHistory() {
    super();
    }

    public ChauffeurHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="chauffeur_seq")
    public Long getId() {
    return id;
    }
}


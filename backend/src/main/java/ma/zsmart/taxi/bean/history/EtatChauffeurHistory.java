package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "etat_chauffeur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="etat_chauffeur_seq",sequenceName="etat_chauffeur_seq",allocationSize=1, initialValue = 1)
public class EtatChauffeurHistory extends HistBusinessObject  {


    public EtatChauffeurHistory() {
    super();
    }

    public EtatChauffeurHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="etat_chauffeur_seq")
    public Long getId() {
    return id;
    }
}


package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "black_list_chauffeur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="black_list_chauffeur_seq",sequenceName="black_list_chauffeur_seq",allocationSize=1, initialValue = 1)
public class BlackListChauffeurHistory extends HistBusinessObject  {


    public BlackListChauffeurHistory() {
    super();
    }

    public BlackListChauffeurHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="black_list_chauffeur_seq")
    public Long getId() {
    return id;
    }
}


package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "moyen_transport")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="moyen_transport_seq",sequenceName="moyen_transport_seq",allocationSize=1, initialValue = 1)
public class MoyenTransportHistory extends HistBusinessObject  {


    public MoyenTransportHistory() {
    super();
    }

    public MoyenTransportHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="moyen_transport_seq")
    public Long getId() {
    return id;
    }
}


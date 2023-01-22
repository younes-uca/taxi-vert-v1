package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "black_list_client")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="black_list_client_seq",sequenceName="black_list_client_seq",allocationSize=1, initialValue = 1)
public class BlackListClientHistory extends HistBusinessObject  {


    public BlackListClientHistory() {
    super();
    }

    public BlackListClientHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="black_list_client_seq")
    public Long getId() {
    return id;
    }
}


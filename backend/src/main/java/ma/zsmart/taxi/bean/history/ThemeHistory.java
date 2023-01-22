package ma.zsmart.taxi.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "theme")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="theme_seq",sequenceName="theme_seq",allocationSize=1, initialValue = 1)
public class ThemeHistory extends HistBusinessObject  {


    public ThemeHistory() {
    super();
    }

    public ThemeHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="theme_seq")
    public Long getId() {
    return id;
    }
}


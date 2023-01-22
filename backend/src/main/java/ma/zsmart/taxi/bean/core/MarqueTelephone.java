package ma.zsmart.taxi.bean.core;

import java.util.Objects;



import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;






@Entity
@Table(name = "marque_telephone")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="marque_telephone_seq",sequenceName="marque_telephone_seq",allocationSize=1, initialValue = 1)
public class MarqueTelephone   extends AuditBusinessObject  {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;



    public MarqueTelephone(){
        super();
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="marque_telephone_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }

    @Transient
    public String getLabel() {
        label = libelle;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MarqueTelephone marqueTelephone = (MarqueTelephone) o;
        return id != null && id.equals(marqueTelephone.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}


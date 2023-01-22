package ma.zsmart.taxi.bean.core;

import java.util.Objects;



import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;






@Entity
@Table(name = "moyen_transport")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="moyen_transport_seq",sequenceName="moyen_transport_seq",allocationSize=1, initialValue = 1)
public class MoyenTransport   extends AuditBusinessObject  {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;



    public MoyenTransport(){
        super();
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="moyen_transport_seq")
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
        MoyenTransport moyenTransport = (MoyenTransport) o;
        return id != null && id.equals(moyenTransport.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}


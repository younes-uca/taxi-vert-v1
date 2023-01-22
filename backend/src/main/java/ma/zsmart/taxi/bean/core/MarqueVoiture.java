package ma.zsmart.taxi.bean.core;

import java.util.Objects;



import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;






@Entity
@Table(name = "marque_voiture")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="marque_voiture_seq",sequenceName="marque_voiture_seq",allocationSize=1, initialValue = 1)
public class MarqueVoiture   extends AuditBusinessObject  {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;
    @Column(columnDefinition = "boolean default false")
    private Boolean actif = false;



    public MarqueVoiture(){
        super();
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="marque_voiture_seq")
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
    public Boolean  getActif(){
        return this.actif;
    }
    public void setActif(Boolean actif){
        this.actif = actif;
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
        MarqueVoiture marqueVoiture = (MarqueVoiture) o;
        return id != null && id.equals(marqueVoiture.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}


package ma.zsmart.taxi.bean.core;

import java.util.Objects;

import java.time.LocalDateTime;


import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zsmart.taxi.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;






@Entity
@Table(name = "black_list_client")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="black_list_client_seq",sequenceName="black_list_client_seq",allocationSize=1, initialValue = 1)
public class BlackListClient   extends AuditBusinessObject  {

    private Long id;

    @Column(length = 500)
    private String chauffeur;
    @Column(length = 500)
    private String client;
    private LocalDateTime dateBlackList ;
    @Column(length = 500)
    private String commentaire;



    public BlackListClient(){
        super();
    }




    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="black_list_client_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getChauffeur(){
        return this.chauffeur;
    }
    public void setChauffeur(String chauffeur){
        this.chauffeur = chauffeur;
    }
    public String getClient(){
        return this.client;
    }
    public void setClient(String client){
        this.client = client;
    }
    public LocalDateTime getDateBlackList(){
        return this.dateBlackList;
    }
    public void setDateBlackList(LocalDateTime dateBlackList){
        this.dateBlackList = dateBlackList;
    }
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }

    @Transient
    public String getLabel() {
        label = chauffeur;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BlackListClient blackListClient = (BlackListClient) o;
        return id != null && id.equals(blackListClient.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}


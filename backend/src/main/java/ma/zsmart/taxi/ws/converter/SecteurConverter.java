package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.SecteurHistory;
import ma.zsmart.taxi.bean.core.Secteur;
import ma.zsmart.taxi.ws.dto.SecteurDto;

@Component
public class SecteurConverter extends AbstractConverter<Secteur, SecteurDto, SecteurHistory> {

    @Autowired
    private VilleConverter villeConverter ;

    private boolean ville;

    public  SecteurConverter(){
        super(Secteur.class, SecteurDto.class, SecteurHistory.class);
    }

    @Override
    public Secteur toItem(SecteurDto dto) {
        if (dto == null) {
            return null;
        } else {
        Secteur item = new Secteur();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(this.ville && dto.getVille()!=null)
                item.setVille(villeConverter.toItem(dto.getVille())) ;


        return item;
        }
    }

    @Override
    public SecteurDto toDto(Secteur item) {
        if (item == null) {
            return null;
        } else {
    SecteurDto dto = new SecteurDto();
        if(StringUtil.isNotEmpty(item.getId()))
             dto.setId(item.getId());
        if(StringUtil.isNotEmpty(item.getLibelle()))
             dto.setLibelle(item.getLibelle());
        if(StringUtil.isNotEmpty(item.getCode()))
             dto.setCode(item.getCode());
        if(this.ville && item.getVille()!=null) {
            dto.setVilleDto(villeConverter.toDto(item.getVille())) ;
        }
        return dto;
        }
    }



    public VilleConverter getVilleConverter(){
        return this.villeConverter;
    }
    public void setVilleConverter(VilleConverter villeConverter ){
        this.villeConverter = villeConverter;
    }

    public boolean  isVille(){
        return this.ville;
    }
    public void  setVille(boolean ville){
        this.ville = ville;
    }
}

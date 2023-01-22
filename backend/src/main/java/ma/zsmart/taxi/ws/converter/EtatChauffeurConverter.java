package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.EtatChauffeurHistory;
import ma.zsmart.taxi.bean.core.EtatChauffeur;
import ma.zsmart.taxi.ws.dto.EtatChauffeurDto;

@Component
public class EtatChauffeurConverter extends AbstractConverter<EtatChauffeur, EtatChauffeurDto, EtatChauffeurHistory> {



    public  EtatChauffeurConverter(){
        super(EtatChauffeur.class, EtatChauffeurDto.class, EtatChauffeurHistory.class);
    }

    @Override
    public EtatChauffeur toItem(EtatChauffeurDto dto) {
        if (dto == null) {
            return null;
        } else {
        EtatChauffeur item = new EtatChauffeur();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());


        return item;
        }
    }

    @Override
    public EtatChauffeurDto toDto(EtatChauffeur item) {
        if (item == null) {
            return null;
        } else {
    EtatChauffeurDto dto = new EtatChauffeurDto();
        if(StringUtil.isNotEmpty(item.getId()))
             dto.setId(item.getId());
        if(StringUtil.isNotEmpty(item.getLibelle()))
             dto.setLibelle(item.getLibelle());
        if(StringUtil.isNotEmpty(item.getCode()))
             dto.setCode(item.getCode());
        return dto;
        }
    }




}

package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.MarqueVoitureHistory;
import ma.zsmart.taxi.bean.core.MarqueVoiture;
import ma.zsmart.taxi.ws.dto.MarqueVoitureDto;

@Component
public class MarqueVoitureConverter extends AbstractConverter<MarqueVoiture, MarqueVoitureDto, MarqueVoitureHistory> {



    public  MarqueVoitureConverter(){
        super(MarqueVoiture.class, MarqueVoitureDto.class, MarqueVoitureHistory.class);
    }

    @Override
    public MarqueVoiture toItem(MarqueVoitureDto dto) {
        if (dto == null) {
            return null;
        } else {
        MarqueVoiture item = new MarqueVoiture();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(dto.getActif() != null)
                item.setActif(dto.getActif());


        return item;
        }
    }

    @Override
    public MarqueVoitureDto toDto(MarqueVoiture item) {
        if (item == null) {
            return null;
        } else {
    MarqueVoitureDto dto = new MarqueVoitureDto();
        if(StringUtil.isNotEmpty(item.getId()))
             dto.setId(item.getId());
        if(StringUtil.isNotEmpty(item.getLibelle()))
             dto.setLibelle(item.getLibelle());
        if(StringUtil.isNotEmpty(item.getCode()))
             dto.setCode(item.getCode());
            dto.setActif(item.getActif());
        return dto;
        }
    }




}

package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.MarqueTelephoneHistory;
import ma.zsmart.taxi.bean.core.MarqueTelephone;
import ma.zsmart.taxi.ws.dto.MarqueTelephoneDto;

@Component
public class MarqueTelephoneConverter extends AbstractConverter<MarqueTelephone, MarqueTelephoneDto, MarqueTelephoneHistory> {



    public  MarqueTelephoneConverter(){
        super(MarqueTelephone.class, MarqueTelephoneDto.class, MarqueTelephoneHistory.class);
    }

    @Override
    public MarqueTelephone toItem(MarqueTelephoneDto dto) {
        if (dto == null) {
            return null;
        } else {
        MarqueTelephone item = new MarqueTelephone();
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
    public MarqueTelephoneDto toDto(MarqueTelephone item) {
        if (item == null) {
            return null;
        } else {
    MarqueTelephoneDto dto = new MarqueTelephoneDto();
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

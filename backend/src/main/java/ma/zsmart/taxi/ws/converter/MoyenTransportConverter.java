package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.MoyenTransportHistory;
import ma.zsmart.taxi.bean.core.MoyenTransport;
import ma.zsmart.taxi.ws.dto.MoyenTransportDto;

@Component
public class MoyenTransportConverter extends AbstractConverter<MoyenTransport, MoyenTransportDto, MoyenTransportHistory> {



    public  MoyenTransportConverter(){
        super(MoyenTransport.class, MoyenTransportDto.class, MoyenTransportHistory.class);
    }

    @Override
    public MoyenTransport toItem(MoyenTransportDto dto) {
        if (dto == null) {
            return null;
        } else {
        MoyenTransport item = new MoyenTransport();
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
    public MoyenTransportDto toDto(MoyenTransport item) {
        if (item == null) {
            return null;
        } else {
    MoyenTransportDto dto = new MoyenTransportDto();
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

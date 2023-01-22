package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.BlackListClientHistory;
import ma.zsmart.taxi.bean.core.BlackListClient;
import ma.zsmart.taxi.ws.dto.BlackListClientDto;

@Component
public class BlackListClientConverter extends AbstractConverter<BlackListClient, BlackListClientDto, BlackListClientHistory> {



    public  BlackListClientConverter(){
        super(BlackListClient.class, BlackListClientDto.class, BlackListClientHistory.class);
    }

    @Override
    public BlackListClient toItem(BlackListClientDto dto) {
        if (dto == null) {
            return null;
        } else {
        BlackListClient item = new BlackListClient();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getChauffeur()))
                item.setChauffeur(dto.getChauffeur());
            if(StringUtil.isNotEmpty(dto.getClient()))
                item.setClient(dto.getClient());
            if(StringUtil.isNotEmpty(dto.getDateBlackList()))
                item.setDateBlackList(DateUtil.stringEnToDate(dto.getDateBlackList()));
            if(StringUtil.isNotEmpty(dto.getCommentaire()))
                item.setCommentaire(dto.getCommentaire());


        return item;
        }
    }

    @Override
    public BlackListClientDto toDto(BlackListClient item) {
        if (item == null) {
            return null;
        } else {
    BlackListClientDto dto = new BlackListClientDto();
        if(StringUtil.isNotEmpty(item.getId()))
             dto.setId(item.getId());
        if(StringUtil.isNotEmpty(item.getChauffeur()))
             dto.setChauffeur(item.getChauffeur());
        if(StringUtil.isNotEmpty(item.getClient()))
             dto.setClient(item.getClient());
        if(item.getDateBlackList()!=null)
             dto.setDateBlackList(DateUtil.dateTimeToString(item.getDateBlackList()));
        if(StringUtil.isNotEmpty(item.getCommentaire()))
             dto.setCommentaire(item.getCommentaire());
        return dto;
        }
    }




}

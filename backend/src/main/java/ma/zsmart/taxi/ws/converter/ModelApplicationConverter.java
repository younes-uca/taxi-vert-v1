package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.ModelApplicationHistory;
import ma.zsmart.taxi.bean.core.ModelApplication;
import ma.zsmart.taxi.ws.dto.ModelApplicationDto;

@Component
public class ModelApplicationConverter extends AbstractConverter<ModelApplication, ModelApplicationDto, ModelApplicationHistory> {



    public  ModelApplicationConverter(){
        super(ModelApplication.class, ModelApplicationDto.class, ModelApplicationHistory.class);
    }

    @Override
    public ModelApplication toItem(ModelApplicationDto dto) {
        if (dto == null) {
            return null;
        } else {
        ModelApplication item = new ModelApplication();
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
    public ModelApplicationDto toDto(ModelApplication item) {
        if (item == null) {
            return null;
        } else {
    ModelApplicationDto dto = new ModelApplicationDto();
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

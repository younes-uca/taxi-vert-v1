package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.EtatCourseHistory;
import ma.zsmart.taxi.bean.core.EtatCourse;
import ma.zsmart.taxi.ws.dto.EtatCourseDto;

@Component
public class EtatCourseConverter extends AbstractConverter<EtatCourse, EtatCourseDto, EtatCourseHistory> {



    public  EtatCourseConverter(){
        super(EtatCourse.class, EtatCourseDto.class, EtatCourseHistory.class);
    }

    @Override
    public EtatCourse toItem(EtatCourseDto dto) {
        if (dto == null) {
            return null;
        } else {
        EtatCourse item = new EtatCourse();
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
    public EtatCourseDto toDto(EtatCourse item) {
        if (item == null) {
            return null;
        } else {
    EtatCourseDto dto = new EtatCourseDto();
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

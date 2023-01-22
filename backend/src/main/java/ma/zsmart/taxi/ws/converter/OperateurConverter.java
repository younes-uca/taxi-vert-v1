package ma.zsmart.taxi.ws.converter;

import ma.zsmart.taxi.bean.core.Operateur;
import ma.zsmart.taxi.bean.history.OperateurHistory;
import ma.zsmart.taxi.ws.dto.OperateurDto;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.StringUtil;
import org.springframework.stereotype.Component;

@Component
public class OperateurConverter extends AbstractConverter<Operateur, OperateurDto, OperateurHistory> {


    public OperateurConverter() {
        super(Operateur.class, OperateurDto.class, OperateurHistory.class);
    }

    @Override
    public Operateur toItem(OperateurDto dto) {
        if (dto == null) {
            return null;
        } else {
            Operateur item = new Operateur();
            if (StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if (StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            item.setEnabled(dto.getEnabled());
            item.setAccountNonExpired(dto.getAccountNonExpired());
            item.setAccountNonLocked(dto.getAccountNonLocked());
            item.setPasswordChanged(dto.getPasswordChanged());
            if (StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if (StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());
            if (StringUtil.isNotEmpty(dto.getPrenom()))
                item.setPrenom(dto.getPrenom());
            if (StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());


            return item;
        }
    }

    @Override
    public OperateurDto toDto(Operateur item) {
        if (item == null) {
            return null;
        } else {
            OperateurDto dto = new OperateurDto();
            if (StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if (StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
            dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
            dto.setEnabled(item.getEnabled());
            dto.setAccountNonExpired(item.getAccountNonExpired());
            dto.setAccountNonLocked(item.getAccountNonLocked());
            dto.setPasswordChanged(item.getPasswordChanged());

            if (StringUtil.isNotEmpty(item.getUsername()))
                dto.setUsername(item.getUsername());
            if (StringUtil.isNotEmpty(item.getPassword()))
                dto.setPassword(item.getPassword());
            if (StringUtil.isNotEmpty(item.getPrenom()))
                dto.setPrenom(item.getPrenom());
            if (StringUtil.isNotEmpty(item.getNom()))
                dto.setNom(item.getNom());
            return dto;
        }
    }


}

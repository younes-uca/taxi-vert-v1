package  ma.zsmart.taxi.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zsmart.taxi.zynerator.util.StringUtil;
import ma.zsmart.taxi.zynerator.converter.AbstractConverter;
import ma.zsmart.taxi.zynerator.util.DateUtil;
import ma.zsmart.taxi.bean.history.ClientHistory;
import ma.zsmart.taxi.bean.core.Client;
import ma.zsmart.taxi.ws.dto.ClientDto;

@Component
public class ClientConverter extends AbstractConverter<Client, ClientDto, ClientHistory> {

    @Autowired
    private LangueConverter langueConverter ;
    @Autowired
    private ThemeConverter themeConverter ;

    private boolean langue;
    private boolean theme;

    public  ClientConverter(){
        super(Client.class, ClientDto.class, ClientHistory.class);
    }

    @Override
    public Client toItem(ClientDto dto) {
        if (dto == null) {
            return null;
        } else {
        Client item = new Client();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            item.setEnabled(dto.getEnabled());
            item.setAccountNonExpired(dto.getAccountNonExpired());
            item.setAccountNonLocked(dto.getAccountNonLocked());
            item.setPasswordChanged(dto.getPasswordChanged());
            if(StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if(StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());
            if(StringUtil.isNotEmpty(dto.getPrenom()))
                item.setPrenom(dto.getPrenom());
            if(StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());
            if(this.langue && dto.getLangue()!=null)
                item.setLangue(langueConverter.toItem(dto.getLangue())) ;
            if(this.theme && dto.getTheme()!=null)
                item.setTheme(themeConverter.toItem(dto.getTheme())) ;


        return item;
        }
    }

    @Override
    public ClientDto toDto(Client item) {
        if (item == null) {
            return null;
        } else {
    ClientDto dto = new ClientDto();
        if(StringUtil.isNotEmpty(item.getId()))
             dto.setId(item.getId());
        if(StringUtil.isNotEmpty(item.getDescription()))
             dto.setDescription(item.getDescription());
             dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
             dto.setEnabled(item.getEnabled());
             dto.setAccountNonExpired(item.getAccountNonExpired());
             dto.setAccountNonLocked(item.getAccountNonLocked());
             dto.setPasswordChanged(item.getPasswordChanged());

        if(StringUtil.isNotEmpty(item.getUsername()))
             dto.setUsername(item.getUsername());
        if(StringUtil.isNotEmpty(item.getPassword()))
             dto.setPassword(item.getPassword());
        if(StringUtil.isNotEmpty(item.getPrenom()))
             dto.setPrenom(item.getPrenom());
        if(StringUtil.isNotEmpty(item.getNom()))
             dto.setNom(item.getNom());
        if(this.langue && item.getLangue()!=null) {
            dto.setLangueDto(langueConverter.toDto(item.getLangue())) ;
        }
        if(this.theme && item.getTheme()!=null) {
            dto.setThemeDto(themeConverter.toDto(item.getTheme())) ;
        }
        return dto;
        }
    }



    public LangueConverter getLangueConverter(){
        return this.langueConverter;
    }
    public void setLangueConverter(LangueConverter langueConverter ){
        this.langueConverter = langueConverter;
    }
    public ThemeConverter getThemeConverter(){
        return this.themeConverter;
    }
    public void setThemeConverter(ThemeConverter themeConverter ){
        this.themeConverter = themeConverter;
    }

    public boolean  isLangue(){
        return this.langue;
    }
    public void  setLangue(boolean langue){
        this.langue = langue;
    }
    public boolean  isTheme(){
        return this.theme;
    }
    public void  setTheme(boolean theme){
        this.theme = theme;
    }
}

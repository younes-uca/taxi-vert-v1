package ma.zsmart.taxi.security.config;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import ma.zsmart.taxi.security.jwt.JWTAuthenticationFilter;
import ma.zsmart.taxi.security.jwt.JWTAuthorizationFiler;
import  ma.zsmart.taxi.security.common.AuthoritiesConstants;
import  ma.zsmart.taxi.security.service.facade.UserService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
prePostEnabled = true,
securedEnabled = true,
jsr250Enabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.authorizeRequests().antMatchers("/login").permitAll();
        http.authorizeRequests().antMatchers("/actuator/health").permitAll();
        http.authorizeRequests().antMatchers("/actuator/info").permitAll();

            http.authorizeRequests().antMatchers("/api/admin/login").permitAll();
            http.authorizeRequests().antMatchers("/api/chauffeur/login").permitAll();
            http.authorizeRequests().antMatchers("/api/operateur/login").permitAll();
            http.authorizeRequests().antMatchers("/api/client/login").permitAll();

            http.authorizeRequests().antMatchers("/api/admin/").permitAll();//hasAnyAuthority(AuthoritiesConstants.ADMIN);
            http.authorizeRequests().antMatchers("/api/chauffeur/").permitAll();//hasAnyAuthority(AuthoritiesConstants.CHAUFFEUR);
            http.authorizeRequests().antMatchers("/api/operateur/").permitAll();//hasAnyAuthority(AuthoritiesConstants.OPERATEUR);
            http.authorizeRequests().antMatchers("/api/client/").permitAll();//hasAnyAuthority(AuthoritiesConstants.CLIENT);

        // http.authorizeRequests().anyRequest().authenticated();

        /* http.authorizeRequests().anyRequest()
        .authenticated()
        .and()
        .httpBasic();*/

        // http.formLogin();
        // http.authorizeRequests().anyRequest().permitAll();
        http.addFilter(new JWTAuthenticationFilter(authenticationManager()));
        http.addFilterBefore(new JWTAuthorizationFiler(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

}

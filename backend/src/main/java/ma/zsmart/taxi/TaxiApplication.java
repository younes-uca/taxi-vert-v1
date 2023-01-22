package  ma.zsmart.taxi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import java.util.*;
import java.util.stream.Stream;

import ma.zsmart.taxi.security.common.AuthoritiesConstants;
import ma.zsmart.taxi.security.bean.User;
import ma.zsmart.taxi.security.bean.Permission;
import ma.zsmart.taxi.security.bean.Role;
import ma.zsmart.taxi.security.service.facade.UserService;
import ma.zsmart.taxi.security.service.facade.RoleService;


@SpringBootApplication
public class TaxiApplication {
public static ConfigurableApplicationContext ctx;

public static void main(String[] args) {
ctx=SpringApplication.run(TaxiApplication.class, args);
}

public static ConfigurableApplicationContext getCtx() {
return ctx;
}

@Bean
public CommandLineRunner demo(UserService userService, RoleService roleService
) {
return (args) -> {
if(true){
    Map<String,String> etats=new HashMap<>();
    etats.put("Initialisé","initialise");
    etats.put("En cours","encours");
    etats.put("Terminé","termine");


    // Role admin

    User userForAdmin = new User("admin");

    Role roleForAdmin = new Role();
    roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
    List<Permission> permissionsForAdmin = new ArrayList<>();
    addPermissionForAdmin(permissionsForAdmin);
    roleForAdmin.setPermissions(permissionsForAdmin);
    if(userForAdmin.getRoles()==null)
    userForAdmin.setRoles(new ArrayList<>());

    userForAdmin.getRoles().add(roleForAdmin);
    userService.save(userForAdmin);


    // Role chauffeur

    User userForChauffeur = new User("chauffeur");

    Role roleForChauffeur = new Role();
    roleForChauffeur.setAuthority(AuthoritiesConstants.CHAUFFEUR);
    List<Permission> permissionsForChauffeur = new ArrayList<>();
    addPermissionForChauffeur(permissionsForChauffeur);
    roleForChauffeur.setPermissions(permissionsForChauffeur);
    if(userForChauffeur.getRoles()==null)
    userForChauffeur.setRoles(new ArrayList<>());

    userForChauffeur.getRoles().add(roleForChauffeur);
    userService.save(userForChauffeur);


    // Role operateur

    User userForOperateur = new User("operateur");

    Role roleForOperateur = new Role();
    roleForOperateur.setAuthority(AuthoritiesConstants.OPERATEUR);
    List<Permission> permissionsForOperateur = new ArrayList<>();
    addPermissionForOperateur(permissionsForOperateur);
    roleForOperateur.setPermissions(permissionsForOperateur);
    if(userForOperateur.getRoles()==null)
    userForOperateur.setRoles(new ArrayList<>());

    userForOperateur.getRoles().add(roleForOperateur);
    userService.save(userForOperateur);


    // Role client

    User userForClient = new User("client");

    Role roleForClient = new Role();
    roleForClient.setAuthority(AuthoritiesConstants.CLIENT);
    List<Permission> permissionsForClient = new ArrayList<>();
    addPermissionForClient(permissionsForClient);
    roleForClient.setPermissions(permissionsForClient);
    if(userForClient.getRoles()==null)
    userForClient.setRoles(new ArrayList<>());

    userForClient.getRoles().add(roleForClient);
    userService.save(userForClient);
    }
        };
        }

        private static void addPermissionForAdmin(List
        <Permission> permissions){
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("Chauffeur.edit"));
                permissions.add(new Permission("Chauffeur.list"));
                permissions.add(new Permission("Chauffeur.view"));
                permissions.add(new Permission("Chauffeur.add"));
                permissions.add(new Permission("Chauffeur.delete"));
                permissions.add(new Permission("MoyenTransport.edit"));
                permissions.add(new Permission("MoyenTransport.list"));
                permissions.add(new Permission("MoyenTransport.view"));
                permissions.add(new Permission("MoyenTransport.add"));
                permissions.add(new Permission("MoyenTransport.delete"));
                permissions.add(new Permission("Langue.edit"));
                permissions.add(new Permission("Langue.list"));
                permissions.add(new Permission("Langue.view"));
                permissions.add(new Permission("Langue.add"));
                permissions.add(new Permission("Langue.delete"));
                permissions.add(new Permission("BlackListChauffeur.edit"));
                permissions.add(new Permission("BlackListChauffeur.list"));
                permissions.add(new Permission("BlackListChauffeur.view"));
                permissions.add(new Permission("BlackListChauffeur.add"));
                permissions.add(new Permission("BlackListChauffeur.delete"));
                permissions.add(new Permission("Client.edit"));
                permissions.add(new Permission("Client.list"));
                permissions.add(new Permission("Client.view"));
                permissions.add(new Permission("Client.add"));
                permissions.add(new Permission("Client.delete"));
                permissions.add(new Permission("MarqueTelephone.edit"));
                permissions.add(new Permission("MarqueTelephone.list"));
                permissions.add(new Permission("MarqueTelephone.view"));
                permissions.add(new Permission("MarqueTelephone.add"));
                permissions.add(new Permission("MarqueTelephone.delete"));
                permissions.add(new Permission("Secteur.edit"));
                permissions.add(new Permission("Secteur.list"));
                permissions.add(new Permission("Secteur.view"));
                permissions.add(new Permission("Secteur.add"));
                permissions.add(new Permission("Secteur.delete"));
                permissions.add(new Permission("ModelApplication.edit"));
                permissions.add(new Permission("ModelApplication.list"));
                permissions.add(new Permission("ModelApplication.view"));
                permissions.add(new Permission("ModelApplication.add"));
                permissions.add(new Permission("ModelApplication.delete"));
                permissions.add(new Permission("Operateur.edit"));
                permissions.add(new Permission("Operateur.list"));
                permissions.add(new Permission("Operateur.view"));
                permissions.add(new Permission("Operateur.add"));
                permissions.add(new Permission("Operateur.delete"));
                permissions.add(new Permission("Course.edit"));
                permissions.add(new Permission("Course.list"));
                permissions.add(new Permission("Course.view"));
                permissions.add(new Permission("Course.add"));
                permissions.add(new Permission("Course.delete"));
                permissions.add(new Permission("Theme.edit"));
                permissions.add(new Permission("Theme.list"));
                permissions.add(new Permission("Theme.view"));
                permissions.add(new Permission("Theme.add"));
                permissions.add(new Permission("Theme.delete"));
                permissions.add(new Permission("EtatChauffeur.edit"));
                permissions.add(new Permission("EtatChauffeur.list"));
                permissions.add(new Permission("EtatChauffeur.view"));
                permissions.add(new Permission("EtatChauffeur.add"));
                permissions.add(new Permission("EtatChauffeur.delete"));
                permissions.add(new Permission("BlackListClient.edit"));
                permissions.add(new Permission("BlackListClient.list"));
                permissions.add(new Permission("BlackListClient.view"));
                permissions.add(new Permission("BlackListClient.add"));
                permissions.add(new Permission("BlackListClient.delete"));
                permissions.add(new Permission("EtatCourse.edit"));
                permissions.add(new Permission("EtatCourse.list"));
                permissions.add(new Permission("EtatCourse.view"));
                permissions.add(new Permission("EtatCourse.add"));
                permissions.add(new Permission("EtatCourse.delete"));
                permissions.add(new Permission("MarqueVoiture.edit"));
                permissions.add(new Permission("MarqueVoiture.list"));
                permissions.add(new Permission("MarqueVoiture.view"));
                permissions.add(new Permission("MarqueVoiture.add"));
                permissions.add(new Permission("MarqueVoiture.delete"));
            }
        private static void addPermissionForChauffeur(List
        <Permission> permissions){
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("Chauffeur.edit"));
                permissions.add(new Permission("Chauffeur.list"));
                permissions.add(new Permission("Chauffeur.view"));
                permissions.add(new Permission("Chauffeur.add"));
                permissions.add(new Permission("Chauffeur.delete"));
                permissions.add(new Permission("MoyenTransport.edit"));
                permissions.add(new Permission("MoyenTransport.list"));
                permissions.add(new Permission("MoyenTransport.view"));
                permissions.add(new Permission("MoyenTransport.add"));
                permissions.add(new Permission("MoyenTransport.delete"));
                permissions.add(new Permission("Langue.edit"));
                permissions.add(new Permission("Langue.list"));
                permissions.add(new Permission("Langue.view"));
                permissions.add(new Permission("Langue.add"));
                permissions.add(new Permission("Langue.delete"));
                permissions.add(new Permission("BlackListChauffeur.edit"));
                permissions.add(new Permission("BlackListChauffeur.list"));
                permissions.add(new Permission("BlackListChauffeur.view"));
                permissions.add(new Permission("BlackListChauffeur.add"));
                permissions.add(new Permission("BlackListChauffeur.delete"));
                permissions.add(new Permission("Client.edit"));
                permissions.add(new Permission("Client.list"));
                permissions.add(new Permission("Client.view"));
                permissions.add(new Permission("Client.add"));
                permissions.add(new Permission("Client.delete"));
                permissions.add(new Permission("MarqueTelephone.edit"));
                permissions.add(new Permission("MarqueTelephone.list"));
                permissions.add(new Permission("MarqueTelephone.view"));
                permissions.add(new Permission("MarqueTelephone.add"));
                permissions.add(new Permission("MarqueTelephone.delete"));
                permissions.add(new Permission("Secteur.edit"));
                permissions.add(new Permission("Secteur.list"));
                permissions.add(new Permission("Secteur.view"));
                permissions.add(new Permission("Secteur.add"));
                permissions.add(new Permission("Secteur.delete"));
                permissions.add(new Permission("ModelApplication.edit"));
                permissions.add(new Permission("ModelApplication.list"));
                permissions.add(new Permission("ModelApplication.view"));
                permissions.add(new Permission("ModelApplication.add"));
                permissions.add(new Permission("ModelApplication.delete"));
                permissions.add(new Permission("Operateur.edit"));
                permissions.add(new Permission("Operateur.list"));
                permissions.add(new Permission("Operateur.view"));
                permissions.add(new Permission("Operateur.add"));
                permissions.add(new Permission("Operateur.delete"));
                permissions.add(new Permission("Course.edit"));
                permissions.add(new Permission("Course.list"));
                permissions.add(new Permission("Course.view"));
                permissions.add(new Permission("Course.add"));
                permissions.add(new Permission("Course.delete"));
                permissions.add(new Permission("Theme.edit"));
                permissions.add(new Permission("Theme.list"));
                permissions.add(new Permission("Theme.view"));
                permissions.add(new Permission("Theme.add"));
                permissions.add(new Permission("Theme.delete"));
                permissions.add(new Permission("EtatChauffeur.edit"));
                permissions.add(new Permission("EtatChauffeur.list"));
                permissions.add(new Permission("EtatChauffeur.view"));
                permissions.add(new Permission("EtatChauffeur.add"));
                permissions.add(new Permission("EtatChauffeur.delete"));
                permissions.add(new Permission("BlackListClient.edit"));
                permissions.add(new Permission("BlackListClient.list"));
                permissions.add(new Permission("BlackListClient.view"));
                permissions.add(new Permission("BlackListClient.add"));
                permissions.add(new Permission("BlackListClient.delete"));
                permissions.add(new Permission("EtatCourse.edit"));
                permissions.add(new Permission("EtatCourse.list"));
                permissions.add(new Permission("EtatCourse.view"));
                permissions.add(new Permission("EtatCourse.add"));
                permissions.add(new Permission("EtatCourse.delete"));
                permissions.add(new Permission("MarqueVoiture.edit"));
                permissions.add(new Permission("MarqueVoiture.list"));
                permissions.add(new Permission("MarqueVoiture.view"));
                permissions.add(new Permission("MarqueVoiture.add"));
                permissions.add(new Permission("MarqueVoiture.delete"));
            }
        private static void addPermissionForOperateur(List
        <Permission> permissions){
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("Chauffeur.edit"));
                permissions.add(new Permission("Chauffeur.list"));
                permissions.add(new Permission("Chauffeur.view"));
                permissions.add(new Permission("Chauffeur.add"));
                permissions.add(new Permission("Chauffeur.delete"));
                permissions.add(new Permission("MoyenTransport.edit"));
                permissions.add(new Permission("MoyenTransport.list"));
                permissions.add(new Permission("MoyenTransport.view"));
                permissions.add(new Permission("MoyenTransport.add"));
                permissions.add(new Permission("MoyenTransport.delete"));
                permissions.add(new Permission("Langue.edit"));
                permissions.add(new Permission("Langue.list"));
                permissions.add(new Permission("Langue.view"));
                permissions.add(new Permission("Langue.add"));
                permissions.add(new Permission("Langue.delete"));
                permissions.add(new Permission("BlackListChauffeur.edit"));
                permissions.add(new Permission("BlackListChauffeur.list"));
                permissions.add(new Permission("BlackListChauffeur.view"));
                permissions.add(new Permission("BlackListChauffeur.add"));
                permissions.add(new Permission("BlackListChauffeur.delete"));
                permissions.add(new Permission("Client.edit"));
                permissions.add(new Permission("Client.list"));
                permissions.add(new Permission("Client.view"));
                permissions.add(new Permission("Client.add"));
                permissions.add(new Permission("Client.delete"));
                permissions.add(new Permission("MarqueTelephone.edit"));
                permissions.add(new Permission("MarqueTelephone.list"));
                permissions.add(new Permission("MarqueTelephone.view"));
                permissions.add(new Permission("MarqueTelephone.add"));
                permissions.add(new Permission("MarqueTelephone.delete"));
                permissions.add(new Permission("Secteur.edit"));
                permissions.add(new Permission("Secteur.list"));
                permissions.add(new Permission("Secteur.view"));
                permissions.add(new Permission("Secteur.add"));
                permissions.add(new Permission("Secteur.delete"));
                permissions.add(new Permission("ModelApplication.edit"));
                permissions.add(new Permission("ModelApplication.list"));
                permissions.add(new Permission("ModelApplication.view"));
                permissions.add(new Permission("ModelApplication.add"));
                permissions.add(new Permission("ModelApplication.delete"));
                permissions.add(new Permission("Operateur.edit"));
                permissions.add(new Permission("Operateur.list"));
                permissions.add(new Permission("Operateur.view"));
                permissions.add(new Permission("Operateur.add"));
                permissions.add(new Permission("Operateur.delete"));
                permissions.add(new Permission("Course.edit"));
                permissions.add(new Permission("Course.list"));
                permissions.add(new Permission("Course.view"));
                permissions.add(new Permission("Course.add"));
                permissions.add(new Permission("Course.delete"));
                permissions.add(new Permission("Theme.edit"));
                permissions.add(new Permission("Theme.list"));
                permissions.add(new Permission("Theme.view"));
                permissions.add(new Permission("Theme.add"));
                permissions.add(new Permission("Theme.delete"));
                permissions.add(new Permission("EtatChauffeur.edit"));
                permissions.add(new Permission("EtatChauffeur.list"));
                permissions.add(new Permission("EtatChauffeur.view"));
                permissions.add(new Permission("EtatChauffeur.add"));
                permissions.add(new Permission("EtatChauffeur.delete"));
                permissions.add(new Permission("BlackListClient.edit"));
                permissions.add(new Permission("BlackListClient.list"));
                permissions.add(new Permission("BlackListClient.view"));
                permissions.add(new Permission("BlackListClient.add"));
                permissions.add(new Permission("BlackListClient.delete"));
                permissions.add(new Permission("EtatCourse.edit"));
                permissions.add(new Permission("EtatCourse.list"));
                permissions.add(new Permission("EtatCourse.view"));
                permissions.add(new Permission("EtatCourse.add"));
                permissions.add(new Permission("EtatCourse.delete"));
                permissions.add(new Permission("MarqueVoiture.edit"));
                permissions.add(new Permission("MarqueVoiture.list"));
                permissions.add(new Permission("MarqueVoiture.view"));
                permissions.add(new Permission("MarqueVoiture.add"));
                permissions.add(new Permission("MarqueVoiture.delete"));
            }
        private static void addPermissionForClient(List
        <Permission> permissions){
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("Chauffeur.edit"));
                permissions.add(new Permission("Chauffeur.list"));
                permissions.add(new Permission("Chauffeur.view"));
                permissions.add(new Permission("Chauffeur.add"));
                permissions.add(new Permission("Chauffeur.delete"));
                permissions.add(new Permission("MoyenTransport.edit"));
                permissions.add(new Permission("MoyenTransport.list"));
                permissions.add(new Permission("MoyenTransport.view"));
                permissions.add(new Permission("MoyenTransport.add"));
                permissions.add(new Permission("MoyenTransport.delete"));
                permissions.add(new Permission("Langue.edit"));
                permissions.add(new Permission("Langue.list"));
                permissions.add(new Permission("Langue.view"));
                permissions.add(new Permission("Langue.add"));
                permissions.add(new Permission("Langue.delete"));
                permissions.add(new Permission("BlackListChauffeur.edit"));
                permissions.add(new Permission("BlackListChauffeur.list"));
                permissions.add(new Permission("BlackListChauffeur.view"));
                permissions.add(new Permission("BlackListChauffeur.add"));
                permissions.add(new Permission("BlackListChauffeur.delete"));
                permissions.add(new Permission("Client.edit"));
                permissions.add(new Permission("Client.list"));
                permissions.add(new Permission("Client.view"));
                permissions.add(new Permission("Client.add"));
                permissions.add(new Permission("Client.delete"));
                permissions.add(new Permission("MarqueTelephone.edit"));
                permissions.add(new Permission("MarqueTelephone.list"));
                permissions.add(new Permission("MarqueTelephone.view"));
                permissions.add(new Permission("MarqueTelephone.add"));
                permissions.add(new Permission("MarqueTelephone.delete"));
                permissions.add(new Permission("Secteur.edit"));
                permissions.add(new Permission("Secteur.list"));
                permissions.add(new Permission("Secteur.view"));
                permissions.add(new Permission("Secteur.add"));
                permissions.add(new Permission("Secteur.delete"));
                permissions.add(new Permission("ModelApplication.edit"));
                permissions.add(new Permission("ModelApplication.list"));
                permissions.add(new Permission("ModelApplication.view"));
                permissions.add(new Permission("ModelApplication.add"));
                permissions.add(new Permission("ModelApplication.delete"));
                permissions.add(new Permission("Operateur.edit"));
                permissions.add(new Permission("Operateur.list"));
                permissions.add(new Permission("Operateur.view"));
                permissions.add(new Permission("Operateur.add"));
                permissions.add(new Permission("Operateur.delete"));
                permissions.add(new Permission("Course.edit"));
                permissions.add(new Permission("Course.list"));
                permissions.add(new Permission("Course.view"));
                permissions.add(new Permission("Course.add"));
                permissions.add(new Permission("Course.delete"));
                permissions.add(new Permission("Theme.edit"));
                permissions.add(new Permission("Theme.list"));
                permissions.add(new Permission("Theme.view"));
                permissions.add(new Permission("Theme.add"));
                permissions.add(new Permission("Theme.delete"));
                permissions.add(new Permission("EtatChauffeur.edit"));
                permissions.add(new Permission("EtatChauffeur.list"));
                permissions.add(new Permission("EtatChauffeur.view"));
                permissions.add(new Permission("EtatChauffeur.add"));
                permissions.add(new Permission("EtatChauffeur.delete"));
                permissions.add(new Permission("BlackListClient.edit"));
                permissions.add(new Permission("BlackListClient.list"));
                permissions.add(new Permission("BlackListClient.view"));
                permissions.add(new Permission("BlackListClient.add"));
                permissions.add(new Permission("BlackListClient.delete"));
                permissions.add(new Permission("EtatCourse.edit"));
                permissions.add(new Permission("EtatCourse.list"));
                permissions.add(new Permission("EtatCourse.view"));
                permissions.add(new Permission("EtatCourse.add"));
                permissions.add(new Permission("EtatCourse.delete"));
                permissions.add(new Permission("MarqueVoiture.edit"));
                permissions.add(new Permission("MarqueVoiture.list"));
                permissions.add(new Permission("MarqueVoiture.view"));
                permissions.add(new Permission("MarqueVoiture.add"));
                permissions.add(new Permission("MarqueVoiture.delete"));
            }


            }



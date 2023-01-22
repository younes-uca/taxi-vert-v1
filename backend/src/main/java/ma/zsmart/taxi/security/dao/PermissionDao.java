package ma.zsmart.taxi.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ma.zsmart.taxi.security.bean.Permission;

public interface PermissionDao extends JpaRepository<Permission, Long> {
    public Permission findByName(String name);
}

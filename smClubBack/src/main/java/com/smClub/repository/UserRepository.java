
package com.smClub.repository;

import com.smClub.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserInfoEntity, String> {
}

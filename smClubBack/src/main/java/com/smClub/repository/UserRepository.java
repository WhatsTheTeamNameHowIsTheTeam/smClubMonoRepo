
package com.smClub.repository;

import com.smClub.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserInfoEntity, String> {

    UserInfoEntity findByClientUserId(String clientUserId);
}

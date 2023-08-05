
package com.smClub.repository;

import com.smClub.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//jpa는 자동으로 구현체 bean을 만들어준다.
@Repository
public interface MainRepository extends JpaRepository<UserInfoEntity,Long>, MainRepositoryCustom{

}

package com.smClub.repository;

import com.smClub.entity.ClubMemberEntity;
import com.smClub.entity.Id.ClubMemberEntityId;
import com.smClub.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClubMemberRepository extends JpaRepository<ClubMemberEntity, ClubMemberEntityId> {
    List<ClubMemberEntity> findAllByUserInfoEntity(UserInfoEntity userInfoEntity);
}

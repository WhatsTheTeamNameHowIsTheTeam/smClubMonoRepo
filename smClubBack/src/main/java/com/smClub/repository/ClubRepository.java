
package com.smClub.repository;

import com.smClub.entity.ClubEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClubRepository extends JpaRepository<ClubEntity, String> {
    ClubEntity findByClubId(String clubId);

    // 모든 카테고리 조회 알고리즘
    List<ClubEntity> findAll();
    //카테고리 조회 알고리즘 : 해당 매게변수가 있다면 그 컬럼만 가져온다.
    List<ClubEntity> findAllByCategory(String category);



}

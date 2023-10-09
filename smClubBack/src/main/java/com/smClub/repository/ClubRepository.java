
package com.smClub.repository;

import com.smClub.entity.ClubEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<ClubEntity, String> {
    ClubEntity findByClubId(String clubId);

    // 모든 카테고리 조회 알고리즘
    List<ClubEntity> findAll();
    //카테고리 조회 알고리즘 : 해당 매게변수가 있다면 그 컬럼만 가져온다.
    List<ClubEntity> findAllByCategory(String category);

    @Query(value = "SELECT * FROM club WHERE CONCAT_WS(' ', NM, INTRCN_CN ) LIKE %:keyword%", nativeQuery = true)
    List<ClubEntity> findByColumnNameContaining(@Param("keyword") String keyword);

}

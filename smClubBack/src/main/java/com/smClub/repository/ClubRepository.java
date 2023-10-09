
package com.smClub.repository;

import com.smClub.entity.ClubEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<ClubEntity, String> {
    ClubEntity findByClubId(String clubId);
    ClubEntity save(ClubEntity clubEntity);
}

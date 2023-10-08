package com.smClub.repository;

import com.smClub.entity.ActDiaryEntity;
import com.smClub.entity.ClubEntity;
import com.smClub.entity.Id.ActDiaryEntityId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ActDiaryRepository extends JpaRepository<ActDiaryEntity, ActDiaryEntityId> {

    List<ActDiaryEntity> findAllByClubEntity(ClubEntity clubEntity);
}

package com.smClub.repository;

import com.smClub.entity.ActDiaryEntity;
import com.smClub.entity.Id.ActDiaryEntityId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActDiaryRepository extends JpaRepository<ActDiaryEntity, ActDiaryEntityId> {
}

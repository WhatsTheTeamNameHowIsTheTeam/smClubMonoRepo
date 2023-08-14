package com.smClub.repository;

import com.smClub.entity.Id.QuestionEntityId;
import com.smClub.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<QuestionEntity, QuestionEntityId> {
}

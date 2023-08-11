package com.smClub.repository;

import com.smClub.entity.Id.RecruitmentBoardEntityId;
import com.smClub.entity.RecruitmentBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecruitmentBoardRepository extends JpaRepository<RecruitmentBoardEntity, RecruitmentBoardEntityId> {
}

package com.smClub.repository;

import com.smClub.entity.ClubMemberEntity;
import com.smClub.entity.Id.ClubMemberEntityId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubMemberRepository extends JpaRepository<ClubMemberEntity, ClubMemberEntityId> {
}

package com.smClub.repository;

import com.smClub.entity.Id.NoticeEntityId;
import com.smClub.entity.NoticeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<NoticeEntity, NoticeEntityId> {
}

package com.smClub.repository;

import com.smClub.entity.ApplicationEntity;
import com.smClub.entity.Id.ApplicationEntityId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<ApplicationEntity, ApplicationEntityId> {
}

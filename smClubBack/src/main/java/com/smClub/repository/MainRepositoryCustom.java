package com.smClub.repository;

import com.smClub.entity.UserInfoEntity;

import java.util.List;

public interface MainRepositoryCustom {
    List<UserInfoEntity> findAllByStudentId();
}

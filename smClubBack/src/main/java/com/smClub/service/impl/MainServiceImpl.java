
package com.smClub.service.impl;

import com.smClub.dto.UserInfo;
import com.smClub.entity.UserInfoEntity;
import com.smClub.repository.MainRepository;
import com.smClub.service.MainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainServiceImpl implements MainService {


    @Autowired
    private MainRepository mainRepository;
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public Object setNewUser(UserInfo studentObj) {
        System.out.println("MainService 도착");
        System.out.println("서비스)받은 데이터는"+studentObj);


        mainRepository.save(UserInfoEntity.toEntity(studentObj));
        return null;
    }


}

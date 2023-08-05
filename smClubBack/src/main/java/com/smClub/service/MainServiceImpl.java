
package com.smClub.service;

import com.smClub.repository.MainRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MainServiceImpl implements MainService {

    @Autowired
    private MainRepository mainRepository;
//
//    public UserInfo getUserInfo(Long studentId){
//
//        return mainRepository.findById(studentId).orElseThrow(() ->
//            new RestException(HttpStatus.NOT_FOUND, " not found board"));
//    }

    @Override
    public void setUserInfo(String studentId) {
//        mainRepository.save(studentId);

    }


}

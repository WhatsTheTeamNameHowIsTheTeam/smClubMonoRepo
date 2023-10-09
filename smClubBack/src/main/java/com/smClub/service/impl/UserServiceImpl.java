
package com.smClub.service.impl;

import com.smClub.dto.req.UserRequestDto;
import com.smClub.dto.res.UserResponseDto;
import com.smClub.entity.UserInfoEntity;
import com.smClub.exception.UserNotFoundException;
import com.smClub.repository.UserRepository;
import com.smClub.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserResponseDto.Info> getUsers() {
        List<UserResponseDto.Info> userResponseDtoList = new ArrayList<>();
        List<UserInfoEntity> userInfoEntityList = userRepository.findAll();
        if(userInfoEntityList.size() > 0){
            for(UserInfoEntity userInfoEntity : userInfoEntityList){
                userResponseDtoList.add(
                    UserResponseDto.Info.builder()
                                .clientUserId(userInfoEntity.getClientUserId())
                                .userName(userInfoEntity.getUserName())
                                .major(userInfoEntity.getMajor())
                                .studentId(userInfoEntity.getStudentId())
                                .build()
                );
            }
        } else {
            return null;
        }
        return userResponseDtoList;
    }

    @Override
    public UserResponseDto.Info getUser(String clientUserId) {
        UserResponseDto.Info userInfoResponseDto = null;
        try{
            UserInfoEntity userInfoEntity = userRepository.findByClientUserId(clientUserId);
            userInfoResponseDto = userInfoResponseDto.builder()
                    .clientUserId(userInfoEntity.getClientUserId())
                    .userName(userInfoEntity.getUserName())
                    .img(userInfoEntity.getImg())
                    .major(userInfoEntity.getMajor())
                    .studentId(userInfoEntity.getStudentId())
                    .grade(userInfoEntity.getGrade())
                    .phoneNumber(userInfoEntity.getPhoneNumber())
                    .email(userInfoEntity.getEmail())
                    .notification(userInfoEntity.getNotification())
                    .build();
        } catch (UserNotFoundException e){
            log.error("[getUser] : 존재하지 않는 clientUserId 입니다.");
            return null;
        }
        return userInfoResponseDto;
    }

    @Override
    public UserResponseDto.Info updateUser(String clientUserId, UserRequestDto.Info userInfoRequestDto) {
        UserInfoEntity userInfoEntity = userRepository.findByClientUserId(clientUserId);
        userInfoEntity.setImg(userInfoRequestDto.getImg());
        userInfoEntity.setPhoneNumber(userInfoRequestDto.getPhoneNumber());
        userInfoEntity.setEmail(userInfoRequestDto.getEmail());
        userInfoEntity.setNotification(userInfoRequestDto.getNotification());

        UserInfoEntity updateUserInfoEntity = userRepository.save(userInfoEntity);
        return UserResponseDto.Info.builder()
                .clientUserId(updateUserInfoEntity.getClientUserId())
                .userName(updateUserInfoEntity.getUserName())
                .img(updateUserInfoEntity.getImg())
                .major(updateUserInfoEntity.getMajor())
                .studentId(updateUserInfoEntity.getStudentId())
                .grade(updateUserInfoEntity.getGrade())
                .phoneNumber(updateUserInfoEntity.getPhoneNumber())
                .email(updateUserInfoEntity.getEmail())
                .notification(updateUserInfoEntity.getNotification())
                .build();
    }

    @Override
    public void deleteUser(String clientUserId) {
        try{
            userRepository.delete(userRepository.findByClientUserId(clientUserId));
            log.info("[deleteUser] : {} 성공적으로 삭제되었습니다.", clientUserId);
        } catch (UserNotFoundException e){
            log.error("[deleteUser] : 존재아지 않는 clientUserId 입니다.");
        }
    }
}

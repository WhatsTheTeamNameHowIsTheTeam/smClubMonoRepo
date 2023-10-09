
package com.smClub.service;

import com.smClub.dto.req.UserRequestDto;
import com.smClub.dto.res.UserResponseDto;

import java.util.List;

public interface UserService {
    List<UserResponseDto.Info> getUsers();
    UserResponseDto.Info getUser(String clientUserId);
    UserResponseDto.Info updateUser(String clientUserId, UserRequestDto.Info userInfoRequestDto);
    void deleteUser(String clientUserId);
}

package com.smClub.controller.users;

import com.smClub.dto.req.UserRequestDto;
import com.smClub.dto.res.UserResponseDto;
import com.smClub.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

//    // 로그인 OAuth대체
//    @PostMapping("/login")
//    public void login(){
//
//    }
//

//    // 회원가입
//    @PostMapping("/sign-up")
//    public void signUp(){
//
//    }

    // 동아리 생성할 때 모든 유저 정보 가져오기
    @GetMapping
    public List<UserResponseDto.Info> getUsers(){
        return userService.getUsers();
    }

    // 마이페이지
    @GetMapping("/{clientUserId}")
    public UserResponseDto.Info getUser(@PathVariable String clientUserId){
        log.info("[getUser] : clientUserId = {}", clientUserId);
        return userService.getUser(clientUserId);
    }

    // 나의 프로필 수정
    @PutMapping("/{clientUserId}")
    public UserResponseDto.Info updateUser(
            @PathVariable String clientUserId,
            @RequestBody UserRequestDto.Info userInfoRequestDto){

        log.info("[updateUser] : userInfoRequestDto.getImg() = {}", userInfoRequestDto.getImg());
        return userService.updateUser(clientUserId, userInfoRequestDto);
    }

    // 회원 삭제
    @DeleteMapping("/{clientUserId}")
    public void deleteUser(@PathVariable String clientUserId){
        userService.deleteUser(clientUserId);
    }

}

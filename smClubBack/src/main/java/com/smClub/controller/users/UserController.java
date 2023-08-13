package com.smClub.controller.users;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    // 동아리 생성할 때 모든 유저 정보 가져오기
    @GetMapping
    public void getUsers(){

    }

    // 로그인
    @PostMapping("/login")
    public void login(){

    }

    // 회원가입
    @PostMapping("/sign-up")
    public void signUp(){

    }

    // 마이페이지
    @GetMapping("/{userId}")
    public void getUser(){

    }

    // 나의 프로필 수정
    @PutMapping("/{userId}")
    public void updateUser(){

    }

    // 회원 삭제
    @DeleteMapping("/{userId}")
    public void deleteUser(){

    }

}

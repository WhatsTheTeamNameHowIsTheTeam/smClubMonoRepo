package com.smClub.controller.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/{userId}/recruitments")
public class UsersRecruitmentsController {

    // 나의 신청서 내역 페이지 이동
    @GetMapping
    public void getUserRecruitments(){

    }


}

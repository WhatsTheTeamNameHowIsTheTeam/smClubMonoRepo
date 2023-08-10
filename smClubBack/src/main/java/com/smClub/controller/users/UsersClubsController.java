package com.smClub.controller.users;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/{userId}/clubs")
public class UsersClubsController {

    //내 동아리 목록 페이지
    @GetMapping("/{clubId}")
    public void getUserClubs(){

    }

    //동아리 목록 페이지에서 동아리 삭제
    @DeleteMapping("/{clubId}")
    public void deleteUserClub(){

    }

    // 내 동아리 목록 페이지에서 동아리 검색
    @GetMapping("/search/{search}")
    public void getSearchedUserClubs(){

    }


}

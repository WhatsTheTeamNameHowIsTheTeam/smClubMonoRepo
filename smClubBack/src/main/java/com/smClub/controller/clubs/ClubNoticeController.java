package com.smClub.controller.clubs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clubs/{clubId}/notice")
public class ClubNoticeController {

    // 동아리 공지페이지
    @GetMapping
    public void getClubNotices(){

    }

    // 동아리 공지페이지에서 검색
    @GetMapping("/search/{search}")
    public void getSearchedClubNotices(){

    }


}

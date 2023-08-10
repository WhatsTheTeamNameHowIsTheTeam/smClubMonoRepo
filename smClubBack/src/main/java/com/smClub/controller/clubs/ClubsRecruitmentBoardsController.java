package com.smClub.controller.clubs;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clubs/{clubId}/recruitment-boards")
public class ClubsRecruitmentBoardsController {

    // 동아리 모집공고 생성
    @PostMapping
    public void setClubRecruitmentBoard(){

    }

    // 동아리 모집공고
    @GetMapping("/{recruitmentBoardId}")
    public void getClubRecruitmentBoard(){

    }

    // 동아리 모집공고 수정
    @PostMapping("/{recruitmentBoardId}")
    public void updateClubRecruitmentBoard(){

    }

    // 동아리 신청서 내역
    @GetMapping("/{recruitmentBoardId}/recruitments")
    public void getClubRecruitments(){

    }

    // 동아리 신청하기
    @PostMapping("/{recruitmentBoardId}/recruitments")
    public void setRecruitment(){

    }

    // 동아리 신청서 내역에서 각 신청서 상세보기
    @GetMapping("/{recruitmentBoardId}/recruitments/{recruitmentId}")
    public void getRecruitment(){

    }

    // 신청서 거절
    @DeleteMapping("/{recruitmentBoardId}/recruitments/{recruitmentId}")
    public void deleteRecruitment(){

    }
}

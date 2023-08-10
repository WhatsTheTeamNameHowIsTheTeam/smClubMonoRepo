package com.smClub.controller.clubs;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clubs/{clubsId}/act-diaries")
public class ClubsActDiariesController {

    // 동아리 활동일지 목록 보기
    @GetMapping
    public void getClubActDiaries(){

    }

    // 동아리 활동일지 생성
    @PostMapping
    public void setClubActDiary(){

    }

    // 동아리 활동일지 상세보기,
    @GetMapping("/{actDiaryId}")
    public void getClubActDiary(){

    }

    // 동아리 활동일지 수정
    @PutMapping("/{actDiaryId}")
    public void updateClubActDiary(){

    }

    // 동아리 활동일지 삭제
    @DeleteMapping("/{actDiaryID")
    public void deleteClubActDiary(){

    }

}

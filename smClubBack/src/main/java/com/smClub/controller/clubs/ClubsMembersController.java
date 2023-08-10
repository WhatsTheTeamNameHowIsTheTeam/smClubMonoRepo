package com.smClub.controller.clubs;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clubs/{clubId}/members")
public class ClubsMembersController {

    // 클럽 회원목록
    @GetMapping
    public void getClubMembers(){

    }

    // 신청서 승인
    @PostMapping
    public void setClubMembers(){

    }

    // 동아리 회원 직책 변경
    @PutMapping("/{studentId}")
    public void updateClubMember(){

    }

    // 동아리 회원 탈퇴 시키기, 동아리 탈퇴(스스로)
    @DeleteMapping("/{studentId}")
    public void deleteClubMember(){

    }

    // 동아리 회원 검색
    @GetMapping("/search/{search}")
    public void getSearchedClubMembers(){

    }

    // 동아리 회원 목록 엑셀파일로 다운로드
    @GetMapping("/download-excel")
    public void getClubMembersDownloadExcel(){

    }

}

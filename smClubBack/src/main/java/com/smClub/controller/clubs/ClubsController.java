package com.smClub.controller.clubs;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clubs")
public class ClubsController {

    // [연합회] 동아리 생성
    @PostMapping
    public void setClub(){

    }

    // 동아리 메인(정보) 페이지 이동
    @GetMapping("/{clubId}")
    public void getClub(@RequestParam String clubId){
    }

    // 동아리 수정, [연합회] 최우수 동아리 선정
    @PutMapping("/{clubId}")
    public void updateClub(@RequestParam String clubId){
    }

    @DeleteMapping("/{clubId}")
    public void deleteClub(){

    }

    // 동아리 카테고리 별로 불러오기
    @GetMapping("/category/{category}")
    public void getCategoryClubs(){
    }

    // 모든 동아리 모집공고 목록, 모집여부별로 동아리 모집공고 목록
    @GetMapping("/recruitment-boards")
    public void getRecruitmentBoards(){
        //파라미터가 존재할때랑 없을 때를 신경써서 코딩할것
    }

    // 모집공고 목록에서 검색버튼
    @GetMapping("/recruitment-boards/search/{search}")
    public void getSearchedRecruitmentBoards(){

    }

    //동아리 목록에서 검색
    @GetMapping("/search/{search}")
    public void getSearchedClubs(){

    }

}

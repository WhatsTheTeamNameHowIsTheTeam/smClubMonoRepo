package com.smClub.controller.clubs;

import com.smClub.dto.req.ClubRequestDto;
import com.smClub.dto.res.ClubResponseDto;
import com.smClub.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/clubs")
public class ClubController {

    @Autowired
    private ClubService clubService;

    // [연합회] 동아리 생성
    @PostMapping
    public void setClub(@ModelAttribute ClubRequestDto.Create clubCreateRequestDto){
        log.info("[setClub] : {}", clubCreateRequestDto);

    }

    // 동아리 메인(정보) 페이지 이동
    @GetMapping("/{clubId}")
    public Map<String, Object> getClub(@PathVariable String clubId){
        log.info("[getClub] : {}", clubId);
        ClubResponseDto.Info clubInfoRequestDto = clubService.getClub(clubId);
        Map<String, Object> map = new HashMap<>();

        if(clubInfoRequestDto != null){
            map.put("clubInfo", clubInfoRequestDto);
        } else {
            map.put("clubInfo", null);
        }
        return map;
    }

    // 동아리 수정, [연합회] 최우수 동아리 선정
    @PutMapping("/{clubId}")
    public ClubResponseDto.Update updateClub(
            @PathVariable String clubId,
            @RequestBody ClubRequestDto.Update clubUpdateRequestDto){

        log.info("[updateClub] : clubId = {}, clubUpdateRequestDto.getClubName() = {}", clubId, clubUpdateRequestDto.getClubName());
        ClubResponseDto.Update clubUpdateResponseDto = clubService.updateClub(clubId, clubUpdateRequestDto);
        return clubUpdateResponseDto;
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

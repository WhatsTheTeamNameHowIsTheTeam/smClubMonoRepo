package com.smClub.dto.req;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

// 동아리 관련 dto
public class ClubRequestDto {

    // POST, PUT 요청 DTO
    // GET, DELETE는 인자로 전달해도 충분

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Create{ // 동아리 생성
        private String clubName;              // 동아리 이름
        private String category;              // 동아리 분과
        private UserRequestDto.Info userInfo; // 관리자 정보
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Update{ // 동아리 수정
        private String clubId;              // 동아리 아이디
        private String managerClientId;     // 동아리 관리자 학번
        private String clubName;            // 동아리 이름
        private String img;                 // 동아리 이미지
        private String category;            // 동아리 분과
        private Integer clubMemberCnt;      // 동아리 최대 인원수
        private String introContent;        // 동아리 소개 내용
        private Boolean excellence;         // 동아리 최우수 여부
        private Integer excellenceCnt;      // 동아리 최우수 횟수
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Info{ // 동아리 정보
        private String clubId;
        private String clubName;
    }
}

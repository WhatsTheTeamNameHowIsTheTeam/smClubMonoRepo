package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

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
    @AllArgsConstructor
    @Builder
    public static class Update{ // 동아리 수정
        private String clubId;              // 동아리 아이디
        private String managerStudentInfo;  // 동아리 관리자 학번
        private String clubName;            // 동아리 이름
        private String img;                 // 동아리 이미지
        private String category;            // 동아리 분과
        private int maxMemberCnt;           // 동아리 최대 인원수
        private String introContent;        // 동아리 소개 내용
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class UpdateExcellence{ // 동아리 수정
        private String clubId;              // 동아리 아이디
        private String managerStudentInfo;  // 동아리 관리자 학번
        private String clubName;            // 동아리 이름
        private String img;                 // 동아리 이미지
        private String category;            // 동아리 분과
        private int maxMemberCnt;           // 동아리 최대 인원수
        private String introContent;        // 동아리 소개 내용
        private boolean excellence;         // 동아리 최우수 여부
        private boolean excellenceCnt;      // 동아리 최우수 횟수
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Info{
        private String clubId;
        private String clubName;
    }
}

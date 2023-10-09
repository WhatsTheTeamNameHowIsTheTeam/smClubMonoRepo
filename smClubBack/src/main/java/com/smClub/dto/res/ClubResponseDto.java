package com.smClub.dto.res;



import lombok.*;

public class ClubResponseDto {

    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class Info {
        private String clubId;
        private String managerClientId;
        private String clubName;
        private String category;
        private String img;
        private String introContent;
        private boolean excellence;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class Update{ // 동아리 수정
        private String clubId;              // 동아리 아이디
        private String managerClientId;  // 동아리 관리자 학번
        private String clubName;            // 동아리 이름
        private String img;                 // 동아리 이미지
        private String category;            // 동아리 분과
        private int clubMemberCnt;           // 동아리 최대 인원수
        private String introContent;        // 동아리 소개 내용
        private boolean excellence;         // 동아리 최우수 여부
        private Integer excellenceCnt;      // 동아리 최우수 횟수
    }
  
  
    @Getter
    @AllArgsConstructor
    @Builder
    public static class Search{
        private String category;
        private String clubId;
        private String clubName;
        private String img;
        private String introContent;
    }
}
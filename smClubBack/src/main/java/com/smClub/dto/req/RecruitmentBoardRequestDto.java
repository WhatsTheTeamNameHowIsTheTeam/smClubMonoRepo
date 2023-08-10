package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class RecruitmentBoardRequestDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Create{  // 모집공고 생성
        private String subject;               // 제목
        private ClubRequestDto.Info clubInfo; // 동아리 정보
        private String beginDate;             // 모집 시작 일시
        private String endDate;               // 모집 종료 일시
        private int memberCnt;                // 모집 인원 수
        private String content;               // 내용
        private String img;                   // 이미지
        private ApplicationRequestDto.Create question; // 신청서 질문
    }

}

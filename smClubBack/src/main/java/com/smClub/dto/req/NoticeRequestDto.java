package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

// 동아리 공지사항 관련 dto
public class NoticeRequestDto {

    // POST, PUT 요청 DTO
    // GET, DELETE는 인자로 전달해도 충분

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Create{ // 공지사항 생성
        private String studentId; // 작성자 학번
        private String clubId;    // 동아리 아이디
        private String content;   // 내용
        private String img;       // 이미지
    }
}

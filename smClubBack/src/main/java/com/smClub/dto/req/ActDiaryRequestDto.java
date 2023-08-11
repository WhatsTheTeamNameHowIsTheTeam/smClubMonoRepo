package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

// 동아리 활동일지 관련 dto
public class ActDiaryRequestDto {

    // POST, PUT 요청 DTO
    // GET, DELETE는 인자로 전달해도 충분

    @Getter
    @Builder
    public static class Create{ // 활동일지 생성
        private String clubId;          // 동아리 아이디
        private String studentId;       // 작성자 학번
        private String subject;         // 제목
        private String content;         // 내용
        private String img;             // 이미지
        private int memberCnt;          // 인원수
        private boolean disclosure;     // 공개 여부
        private String actBeginDate;    // 활동 시작 일시
        private String actEndDate;      // 활동 끝 일시
    }

    @Getter
    @Builder
    public static class Update { // 활동일지 수정
        private String actDiaryId;      // 활동일지 아이디
        private String clubId;          // 동아리 아이디
        private String studentId;       // 작성자 학번
        private String subject;         // 제목
        private String content;         // 내용
        private String img;             // 이미지
        private int memberCnt;          // 인원수
        private boolean disclosure;     // 공개 여부
        private String actBeginDate;    // 활동 시작 일시
        private String actEndDate;      // 활동 끝 일시
    }
}

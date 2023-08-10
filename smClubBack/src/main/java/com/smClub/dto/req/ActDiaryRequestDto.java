package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

// 동아리 활동일지 관련 dto
public class ActDiaryRequestDto {

    // 개발하다가 필요한 필드가 빠진것 같으면 추가 가능
    // 어노테이션이 안맞거나 필요하면 추가 및 수정 가능
    /**단 다른 메서드에서 사용중이면 전체 다 바꿔줘야하므로 잘 확인하고 수정**/

    @Getter
    @Builder
    public static class Create{ // 활동일지 생성
        private ClubRequestDto.ClubId clubId;                         // 동아리 아이디
        private UserRequestDto.StudentId writer;       // 작성자 학번
        private String subject;                        // 제목
        private String content;                        // 내용
        private String img;                            // 이미지
        private int memberCnt;                         // 인원수
        private boolean disclosure;                    // 공개 여부
        private String actBeginDate;                   // 활동 시작 일시
        private String actEndDate;                     // 활동 끝 일시
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Update { // 활동일지 수정
        private String actDiaryId;
        private Create actDiaryInfo;
    }
}

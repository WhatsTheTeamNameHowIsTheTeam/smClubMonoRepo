package com.smClub.dto.req;

import lombok.*;

// 사용자 관련 dto
public class UserRequestDto {

    // POST, PUT 요청 DTO
    // GET, DELETE는 인자로 전달해도 충분

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Info { // 프로필 수정
        private String img;           // 이미지
        private String phoneNumber;   // 연락처
        private String email;         // 이메일
        private Boolean notification; // 알림 설정
    }

}

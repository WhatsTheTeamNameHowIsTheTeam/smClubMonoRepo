package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

// 사용자 관련 dto
public class UserRequestDto {

    // POST, PUT 요청 DTO
    // GET, DELETE는 인자로 전달해도 충분

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Login { // 로그인
        private String userId;        // 아이디
        private String userPw;        // 비밀번호
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class SignUp{ // 회원가입
        private String studentId;   // 학번
        private String userName;    // 이름
        private String userId;      // 아이디
        private String userPw;      // 비밀번호
        private String major;       // 전공
        private String phoneNumber; // 연락처
        private String email;       // 이메일
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Profile{ // 프로필 수정
        private String userId;        // 아이디
        private String userPw;        // 비밀번호
        private String img;           // 이미지
        private String phoneNumber;   // 연락처
        private String email;         // 이메일
        private boolean notification; // 알림 설정
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Info{ // 동아리생성때 사용할 기본 정보
        private String studentId; // 학번
        private String userName;  // 이름
        private String major;     // 전공
    }

}

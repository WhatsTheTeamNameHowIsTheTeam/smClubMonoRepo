package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

// 사용자 관련 dto
public class UserRequestDto {

    // 개발하다가 필요한 필드가 빠진것 같으면 추가 가능
    // 어노테이션이 안맞거나 필요하면 추가 및 수정 가능
    /**  단 다른 메서드에서 사용중이면 전체 다 바꿔줘야하므로 잘 확인하고 수정 **/

    @Getter
    @Setter
    public static class StudentId{
        private String studentId; // 학번
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Login { // 로그인
        private String userId;        // 아이디
        private String userPw;        // 비밀번호
    }

    @Getter
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
    public static class Info{ // 동아리생성때 사용할 기본 정보
        private String studentId; // 학번
        private String userName;  // 이름
        private String major;     // 전공
    }

}

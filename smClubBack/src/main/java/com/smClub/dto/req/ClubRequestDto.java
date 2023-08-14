package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

// 동아리 관련 dto
public class ClubRequestDto {

    // 개발하다가 필요한 필드가 빠진것 같으면 추가 가능
    // 어노테이션이 안맞거나 필요하면 추가 및 수정 가능
    /**  단 다른 메서드에서 사용중이면 전체 다 바꿔줘야하므로 잘 확인하고 수정 **/

    @Getter
    @AllArgsConstructor
    @Builder
    public static class ClubId{
        private String clubId; // 동아리 아이디
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class CreateInfo{ // 동아리 생성
        private String clubName;              // 동아리 이름
        private String category;              // 동아리 분과
        private UserRequestDto.Info userInfo; // 관리자 정보
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class ClubOut{ // 동아리 탈퇴 시키기
        private String clubId;                               // 동아리 아이디
        private UserRequestDto.StudentId managerStudentInfo; // 관리자 학번
        private UserRequestDto.StudentId studentId;          // 탈퇴 대상 학번
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class UpdateInfo{ // 동아리 수정
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


}

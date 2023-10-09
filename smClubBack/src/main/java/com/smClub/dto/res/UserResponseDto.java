package com.smClub.dto.res;

import lombok.*;

public class UserResponseDto {

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Builder
    public static class Info{
        private String clientUserId;
        private String userName;
        private String img;
        private String major;
        private String studentId;
        private Integer grade;
        private String phoneNumber;
        private String email;
        private Boolean notification;
    }
}

package com.smClub.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


// 지워도 되는 겁니다. 테스트해본거때문에 남겨놨어요

@Getter
@Setter
@Data
@JsonNaming(value = PropertyNamingStrategy.SnakeCaseStrategy.class)
public class UserInfo {
//    private String studentId;
//    private String userName;
//    private String userId;
//    private String userPw;
//    private String img;
//    private String major;
//    private String phoneNumber;
//    private String email;
//    private String userAuthor;
//    private boolean notification;
//    private boolean userAgree;
//    private String userAgreeDate;
//    private String createDate;
//    private String updateDate;

    @JsonProperty("studentId")
    private String studentId;

    @JsonProperty("userName")
    private String userName;

    @JsonProperty("userId")
    private String userId;

    @JsonProperty("userPw")
    private String userPw;

    @JsonProperty("img")
    private String img;

    @JsonProperty("major")
    private String major;

    @JsonProperty("grade")
    private String grade;

    @JsonProperty("phoneNumber")
    private String phoneNumber;

    @JsonProperty("email")
    private String email;

    @JsonProperty("userAuthor")
    private String userAuthor;

    @JsonProperty("notification")
    private boolean notification;

    @JsonProperty("userAgree")
    private boolean userAgree;

    @JsonProperty("userAgreeDate")
    private String userAgreeDate;

    @JsonProperty("createDate")
    private String createDate;

    @JsonProperty("updateDate")
    private String updateDate;

}
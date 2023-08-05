
package com.smClub.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class UserInfo {
    private String studentId;
    private String userName;
    private String userId;
    private String userPw;
    private String img;
    private String major;
    private String phoneNumber;
    private String email;
    private int userAuthor;
    private boolean notification;
    private boolean userAgree;
    private String userAgreeDate;
    private String createDate;
    private String updateDate;

}


package com.smClub.entity;


import com.smClub.dto.UserInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Entity
@Table(name = "MBER_INFO")
@Getter
@Builder
@AllArgsConstructor
public class UserInfoEntity {

    @Id
    @Column(name="STDNT_INNB", length = 100)
    private String studentId;

    @Column(name="NM")
    private String userName;

    @Column(name = "USID")
    private String userId;

    @Column(name = "PASSWORD")
    private String userPw;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "MAJOR")
    private String major;

    @Column(name = "GRADE")
    private String grade;

    @Column(name = "CTTPC")
    private String phoneNumber;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "SRVMNGH")
    private String userAuthor;

    @Column(name = "NTCN_ESTBS")
    private boolean notification;

    @Column(name = "USE_STPLAT_AGRE_AT")
    private boolean userAgree;

    @Column(name = "USE_STPLAT_AGRE_DT")
    private String userAgreeDate;

    @Column(name = "CREAT_DT")
    private String createDate;

    @Column(name = "UPDT_DT")
    private String updateDate;

    public UserInfoEntity() {

    }

    //dto로 감싸진 data를 Entity로 빌드
    public static UserInfoEntity toEntity(UserInfo studentObj){
        return UserInfoEntity.builder()
                .studentId(studentObj.getStudentId())
                .userName(studentObj.getUserName())
                .userId(studentObj.getUserId())
                .userPw(studentObj.getUserPw())
                .img(studentObj.getImg())
                .major(studentObj.getMajor())
                .phoneNumber(studentObj.getPhoneNumber())
                .email(studentObj.getEmail())
                .userAuthor(studentObj.getUserAuthor())
                .notification(studentObj.isNotification())
                .userAgree(studentObj.isUserAgree())
                .userAgreeDate(studentObj.getUserAgreeDate())
                .createDate(studentObj.getCreateDate())
                .updateDate(studentObj.getUpdateDate())
                .build();
    }

}

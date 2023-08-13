
package com.smClub.entity;


import com.smClub.dto.UserInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "MBER_INFO")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoEntity {

    @Id
    @Column(name="STDNT_INNB", length = 10)
    private String studentId;

    @Column(name="NM", nullable = false)
    private String userName;

    @Column(name = "USID", nullable = false)
    private String userId;

    @Column(name = "PASSWORD", nullable = false)
    private String userPw;

    @Column(name = "ATCH_PHOTO", nullable = false)
    private String img;

    @Column(name = "MAJOR", nullable = false)
    private String major;

    @Column(name = "CTTPC", nullable = false)
    private String phoneNumber;

    @Column(name = "EMAIL", nullable = false)
    private String email;

    @Column(name = "SRVMNGH", nullable = false)
    private String userAuthor;

    @Column(name = "NTCN_ESTBS", nullable = false)
    private boolean notification;

    @Column(name = "USE_STPLAT_AGRE_AT", nullable = false)
    private boolean userAgree;

    @Column(name = "USE_STPLAT_AGRE_DT", nullable = false)
    private String userAgreeDate;

    @Column(name = "CREAT_DT", nullable = false)
    private String createDate;

    @Column(name = "UPDT_DT")
    private String updateDate;

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

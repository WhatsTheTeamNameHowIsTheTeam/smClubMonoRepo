
package com.smClub.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "MBER_INFO")
@Getter
@Setter
public class UserInfoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Column(name = "CTTPC")
    private String phoneNumber;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "SRVMNGH")
    private int userAuthor;

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

}


package com.smClub.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Entity
@Table(name = "CLUB")
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Builder
public class ClubEntity {

    @Id
    @Column(name = "CLUB_ID")
    private String clubId; // 동아리 아이디

    @OneToOne
    @JoinColumn(name = "CLIENT_USER_ID")
    private UserInfoEntity userInfoEntity; // 동아리장

    @Column(name="NM", nullable = false)
    private String clubName; // 동아리 이름

    @Column(name="ATCH_PHOTO", nullable = false)
    private String img; // 이미지

    @Column(name="CTGRY", nullable = false)
    private String category; // 분류

    @Column(name="MXMM_NMPR") // default 5
    private int clubMemberCnt; // 동아리 회원수

    @Column(name="INTRCN_CN")
    private String introContent; // 동아리 소개

    @Column(name="EXCLNC_AT") // default 0
    private boolean excellence; // 최우수 여부

    @Column(name="EXCLNC_CO") // default 0
    private int excellenceCnt; // 최우수 횟수

    @CreationTimestamp
    @Column(name="CREATE_DT", nullable = false)
    private LocalDateTime createDate; // 생성일시

    @UpdateTimestamp
    @Column(name="UPDT_DT")
    private LocalDateTime updateDate; // 수정일시

}

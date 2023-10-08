
package com.smClub.entity;


import com.smClub.dto.req.UserRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "MBER_INFO")
@Getter
@Builder
@DynamicInsert
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoEntity {

    @Id
    @Column(name="CLIENT_USER_ID")
    private String clientUserId; // 클라이언트아이디

    @Column(name="NM", nullable = false)
    private String userName; // 이름

    @Column(name = "ATCH_PHOTO", nullable = false)
    private String img; // 이미지

    @Column(name = "MAJOR")
    private String major; // 전공

    @Column(name = "STDNT_INNB")
    private String studentId; // 학번

    @Column(name = "GRADE")
    private Integer grade; // 학년

    @Column(name = "CTTPC")
    private String phoneNumber; // 휴대폰 번호

    @Column(name = "EMAIL", nullable = false)
    private String email; // 이메일

    @Column(name = "SRVMNGH") // default "ROLE_USER"
    private String userAuthor; // 서비스관리권한

    @Column(name = "NTCN_ESTBS") // default 1
    private boolean notification; // 알림설정

    @Column(name = "USE_STPLAT_AGRE_AT") // default 1
    private boolean userAgree; // 이용약관동의여부

    @CreationTimestamp
    @Column(name = "USE_STPLAT_AGRE_DT", nullable = false)
    private LocalDateTime userAgreeDate; // 이용약관동의일시

    @CreationTimestamp
    @Column(name = "CREATE_DT", nullable = false)
    private LocalDateTime createDate; // 생성일시

    @UpdateTimestamp
    @Column(name = "UPDT_DT")
    private LocalDateTime updateDate; // 수정일시

}

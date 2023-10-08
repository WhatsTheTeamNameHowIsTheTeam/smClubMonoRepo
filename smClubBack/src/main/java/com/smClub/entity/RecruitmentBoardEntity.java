
package com.smClub.entity;

import com.smClub.entity.Id.RecruitmentBoardEntityId;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "RCRIT_PBLANC")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@IdClass(RecruitmentBoardEntityId.class)
public class RecruitmentBoardEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "CLUB_ID")
    private ClubEntity clubEntity;

    @Id
    @Column(name = "RCRIT_PBLANC_ID")
    private String recruitmentBoardId;

    @ManyToOne
    @JoinColumn(name = "CLIENT_USER_ID")
    private UserInfoEntity userInfoEntity;

    @Column(name = "SJ", nullable = false)
    private String subject;

    @Column(name = "CN")
    private String Content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "NMPR") // default 1
    private int memberCnt; // 인원수

    @Column(name = "RDCNT") // default 0
    private int views; // 조회수

    @Column(name = "RCRIT_AT") // default 1
    private boolean open; // 공개 여부

    @Column(name = "RCRIT_BEGIN_DT", nullable = false)
    private LocalDateTime beginDate; // 시작 일시

    @Column(name = "RCRIT_END_DT", nullable = false)
    private LocalDateTime endDate; // 종료 일시

    @CreationTimestamp
    @Column(name = "PULLUP_DT", nullable = false)
    private LocalDateTime pullupDate; // 끌어올리기

    @CreationTimestamp
    @Column(name = "CREATE_DT", nullable = false)
    private LocalDateTime createDate; // 생성일시

    @UpdateTimestamp
    @Column(name = "UPDT_DT")
    private LocalDateTime updateDate; // 수정일시

}

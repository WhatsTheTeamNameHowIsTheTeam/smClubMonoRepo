
package com.smClub.entity;

import com.smClub.entity.Id.RecruitmentBoardEntityId;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Entity
@Table(name = "RCRIT_PBLANC")
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
    @JoinColumn(name = "CLIENT_ID")
    private UserInfoEntity userInfoEntity;

    @Column(name = "SJ", nullable = false)
    private String subject;

    @Column(name = "CN")
    private String Content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "NMPR", nullable = false)
    private int memberCnt;

    @Column(name = "RDCNT", nullable = false)
    private int views = 0;

    @Column(name = "RCRIT_AT", nullable = false)
    private boolean open = true;

    @Column(name = "RCRIT_BEGIN_DT", nullable = false)
    private String beginDate;

    @Column(name = "RCRIT_END_DT", nullable = false)
    private String endDate;

    @Column(name = "PULLUP_DT", nullable = false)
    private String pullupDate;

    @Column(name = "CREATE_DT", nullable = false)
    private String createDate;

    @Column(name = "UPDT_DT")
    private String updateDate;

}

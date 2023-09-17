
package com.smClub.entity;

import com.smClub.entity.Id.ActDiaryEntityId;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ACT_DIARY")
@IdClass(ActDiaryEntityId.class)
public class ActDiaryEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "CLUB_ID")
    private ClubEntity clubEntity;

    @Id
    @Column(name = "ACT_ID")
    private String actDiaryId;

    @ManyToOne
    @JoinColumn(name = "CLIENT_ID")
    private UserInfoEntity userInfoEntity;

    @Column(name = "SJ", nullable = false)
    private String subject;

    @Column(name = "CN")
    private String content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "NMPR", nullable = false)
    private int memberCnt;

    @Column(name = "OTHBC_AT", nullable = false)
    private boolean viewChk = true;

    @Column(name = "ACT_BEGIN_DT", nullable = false)
    private String actBeginDate;

    @Column(name = "ACT_END_DT", nullable = false)
    private String actEndDate;

    @Column(name = "CREATE_DT", nullable = false)
    private String createDate;

    @Column(name = "UPDT_DT", nullable = false)
    private String updateDate;

}

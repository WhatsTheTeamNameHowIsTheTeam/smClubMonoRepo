
package com.smClub.entity;

import com.smClub.dto.UserInfo;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DialectOverride;

@Getter
@Entity
@Table(name = "CLUB")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubEntity {

    @Id
    @Column(name = "CLUB_ID")
    private String clubId;

    @OneToOne
    @JoinColumn(name = "STDBT_INNB")
    private UserInfoEntity userInfoEntity;

    @Column(name="NM", nullable = false)
    private String clubName;

    @Column(name="ATCH_PHOTO", nullable = false)
    private String img;

    @Column(name="CTGRY", nullable = false)
    private String category;

    @Column(name="MXMM_NMPR", nullable = false)
    private int clubMemberCnt;

    @Column(name="INTRCN_CN")
    private String introContent;

    @Column(name="EXCLNC_AT", nullable = false)
    private boolean excellence = false;

    @Column(name="EXCLNC_CO", nullable = false)
    private int excellenceCnt = 0;

    @Column(name="CREATE_DT", nullable = false)
    private String createDate;

    @Column(name="UPDT_DT")
    private String updateDate;

}

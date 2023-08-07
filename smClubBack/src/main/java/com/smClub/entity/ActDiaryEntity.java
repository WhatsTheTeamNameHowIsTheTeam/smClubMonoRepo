
package com.smClub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ACT_DIARY")
public class ActDiaryEntity {
    @Id
    @Column(name = "ACT_ID")
    private String actDiaryId;

    @Column(name = "CLUB_ID")
    private String clubId;

    @Column(name = "STDNT_INNB")
    private String studentId;

    @Column(name = "SJ")
    private String subject;

    @Column(name = "CN")
    private String content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "NMPR")
    private int memberCnt;

    @Column(name = "OTHBC_AT")
    private boolean viewChk;

    @Column(name = "ACT_BEGIN_DT")
    private String actBeginDate;

    @Column(name = "ACT_END_DT")
    private String actEndDate;

    @Column(name = "CREATE_DT")
    private String createDate;

    @Column(name = "UPDT_DT")
    private String updateDate;

    public ActDiaryEntity() {
    }

}

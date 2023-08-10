
package com.smClub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Cleanup;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "RCRIT_PBLANC")
public class RcritPblancEntity {
    @Id
    @Column(name = "RCRIT_PBLANC_ID")
    private String notificationNumber;
    @Column(name = "CLUB_ID")
    private String clubId;
    @Column(name = "STDNT_INNB")
    private String studentId;
    @Column(name = "SJ")
    private String subject;
    @Column(name = "CN")
    private String Content;
    @Column(name = "ATCH_PHOTO")
    private String img;
    @Column(name = "NMPR")
    private int memberCnt;
    @Column(name = "RDCNT")
    private int views;
    @Column(name = "RCRIT_AT")
    private boolean RCRIT;
    @Column(name = "RCRIT_BEGIN_DT")
    private String RCRITBeginDate;
    @Column(name = "RCRIT_END_DT")
    private String RCRITEndDate;
    @Column(name = "PULLUP_DT")
    private String pullupDate;
    @Column(name = "CREATE_DT")
    private String createDate;
    @Column(name = "UPDT_DT")
    private String updateDate;


    public RcritPblancEntity() {
    }

}

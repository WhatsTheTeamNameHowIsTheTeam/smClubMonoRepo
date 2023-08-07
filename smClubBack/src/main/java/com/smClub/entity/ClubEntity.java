
package com.smClub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CLUB")
public class ClubEntity {
    @Id
    private String clubId;

    @Column(name="STDBT_INNB")
    private String studentId;

    @Column(name="NM")
    private String clubName;

    @Column(name="ATCH_PHOTO")
    private String img;

    @Column(name="CTGRY")
    private String category;

    @Column(name="MXMM_NMPR")
    private int maxMemberCnt;

    @Column(name="INTRCN_CN")
    private String introContent;

    @Column(name="EXCLNC_AT")
    private boolean excellence;

    @Column(name="EXCLNC_CO")
    private int excellenceCnt;

    @Column(name="CREATE_DT")
    private String createDate;

    @Column(name="UPDT_DT")
    private String updateDate;

    public ClubEntity() {
    }

}

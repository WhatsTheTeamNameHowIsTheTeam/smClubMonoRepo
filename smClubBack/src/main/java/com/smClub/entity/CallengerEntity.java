package com.smClub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table
@Entity
public class CallengerEntity {

    @Id
    @Column(name="STDNT_INNB")
    private String studentId;

    @Id
    @Column(name="CLUB_ID")
    private String clubId;

    @Id
    @Column(name="RCRIT_PBLANC_ID")
    private String rcritId;

    @Column(name="QESTN_ID")
    private int qestionId;

    @Column(name="ANSWER")
    private String answer;

    @Column(name="CREATE_DT")
    private String createDate;

    @Column(name="UPDT_DT")
    private String updateDate;


}

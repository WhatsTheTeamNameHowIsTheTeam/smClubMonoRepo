
package com.smClub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table
public class ReqstdocEntity {
    @Id
    @Column(name="QESTN_ID")
    private int qestionNumber;
    @Column(name="RCRIT_PBLANC_ID")
    private String reqstdocNumber;
    @Column(name="CLUB_ID")
    private String clubId;
    @Column(name="QESTN")
    private String qestion;

    public ReqstdocEntity() {
    }

}

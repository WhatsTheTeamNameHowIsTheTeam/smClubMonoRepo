
package com.smClub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Setter
@Table(name = "NOTICE")
public class NoticeEntity {
    @Id
    @Column(name = "NOTICE_ID")
    private String notice;

    @Column(name = "CLUB_ID")
    private String clubId;

    @Column(name = "STDNT_INNB")
    private String studentId;

    @Column(name = "CN")
    private String content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "OTHBC_AT")
    private String open;

    @Column(name = "CREATE_DT")
    private String createDate;


    public NoticeEntity() {
    }

}

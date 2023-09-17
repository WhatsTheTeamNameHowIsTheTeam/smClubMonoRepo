package com.smClub.entity;

import com.smClub.entity.Id.ClubMemberEntityId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "CLUB_MBER")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@IdClass(ClubMemberEntityId.class)
public class ClubMemberEntity {

    @Id
    @OneToOne
    @JoinColumn(name = "CLUB_ID")
    private ClubEntity clubEntity; // 동아리 아이디

    @Id
    @ManyToOne
    @JoinColumn(name = "CLIENT_USER_ID")
    private UserInfoEntity userInfoEntity; // 작성자

    @Column(name = "RSPOFC")
    private String position; // 직책

    @Column(name = "RCRIT_PBLANC_AUTHOR") // default 0
    private boolean recruitAuthor; // 모집공고 권한

    @Column(name = "ACT_DIARY_AUTHOR") // default 0
    private boolean actAuthor; // 활동일지 권한

    @Column(name = "NOTICE_AUTHOR") // default 0
    private boolean noticeAuthor; // 공지사항 권한

}

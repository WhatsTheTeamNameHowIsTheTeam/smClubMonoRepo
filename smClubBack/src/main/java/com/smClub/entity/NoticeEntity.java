
package com.smClub.entity;

import com.smClub.entity.Id.NoticeEntityId;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Entity
@Table(name = "NOTICE")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@IdClass(NoticeEntityId.class)
public class NoticeEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "CLUB_ID")
    private ClubEntity clubEntity;

    @Id
    @Column(name = "NOTICE_ID")
    private String noticeId;

    @ManyToOne
    @JoinColumn(name = "CLIENT_ID")
    private UserInfoEntity userInfoEntity;

    @Column(name = "CN")
    private String content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "CREATE_DT", nullable = false)
    private String createDate;

}


package com.smClub.entity;

import com.smClub.entity.Id.ActDiaryEntityId;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
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
    @JoinColumn(name = "CLIENT_USER_ID")
    private UserInfoEntity userInfoEntity;

    @Column(name = "SJ", nullable = false)
    private String subject;

    @Column(name = "CN")
    private String content;

    @Column(name = "ATCH_PHOTO")
    private String img;

    @Column(name = "NMPR")
    private int memberCnt; // 인원수

    @Column(name = "OTHBC_AT") // default 1
    private boolean open; // 공개여부

    @Column(name = "ACT_BEGIN_DT", nullable = false)
    private LocalDateTime actBeginDate; // 시작일시

    @Column(name = "ACT_END_DT", nullable = false)
    private LocalDateTime actEndDate; // 종료일시

    @CreationTimestamp
    @Column(name = "CREATE_DT", nullable = false)
    private LocalDateTime createDate; // 생성일시

    @UpdateTimestamp
    @Column(name = "UPDT_DT")
    private LocalDateTime updateDate; // 수정일시

}

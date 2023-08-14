package com.smClub.entity;

import com.smClub.entity.Id.ClubMemberEntityId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CLUB_MBER")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@IdClass(ClubMemberEntityId.class)
public class ClubMemberEntity {

    @Id
    @OneToOne
    @JoinColumn(name = "CLUB_ID")
    private ClubEntity clubEntity;

    @Id
    @ManyToOne
    @JoinColumn(name = "STDNT_INNB")
    private UserInfoEntity userInfoEntity;

}


package com.smClub.entity;

import com.smClub.entity.Id.QuestionEntityId;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "REQSTDOC_QESTN")
@IdClass(QuestionEntityId.class)
public class QuestionEntity {

    @Id
    @OneToOne
    @JoinColumns({
            @JoinColumn(name = "CLUB_ID"),
            @JoinColumn(name = "RCRIT_PBLANC_ID")
    })
    private RecruitmentBoardEntity recruitmentBoardEntity;

    @Id
    @Column(name="QESTN_ID")
    private int questionId;

    @Column(name="QESTN")
    private String question;

    @OneToMany(mappedBy = "questionEntity")
    private List<ApplicationEntity> applicationList;

}

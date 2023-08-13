package com.smClub.entity;

import com.smClub.entity.Id.ApplicationEntityId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Table(name = "REQST_DTLS")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@IdClass(ApplicationEntityId.class)
public class ApplicationEntity {

    @Id
    @Column(name="STDNT_INNB")
    private String studentId;

    @Id
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "CLUB_ID"),
            @JoinColumn(name = "RCRIT_PBLANC_ID"),
            @JoinColumn(name = "QESTN_ID")
    })
    private QuestionEntity questionEntity;

    @Column(name="ANSWER")
    private String answer;

    @Column(name="CREATE_DT", nullable = false)
    private String createDate;

    @Column(name="UPDT_DT")
    private String updateDate;

}

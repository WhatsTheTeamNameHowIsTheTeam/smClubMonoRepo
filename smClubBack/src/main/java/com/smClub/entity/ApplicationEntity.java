package com.smClub.entity;

import com.smClub.entity.Id.ApplicationEntityId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Table(name = "REQST_DTLS")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@IdClass(ApplicationEntityId.class)
public class ApplicationEntity {

    @Id
    @ManyToOne
    @JoinColumn(name="CLIENT_USER_ID")
    private UserInfoEntity userInfoEntity;

    @Id
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "CLUB_ID"),
            @JoinColumn(name = "RCRIT_PBLANC_ID"),
            @JoinColumn(name = "QESTN_ID")
    })
    private QuestionEntity questionEntity;

    @Column(name="ANSWER", nullable = false)
    private String answer;

    @CreationTimestamp
    @Column(name="CREATE_DT", nullable = false)
    private LocalDateTime createDate; // 생성일시

    @UpdateTimestamp
    @Column(name="UPDT_DT")
    private LocalDateTime updateDate; // 수정일시

}

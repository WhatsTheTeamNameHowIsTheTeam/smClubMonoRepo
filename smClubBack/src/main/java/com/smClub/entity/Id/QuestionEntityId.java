package com.smClub.entity.Id;

import lombok.Data;

import java.io.Serializable;

@Data
public class QuestionEntityId implements Serializable {
    private String clubId;
    private String recruitmentId;
    private String questionId;
}

package com.smClub.entity.Id;

import lombok.Data;

import java.io.Serializable;

@Data
public class ApplicationEntityId implements Serializable {
    private String studentId;
    private QuestionEntityId questionEntity;
}

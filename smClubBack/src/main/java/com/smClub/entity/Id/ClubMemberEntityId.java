package com.smClub.entity.Id;

import lombok.Data;

import java.io.Serializable;

@Data
public class ClubMemberEntityId implements Serializable {
    private String clubEntity;
    private String userInfoEntity;
}

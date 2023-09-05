package com.smClub.entity.Id;

import com.smClub.entity.ClubEntity;
import lombok.Data;

import java.io.Serializable;

@Data
public class NoticeEntityId implements Serializable {
    private String clubEntity;
    private String noticeId;
}

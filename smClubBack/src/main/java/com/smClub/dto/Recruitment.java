
package com.smClub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Recruitment {
    @JsonProperty("notificationNumber")
    private String notificationNumber;
    @JsonProperty("club")
    private Club club;
    @JsonProperty("writer")
    private UserInfo writer;
    @JsonProperty("subject")
    private String subject;
    @JsonProperty("Content")
    private String Content;
    @JsonProperty("img")
    private String img;
    @JsonProperty("memberCnt")
    private int memberCnt;
    @JsonProperty("views")
    private int views;
    @JsonProperty("Recruitment")
    private boolean Recruitment;
    @JsonProperty("RecruitmentDate")
    private String RecruitmentDate;
    @JsonProperty("RecruitmentEndDate")
    private String RecruitmentEndDate;
    @JsonProperty("pullupDate")
    private String pullupDate;
    @JsonProperty("createDate")
    private String createDate;
    @JsonProperty("updateDate")
    private String updateDate;

    public Recruitment() {
    }
}


package com.smClub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ActDiary {
    @JsonProperty("actDiaryId")
    private String actDiaryId;

    @JsonProperty("club")
    private String club;

    @JsonProperty("writer")
    private UserInfo writer;

    @JsonProperty("subject")
    private String subject;

    @JsonProperty("content")
    private String content;

    @JsonProperty("img")
    private String img;

    @JsonProperty("memberCnt")
    private int memberCnt;

    @JsonProperty("Disclosure")
    private boolean Disclosure;

    @JsonProperty("actBeginDate")
    private String actBeginDate;

    @JsonProperty("actEndDate")
    private String actEndDate;

    @JsonProperty("createDate")
    private String createDate;

    @JsonProperty("updateDate")
    private String updateDate;

    public ActDiary() {
    }

}

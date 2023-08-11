
package com.smClub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Notice {
    @JsonProperty("notice")
    private String notice;
    @JsonProperty("club")
    private Club club;
    @JsonProperty("writer")
    private UserInfo writer;
    @JsonProperty("content")
    private String content;
    @JsonProperty("img")
    private String img;

    @JsonProperty("createDate")
    private String createDate;

    public Notice() {
    }
}

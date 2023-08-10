
package com.smClub.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Club {
    @JsonProperty("clubId")
    private String clubId;

    @JsonProperty("managerStudentInfo")
    private UserInfo managerStudentInfo;

    @JsonProperty("clubName")
    private String clubName;

    @JsonProperty("img")
    private String img;

    @JsonProperty("category")
    private String category;

    @JsonProperty("maxMemberCnt")
    private int maxMemberCnt;

    @JsonProperty("introContent")
    private String introContent;

    @JsonProperty("excellence")
    private boolean excellence;

    @JsonProperty("excellenceCnt")
    private int excellenceCnt;

    @JsonProperty("createDate")
    private String createDate;

    @JsonProperty("updateDate")
    private String updateDate;


    public Club() {
    }

}

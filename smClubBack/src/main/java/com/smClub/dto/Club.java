
package com.smClub.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Club {
    private String clubId;
    private UserInfo managerStudentInfo;
    private String clubName;
    private String img;
    private String category;
    private int maxMemberCnt;
    private String introContent;
    private boolean excellence;
    private int excellenceCnt;
    private String createDate;
    private String updateDate;

    public Club() {
    }

}

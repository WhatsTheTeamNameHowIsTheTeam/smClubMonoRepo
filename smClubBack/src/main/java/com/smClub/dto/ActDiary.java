
package com.smClub.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ActDiary {
    private String actDiaryId;
    private Club club;
    private UserInfo writer;
    private String subject;
    private String content;
    private String img;
    private int memberCnt;
    private boolean viewChk;
    private String actBeginDate;
    private String actEndDate;
    private String createDate;
    private String updateDate;

    public ActDiary() {
    }

}

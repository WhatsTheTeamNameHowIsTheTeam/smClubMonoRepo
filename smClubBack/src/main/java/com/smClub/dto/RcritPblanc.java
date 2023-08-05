
package com.smClub.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class RcritPblanc {
    private String notificationNumber;
    private Club club;
    private UserInfo writer;
    private String subject;
    private String Content;
    private String img;
    private int memberCnt;
    private int views;
    private boolean RCRIT;
    private String RCRITBeginDate;
    private String RCRITEndDate;
    private String pullupDate;
    private String createDate;
    private String updateDate;

    public RcritPblanc() {
    }
}

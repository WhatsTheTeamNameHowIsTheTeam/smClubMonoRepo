
package com.smClub.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Notice {
    private String notice;
    private Club club;
    private UserInfo writer;
    private String content;
    private String img;
    private String open;
    private String createDate;

    public Notice() {
    }
}

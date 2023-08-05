
package com.smClub.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Reqstdoc {
    private int qestionNumber;
    private RcritPblanc recruitment;
    private Club club;
    private String qestion;

    public Reqstdoc() {
    }

}

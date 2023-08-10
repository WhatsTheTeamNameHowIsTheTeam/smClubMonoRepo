
package com.smClub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Qestion {
    @JsonProperty("qestionNumber")
    private int qestionNumber;
    @JsonProperty("recruitment")
    private Recruitment recruitment;
    @JsonProperty("club")
    private Club club;
    @JsonProperty("qestion")
    private String qestion;

    public Qestion() {
    }

}

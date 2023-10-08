package com.smClub.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class MainResponseDto {

    private String clubName;
    private String img;
    private String subject;

}

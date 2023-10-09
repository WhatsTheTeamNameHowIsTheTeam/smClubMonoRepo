package com.smClub.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class ClubResponseDto {
    @Getter
    @AllArgsConstructor
    @Builder
    public static class Search{
        private String category;
        private String clubId;
        private String clubName;
        private String img;
        private String introContent;
    }


}

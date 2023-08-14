package com.smClub.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class ApplicationRequestDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Question{
        private List<String> question; // 질문
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Answer{
        private List<String> answer;
    }

    public class Create {
    }
}

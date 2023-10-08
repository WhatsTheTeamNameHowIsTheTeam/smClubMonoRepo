package com.smClub.controller.clubs;

import com.smClub.controller.main.MainController;
import com.smClub.dto.res.MainResponseDto;
import com.smClub.service.impl.ClubServiceImpl;
import com.smClub.service.impl.MainServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ClubController.class)
class ClubControllerTest {

    public final String TEST_IMAGE = "https://lily.sunmoon.ac.kr/images2/main/50th_logo_2.png";

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    ClubServiceImpl clubServiceImpl;

    // 연합회가 동아리 추가
    @Test
    void setClub() {
    }

    // 클럽 정보 가져오기, 내클럽 보기, 클럽 상세보기 등
    @Test
    @DisplayName("동아리 상세페이지")
    @WithMockUser
    void getClub() {
//        given(clubServiceImpl.getClub()).willReturn(
//                null
//        );
//
//        mockMvc.perform(
//                        get("/main"))
//                .andExpect(status().isOk())
//                .andDo(print());
//
//        verify(clubServiceImpl).getClub();
    }

    @Test
    void updateClub() {
    }

    @Test
    void deleteClub() {
    }

    @Test
    void getCategoryClubs() {
    }

    @Test
    void getRecruitmentBoards() {
    }

    @Test
    void getSearchedRecruitmentBoards() {
    }

    @Test
    void getSearchedClubs() {
    }
}
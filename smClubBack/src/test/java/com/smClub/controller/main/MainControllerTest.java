package com.smClub.controller.main;

import com.smClub.dto.res.MainResponseDto;
import com.smClub.service.impl.MainServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MainController.class)
class MainControllerTest {

    public final String TEST_IMAGE = "https://lily.sunmoon.ac.kr/images2/main/50th_logo_2.png";

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    MainServiceImpl mainServiceImpl;

    @Test
    @DisplayName("main 화면")
    @WithMockUser
    void getMain() throws Exception {
//        given(mainServiceImpl.getMain(null)).willReturn(
//                new ArrayList<MainResponseDto>(List.of(new MainResponseDto[]{
//                        new MainResponseDto("테스트동아리", TEST_IMAGE, "교내활동"),
//                        new MainResponseDto("테스트동아리", TEST_IMAGE, "교외활동")
//                }))
//        );
//
//        mockMvc.perform(
//                get("/main"))
//                .andExpect(status().isOk())
//                .andDo(print());
//
//        verify(mainServiceImpl).getMain(null);
    }

}
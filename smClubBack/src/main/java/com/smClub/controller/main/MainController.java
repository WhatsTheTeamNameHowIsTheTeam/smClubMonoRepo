package com.smClub.controller.main;

import com.smClub.dto.res.MainResponseDto;
import com.smClub.service.MainService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/main")
public class MainController {

    @Autowired
    private MainService mainService;

    //메인 페이지 이동
    @GetMapping
    public Map<String, Object> getMain(@RequestParam(required = false,value = "user") String clientUserId){
        log.info("prameter_clientUserId = {}", clientUserId);
        List<MainResponseDto> mainResponseDtoList = null;
        if(clientUserId != null){
            mainResponseDtoList = mainService.getMain(clientUserId);
        }
        Map<String, Object> map = new HashMap<>();

        if(mainResponseDtoList != null){
            map.put("clubActDiaries", mainResponseDtoList);
        } else {
            map.put("clubActDiaries", null);
        }

        return map;
    }
}

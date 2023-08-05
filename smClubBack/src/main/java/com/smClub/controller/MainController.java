package com.smClub.controller;

import com.smClub.dto.UserInfo;
import com.smClub.service.MainService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//restAPI 컨틀로러
@RestController
//@RequestMapping(value = "/")
public class MainController {

    @GetMapping(value = "/test")
    public void test(){
        System.out.println("메인 컨트롤러 테스트 메소드 동작, 요청이 왔습니다");
    }


}

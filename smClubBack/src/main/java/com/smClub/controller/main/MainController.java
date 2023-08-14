package com.smClub.controller.main;

import com.smClub.dto.UserInfo;
import com.smClub.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/main")
public class MainController {

    @Autowired
    private MainService mainService;

    //    데이터 받는 axios 통해 받고 그 usl로 바로 보내 node에서 res.data로 받아 뽑기 테스트
    @PostMapping(value = "/test")
    public Object test(@RequestBody UserInfo studentObj){
        System.out.println("메인 컨트롤러 테스트 메소드 동작, 요청이 왔습니다");
        System.out.println("받은 데이터는");
        System.out.println(studentObj);

        mainService.setNewUser(studentObj);

        return studentObj;
    }

    //메인 페이지 이동
    @GetMapping
    public void getMain(){

    }
}

package com.smClub.controller.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/{userId}")
public class UserNotificationController {

    //알림 목록 페이지
    @GetMapping("/notifications")
    public void getUserNotifications(){

    }


}

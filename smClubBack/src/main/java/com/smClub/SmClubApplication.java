
package com.smClub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SmClubApplication {
    public SmClubApplication() {
    }
    

    public static void main(String[] args) {
        SpringApplication.run(SmClubApplication.class, args);
        System.out.print("프로젝트 백엔드 실행");
    }
    
}

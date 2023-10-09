package com.smClub;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Configuration
@EnableWebSecurity // 모든 URL 요청이 spring security의 제어를 받도록 만드는 어노테이션
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/main").permitAll()
//                        .anyRequest().authenticated() // 모든 요청에 권한 설정
                                .anyRequest().permitAll()
                )
                .httpBasic(Customizer.withDefaults())
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login") // 권한인증이 안되어있을 때 권한인증하라고 리디렉션해주는 페이지
                        .failureHandler(new AuthenticationFailureHandler() {
                            @Override
                            public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
                                log.info("securityCofig : {}", request);
                                Map<String, String> failData = new HashMap<>();
                                failData.put("message", "선문대 이메일이 아닙니다.");

                                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); //  HTTP 응답 상태 코드를 401 Unauthorized 상태 코드로 설정하여 클라이언트에게 인증실패를 알림
                                response.setContentType("application/json;charset=UTF-8");
                                response.getWriter().write(objectMapper().writeValueAsString(failData));
                            }
                        })
                        .successHandler(new AuthenticationSuccessHandler() {
                            @Override
                            public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                                OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
                                log.info("[authentication] : {}", oAuth2User.getAttributes());
                                response.sendRedirect("/main?user=google_"+oAuth2User.getAttribute("sub"));
                            }
                        })
                )
                .logout(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public ObjectMapper objectMapper(){
        return new ObjectMapper();
    }

//    @Bean
//    public UserDetailsService userDetailsService(){
//        // 관리자 권한 등록
//        UserDetails admin = User.withUsername("admin")
//                .passwordEncoder(PasswordEncoderFactories.createDelegatingPasswordEncoder()::encode)
//                .password("1234").roles("ADMIN").build();
//
//        InMemoryUserDetailsManager userDetailsManager = new InMemoryUserDetailsManager();
//
//        userDetailsManager.createUser(admin);
//
//        return userDetailsManager;
//    }
}

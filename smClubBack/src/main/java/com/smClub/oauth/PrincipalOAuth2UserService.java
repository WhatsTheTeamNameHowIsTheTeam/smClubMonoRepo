package com.smClub.oauth;

import com.smClub.entity.UserInfoEntity;
import com.smClub.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PrincipalOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    // OAuth2User객체로 리턴하면 spring secuirty가 알아서 Session에 저장해줌
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oauth2User = super.loadUser(userRequest);

        log.info("[userRequest.getAccessToken.getTokenValue()] : {}", userRequest.getAccessToken().getTokenValue());
        log.info("[userRequest.getClientRegistration()] : {}", userRequest.getClientRegistration());
        log.info("[oauth2User.getAttributes()] : {}", oauth2User.getAttributes());

        UserInfoEntity userInfoEntity = null;

        try{
            String provider = userRequest.getClientRegistration().getClientName(); // google
            String providerId = oauth2User.getAttribute("sub"); // google 클라이언트 아이디
            String email = oauth2User.getAttribute("email");
            String clientUserId = provider+"_"+providerId;
            userInfoEntity = userRepository.findByClientUserId(clientUserId);

            if(userInfoEntity == null){
                if(!email.contains("sunmoon.ac.kr")){
                    throw new BadCredentialsException("선문대 이메일이 아닙니다."); // 선문대 이메일이 아니면 에러
                }
                userInfoEntity = UserInfoEntity.builder()
                        .clientUserId(clientUserId)
                        .userName(oauth2User.getAttribute("name"))
                        .img(oauth2User.getAttribute("picture"))
                        .email(email)
                        .userAuthor("ROLE_USER")
                        .build();
                userRepository.save(userInfoEntity); // google로 처음 로그인 하면 자동으로 회원가입
            }
        } catch (NullPointerException e){
            e.printStackTrace();
        }
        return new PrincipalDetails(userInfoEntity, oauth2User.getAttributes()); // Authentication 객체를 security session에 넣어줌
    }
}

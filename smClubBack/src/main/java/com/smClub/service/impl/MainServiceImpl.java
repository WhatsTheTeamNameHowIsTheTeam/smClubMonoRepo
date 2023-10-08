
package com.smClub.service.impl;

import com.smClub.dto.res.MainResponseDto;
import com.smClub.entity.ActDiaryEntity;
import com.smClub.entity.ClubEntity;
import com.smClub.entity.ClubMemberEntity;
import com.smClub.entity.UserInfoEntity;
import com.smClub.exception.NotClubException;
import com.smClub.repository.ActDiaryRepository;
import com.smClub.repository.ClubMemberRepository;
import com.smClub.repository.ClubRepository;
import com.smClub.repository.UserRepository;
import com.smClub.service.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private ActDiaryRepository actDiaryRepository;

    @Autowired
    private ClubMemberRepository  clubMemberRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<MainResponseDto> getMain(String clientUserId){
        log.info("parameter_clientUserId = {}", clientUserId);
        List<MainResponseDto> mainResponseDtoList = new ArrayList<>();

        try{
            UserInfoEntity userInfoEntity = userRepository.findByClientUserId(clientUserId);
            List<ClubMemberEntity> clubMemberEntities = clubMemberRepository.findAllByUserInfoEntity(userInfoEntity);

            List<ActDiaryEntity> actDiaryList = new ArrayList<>();
            if(clubMemberEntities.size() >= 1){
                for(ClubMemberEntity clubMemberEntity : clubMemberEntities){
                    actDiaryList.addAll(actDiaryRepository.findAllByClubEntity(clubMemberEntity.getClubEntity()));
                }
            }

            if(actDiaryList != null){
                for(ActDiaryEntity actDiaryEntity : actDiaryList){
                    MainResponseDto mainResponseDto = new MainResponseDto(
                            actDiaryEntity.getClubEntity().getClubName(),
                            actDiaryEntity.getImg(),
                            actDiaryEntity.getSubject());
                    mainResponseDtoList.add(mainResponseDto);
                }
            } else {
                throw new NotClubException();
            }
        } catch(NotClubException e) {
            return null;
        }


        return mainResponseDtoList;
    }
}



package com.smClub.service.impl;

import com.smClub.dto.req.ClubRequestDto;
import com.smClub.dto.res.ClubResponseDto;
import com.smClub.entity.ClubEntity;
import com.smClub.entity.UserInfoEntity;
import com.smClub.exception.ClubNotFoundException;
import com.smClub.repository.ClubRepository;
import com.smClub.repository.UserRepository;
import com.smClub.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ClubResponseDto.Info getClub(String clubId) {
        ClubResponseDto.Info clubInfo = new ClubResponseDto.Info();
        try{
            ClubEntity clubEntity = clubRepository.findByClubId(clubId);
            log.info("[getClub] : clubEntity = {}", clubEntity.getClubId());
            clubInfo = clubInfo.builder()
                    .clubId(clubEntity.getClubId())
                    .managerClientId(clubEntity.getUserInfoEntity().getClientUserId())
                    .clubName(clubEntity.getClubName())
                    .category(clubEntity.getCategory())
                    .img(clubEntity.getImg())
                    .introContent(clubEntity.getIntroContent())
                    .excellence(clubEntity.isExcellence())
                    .build();
            log.info("[getClub] : clubInfo = {}", clubInfo.getClubId());
        } catch(ClubNotFoundException e){
            log.error("[getClub] : ClubNotFoundException");
            return null;
        }
        return clubInfo;
    }

    @Override
    public ClubResponseDto.Update updateClub(String clubId, ClubRequestDto.Update clubUpdateRequestDto) {
        log.info("[updateClub] : clupUpdateRequestDto.getCategory = {}", clubUpdateRequestDto.getCategory());
        ClubEntity clubEntity = clubRepository.findByClubId(clubId);
        clubEntity = clubEntity.builder()
                        .clubId(clubUpdateRequestDto.getClubId())
                        .userInfoEntity(
                                userRepository.findByClientUserId(clubUpdateRequestDto.getManagerClientId())
                        )
                        .clubName(clubUpdateRequestDto.getClubName())
                        .img(clubUpdateRequestDto.getImg())
                        .category(clubUpdateRequestDto.getCategory())
                        .clubMemberCnt(clubUpdateRequestDto.getClubMemberCnt())
                        .introContent(clubUpdateRequestDto.getIntroContent())
                        .excellence(clubUpdateRequestDto.getExcellence())
                        .excellenceCnt(clubUpdateRequestDto.getExcellenceCnt())
                        .createDate(clubEntity.getCreateDate())
                        .updateDate(clubEntity.getUpdateDate())
                        .build();

        ClubEntity updateClubEntity = clubRepository.save(clubEntity);

        ClubResponseDto.Update clubUpdateResponseDto = new ClubResponseDto.Update(
                updateClubEntity.getClubId(),
                updateClubEntity.getUserInfoEntity().getClientUserId(),
                updateClubEntity.getClubName(),
                updateClubEntity.getImg(),
                updateClubEntity.getCategory(),
                updateClubEntity.getClubMemberCnt(),
                updateClubEntity.getIntroContent(),
                updateClubEntity.isExcellence(),
                updateClubEntity.getExcellenceCnt()
        );

        return clubUpdateResponseDto;
    }
}

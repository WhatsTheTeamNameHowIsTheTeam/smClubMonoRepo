
package com.smClub.service;

import com.smClub.dto.res.ClubResponseDto;
import com.smClub.dto.res.MainResponseDto;

import java.util.List;

public interface ClubService {
    ClubResponseDto getClub(String clubId);

    //clubList를 카테고리 별로 보내기 위해 clubService interface에 추상method 생성
    List<ClubResponseDto.CategorySearch> getClubList(String category);
}

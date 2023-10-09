
package com.smClub.service;

import com.smClub.dto.req.ClubRequestDto;
import com.smClub.dto.res.ClubResponseDto;

public interface ClubService {
    ClubResponseDto.Info getClub(String clubId);
    ClubResponseDto.Update updateClub(String clubId, ClubRequestDto.Update clubUpdateRequestDto);
}

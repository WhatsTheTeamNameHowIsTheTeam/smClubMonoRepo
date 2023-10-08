
package com.smClub.service;

import com.smClub.dto.res.MainResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MainService {

    List<MainResponseDto> getMain(String clientUserId);
}

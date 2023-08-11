
package com.smClub.service;

import com.smClub.dto.UserInfo;
import org.springframework.stereotype.Service;

@Service
public interface MainService {
    Object setNewUser(UserInfo studentObj);
}

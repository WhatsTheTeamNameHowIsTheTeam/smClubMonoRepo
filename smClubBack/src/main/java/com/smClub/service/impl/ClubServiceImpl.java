

package com.smClub.service.impl;

import com.smClub.dto.res.ClubResponseDto;
import com.smClub.entity.ClubEntity;
import com.smClub.repository.ClubRepository;
import com.smClub.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ClubServiceImpl implements ClubService {

    // 원리
    // 1. Entity를 List로 가지고온다.
    // 2. List들을 DTO에 for문 형식으로 DTO List에 담아서 return 해준다.
    @Autowired
    private ClubRepository clubRepository;


    @Override
    public ClubResponseDto getClub(String clubId) {
        return null;
    }


    //키워드 검색=-=================================
    @Override
    public List<ClubResponseDto.Search> searchByKeyword(String keyword){
        System.out.println("ClubServiceImpl 접근 → searchByKeyword 접근 → 받은 키워드 : " + keyword);

        List<ClubResponseDto.Search> clubResponseDtoList = new ArrayList<>();
        try{
            List<ClubEntity> clubEntityList = clubRepository.findByColumnNameContaining(keyword);
            if(clubEntityList != null){
                for(ClubEntity clubEntity : clubEntityList){
                    // ClubResponseDto.CategorySearch에 생성자를 호출해 넣어주는것이기때문에 순서와 갯수가 맞아야한다.
                    ClubResponseDto.Search clubResponseDto = new ClubResponseDto.Search(
                            clubEntity.getCategory(),
                            clubEntity.getClubId(),
                            clubEntity.getClubName(),
                            clubEntity.getImg(),
                            clubEntity.getIntroContent());
                    clubResponseDtoList.add(clubResponseDto); // 생성한 객체를 LIST에 추가
                }
                System.out.println(clubResponseDtoList.toString());
            }else{
                System.out.println("검색어가 없습니다.");
            }

        }catch (Exception e){
            System.out.println(e);
        }

        return clubResponseDtoList;
    }


    //카테고리 검색
    @Override
    public List<ClubResponseDto.Search> searchByCategory(String category){
        log.info("category getClubList in ClubServiceImpl : " + category);
        List<ClubResponseDto.Search> clubResponseDtoList = new ArrayList<>();

        try{    //CTG000일때 전체불러오고 아니라면 category값을넘겨 jap 에서 자동으로 가져옴
            if(category.equals("CTG000") ) {
                System.out.println("CTG000 전체 카테고리, 모든 동아리를 불러옵니다.");
                List<ClubEntity> clubEntityList = clubRepository.findAll();
                if(clubEntityList != null){
                    for(ClubEntity clubEntity : clubEntityList){
                        // ClubResponseDto.CategorySearch에 생성자를 호출해 넣어주는것이기때문에 순서와 갯수가 맞아야한다.
                        ClubResponseDto.Search clubResponseDto = new ClubResponseDto.Search(
                                clubEntity.getCategory(),
                                clubEntity.getClubId(),
                                clubEntity.getClubName(),
                                clubEntity.getImg(),
                                clubEntity.getIntroContent());
                        clubResponseDtoList.add(clubResponseDto); // 생성한 객체를 LIST에 추가
                    }
                    System.out.println(clubResponseDtoList.toString());
                }


            }else {
                System.out.println(category+" 카테고리, 지정 카테고리를 불러옵니다.");
                List<ClubEntity> clubEntityList = clubRepository.findAllByCategory(category); //카테고리가 해당되는 테이블을 불러옵니다.
                if(clubEntityList != null){
                    // 1. DTO 객체 생성 (사용 Dto 클래스에서 내부클래스로 나눠서 사용해준다.)
                    // 2. 필요한 데이터 get메서드 사용
                    // 3. DTO에 데이터들을 담아서 List에 add 한다
                    for(int i =0; i<clubEntityList.size(); i++){
                        ClubResponseDto.Search clubResponseDto = new ClubResponseDto.Search(
                                clubEntityList.get(i).getCategory(),
                                clubEntityList.get(i).getClubId(),
                                clubEntityList.get(i).getClubName(),
                                clubEntityList.get(i).getImg(),
                                clubEntityList.get(i).getIntroContent());
                        clubResponseDtoList.add(clubResponseDto);

                    }
                    System.out.println(clubResponseDtoList.toString());

                }

            }

        }catch (Exception e){
            log.info("카테고리 동아리 조회 중 예외 발생 : "+e.getMessage());
        }


        return clubResponseDtoList;
    }
}

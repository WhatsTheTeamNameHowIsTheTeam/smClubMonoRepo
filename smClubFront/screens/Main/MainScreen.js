// 메인페이지에서 동아리, 모집 공고 슬라이드 하는 페이지
import React,{useEffect, useState} from 'react';

import { 
    View, Text, Button, 
} from 'react-native';
import axios from "axios"

// ------------styles
import styles from '../../components/Style';



const reqestData = async() => {
    console.log("요청을 보냅니다")
    const object ={
        studentId :"2017225002",
        userName:"신정환",
        userId:"loginshin",
        userPw:"4865",
        img:"https://loginshin.tistory.com/manage/setting/blog",
        major:"computer",
        phoneNumber:"01040510673",
        email:"shinwjdghks@gmail.com",
        userAuthor:"srv001",
        notification:true,
        userAgree:true,
        userAgreeDate:"2023-08-06",
        createDate:"2023-07-07",
        updateDate:"2023-08-03"
    }

    
        await axios({
            method: "post",
            url: "http://192.168.0.33:8080/test",
            header: {
                "content-type":"application/json",
            },
            data:object
        })
        // 받오는 데이터
        .then((res)=>{
            console.log("res data를 받았습니다",res.data);
        })
        .catch((err)=>{
            console.log("데이터를 보내는데 실패했습니다")
        });
    }


const ClubMainScreen = (props) => {

    // //데이터 이동 테스트 코드
    // useEffect(()=> {
        
    // },[])

    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>
            <Button
                onPress={reqestData}
                title="요청 보내기"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"></Button>
        </View>
    );
};

export default ClubMainScreen;
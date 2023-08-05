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
    const text1 = "DTO"
    
        await axios({
            method: "get",
            // url: "http://localhost:8080/test",
            url: "http://192.168.0.49:8080/test",
            header: {
                "content-type":"multipart/form-data",
            },
            data:text1
        })
        .then((res)=>{
            url = res.data;
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
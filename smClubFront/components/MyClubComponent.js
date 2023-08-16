//동아리 목록에서 하나의 동아리 컴포넌트
import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


// --------------styles
import styles from './Style';

// --------------json data
import clubListDumy from '../Data/clubListDumy.json';


const MyClubComponent = (props) => {
    const [isadmin, setIsAdmin] = useState(props.isUnion); // 연합회 관리자인지 아닌지
    const [clubData, setClubData] = useState(props.clubData); // 동아리 전체 데이터
    // navigation 사용
    const navigation = useNavigation();

    // 글자가 길면 ...으로 표시
    const TruncatedText = ({ text, maxLength, size, weightBool }) => {
        var wb = "";

        if (weightBool) {
            wb = "bold";
        } else {
            wb = "normal";
        }


        if (text && text.length > maxLength) {
            return <Text style={{ fontSize: size, fontWeight: wb, padding: 5, }}>{text.slice(0, maxLength)}...</Text>;
        }
        return <Text style={{ fontSize: size, fontWeight: wb, padding: 5, }}>{text}</Text>;
    };



    return (
        <>
            <TouchableOpacity
                style={styles.ClubComponentView}
                onPress={() => {
                    console.log('동아리 컴포넌트 클릭')
                    navigation.navigate('MyClub', {
                        screen: 'ClubInfomationScreen',
                        // clubData : clubData,
                    })
                }}
            >
                <View style={styles.clubmark}>
                    <Image style={{ width: '100%', height: '60%', borderRadius:5, marginRight:10 }} source={{uri:clubData.img}} resizeMode='cover'/>
                </View>

                <View style={[styles.clubcontent, {width:'58%',}]}>
                    <Text style={styles.clubTypeText}>{clubData.category}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.clubName}>{clubData.clubName}</Text>
                        {
                            // clubData.베스트인지확인 함수?
                            // <Image style={{width:50, height:50, marginTop:8}} source={require("../assets/BestClub.png")}></Image>
                            // :
                            // null
                        }
                        <Image style={{width:20, height:20, marginTop:8}} source={require("../assets/BestClub.png")}></Image>
                    </View>
                    <TruncatedText text={clubData.introContent} maxLength={40} />
                </View>

                <TouchableOpacity 
                    style={{width:'10%',justifyContent:'center'}}
                    onPress={() => {
                        console.log('더보기 버튼 클릭')
                        if (isadmin){
                            props.newFunc(true, clubData)
                        }else{
                            props.ismodal(true)
                        }
                    }}
                >
                    <Image style={{ width: 30, height: 30, }} source={require('../assets/ThreeDotsVertical.png')} resizeMode='contain' />
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.line}></View>
        </>
    );
};

export default MyClubComponent;
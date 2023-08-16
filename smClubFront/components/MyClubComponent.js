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
    const [myclub, setMyclub] = useState(); // 내 동아리 목록
    const [appliClub, setAppliClub] = useState(); // 신청한 동아리 목록
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
                    <Image style={{ width: '50%', height: '50%', borderRadius:15 }} source={{uri:clubData.img}} resizeMode='contain' />
                </View>

                <View style={[styles.clubcontent,{width:'60%',}]}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.clubTypeText}>{clubData.category}    </Text>
                        <View style={styles.clubState}>
                            {
                                // 내가 속한동아리?
                                // <Text>회원</Text>
                                // :
                                // <Text>신청중</Text>
                            }
                            <Text>회원</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.clubName}>{clubData.clubName}</Text>
                    <TruncatedText text={clubData.introContent} maxLength={40} />
                </View>
                {
                    // 내가 속한 동아리?
                    //     <TouchableOpacity
                    //         style={{ width: '10%', justifyContent: 'center' }}
                    //         onPress={() => {
                    //             console.log('더보기 버튼 클릭')
                    //             props.ismodal(true)
                    //         }}
                    //     >
                    //         <Image style={{ width: 30, height: 30, }} source={require('../assets/ThreeDotsVertical.png')} resizeMode='contain' />
                    //     </TouchableOpacity>
                    // :
                    // null
                }
                <TouchableOpacity
                    style={{ width: '10%', justifyContent: 'center' }}
                    onPress={() => {
                        console.log('더보기 버튼 클릭')
                        props.ismodal(true)
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
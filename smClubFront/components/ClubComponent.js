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


const ClubComponent = (props) => {
    const [isrecruit, setIsRecruitement] = useState(true); // 이미지가 있는지 없는지
    const [isUnionAdmin, setIsUnionAdmin] = useState(props.isUnionAdmin); // 연합회 관리자인지 아닌지
    // const [clubData, setClubData] = useState(props.clubData); // 동아리 전체 데이터
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
                    {/* <Image style={{ width: '50%', height: '50%', borderRadius:15 }} source={require(clubData.img)} resizeMode='contain' /> */}
                </View>

                <View style={isrecruit ? styles.clubcontent : [styles.clubcontent, { width: '70%' }]}>
                    <Text style={styles.clubTypeText}>{clubData.category}</Text>
                    <Text style={styles.clubName}>{clubData.clubName}</Text>
                    <TruncatedText text={clubData.introContent} maxLength={40} style={styles.activityLogContents} />
                </View>


            {
                // 연합회 관리자일 경우
                isrecruit?
                    <TouchableOpacity 
                        style={styles.clublistisadmin}
                        onPress={()=>{
                            console.log('더보기')
                        }}
                    >
                        <Image style={{width:'50%', height:'50%'}} source={require('../assets/ThreeDotsVertical.png')} resizeMode='contain'/>
                    </TouchableOpacity> 
                    :
                    <>
                        {
                            // 모집중인 동아리일 경우
                            isrecruit ?
                                <View style={styles.clubisrecruit}>
                                    <Text style={styles.isrecruitText}>모집 중</Text>
                                </View>
                                :
                                null
                        }
                    </>
            }
            


            </TouchableOpacity>
            <View style={styles.line}></View>
        </>
    );
};

export default ClubComponent;
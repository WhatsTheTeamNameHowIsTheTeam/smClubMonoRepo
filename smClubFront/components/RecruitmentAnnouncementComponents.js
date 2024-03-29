// 하나의 모집 공고 컴포넌트
import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// styles
import styles from './Style';

const RecruitmentAnnouncementComponents = (props) => {
    // 서버에서 받은 데이터 값
    const [announcementData, setAnnouncementData] = useState(props.announcementData); // 동아리 활동 일지 리스트
    const [isImage, setIsImage] = useState(props.announcementData.img); // 이미지 여부
 
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
            return <Text style={{ fontSize: size, fontWeight: wb, }}>{text.slice(0, maxLength)}...</Text>;
        }
        return <Text style={{ fontSize: size, fontWeight: wb, }}>{text}</Text>;
    };


    return (
        <>
            <TouchableOpacity
                style={styles.notificationComponentView}
                onPress={() => {
                    // props를 통해서 값 보내주기 모든 데이터 전송
                    navigation.navigate('MyClub', {
                        screen: 'ClubMainScreen',
                        // clubData : clubData,
                    })
                    
                }}
            >
                <View style={styles.notificationClubNameView}>
                    <Text style={{ fontSize: 18, color: '#138CDB', fontWeight: 'bold' }}>{announcementData.clubName}</Text>
                    <Text style={{ fontSize: 14, marginLeft: 20 }}>{announcementData.category}</Text>
                </View>

                <View style={styles.notificationTitleView}>
                    <TruncatedText text={announcementData.subject} maxLength={14} size={21} weightBool={true} />
                    <Text style={{ fontSize: 10, color: 'gray', marginLeft: 20 }}>{announcementData.UPDT_DT}</Text>
                </View>

                <View style={styles.notificationContentsView}>
                    <TruncatedText text={announcementData.content} maxLength={40} size={16} weightBool={false} />
                </View>

                <View style={styles.notificationInfoView}>
                    <View style={{ flexDirection: 'row', alignItems:'center'}}>
                        <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/favicon.png')} resizeMode='contain' />
                        <Text style={{ fontSize: 15 }}>{announcementData.views}</Text>
                        {
                            isImage ?
                                <>
                                    <Text>    | </Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: 10, }} source={require('../assets/CardImage.png')} resizeMode='contain' />
                                </>
                                :
                                null
                        }
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15 }}>신청자 수 : </Text>
                        <Text style={{ fontSize: 15 }}>{announcementData.memberCnt}</Text>
                    </View>
                </View>

            </TouchableOpacity>
            <View style={styles.Line} />
        </>
    );
};

export default RecruitmentAnnouncementComponents;
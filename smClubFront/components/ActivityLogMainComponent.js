// 하나의 활동 일지 컴포넌트
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

// --------------styles
import styles from './Style';


const ActivityLogMainComponent = (props) => {
    // 서버에서 받은 데이터 값
    const [isImage, setIsImage] = useState(props.clubAct.img); // 동아리 활동 일지 리스트
    const [clubData, setClubData] = useState(props.clubAct); // 동아리 정보
    // page 이동
    const navigation = useNavigation();


    // 글자가 길면 ...으로 표시
    const TruncatedText = ({ text, maxLength, size, weightBool, marginT }) => {
        var wb = "";

        if (weightBool) {
            wb = "bold";
        } else {
            wb = "normal";
        }

        if (text && text.length > maxLength) {
            return <Text style={{ fontSize: size, fontWeight: wb, marginTop:marginT }}>{text.slice(0, maxLength)}...</Text>;
        }
        return <Text style={{ fontSize: size, fontWeight: wb, marginTop:marginT }}>{text}</Text>;
    };


    return (
        <TouchableOpacity
            style={styles.activityLogComponentView}
            onPress={() => {
                navigation.navigate('MyClub', {
                    screen: 'ClubMainScreen'
                })
            }}
        >
            {
                isImage ?
                    <>
                        <View style={styles.activityLogImageView}>
                            {/* <Image style={{ width: '100%', height: '100%' }} source={require(clubData.img[0])} resizeMode='contain' /> */}
                        </View>
                        <View style={isImage ? styles.activityLogTextView : [styles.activityLogTextView, { width: '95%' }]}>
                            <Text style={styles.activityLogClubName}>동아리명</Text>
                            <TruncatedText text={clubData.subject} maxLength={20} size={17} marginT={8} weightBool={true}/>
                            <TruncatedText text={clubData.content} maxLength={30} size={15} marginT={8}/>
                        </View>
                        <View style={styles.activityLogMoreImage}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ArrowRightShort.png')} resizeMode='contain' />
                        </View>
                    </>
                    :
                    <>
                        <View style={isImage ? styles.activityLogTextView : [styles.activityLogTextView, { width: '95%' }]}>
                            <Text style={styles.activityLogClubName}>동아리명</Text>
                            <Text style={styles.activityLogTitleText}>{clubData.subject}</Text>
                            <TruncatedText text={clubData.content} maxLength={40} marginT={8}></TruncatedText>
                        </View>
                        <View style={styles.activityLogMoreImage}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ArrowRightShort.png')} resizeMode='contain' />
                        </View>
                    </>
            }
        </TouchableOpacity>
    );
};

export default ActivityLogMainComponent;
// 하나의 활동 일지 컴포넌트
import React, { useState }from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

// --------------styles
import styles from './Style';


const ActivityLogMainComponent = (props) => {
    // 서버에서 받은 데이터 값
    //const [data, setData] = useState(props.data); // 동아리 활동 일지 리스트
    const [isImage, setIsImage] = useState(true); // 이미지 여부

    // page 이동
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
        <TouchableOpacity
            style={styles.activityLogComponentView}
            onPress={() => {
                console.log('나의 동아리의 활동 일지 컴포넌트') // 메인페이지에서 보이는 활동일지 컴포넌트
                navigation.navigate('MyClub',{
                    screen : 'ClubActivityLogScreen'
                })
            }}
        >
            {
                isImage ?
                    <View style={styles.activityLogImageView}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/favicon.png')} resizeMode='contain' />
                    </View>
                    :
                    // 없으면 null
                    null
            }
            <View style={isImage? styles.activityLogTextView : [styles.activityLogTextView,{width:'95%'}]}>
                <Text style={styles.activityLogClubName}>동아리명</Text>
                <Text style={styles.activityLogTitleText}>활동일지 제목</Text>
                <TruncatedText text={'서버에서 받은 값'} maxLength={40} style={styles.activityLogContents}></TruncatedText>
            </View>
            <View style={styles.activityLogMoreImage}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ArrowRightShort.png')} resizeMode='contain' />
            </View>


        </TouchableOpacity>
    );
};

export default ActivityLogMainComponent;
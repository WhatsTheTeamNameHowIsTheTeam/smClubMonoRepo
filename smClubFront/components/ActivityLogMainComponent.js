// 하나의 활동 일지 컴포넌트
import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
}
from 'react-native';
import styles from './Style';

const ActivityLogMainComponent = () => {

    const TruncatedText = ({ text, maxLength }) => {
        if (text && text.length > maxLength) {
            return <Text>{text.slice(0, maxLength)}...</Text>;
        }
        return <Text>{text}</Text>;
    };


    return (
        <TouchableOpacity
            style={styles.activityLogComponentView} 
            onPress={() => {
                console.log('나의 동아리의 활동 일지 컴포넌트') // 메인페이지에서 보이는 활동일지 컴포넌트
            }}
        >
            <View style={styles.activityLogImageView}>
                <Image style={{ width:'100%', height:'100%' }} source={require('../assets/favicon.png')} resizeMode='contain'/>
            </View>
            <View style={styles.activityLogTextView}>
                <Text style={styles.activityLogClubName}>동아리명</Text>
                <Text style={styles.activityLogTitleText}>활동일지 제목</Text>
                <TruncatedText text={'서버에서 받은 값'} maxLength={40} style={styles.activityLogContents}></TruncatedText>
            </View>
            <View style={styles.activityLogMoreImage}>
                <Image style={{ width:'100%', height:'100%' }} source={require('../assets/ArrowRightShort.png')} resizeMode='contain'/>
            </View>
        </TouchableOpacity>
    );
};

export default ActivityLogMainComponent;
// 하나의 공지사항 컴포넌트
import React, { useEffect, useState }from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';

// styles
import styles from './Style';

const NotificationComponent = () => {
    // 서버에서 받은 데이터 값
    //const [data, setData] = useState(props.data); // 동아리 활동 일지 리스트
    const [isImage, setIsImage] = useState(true); // 이미지 여부
    //const image = props.data.image;// 이미지 데이터

    // 이미지 여부에 따라 보이는 게 다름
    // if (image) {
    //     setIsImage(true);
    // } else {
    //     setIsImage(false);
    // }

    // 글자가 길면 ...으로 표시
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
            {
                // 이미지가 있으면
                isImage ?
                    <>
                        <View style={styles.activityLogImageView}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/favicon.png')} resizeMode='contain' />
                        </View>
                        <View style={styles.activityLogTextView}>
                            <Text style={styles.activityLogClubName}>동아리명</Text>
                            <Text style={styles.activityLogTitleText}>활동일지 제목</Text>
                            <TruncatedText text={'서버에서 받은 값'} maxLength={40} style={styles.activityLogContents}></TruncatedText>
                        </View>
                        <View style={styles.activityLogMoreImage}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ArrowRightShort.png')} resizeMode='contain' />
                        </View>
                    </>
                    :  
                    // 이미지가 없으면
                    <>
                        <View style={styles.activitylogNoImage}>
                            <Text style={styles.activityLogClubName}>동아리명</Text>
                            <Text style={styles.activityLogTitleText}>활동일지 제목</Text>
                            <TruncatedText text={'서버에서 받은 값'} maxLength={40} style={styles.activityLogContents}></TruncatedText>
                        </View>
                        <View style={styles.activityLogMoreImage}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ArrowRightShort.png')} resizeMode='contain' />
                        </View>
                    </>
                    
                  
                    
            }

        </TouchableOpacity>
    );
};

export default NotificationComponent;
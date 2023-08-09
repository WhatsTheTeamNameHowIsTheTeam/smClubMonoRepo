// 하나의 모집 공고 컴포넌트
import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';

// styles
import styles from './Style';

const RecruitmentAnnouncementComponents = (props) => {
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
            style={styles.notificationComponentView}
            onPress={() => {
                console.log('나의 동아리의 활동 일지 컴포넌트') // 메인페이지에서 보이는 활동일지 컴포넌트
            }}
        >
            <View style={styles.notificationClubNameView}>
                <Text style={{ fontSize: 20, color: '#138CDB', fontWeight: 'bold' }}>동아리명</Text>
                <Text style={{ fontSize: 16, marginLeft: 20 }}>분과</Text>
            </View>

            <View style={styles.notificationTitleView}>
                <TruncatedText text={'모집 공고 제목'} maxLength={20} size={22} weightBool={true} />
                <Text style={{ fontSize: 14, color: 'gray', marginLeft: 20 }}>08.09</Text>
            </View>

            <View style={styles.notificationContentsView}>
                <TruncatedText text={'모집 공고 내용모집 공고 내용모집 공고 내용모집 공고 내용모집 공고 내용모집 공고 내용'} maxLength={20} size={18} weightBool={false} />
            </View>

            <View style={styles.notificationInfoView}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/favicon.png')} />
                    <Text style={{ fontSize: 18 }}>25</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18 }}>신청자 수 : </Text>
                    <Text style={{ fontSize: 18 }}>25</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
};

export default RecruitmentAnnouncementComponents;
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';
import RenderHTML from 'react-native-render-html';

// 컴포넌트
import styles from '../Style';
import ClubInfomationComponent from '../ClubInfomationComponent';

// 더미 데이터
const dummyData = {
    clubMainImage_URL: 'https://via.placeholder.com/350x150',
    clubIcon_URL: 'https://via.placeholder.com/70',
    clubType: '문화 동아리',
    clubName: '예술의 신',
    clubPromotionHTMLContent: '<h1>안녕하세요! 예술의 신 동아리입니다.</h1>',
};

const ClubInfomationScreenComponent = () => {
    const [clubData, setClubData] = useState(null);
    const [createActivity, setCreateActivity] = useState(null);
    const deviceWindowWidth = Dimensions.get('window').width;

    useEffect(() => {
        // axios.get('서버 주소/api/club')
        //     .then(response => {
        //         // Uncomment the following line to use the actual API data.
        //         // setClubData(response.data);
        //
        //         // Comment the following line if you want to use the actual API data.
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        setClubData(dummyData);
    }, []);

    if (createActivity) {
        return (
            <View style={{ marginVertical: 15, height: '98%', }}>
                {createActivity && (
                    <ClubInfomationComponent />
                )}
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={() => setCreateActivity(null)}
                >
                    <Text>뒤로 가기</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <>
                {clubData ? (
                    <ScrollView>
                        <View style={styles.clubsAndTypeContainer}>
                            <View style={styles.clubActivityLogContainer}>
                                {/* 동아리 메인 사진 */}
                                {clubData && (
                                    <Image style={{ width: '100%', height: '20%', }} source={{ uri: clubData.clubMainImage_URL }} resizeMode='contain' />
                                )}

                                <View style={styles.clubNameContainer}>
                                    {/* 동아리 아이콘 */}
                                    {clubData && (
                                        <Image style={{ width: 70, height: 70, borderRadius: 100, marginRight: 10 }} source={{ uri: clubData.clubIcon_URL }} resizeMode='contain' />
                                    )}

                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                        {clubData && (
                                            <>
                                                <Text style={styles.clubTypeText}>{clubData.clubType}</Text>
                                                <Text style={styles.clubNameText}>{clubData.clubName}</Text>
                                            </>
                                        )}
                                    </View>
                                </View>

                                <View style={styles.clubPromotionContainer}>
                                    {clubData && (
                                        <RenderHTML contentWidth={deviceWindowWidth} source={{ html: clubData.clubPromotionHTMLContent }} />
                                    )}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>로딩 중...</Text>
                    </View>
                )}

                <View style={styles.editButtonContainer}>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => setCreateActivity(true)}
                    >
                        <Text style={styles.editButtonText}>편집하기</Text>
                    </TouchableOpacity>
                </View>
            </>
        )

    }

};

export default ClubInfomationScreenComponent;

// 동아리 메인-정보 페이지 컴포넌트
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';


// --------------Components
import styles from '../Style';
import ClubWriteInformationComponent from '../ClubWriteInformationComponent';

const ClubInfomationScreenComponent = () => {
    const [createActivity, setCreateActivity] = useState(null);


    if (createActivity) { // 지원자 페이지
        return (
            <View style={{ marginVertical: 15, height: '98%', }}>
                {createActivity && (
                    <ClubWriteInformationComponent />
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
                <ScrollView>
                    <View style={styles.clubsAndTypeContainer}>
                        <View style={styles.clubActivityLogContainer}>
                            <Image style={{ width: '100%', height: '20%', }} source={require('../../assets/icon.png')} resizeMode='contain' />

                            <View style={styles.clubNameContainer}>
                                <Image style={{ width: 70, height: 70, borderRadius: 100, marginRight: 10 }} source={require('../../assets/icon.png')} resizeMode='contain' />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <Text style={styles.clubTypeText}>종류</Text>
                                    <Text style={styles.clubNameText}>동아리 명</Text>
                                </View>
                            </View>

                            <View style={styles.clubPromotionContainer}>
                                <Text >동아리 홍보 내용</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
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
    };

};

export default ClubInfomationScreenComponent;
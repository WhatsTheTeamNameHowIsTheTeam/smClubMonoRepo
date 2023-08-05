//마이페이지
// 모듈
import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// 파일
import styles from '../../components/Style'

const MyPageScreen = ({ navigation }) => {

    //탈퇴 확인
    const handleButtonPress = () => {
        Alert.alert(' 탈퇴하실건가요?', '동아리 가입 내역이 전부 사라집니다.', [
            {
                text: '취소',
                style: 'cancel',
            },
            { text: '확인' },
        ]);
    }
    return (

        <View style={styles.login_container}>

            {/* 내정보 */}
            <View style={MyPagestyles.myInfo} >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginRight: 10
                }}>
                    <TouchableOpacity>
                        <View style={MyPagestyles.profile}></View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'column',
                    flex: 2,
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 20, marginBottom: 8, }}>김세현</Text>
                    <Text style={{ marginBottom: 5, }}>신소재공학과</Text>
                    <Text>010-2232-2920</Text>
                </View>
            </View>

            {/* 약관 및 설정 */}
            <View style={{ flex: 2.5 }}>

                <TouchableOpacity>
                    <View style={styles.setup}>
                        <Text style={styles.setupText} >MY 동아리</Text>
                        <View style={styles.separator} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.setup}>
                        <Text style={styles.setupText}>MY 동아리 활동 일지</Text>
                        <View style={styles.separator} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.setup}>
                        <Text style={styles.setupText}>동아리 가입 신청 내역</Text>
                        <View style={styles.separator} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.setup}>
                        <Text style={styles.setupText}>약관 및 정책</Text>
                        <View style={styles.separator} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.setup}>
                        <Text
                            style={styles.setupText}
                            onPress={handleButtonPress}
                        >
                            어플 탈퇴하기
                        </Text>
                        <View style={styles.separator} />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const MyPagestyles = StyleSheet.create({
    myInfo: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        padding: '7%',
    },
    profile: {
        backgroundColor: 'white',
        width: 90,
        height: 90,
        borderRadius: 10,
    }
});

export default MyPageScreen;
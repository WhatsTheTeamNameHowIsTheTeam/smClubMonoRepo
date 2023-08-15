//마이페이지
// 모듈
import React from 'react';
import {
    View, Image, Text,
    StyleSheet, TouchableOpacity,
    Alert, Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyPageScreen = ({ navigation }) => {

    //탈퇴 확인
    const secessionButtonPress = () => {
        Alert.alert(' 탈퇴하실건가요?', '동아리 가입 내역이 전부 사라집니다.', [
            {
                text: '취소',
                style: 'cancel',
            },
            { text: '확인' },
        ]);
    }

    //로그아웃 확인
    const logoutButtonPress = () => {
        Alert.alert(' 로그아웃 하실건가요?', '', [
            {
                text: '취소',
                style: 'cancel',
            },
            { text: '확인', onPress: () => { logout(); } },
        ]);
    }

    // 로그아웃
    const logout = async () => {
        try {
            AsyncStorage.clear();
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.myPageContainer}>
                <View style={styles.profileView}>
                    <View style={styles.profile}>
                        <View style={{ width: '40%', height: '85%', }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/favicon.png')} resizeMethod='resize' />
                        </View>
                        <View style={{ width: '60%', height: '85%', justifyContent: 'center', paddingLeft: 15, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 3 }}>Name</Text>
                            <Text style={{ fontSize: 18, marginBottom: 3 }}>학과</Text>
                            <Text style={{ fontSize: 18, marginBottom: 3 }}>학번</Text>
                            <Text style={{ fontSize: 18, marginBottom: 3 }}>전화번호</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, }}>프로필 수정</Text>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/ArrowRightShort.png')} />
                    </View>
                </View>

                <View style={styles.functionView}>
                    <View style={styles.subView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>동아리</Text>
                        {/* 동아리 목록 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {

                            }}>
                            <Text style={{ fontSize: 20 }}>동아리 목록</Text>
                        </TouchableOpacity>


                        {/* My 동아리 활동 일지 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {

                            }}>
                            <Text style={{ fontSize: 20 }}>My 동아리 활동 일지</Text>
                        </TouchableOpacity>


                        {/* 동아리 가입 신청 내역 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {

                            }}>
                            <Text style={{ fontSize: 20 }}>동아리 가입 신청 내역</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.subView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>기타</Text>
                        {/* 약관 및 정책 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {

                            }}>
                            <Text style={{ fontSize: 20 }}>약관 및 정책</Text>
                        </TouchableOpacity>



                        {/* 로그아웃 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                logoutButtonPress();
                            }}>
                            <Text style={{ fontSize: 20 }}>로그아웃</Text>
                        </TouchableOpacity>


                        {/* 탈퇴하기 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                secessionButtonPress();
                            }}>
                            <Text style={{ fontSize: 20 }}>탈퇴하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
    },
    myPageContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    profileView: {
        width: '90%',
        height: '20%',
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    profile: {
        flexDirection: 'row',
        height: '80%',
        width: '80%',
        alignItems: 'flex-end'
    },
    modifyProfile: {
        flexDirection: 'row',
        height: '20%',
        width: '90%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    functionView: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    subView: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        padding: 15,
        marginBottom: 20,
    },
    setup: {
        width: '100%',
        marginTop: 15,
    },
});

export default MyPageScreen;
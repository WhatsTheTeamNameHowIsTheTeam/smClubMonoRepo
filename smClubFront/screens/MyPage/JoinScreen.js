// 회원가입
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const JoinScreen = () => {
    return (
        // 회원정보 입력
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>

                    <TextInput
                        style={styles.input}
                        placeholder="아이디"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="비밀번호"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="비밀번호 확인"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="이름"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="학번"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="학과"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="전공"
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="연락처"
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="이용약관 동의"
                    />



                </View ></ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    scrollView: {
        backgroundColor: '#D9D9D9',
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 10,
    },
    input: {
        height: 55,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginTop: 30,
        paddingHorizontal: 20,
    },
});
export default JoinScreen;
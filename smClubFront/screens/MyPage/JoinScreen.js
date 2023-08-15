// 회원가입
// 모듈
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
    TouchableWithoutFeedback, View, Text,
    TextInput, TouchableOpacity,
    ScrollView, Alert, StyleSheet, Dimensions
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const JoinScreen = ({ navigation }) => {

    const [idTextInput, setIdTextInput] = useState(""); //  ID
    const [pwTextInput, setPwTextInput] = useState(""); //  PW
    const [pwConfirmTextInput, setPwConfirmTextInput] = useState(""); //  PWConfirm
    const [nameTextInput, setNameTextInput] = useState(""); //  이름
    const [studentIdTextInput, setStudentIdTextInput] = useState(""); //  학번
    const [majorTextInput, setmajorTextInput] = useState(""); //  전공
    const [contactTextInput, setContactTextInput] = useState(""); //  연락처
    const [termsAgreed, setTermsAgreed] = useState(false); // 동의서

    const majors = [
        '전공을 선택해주세요',
        '컴퓨터공학',
        '전자공학',
        '경영학',
        '사회학',
        '컴퓨터공학',
        '전자공학',
        '경영학',
        '사회학',
    ];

    const toggleMajorSelection = (index, value) => {
        setmajorTextInput(value);
    };

    // 회원가입 버튼 함수
    const handleSubmit = () => {
        if (!idTextInput || !pwTextInput || !pwConfirmTextInput ||
            !nameTextInput || !studentIdTextInput || !majorTextInput || !contactTextInput) {
            Alert.alert('오류', '모든 필드를 기입해주세요.');
            return;
        }

        if (pwTextInput !== pwConfirmTextInput) {
            Alert.alert('오류', '비밀번호와 비밀번호 확인란이 일치하지 않습니다.');
            return;
        }

        if (!termsAgreed) {
            Alert.alert('오류', '이용약관에 동의해주세요.');
            return;
        }

        Alert.alert('회원가입 성공', '회원가입이 성공적으로 완료되었습니다.');
        navigation.navigate('LoginScreen');
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container}>
                <View style={styles.joinContainer}>


                </View>

            </View>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View>

                        <TextInput
                            style={styles.input}
                            onChangeText={setIdTextInput}
                            placeholder="아이디"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setPwTextInput}
                            placeholder="비밀번호"
                            secureTextEntry
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setPwConfirmTextInput}
                            placeholder="비밀번호 확인"
                            secureTextEntry
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setNameTextInput}
                            placeholder="이름"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setStudentIdTextInput}
                            placeholder="학번"
                            keyboardType="numeric"
                        />

                        <ModalDropdown
                            initialScrollIndex={0}
                            style={styles.input}
                            options={majors}
                            defaultValue={majors[0]}
                            onSelect={toggleMajorSelection}
                            textStyle={styles.inputText}
                            dropdownTextStyle={styles.inputText}
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setContactTextInput}
                            placeholder="연락처"
                            keyboardType="phone-pad"
                        />

                        <View style={styles.input}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>이용약관에 동의합니다.</Text>
                                <Checkbox style={styles.checkbox}
                                    // disabled 
                                    value={termsAgreed}
                                    onValueChange={setTermsAgreed}
                                />
                            </View>
                        </View>

                    </View >

                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.signUp}
                    >
                        <Text style={{ color: 'white' }}>회원가입</Text>
                    </TouchableOpacity>
                </ScrollView>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgrouncColor: 'white',
    },
    joinContainer: {
        width:'100%',
        height:'100%',
        alignItems:'center',
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
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 14,
    },
    checkbox: {
        margin: 8,
    },
    signUp: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 100,
        marginTop: 30,
    },
});
export default JoinScreen;
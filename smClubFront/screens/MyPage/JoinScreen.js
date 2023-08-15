// 회원가입
// 모듈
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
    TouchableWithoutFeedback, View, Text,
    TextInput, TouchableOpacity, SafeAreaView,
    ScrollView, Alert, StyleSheet, Dimensions,
    KeyboardAvoidingView, Keyboard,
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

    //회원가입 버튼 활설화
    const [okPw, setOkPw] = useState(false);
    const [okPwEq, setOkPwEq] = useState(false);
    const [okName, setOkName] = useState(false);
    const [okPhone, setOkPhone] = useState(false);
    const [okMail, setOkMail] = useState(false);
    const [okMajor, setOkMajor] = useState(false);

    //정규식 메시지 check
    const [errorMessageid, setErrorMessageID] = useState(""); //id
    const [errorMessagePw, setErrorMessagePw] = useState(""); // pw
    const [errorMessagePwEq, setErrorMessageEq] = useState(""); // pwEq
    const [errorMessageName, setErrorMessageName] = useState(""); // name
    const [errorMessagePhone, setErrorMessagePhone] = useState(""); // phone
    const [errorMessageMajor, setErrorMessageMajor] = useState(""); // major




    // 버튼 활성화 Sign Up
    const regiButton = () => {
        return false;
        // if ( okMail & okPw & okPwEq & okName & okPhone & okMajor == true) {
        //     return false;
        // }
        // return true;
    }


    //패스워드 정규식
    const validatePw = pw => {
        const regex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        return regex.test(pw);
    }

    //패드워드 같은지
    const validateEq = eq => {
        if (eq === password) { return true; }
        else { return false; }
    }

    //이름 정규식
    const validateName = name => {
        const regex = /^[a-zA-Zㄱ-힣]{1,20}$/;
        return regex.test(name);
    }

    //전화번호 정규식
    const validatePhone = phone => {
        const regex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        return regex.test(phone);
    }

    // 이메일 정규식
    const validateMail = mail => {
        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return regex.test(mail);
    }

    // 자동 하이픈 생성
    const autoHyphen = (target) => {
        return target.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    }


    //아이디 핸들러
    const handleIdChange = (id) => {
        const changeID = removespace(id)
        setId(changeID)
        setErrorMessageID(
            validateId(changeID) ? "올바른 ID 형식입니다." : "영문로 시작하는 영문자 또는 숫자 4~12자리"
        );

    };

    //비밀번호 핸들러
    const handlePwChange = (pw) => {
        const changedPw = removespace(pw);
        setPassword(changedPw);
        setErrorMessagePw(
            validatePw(changedPw) ? "올바른 비밀번호 형식입니다." : "영문, 숫자 조합 8~16자리"
        );
        setOkPw(validatePw(changedPw));
    }

    //비밀번호 확인 핸들러
    const handlePwEqChange = (eq) => {
        const changedPwEq = removespace(eq);
        setPasswordCheck(changedPwEq);
        setErrorMessageEq(
            validateEq(changedPwEq) ? "비밀번호가 일치합니다." : "비밀번호가 다릅니다!"
        );
        setOkPwEq(validateEq(changedPwEq));
    }
    //이름 핸들러
    const handleNameChange = (name) => {
        const changedName = removespace(name);
        setName(changedName);
        setErrorMessageName(
            validateName(changedName) ? "올바른 이름 형식입니다." : "이름을 올바르게 입력해주세요."
        );
        setOkName(validateName(changedName));
    }

    //전화번호 핸들러
    const handlePhoneChange = (call) => {
        const changedPhone = autoHyphen(call);
        setPhone(changedPhone);
        setErrorMessagePhone(
            validatePhone(changedPhone) ? "올바른 휴대전화 번호입니다" : "올바른 휴대전화 번호가 아닙니다."
        );
        setOkPhone(validatePhone(changedPhone));
    }


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
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={styles.joinContainer}>
                    {/* ----상단 로고---- */}
                    <View style={styles.logoView}>
                        <Text>로고</Text>
                    </View>


                    {/* ----회원가입---- */}
                    <View style={styles.scrollView}>
                        <ScrollView>
                            {/* ----아이디---- */}
                            <View style={styles.inputViewID}>
                                <TextInput
                                    style={styles.inputTextID}
                                    placeholder="ID"
                                    onChangeText={text => setIdTextInput(text)}
                                />
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: '25%', height: 55, }}>
                                    <TouchableOpacity style={styles.checkIDView}>
                                        <Text>중복 확인</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <Text style={styles.errorText}> </Text>

                            {/* ----비밀번호---- */}
                            <TextInput
                                style={styles.inputText}
                                placeholder="Password"
                                onChangeText={text => setPwTextInput(text)}
                                secureTextEntry={true}
                            />
                            <Text style={styles.errorText}></Text>

                            {/* ----비밀번호 확인---- */}
                            <TextInput
                                style={styles.inputText}
                                placeholder="Password check"
                                onChangeText={text => setPwTextInput(text)}
                                secureTextEntry={true}
                            />
                            <Text style={styles.errorText}></Text>

                            {/* ----이름---- */}
                            <TextInput
                                style={styles.inputText}
                                placeholder="Name"
                                onChangeText={text => setPwTextInput(text)}
                                secureTextEntry={true}
                            />
                            <Text style={styles.errorText}></Text>

                            {/* ----학번---- */}
                            <TextInput
                                style={styles.inputText}
                                placeholder="Student ID"
                                onChangeText={text => setPwTextInput(text)}
                                secureTextEntry={true}
                            />
                            <Text style={styles.errorText}></Text>

                            {/* ----전공---- */}
                            <TextInput
                                style={styles.inputText}
                                placeholder="Major"
                                onChangeText={text => setPwTextInput(text)}
                                secureTextEntry={true}
                            />
                            <Text style={styles.errorText}></Text>

                            {/* ----연락처---- */}
                            <TextInput
                                style={styles.inputText}
                                placeholder="Phone Number"
                                onChangeText={text => setPwTextInput(text)}
                                secureTextEntry={true}
                            />
                            <Text style={styles.errorText}></Text>

                        </ScrollView>

                        {/* ----이용약관 동의---- */}
                        <View style={{ width: '85%', height: '5%', flexDirection: 'row', marginTop: 5 }}>
                            <Checkbox style={styles.checkbox}
                                // disabled 
                                value={termsAgreed}
                                onValueChange={setTermsAgreed}
                            />
                            <Text>이용약관에 동의합니다.</Text>
                        </View>



                        {/* ----회원가입 버튼---- */}
                        <TouchableOpacity style={regiButton()?[styles.loginBtn,{opacity:0.8}]:styles.loginBtn}
                            onPress={handleSubmit}
                            disabled={regiButton()}
                        >
                            <Text style={regiButton()?[styles.buttonText,{color:'gray'}]:styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                        {/* ----로그인 버튼---- */}
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => { navigation.navigate("LoginScreen") }}
                        >
                            <Text style={[styles.buttonText,{fontWeight:'normal', color:'gray'}]}>Login</Text>
                        </TouchableOpacity>

                    </View>

                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
    },
    joinContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    logoView: {
        marginTop: 10,
        width: '60%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        marginBottom: 10,
    },
    scrollView: {
        width: '85%',
        height: '75%',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
    },
    inputViewID: {
        width: 270,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    inputTextID: {
        width: '68%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    checkIDView: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    checkbox:{
        marginLeft:10,
        marginRight:5,
    },
    loginBtn:{
        width: '30%',
        height: 30,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
    },

});
export default JoinScreen;
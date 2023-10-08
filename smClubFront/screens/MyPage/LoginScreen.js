//로그인
// 모듈
import { useState } from "react";
import {
    Text, View, TextInput, Keyboard,
    Dimensions, TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {

    const [idTextInput, setIdTextInput] = useState(""); //  ID
    const [pwTextInput, setPwTextInput] = useState(""); //  PW
    const [IdErrorMessage, setIdErrorMessage] = useState(""); //  ID 에러메세지
    const [PWErrorMessage, setPWErrorMessage] = useState(""); //  PW 에러메세지


    //아이디 비밀번호 확인
    const handleButtonPress = () => {
        if (idTextInput.length == 0)  setIdErrorMessage("아이디를 입력해주세요.");
        if (pwTextInput.length == 0)  setPWErrorMessage("비밀번호를 입력해주세요.");
        
        
        if (idTextInput.length > 0 && pwTextInput.length > 0) {
            // 서버 회원 확인
            // handleLoginCheck();
            navigation.navigate('MyPageScreen');
        } 
    }

    const handleLoginCheck = async () => {
        setIdErrorMessage(""); // 초기화
        setPwTextInput(""); // 초기화

        var object = {
            userId: idTextInput,
            userPw: pwTextInput,
        }


        await axios({
            method: "post",
            url: "http://192.168.0.49:8080/test",
            header: {
                "content-type": "application/json",
            },
            data: object
        })
            // 받오는 데이터
            .then((res) => {
                console.log("res data를 받았습니다", res.data);
                if (res.data){
                    // 로그인 성공시
                    navigation.navigate('MainPage');
                }else{
                    setIdErrorMessage("아이디와 비밀번호를 다시 입력해주세요.");
                    setPwTextInput(""); // 초기화
                }
                
            })
            .catch((err) => {
                // 만약 없는 아이디라면
                console.log("데이터를 보내는데 실패했습니다")
                
            });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    {/* -----로고 view----- */}
                    <View style={styles.logoView}>
                        <Text>로고</Text>
                    </View>


                    {/* ----아이디 비밀번호 입력란---- */}
                    <View style={styles.inputView}>
                        {/* 아이디 텍스트 필드 */}
                        <TextInput style={styles.textinput}
                            value={idTextInput}
                            onChangeText={text => setIdTextInput(text)}
                            placeholder="User ID"
                            textContentType="emailAddress"
                        />
                        <Text style={styles.errorText}>{IdErrorMessage}</Text>

                        {/* 비밀번호 텍스트 필드 */}
                        <TextInput style={styles.textinput}
                            value={pwTextInput}
                            onChangeText={text => setPwTextInput(text)}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <Text style={styles.errorText}>{PWErrorMessage}</Text>

                        {/* 로그인 버튼 */}
                        <TouchableOpacity style={[styles.loginButton,{backgroundColor:'skyblue', marginTop:15}]}
                            onPress={handleButtonPress}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        {/* 회원가입 버튼 */}
                        <TouchableOpacity style={[styles.loginButton,{backgroundColor:'white'}]}
                            onPress={() => navigation.navigate('JoinScreen')}>
                            <Text style={[styles.buttonText, {fontWeight:'normal', color:'gray'}]}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
    },
    loginContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    logoView: {
        marginTop: 100,
        width: '60%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        marginBottom: 10,
    },
    inputView: {
        width: '75%',
        height: 280,
        backgroundColor: 'pink',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {
        width: '70%',
        height: '18%',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    errorText:{
        fontSize:12,
        color:'red',
        marginTop:1
    },
    loginButton: {
        width: '30%',
        height: '10%',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
    },
});
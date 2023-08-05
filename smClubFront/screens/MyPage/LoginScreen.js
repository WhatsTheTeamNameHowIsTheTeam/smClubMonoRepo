//로그인
// 모듈
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Button, Alert, onChangeText } from "react-native";
import { StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [idTextInput, setIdTextInput] = useState(""); //  ID
    const [pwTextInput, setPwTextInput] = useState(""); //  PW


    //아이디 비밀번호 확인
    const handleButtonPress = () => {
        if (idTextInput.length > 0 && pwTextInput.length > 0) {
            navigation.navigate('MyPageScreen');
        } else {
            Alert.alert('입력', '하세요');
        }
    }

    return (
        <View style={styles.container}>

            {/* 아이디 텍스트 필드 */}
            <Text >ID</Text>
            <TextInput style={styles.textForm}
                onChangeText={text => setIdTextInput(text)}
                placeholder="User ID"
            />
            {/* 비밀번호 텍스트 필드 */}
            <Text>PassWord</Text>
            <TextInput style={styles.textForm}
                onChangeText={text => setPwTextInput(text)}
                placeholder="Password"
            />
            {/* 로그인 버튼 */}
            <View style={styles.buttonArea}>
                <Button title="로그인" onPress={handleButtonPress} />
            </View>

            {/* signup 시 회원가입 정보 전달 */}
            <View style={styles.buttonArea}>
                <Button title="회원가입"
                    onPress={() => { navigation.navigate("JoinScreen") }}
                />
            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: ('10%'),
        paddingRight: ('10%'),
        justifyContent: 'center',
    },
    formArea: {
        width: '100%',
        paddingBottom: ('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: '5%',
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        marginTop: 5,
    },
    link: {
        fontWeight: 'bold',
        color: 'green',
    },
});
export default LoginScreen;
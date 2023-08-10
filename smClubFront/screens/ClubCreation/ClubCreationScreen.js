//동아리 생성 페이지[연합회 관리자]
import React, { useState, useRef } from 'react';
import {
    View, Text, TouchableOpacity,
    TextInput, ScrollView,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';
// npm install react-native-dropdown-picker
import DropDownPicker from 'react-native-dropdown-picker';


// ------------Components


// ------------styles
import styles from '../../components/Style';


const ClubCreationScreen = (props) => {
    const inputRef = useRef(null);
    
    const [clubName, setClubName] = useState(''); // 동아리명
    const [clubType, setClubType] = useState(''); // 동아리 종류
    const [leaderName, setLeaderName] = useState(''); // 동아리장 이름
    const [leaderMajor, setLeaderMajor] = useState(''); // 동아리장 학과
    const [leaderStudentId, setLeaderStudentId] = useState(''); // 동아리장 학번

    //error message
    const [clubNameError, setClubNameError] = useState(''); // 동아리명
    const [clubTypeError, setClubTypeError] = useState(''); // 동아리 종류

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '봉사', value: '봉사' },
        { label: '체육', value: '체육' },
        { label: '공연', value: '공연' },
        { label: '교양', value: '교양' },
        { label: '전공', value: '전공' },
    ]);



    const handlerClubName = (text) => {
        const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9|\*]+$/;
        setClubName(text);

        if (text === '') {
            setClubNameError('동아리명을 입력하세요');
        } else if (!regex.test(text)) {
            setClubNameError('특수문자는 사용할 수 없습니다');
        } else {
            setClubNameError('');
        }
    }

    return (
        <TouchableWithoutFeedback

            onPress={() => {
                Keyboard.dismiss();
                inputRef.current.blur();
            }}>
            <View style={styles.clubcreateContainer}>


                <View style={styles.clubcreateView}>
                    <Text style={styles.createClubText}>동아리명</Text>
                    <TextInput
                        style={styles.clubcreateTextInput}
                        placeholder="동아리명을 입력하세요"
                        value={clubName}
                        onChangeText={handlerClubName}
                    />
                    <Text style={styles.createClubText}>동아리 분과</Text>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />

                    <Text style={styles.createClubText}>동아리장 정보</Text>
                    <View style={styles.createClubLeaderInfoView}>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

export default ClubCreationScreen;
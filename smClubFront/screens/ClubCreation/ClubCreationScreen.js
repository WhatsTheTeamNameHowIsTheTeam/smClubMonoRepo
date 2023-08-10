//동아리 생성 페이지[연합회 관리자]
import React, {useState, useEffect} from 'react';
import { 
    View, Text, TouchableOpacity,
    TextInput, ScrollView,
} from 'react-native';

import styles from '../../components/Style';


const ClubCreationScreen = (props) => {
    const [clubName, setClubName] = useState(''); // 동아리명
    const [clubType, setClubType] = useState(''); // 동아리 종류
    const [leaderName, setLeaderName] = useState(''); // 동아리장 이름
    const [leaderMajor, setLeaderMajor] = useState(''); // 동아리장 학과
    const [leaderStudentId, setLeaderStudentId] = useState(''); // 동아리장 학번

    //error message
    const [clubNameError, setClubNameError] = useState(''); // 동아리명
    const [clubTypeError, setClubTypeError] = useState(''); // 동아리 종류

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



                <Text style={styles.createClubText}>동아리장 정보</Text>
                <View style={styles.createClubLeaderInfoView}>

                </View>
            </View>
        </View>
    );
};

export default ClubCreationScreen;
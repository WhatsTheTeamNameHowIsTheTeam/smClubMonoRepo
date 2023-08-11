//동아리 생성 페이지[연합회 관리자]
import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, TouchableOpacity,
    TextInput, ScrollView,
    TouchableWithoutFeedback,
    Keyboard, Modal, Image,
    Pressable, 
} from 'react-native';
// npm install react-native-dropdown-picker
import DropDownPicker from 'react-native-dropdown-picker';


// ------------Components


// ------------styles
import styles from '../../components/Style';

// ------------json
import userInfoData from '../../Data/userInfoData.json';

const ClubCreationScreen = (props) => {
    const [usertotalData, setUsertotalData] = useState([]); // 모든 사용자 정보


    const [clubName, setClubName] = useState(''); // 동아리명
    const [leaderInfo, setLeaderInfo] = useState([]); // 동아리장 정보 [이름, 학과, 학번]

    //error message
    const [clubNameError, setClubNameError] = useState(''); // 동아리명
    const [clubTypeError, setClubTypeError] = useState(''); // 동아리 종류
    const [clubleaderError, setClubLeaderError] = useState(''); // 동아리장 정보 [이름, 학과, 학번]
    // select box
    const [open, setOpen] = useState(false);
    const [clubType, setClubType] = useState(''); // 동아리 종류
    const [items, setItems] = useState([
        { label: '봉사', value: '봉사' },
        { label: '체육', value: '체육' },
        { label: '공연', value: '공연' },
        { label: '교양', value: '교양' },
        { label: '전공', value: '전공' },
    ]);

    // modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchText, setSearchText] = useState(''); // 검색어

    useEffect(() => {
        console.log('ClubCreationScreen');
        // 사용자 정보 모두 가져오기

    }, []);



    // 동아리명 error
    const clubnameerror =(text) =>{
        const regex = /^[a-zA-Z0-9가-힣]{2,10}$/;
        if (text === '') {
            return '동아리명을 입력하세요'
        } else if (!regex.test(text)) {
            return '2~10글자 사이로 입력하세요(특수문자 사용 불가)'
        } else {
            return ""
        }
    }

    const handlerClubName = (text) => {
        setClubNameError(clubnameerror(text))
        setClubName(text)
    }
    
    // 동아리 생성 버튼 클릭시 -> 입력값 확인
    const checkinput = () => {
        if (clubName === '') {
            setClubNameError('동아리명을 입력하세요')
        } if (clubType === '') {
            setClubTypeError('동아리 분과를 선택하세요')
        } else{
            setClubTypeError('')
        }
        if (leaderInfo.length === 0) {
            setClubLeaderError('동아리장 정보를 입력하세요')
        } else {
            // 서버에 전송

        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.clubcreateContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            setIsModalVisible(!isModalVisible);
                        }}>
                        <Pressable style={styles.centeredView} onPress={()=>{Keyboard.dismiss()}}>
                            <View style={styles.modalView}>
                                {/* 닫기 */}
                                <View style={styles.modalTopView}>
                                    <View style={styles.modalCloseView}></View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} onPress={() => { setIsModalVisible(!isModalVisible); }}>동아리장 정보</Text>
                                    <View style={styles.modalCloseView}>
                                        <TouchableOpacity
                                            style={styles.modalCloseButton}
                                            onPress={() => {
                                                setIsModalVisible(!isModalVisible);
                                            }}>
                                            <Text style={{ fontSize: 20 }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    {/* ----------검색---------- */}
                                    <View style={styles.modalSearchView}>
                                        <TextInput
                                            style={styles.searchText}
                                            placeholder='검색어를 입력하세요.'
                                            placeholderTextColor='gray'
                                            value={searchText}
                                            onChangeText={setSearchText}
                                        />

                                        <TouchableOpacity
                                            style={styles.searchIcon}
                                            onPress={() => {
                                                console.log('검색 내용', searchText)
                                                console.log('검색 버튼 클릭');
                                            }}
                                        >
                                            <Image style={{ width: '50%', height: '50%', }} source={require('../../assets/icon.png')} resizeMode='contain' />
                                        </TouchableOpacity>
                                    </View>

                                    {/* ----------동아리장 정보---------- */}
                                    <View style={styles.totaluserinfoView}>
                                        <ScrollView style={{width:'100%', padding:10,}}>
                                            {
                                                // 모든 사용자 불러오기 정보
                                                usertotalData?.map((item, index) => {
                                                    return (
                                                        <TouchableOpacity
                                                            style={leaderInfo==null ? styles.userinfoView : [styles.userinfoView, {backgroundColor:'#DEDEDE'} ] }
                                                            onPress={()=>{
                                                                // 동아리장 정보 저장
                                                                var leaderinfoObject = {
                                                                    name: item.name,
                                                                    major: item.major,
                                                                    studentNumber: item.studentNumber
                                                                }
                                                                setLeaderInfo([leaderinfoObject])
                                                            }}
                                                        >
                                                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#717171", marginBottom: 5 }}>이름</Text>
                                                            <Text style={{ fontSize: 18, color: '#717171', marginBottom: 5 }}>전공 / 학번</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                            <TouchableOpacity
                                                style={leaderInfo == null ? styles.userinfoView : [styles.userinfoView, { backgroundColor: '#DEDEDE' }]}
                                                onPress={() => {
                                                    // 동아리장 정보 저장
                                                    var ob = {
                                                        name: '이름d',
                                                        major: '전공d',
                                                        studentNumber: '학번d'
                                                    }
                                                    setLeaderInfo([ob])
                                                }}
                                            >
                                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#717171", marginBottom: 5 }}>이름</Text>
                                                <Text style={{ fontSize: 18, color: '#717171', marginBottom: 5 }}>전공 / 학번</Text>
                                            </TouchableOpacity>

                                        </ScrollView>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.userinfoOkButton}
                                        onPress={() => {
                                            setIsModalVisible(!isModalVisible);
                                        }}>
                                        <Text style={{ fontSize: 18 }}>확인</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Pressable>
                    </Modal>
                </View>






                <View style={styles.clubcreateView}>
                    <Text style={styles.createClubText}>동아리명</Text>
                    <TextInput
                        style={styles.clubcreateTextInput}
                        placeholder="동아리명을 입력하세요"
                        value={clubName}
                        onChangeText={(text) => handlerClubName(text)}
                    />
                    <Text style={styles.clubErrorText}>{clubNameError}</Text>


                    <Text style={styles.createClubText}>동아리 분과</Text>

                    <DropDownPicker
                        open={open}
                        value={clubType}
                        items={items}
                        setOpen={setOpen}
                        setValue={setClubType}
                        setItems={setItems}
                    />
                    <Text style={styles.clubErrorText}>{clubTypeError}</Text>


                    <Text style={styles.createClubText}>동아리장 정보</Text>
                    <Text style={styles.clubErrorText}>{clubleaderError}</Text>
                    <TouchableOpacity
                        style={styles.createClubLeaderInfoView}
                        onPress={() => {
                            setIsModalVisible(true)
                        }}
                    >
                        <Text style={styles.leaderinfoText}>이름</Text>
                        <View style={styles.leaderinfoTextView}>
                            <Text style={{color:'#D9D9D9'}}>{leaderInfo.length!=0? leaderInfo[0].name : "이름"}</Text>
                        </View>
                        <Text style={styles.leaderinfoText}>전공</Text>
                        <View style={styles.leaderinfoTextView}>
                            <Text style={{color:'#D9D9D9'}}>{leaderInfo.length!=0? leaderInfo[0].major : "전공"}</Text>
                        </View>
                        <Text style={styles.leaderinfoText}>학번</Text>
                        <View style={styles.leaderinfoTextView}>
                            <Text style={{ color: '#D9D9D9' }}>{leaderInfo.length != 0 ? leaderInfo[0].studentNumber : "학번"}</Text>
                        </View>
                    </TouchableOpacity>


                    <View style={styles.clubcreateButtonView}>
                        <TouchableOpacity
                            style={styles.clubcreateButton}
                            onPress={() => {
                                console.log('동아리 생성 버튼 클릭');
                                checkinput();
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#717171' }}>동아리 생성</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

export default ClubCreationScreen;
//동아리 생성 페이지[연합회 관리자]
import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, TouchableOpacity,
    TextInput, ScrollView,
    TouchableWithoutFeedback,
    Keyboard, Modal, Image
} from 'react-native';
// npm install react-native-dropdown-picker
import DropDownPicker from 'react-native-dropdown-picker';


// ------------Components


// ------------styles
import styles from '../../components/Style';



const ClubCreationScreen = (props) => {
    const [usertotalData, setUsertotalData] = useState([]); // 모든 사용자 정보


    const [clubName, setClubName] = useState(''); // 동아리명
    const [leaderInfo, setLeaderInfo] = useState([]); // 동아리장 정보 [이름, 학과, 학번]

    //error message
    const [clubNameError, setClubNameError] = useState(''); // 동아리명
    const [clubTypeError, setClubTypeError] = useState(''); // 동아리 종류

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
                        <View style={styles.centeredView}>
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
                                                                setLeaderInfo([item.name, item.major, item.studentNumber])
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
                                                    // setLeaderInfo([item.name, item.major, item.studentNumber])
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
                        </View>
                    </Modal>
                </View>






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
                        value={clubType}
                        items={items}
                        setOpen={setOpen}
                        setValue={setClubType}
                        setItems={setItems}
                    />

                    <Text style={styles.createClubText}>동아리장 정보</Text>
                    <TouchableOpacity
                        style={styles.createClubLeaderInfoView}
                        onPress={() => {
                            setIsModalVisible(true)
                        }}
                    >

                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

export default ClubCreationScreen;
// 내 동아리 목록 페이지
import React, { useEffect, useState } from 'react';
import {
    View, TextInput, Text,
    Image, TouchableOpacity,
    Modal, Pressable, Keyboard,
    Alert,
} from 'react-native';


// ------------styles
import styles from '../../components/Style';

// ------------components
import MyClubComponent from '../../components/MyClubComponent';

// ------------Dumy Data
import Myclublist from '../../Data/myClubListDumy.json'


const MyClubListScreen = (route) => {
    const [loading, setLoading] = useState(true); // 로딩
    const [searchText, setSearchText] = useState(''); // 검색어
    const [clublist, setClublist] = useState(Myclublist.myClubList); // 동아리 목록
    const [isModalVisible, setIsModalVisible] = useState(false); // 모달

    useEffect(() => {
        console.log(route.paramse)

        // 로딩 시작
        // 서버에서 값 받아오면 바뀌기
        setTimeout(() => {
            console.log('3초 뭐시기')
            if (clublist != null) {
                setLoading(false);
            }
        }, 3000);
    }, []);


    const modalv = (func) =>{
        if (func){
            Alert.alert(
                "더보기",
                "원하는 옵션을 선택하세요.",
                [
                    {
                        text: "동아리 탈퇴하기",
                        onPress: () => setIsModalVisible(true),
                    },
                    {
                        text: "취소",
                        onPress: () => { },
                        style: "cancel",
                    },
                ],
            );
            
        }else {
            setIsModalVisible(false)
        }
    }


    return (
        <View style={styles.containerView}>

            {/* ------------모달------------ */}
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setIsModalVisible(!isModalVisible);
                    }}>
                    <Pressable style={styles.centeredView} onPress={() => { Keyboard.dismiss() }}>

                        <View style={[styles.modalView, {backgroundColor:'#D9D9D9'}]}>

                            {/* 닫기 */}
                            <View style={[styles.modalTopView, { }]}>
                                <View style={styles.modalCloseView}></View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} onPress={() => { setIsModalVisible(!isModalVisible); }}>동아리 탈퇴</Text>
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
                            {/* 동아리 탈퇴? */}
                            <View style={{ alignItems:'center', marginTop:20 }}>
                                <Text style={{ fontSize: 18,}}>해당 동아리를 탈퇴하려면 </Text>
                                <Text style={{ fontSize: 18,}}>회원님의 비밀번호를 입력하세요.</Text>
                                <Text>* 동아리 탈퇴 시 회원님의 정보는 모두 사라집니다.</Text>

                                <TextInput
                                    style={{ width:'80%', height:43, backgroundColor:'white', borderRadius:10, marginTop:20, paddingLeft:10, borderWidth:1, borderColor:'lightgray'}}
                                    placeholder='비밀번호'
                                    placeholderTextColor='gray'
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity
                                    style={{width:'40%', height:50, backgroundColor:'#898989', borderRadius:10, marginTop:20, justifyContent:'center', alignItems:'center'}}
                                    onPress={() => {
                                        console.log('탈퇴 버튼 클릭')
                                        // 비밀번호가 동일하다면
                                        if (true) {
                                            setIsModalVisible(!isModalVisible);
                                        }
                                    }}>
                                    <Text style={{ fontSize: 18, }}>탈퇴하기</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Pressable>
                </Modal>
            </View>



            {
                loading ?
                    <View style={styles.loadingView}>
                        <Image style={styles.loadingImage} source={require('../../assets/loading.gif')} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.announcementListContainer}>
                        {/* ----------검색---------- */}
                        <View style={styles.searchView}>
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



                        {/* ----------내 동아리 목록---------- */}
                        <View style={styles.clubListContainer}>
                            {
                                clublist.map((item, index) => {
                                    return (
                                        <MyClubComponent key={index} clubData={item} ismodal={modalv} />
                                    );
                                })
                            }
                        </View>
                    </View>

            }
        </View>
    );
};

export default MyClubListScreen;
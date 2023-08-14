// 내 동아리 목록 페이지
import React, { useEffect, useState } from 'react';
import {
    View, TextInput, Text,
    Image, TouchableOpacity,
    Modal, Pressable, Keyboard,
} from 'react-native';


// ------------styles
import styles from '../../components/Style';

// ------------components
import MyClubComponent from '../../components/MyClubComponent';

// ------------Dumy Data
import Myclublist from '../../Data/myClubListDumy.json'


const MyClubListScreen = (props) => {
    const [loading, setLoading] = useState(true); // 로딩
    const [searchText, setSearchText] = useState(''); // 검색어
    const [clublist, setClublist] = useState(Myclublist.myClubList); // 동아리 목록
    const [isModalVisible, setIsModalVisible] = useState(false); // 모달

    useEffect(() => {

        // 로딩 시작
        // 서버에서 값 받아오면 바뀌기
        setTimeout(() => {
            console.log('3초 뭐시기')
            if (clublist != null) {
                setLoading(false);
            }
        }, 3000);
    }, []);


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
                        <View style={styles.modalViewCC}>
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
                                        <MyClubComponent key={index} clubData={item} ismodal={setIsModalVisible} />
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
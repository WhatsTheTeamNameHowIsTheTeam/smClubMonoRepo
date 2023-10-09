// 동아리 메인-회원 페이지 컴포넌트
import { useEffect, useState } from 'react';
import React from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput, StyleSheet, Alert,
    Modal, FlatList
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// --------------Components
import styles from '../Style';

const ClubMemberListScreenComponent = ({route}) => {
    // 더미 데이터
    const dummyClubMember = [
        {
            id: 1,
            profileImg: 'https://via.placeholder.com/50',
            name: '산정환',
            position: '회장',
            major: '컴퓨터공학과',
        },
        {
            id: 2,
            profileImg: 'https://via.placeholder.com/50',
            name: '서한수',
            position: '부회장',
            major: '컴퓨터공학과',
        },
        {
            id: 3,
            profileImg: 'https://via.placeholder.com/50',
            name: '김세현',
            position: '동아리원',
            major: '신소재공학과',
        },
        {
            id: 4,
            profileImg: 'https://via.placeholder.com/50',
            name: '양연지',
            position: '동아리원',
            major: '컴퓨터공학과',
        },
        {
            id: 5,
            profileImg: 'https://via.placeholder.com/50',
            name: '양연지',
            position: '동아리원',
            major: '컴퓨터공학과',
        },
        {
            id: 6,
            profileImg: 'https://via.placeholder.com/50',
            name: '양연지',
            position: '동아리원',
            major: '컴퓨터공학과',
        },
    ];

    

    const isFocused = useIsFocused();
    const [clubMemberList, setClubMemberList] = useState(dummyClubMember); // 동아리원 리스트
    const [searchText, setSearchText] = useState(''); // 검색어
    const [selectedMember, setSelectedMember] = useState(null); // 회원 선택
    const [roleModalVisible, setRoleModalVisible] = useState(false); // 모달 표시여부
    const [clubId, setClubId] = useState(); //route로 clubId 받아오기


    useEffect(() => {
        if(isFocused){
            // getClubUserData();

        }
    }, [isFocused]);

    


    // //userdata axsios // but nullUserData is start of default data
    // const getClubUserData = async () => {
    //     console.log(route.params)
        
    //     //Loading Zone
    //     const clubId = await props.clubId;
    //     if(clubId == null){
    //         console.log(userId);
    //         clubId = 'CLUB20230808001';
    //     }
    //     try{
    //         await axios(
    //             {
    //             method:"get",
    //             url:'http://192.168.0.41:3306/clubs?clubId='+clubId+'/members',
    //             params:{
    //                 clubId:clubId,
    //             },
    //         },
    //         null
    //         )
    //         .then((res)=> {
    //             setClubMemberList(res.data);
    //             console.log("받아온 데이터는\n",res.data,"\n입니다");
    //         })
    //         .catch(function (error){
    //             Alert.alert("❗error : bad response");
    //         })
    //     }catch(error){
    //         console.log(error);
    //     }


    // }

    // 동아리원 컨테이너
    const renderItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            style={styles.clubMemberItem}
            onLongPress={() => onLongPressMember(item)}
        >
            <Text style={styles.roleText}>{item.position}</Text>
            <Image
                style={styles.profileImage}
                source={{ uri: item.profileImg }}
                resizeMode="contain"
            />
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.majorText}>{item.major}</Text>
        </TouchableOpacity>
    );

    // onLongPress
    const onLongPressMember = (member) => {
        setSelectedMember(member);
        Alert.alert(
            "회원 설정",
            "원하는 옵션을 선택하세요.",
            [
                {
                    text: "취소",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "직책 변경",
                    onPress: () => setRoleModalVisible(true),
                },
                {
                    text: "탈퇴시키기",
                    onPress: () => showAlertToRemove(member),
                },
            ],
            { cancelable: true }
        );
    };

    // 직책
    const roleOptions = [
        { label: "회장", value: "회장" },
        { label: "부회장", value: "부회장" },
        { label: "총무", value: "총무" },
        { label: "기획", value: "기획" },
        { label: "홍보", value: "홍보" },
        { label: "동아리원", value: "동아리원" },
    ];

    // 직책변경 모달 함수
    const updateRole = (newRole) => {
        const updatedClubMembers = clubMemberList.map((member) => {
            if (member.id === selectedMember.id) {
                return { ...member, position: newRole };
            }
            return member;
        });
        setClubMemberList(updatedClubMembers);
        setRoleModalVisible(false);
    };

    // 탈퇴 시키기 확인 알림
    const showAlertToRemove = (member) => {
        Alert.alert(
            "회원 탈퇴",
            "정말 회원을 탈퇴 시키겠습니까?",
            [
                {
                    text: "아니오",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "예",
                    onPress: () => showPasswordAlert(member),
                },
            ],
            { cancelable: true }
        );
    };

    // 회원 탈퇴 처리
    const showPasswordAlert = (member) => {
        const updatedClubMembers = clubMemberList.filter(
            (item) => item.id !== member.id
        );
        setClubMemberList(updatedClubMembers);
    };

    return (
        <>
            {/* 동아리원 목록 */}
            <View style={styles.clubMemberContainer}>
                <FlatList
                    data={clubMemberList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                /></View>

            {/* 동아리 명, 인원 수 */}
            <View style={styles.clubContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 10, margin: 10 }}
                        source={require('../../assets/icon.png')}
                        resizeMode="contain"
                    />

                    <View>
                        <Text style={{ fontSize: 16 }}>분과</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>동아리 명</Text>
                    </View>
                </View>

                <Text style={styles.numberOfMemberText}>인원수:{clubMemberList.length}</Text>
            </View>

            {/* ----------검색---------- */}
            <View style={styles.clubMemberSearchView}>
                <TextInput
                    style={styles.clubMembersearchText}
                    placeholder=' 이름/직책'
                    placeholderTextColor='gray'
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <TouchableOpacity
                    style={styles.clubMembersearchIcon}
                    onPress={() => {
                        console.log('검색 내용', searchText)
                        console.log('검색 버튼 클릭');
                    }}
                >
                    <Image
                        style={{ width: '70%', height: '70%' }}
                        source={require('../../assets/icon.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            {/* 엑셀 버튼 */}
            <View>
                <TouchableOpacity
                    style={styles.excelContainer}
                    onPress={() => { console.log('엑셀파일 변환하기') }}>
                    <Image
                        style={{ width: '70%', height: '70%' }}
                        source={require('../../assets/icon.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {/* 직책변경 모달창 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={roleModalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>새로운 직책을 선택하세요.</Text>
                        {roleOptions.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.modalItem}
                                onPress={() => updateRole(option.value)}
                            >
                                <Text style={styles.modalItemText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            style={styles.closeModalButton}
                            onPress={() => setRoleModalVisible(false)}
                        >
                            <Text style={styles.modalCloseText}>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default ClubMemberListScreenComponent;
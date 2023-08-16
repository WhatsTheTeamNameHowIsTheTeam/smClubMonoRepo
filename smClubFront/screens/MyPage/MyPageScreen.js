//마이페이지
// 모듈
import React, { useState, useEffect } from 'react';
import {
    View, Image, Text, TextInput,
    StyleSheet, TouchableOpacity,
    Alert, Dimensions, Modal,
    Pressable, Keyboard,
} from 'react-native';
// npx expo install expo-image-picker
import * as ImagePicker from 'expo-image-picker';
// npm install react-native-dropdown-picker
import DropDownPicker from 'react-native-dropdown-picker';

// -------Component
import Storage from '../../components/Storage';

// -------Data
import Majors from '../../Data/majors.json'

const MyPageScreen = ({ navigation }) => {
    const [name, setName] = useState("이름이름"); // 이름
    const [major, setMajor] = useState("컴공"); // 학과
    const [studentID, setStudentID] = useState(1234); // 학번
    const [phone, setPhone] = useState(1234); // 전화번호
    const [errorMessageName, setErrorMessageName] = useState(""); // 이름 에러메세지
    const [errorMessageMajor, setErrorMessageMajor] = useState(""); // 학과 에러메세지
    const [errorMessagePhone, setErrorMessagePhone] = useState(""); // 전화번호 에러메세지
    const [isModalVisible, setIsModalVisible] = useState(false); // 모달

    const [modifyType, setModifyType] = useState(""); // 수정 타입

    // select box
    const [open, setOpen] = useState(false);
    const [majors, setMajors] = useState(''); // 동아리 종류
    const [items, setItems] = useState(Majors.majors);

    // 프로필 수정
    const modifyProfile = () => {
        Alert.alert('프로필 수정', '프로필을 수정하시겠습니까?', [
            {
                text: '이름 수정',
                onPress: () => {
                    setIsModalVisible(!isModalVisible);
                    setModifyType("이름");
                }
            },
            {
                text: '학과 수정',
                onPress: () => {
                    setIsModalVisible(!isModalVisible);
                    setModifyType("학과");
                }
            },
            {
                text: '전화번호 수정',
                onPress: () => {
                    setIsModalVisible(!isModalVisible);
                    setModifyType("전화번호");
                }
            },
            {
                text: '취소',
                style: 'cancel',
            },

        ])
    }


    //이름 정규식
    const validateName = name => {
        const regex = /^[ㄱ-힣]{1,20}$/;
        return regex.test(name);
    }
    //전화번호 정규식
    const validatePhone = phone => {
        const regex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        return regex.test(phone);
    }
    // 자동 하이픈 생성
    const autoHyphen = (target) => {
        return target.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    }
    //이름 핸들러
    const handleNameChange = (name) => {
        setName(name);
        setErrorMessageName(
            validateName(name) ? "올바른 이름 형식입니다." : "이름을 올바르게 입력해주세요."
        );
    }
    //전화번호 핸들러
    const handlePhoneChange = (call) => {
        const changedPhone = autoHyphen(call);
        setPhone(changedPhone);
        setErrorMessagePhone(
            validatePhone(changedPhone) ? "올바른 휴대전화 번호입니다" : "올바른 휴대전화 번호가 아닙니다."
        );
    }


    // 프로필 이미지
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setEditMode(true)
            setProfileImage(result.assets[0].uri); // 선택한 이미지의 URI를 상태로 설정
        }
    };

    // 서버로 값 보내기
    const sendServer = (func)=>{
        if (func==='profile'){
            // 프로필 수정
            var object = {

            }

        } else if (func === 'secession') {
            // 탈퇴


        }
    }

    //탈퇴 확인
    const secessionButtonPress = () => {
        Alert.alert(' 탈퇴하실건가요?', '동아리 가입 내역이 전부 사라집니다.', [
            {
                text: '취소',
                style: 'cancel',
            },
            { text: '확인', onPress: () => { logout(); } },
        ]);
    }

    //로그아웃 확인
    const logoutButtonPress = () => {
        Alert.alert(' 로그아웃 하실건가요?', '', [
            {
                text: '취소',
                style: 'cancel',
            },
            { text: '확인', onPress: () => { logout(); } },
        ]);
    }

    // 로그아웃
    const logout = async () => {
        try {
            // Storage.removeData("id")
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.myPageContainer}>

                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            setIsModalVisible(false)
                        }}>
                        <Pressable style={styles.centeredView} onPress={() => { Keyboard.dismiss() }}>
                            <View style={styles.modalView}>
                                {/* 닫기 */}
                                <View style={styles.modalTopView}>
                                    <View style={styles.modalCloseView}></View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} onPress={() => { setIsModalVisible(false); }}>회원 정보</Text>
                                    <View style={styles.modalCloseView}>
                                        <TouchableOpacity
                                            style={styles.modalCloseButton}
                                            onPress={() => {
                                                setIsModalVisible(false);
                                            }}>
                                            <Text style={{ fontSize: 20 }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                <View style={modifyType==="학과"?[styles.modalMidView, {height:280}]:styles.modalMidView}>
                                    {
                                        modifyType === "이름" ?
                                            <>
                                                <Text>* 수정 하실 이름을 작성해주세요</Text>
                                                <TextInput
                                                    style={styles.modalTextInput}
                                                    value={name}
                                                    onChangeText={handleNameChange}
                                                    placeholder="Name"
                                                />
                                                <Text style={{color:'red', fontSize:12}}>{errorMessageName}</Text>
                                            </>
                                            :
                                            <>
                                                {
                                                    modifyType === "학과" ?
                                                        <>
                                                            <Text>* 수정 하실 학과를 골라주세요</Text>
                                                            
                                                            <DropDownPicker
                                                                style={{ width: '100%', marginTop: 10,}}
                                                                open={open}
                                                                value={majors}
                                                                items={items}
                                                                setOpen={setOpen}
                                                                setValue={setMajors}
                                                                setItems={setItems}
                                                            />
                                                            <Text style={{color:'red', fontSize:12}}>{errorMessageMajor}</Text>
                                                        </>
                                                    :
                                                    <>
                                                            {
                                                                modifyType === "전화번호" ?
                                                                    <>
                                                                        <Text>* 수정할 전화번호를 입력해주세요</Text>
                                                                        <TextInput
                                                                            style={styles.modalTextInput}
                                                                            value={phone}
                                                                            onChangeText={handlePhoneChange}
                                                                            placeholder="number"
                                                                            keyboardType='numeric'
                                                                        />
                                                                        <Text style={{color:'red', fontSize:12}}>{errorMessagePhone}</Text>
                                                                    </>
                                                                    :
                                                                    null
                                                            }
                                                    </>
                                            }</>
                                    }



                                </View>

                                <TouchableOpacity
                                    style={styles.modalSaveView}
                                    onPress={() => {
                                        // 서버에 저장
                                        sendServer('profile') // 프로필 수정
                                        setIsModalVisible(false)
                                    }}>
                                    <Text style={{ fontSize: 15 }}>저장</Text>
                                </TouchableOpacity>
                            </View>
                        </Pressable>
                    </Modal>
                </View>

                <View style={styles.profileView}>
                    <View style={styles.profile}>
                        <TouchableOpacity
                            style={{ width: '40%', height: '85%', }}
                            onPress={() => {
                                pickImage();
                            }}
                        >
                            <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/favicon.png')} resizeMethod='resize' />
                        </TouchableOpacity>
                        <View style={{ width: '60%', height: '85%', justifyContent: 'center', paddingLeft: 15, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 3 }}>{name}</Text>
                            <Text style={{ fontSize: 18, marginBottom: 3 }}>{major}</Text>
                            <Text style={{ fontSize: 18, marginBottom: 3 }}>{studentID}</Text>
                            <Text style={{ fontSize: 18, marginBottom: 3 }}>{phone}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'flex-end', alignItems: 'center' }}
                        onPress={() => {
                            modifyProfile()
                        }}
                    >
                        <Text style={{ fontSize: 15, }}>프로필 수정</Text>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/ArrowRightShort.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.functionView}>
                    <View style={styles.subView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>동아리</Text>
                        {/* 동아리 목록 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                navigation.navigate('MyClub', {
                                    screen:'MyClubListScreen',
                                })
                            }}>
                            <Text style={{ fontSize: 20 }}>동아리 목록</Text>
                        </TouchableOpacity>


                        {/* My 동아리 활동 일지 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                navigation.navigate('MyClub', {
                                    screen:'MyClubListScreen',
                                })
                            }}>
                            <Text style={{ fontSize: 20 }}>My 동아리 활동 일지</Text>
                        </TouchableOpacity>


                        {/* 동아리 가입 신청 내역 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                navigation.navigate('MyClub', {
                                    screen:'MyClubListScreen',
                                })
                            }}>
                            <Text style={{ fontSize: 20 }}>동아리 가입 신청 내역</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.subView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>기타</Text>
                        {/* 약관 및 정책 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                
                            }}>
                            <Text style={{ fontSize: 20 }}>약관 및 정책</Text>
                        </TouchableOpacity>



                        {/* 로그아웃 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                logoutButtonPress();
                            }}>
                            <Text style={{ fontSize: 20 }}>로그아웃</Text>
                        </TouchableOpacity>


                        {/* 탈퇴하기 */}
                        <TouchableOpacity
                            style={styles.setup}
                            onPress={() => {
                                secessionButtonPress();
                            }}>
                            <Text style={{ fontSize: 20 }}>탈퇴하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
    },
    myPageContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    profileView: {
        width: '90%',
        height: '20%',
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    profile: {
        flexDirection: 'row',
        height: '80%',
        width: '80%',
        alignItems: 'flex-end'
    },
    modifyProfile: {
        flexDirection: 'row',
        height: '20%',
        width: '90%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    functionView: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    subView: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        padding: 15,
        marginBottom: 20,
    },
    setup: {
        width: '100%',
        marginTop: 15,
    },
    modalView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 6,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalTopView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    modalMidView: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
    },
    modalTextInput: {
        width: '60%',
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 10,
    },
    modalCloseView: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCloseButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalSaveView: {
        width: '20%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
    }

});

export default MyPageScreen;
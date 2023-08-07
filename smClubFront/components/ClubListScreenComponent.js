// 동아리 목록 컴포넌트
import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity,
    ScrollView, TextInput, Image,

} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//----------------Components
import ClubComponent from './ClubComponent';

// --------------styles
import styles from './Style';



const ClubListScreenComponent = (props) => {
    const [clubType, setClubType] = useState(props.clubtype); // 동아리 분과 값
    //const [clubData, setClubData] = useState(props); // 동아리 전체 데이터
    const [isRecruitement, setIsRecruitement] = useState(false); // 모집중인 것만 보기
    const [searchText, setSearchText] = useState(''); // 검색어



    useEffect(() => {
        console.log('ClubListScreenComponent');
    }, []);



    // 사용자가 사용하는 filter
    const clubhandler = ( clubtype, isrecruitment, searchtext) => {
        console.log('clubhandler() 실행')
        console.log('clubtype', clubtype)
        console.log('isrecruitment', isrecruitment)
        console.log('searchtext', searchtext)

        // 찾는 분과와 동일한 것 찾기
        // 모집 중인 것 or 전체 찾기
        if (searchtext.length > 0) { //검색할때 서버에 요청
            console.log('----------서버에 요청------')
            // reqestData();

            // 선택한 분과만
            if (clubtype == '전체' ) {

            } else if (clubtype=="데이터베이스에 저장된 club 분과 변수값") {

            }


        } else { // 검색어가 없을 때 
            if (clubtype == '전체') {

            } else if (clubtype=="데이터베이스에 저장된 club 분과 변수값") {

            }
        }

    }

    const reqestData = async () => {
        console.log("요청을 보냅니다")
        const object = {
            studentId: "2017225002",
            userName: "신정환",
            userId: "loginshin",
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
            })
            .catch((err) => {
                console.log("데이터를 보내는데 실패했습니다")
            });
    }





    return (
        <ScrollView>
            <View style={styles.clubListContainer}>


                {/* ----------동아리 분과 선택 & 모집중 여부---------- */}
                <View style={styles.clubListOption}>
                    <Picker
                        style={styles.clubListPicker}
                        selectedValue={clubType}
                        onValueChange={(itemValue, itemIndex) => {
                            setClubType(itemValue)
                            clubhandler(itemValue, isRecruitement, searchText) // filter 적용 -> 동아리 분과 선택한 것만 보이기
                        }}
                    >
                        <Picker.Item label="전체" value="전체" />
                        <Picker.Item label="봉사" value="봉사" />
                        <Picker.Item label="체육" value="체육" />
                        <Picker.Item label="공연" value="공연" />
                        <Picker.Item label="교양" value="교양" />
                        <Picker.Item label="전공" value="전공" />
                    </Picker>

                    <TouchableOpacity
                        style={isRecruitement ? [styles.recruitmentButton, { backgroundColor: 'orange' }] : styles.recruitmentButton}
                        onPress={() => {
                            console.log('모집중인 것만 확인 or 전체 확인')
                            setIsRecruitement(!isRecruitement); // 다른 값으로 보이기 
                            clubhandler(clubType, !isRecruitement, searchText); // filter 적용 -> 모집 중인 것만(or 전체) 보이기
                        }}
                    >
                        <Text>모집 중</Text>
                    </TouchableOpacity>
                </View>



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
                            clubhandler(clubType, isRecruitement, searchText) // filter 적용 -> 검색 한 내용의 동아리만 보이기
                        }}
                    >
                        <Image style={{ width: '50%', height: '50%', }} source={require('../assets/icon.png')} resizeMethod='contain' />
                    </TouchableOpacity>

                </View>



                {/* ----------동아리 목록---------- */}

                <ClubComponent />
                <View style={styles.notificationLine}/>
                <ClubComponent />
                <View style={styles.notificationLine}/>
                {
                    // clubData?.map((item, index) => {
                    //     return (
                    //         <ClubComponent />
                    //     )
                    // })
                }
            </View>
        </ScrollView>
    );
};

export default ClubListScreenComponent;
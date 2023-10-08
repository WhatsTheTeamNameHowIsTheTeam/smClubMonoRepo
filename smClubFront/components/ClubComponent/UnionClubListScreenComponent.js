import React, { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Alert,
    RefreshControl, 
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


// -----------component
import MyClubComponent from '../MyClubComponent';
import Storage from '../Storage';
// -----------styles
import styles from '../Style';


const UnionClubListScreenComponent = (props) => {
    const [totalData, setTotalData] = useState(props.clubData); // 동아리 전체 리스트
    const [isRefreshing, setIsRefreshing] = useState(false);

    const navigation = useNavigation();

    const onRefresh = async () => { // 로딩
        setIsRefreshing(true);

        // 로딩 데이터 및 API 호출 등을 수행합니다.
        // 예시: await fetchData();

        setIsRefreshing(false);
    };

    const newFunc = (func, data) =>{
        if(func){
            console.log('더보기 누른 데이터 값', data)
            Alert.alert('아래 기능을 선택해주세요', '최우수 동아리 선정은 하나만 가능합니다', [
                { text: '최우수 동아리 선정', onPress: () => {bestClub()} },
                { text: '동아리 삭제', onPress:()=>{deleteClub()} },
                {
                    text: '취소',
                    style: 'cancel',
                },
                
            ]);
        }
    }
    const bestClub = () =>{
        // 서버에 전송
        // 최우수 동아리 선정 가능한지 확인 후 선정
        console.log('최우수 동아리 선정 가능 여부 확인 후 선정')
    }
    const deleteClub = () =>{
        // 서버에 전송
        console.log('동아리 삭제')
    }

    return (
        <>

            <ScrollView 
                refreshControl={
                    <RefreshControl
                      refreshing={isRefreshing}
                      onRefresh={onRefresh}
                      tintColor="#D7D7D7"
                    />
                  }
            >
                <View style={styles.unionClubListContainer}>
                    {
                        totalData?.map((item, index) => {
                            if (item.category === props.clubType){
                                // 최우수 동아리는 상단에 표시
                                return (
                                    <MyClubComponent
                                        key={index}
                                        clubData={item}
                                        isUnion={props.isadmin}
                                        newFunc={newFunc}
                                    />
                                ) 
                            } else{
                                
                            }
                                               
                        })
                    }
                </View>
            </ScrollView>


            <TouchableOpacity
                style={styles.clubCreateButtonView}
                onPress={() => {
                    console.log('동아리 생성')
                    navigation.navigate('ClubCreationScreen')
                }}
            >
                <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
        </>
    );
};

export default UnionClubListScreenComponent;
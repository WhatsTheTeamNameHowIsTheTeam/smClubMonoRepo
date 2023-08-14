import React, { useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


// -----------component
import ClubComponent from '../ClubComponent';

// -----------styles
import styles from '../Style';

const UnionClubListScreenComponent = (props) => {
    const [isUnionAdmin, setIsUnionAdmin] = useState(props.isadmin); // 연합회 관리자인지 아닌지
    const [totalData, setTotalData] = useState(props.clubData); // 동아리 전체 리스트
    const [clubData, setClubDate] = useState([]); // 분과 별 리스트

    const navigation = useNavigation();


    // if (props.clubType === "봉사") {
    //     setClubDate(totalData.filter((item) => item.clubType === "봉사"));
    // } else if (props.clubType === "체육") {
    //     setClubDate(totalData.filter((item) => item.clubType === "체육"));
    // } else if (props.clubType === "공연") {
    //     setClubDate(totalData.filter((item) => item.clubType === "공연"));
    // } else if (props.clubType === "교양") {
    //     setClubDate(totalData.filter((item) => item.clubType === "교양"));
    // } else if (props.clubType === "전공") {
    //     setClubDate(totalData.filter((item) => item.clubType === "전공"));
    // }


    return (
        <>

            <ScrollView >
                <View style={styles.unionClubListContainer}>
                    {
                        clubData?.map((item, index) => {
                            return (
                                <ClubComponent
                                    key={index}
                                    clubData={item}
                                />
                            )                    
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
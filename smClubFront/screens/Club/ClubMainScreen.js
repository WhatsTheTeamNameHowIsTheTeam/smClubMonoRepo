// 동아리 메인 페이지 

import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
    View, Text, Button,
    Dimensions
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

// npm install react-native-tab-view 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


// ------------Components
import ClubActivityLogScreenComponent from '../../components/ClubComponent/ClubActivityLogScreenComponent';
import ClubApplicantListScreenComponent from '../../components/ClubComponent/ClubApplicantListScreenComponent';
import ClubInfomationScreenComponent from '../../components/ClubComponent/ClubInfomationScreenComponent';
import ClubMemberListScreenComponent from '../../components/ClubComponent/ClubMemberListScreenComponent';
import ClubNotificationScreenComponent from '../../components/ClubComponent/ClubNotificationScreenComponent';

// ------------styles
import styles from '../../components/Style';


// 컴포넌트
const CALComponent = () => (
    <ClubActivityLogScreenComponent />
)
const CAListComponent = () => (
    <ClubApplicantListScreenComponent />
)
const CIComponent = () => (
    <ClubInfomationScreenComponent />
)
const CMLComponent = () => (
    <ClubMemberListScreenComponent />
)
const CNComponent = () => (
    <ClubNotificationScreenComponent />
)

// 어떤 컴포넌트를 렌더링 할지
const renderScene = SceneMap({
    first: CALComponent,
    second: CAListComponent,
    third: CIComponent,
    fourth: CMLComponent,
    fifth: CNComponent,
});

// tab bar style
const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'gray' }} // 탭바 밑줄 색깔
        style={styles.tabbarstyle}
        renderLabel={({ route, focused, color }) => ( // 탭바 글씨 텍스트 값, 색깔(activiColor)
            <Text style={[styles.tabBarText, { color }]}>
                {route.title}
            </Text>
        )}
        activeColor={'black'} // 탭바 focus 글 색깔
        labelStyle={{ color: 'gray' }} // 탭바 unfocus 글 색깔
    />
);

// 동아리명 더미 데이터
const getClubNameFromDB = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("응애응애");
        }, 100);
    });
};

const ClubMainScreen = (props) => {
    const [clubName, setClubName] = useState("Loading..."); // 동아리명 상태 추가
    const navigation = useNavigation();

    const [sectionList, setSectionList] = useState([]); // 동아리 분과 리스트 상태 추가
    const [activityLogList, setActivityLogList] = useState([]); // 동아리 활동 일지 리스트 상태 추가

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: '정보' },
        { key: 'second', title: '공지' },
        { key: 'third', title: '활동' },
        { key: 'fourth', title: '회원' },
        { key: 'fifth', title: '공고' },
    ]);

    // 가져온 동아리명으로 상태 업데이트
    useEffect(() => {
        async function fetchClubName() {
            try {
                const name = await getClubNameFromDB();
                setClubName(name);
            } catch (error) {
                console.error("Error fetching club name", error);
            }
        }

        fetchClubName(); // 동아리명 가져오기
    }, []);
    
// 가져온 동아리명으로 헤더 설정
    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: clubName }); 
    }, [clubName, navigation]);

    return (
        <View style={styles.container}>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width, }}
            />
        </View>
    );
};

export default ClubMainScreen;
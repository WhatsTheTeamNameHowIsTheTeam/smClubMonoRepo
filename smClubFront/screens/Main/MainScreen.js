// 메인페이지에서 동아리, 모집 공고 슬라이드 하는 페이지
import React, { useEffect, useState } from 'react';
import {
    View, Text, Button,
    Dimensions
} from 'react-native';

// npm install react-native-tab-view 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';



// ------------Components
import ClubTypeAndActivityLogScreenComponent from '../../components/MainScreenComponent/ClubTypeAndActivityLogScreenComponent';
import AnnouncementListScreenComponent from '../../components/MainScreenComponent/AnnouncementListScreenComponent';


// ------------styles
import styles from '../../components/Style';



const MainScreen = (props) => {
    const [] = useState([]); // 동아리 분과 리스트
    const [] = useState([]); // 동아리 활동 일지 리스트

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: '동아리' },
        { key: 'second', title: '모집공고' },
    ]);

    // ---------------서버 통신 -----------
    // controller 모두 설계 완료 되면 request 데이터와 response 데이터 설계
    const reqestData = async () => {
        console.log("요청을 보냅니다")
        const object = {
            studentId: "2017225002",
            userName: "신정환",
            userId: "loginshin",
            userPw: "4865",
            img: "https://loginshin.tistory.com/manage/setting/blog",
            major: "computer",
            phoneNumber: "01040510673",
            email: "shinwjdghks@gmail.com",
            userAuthor: "srv001",
            notification: true,
            userAgree: true,
            userAgreeDate: "2023-08-06",
            createDate: "2023-07-07",
            updateDate: "2023-08-03"
        }
    }

    // 컴포넌트
    const CtAndAlComponent = () => (
        <ClubTypeAndActivityLogScreenComponent />
    )
    const ALComponent = () => (
        <AnnouncementListScreenComponent />
    )
    // 어떤 컴포넌트를 렌더링 할지
    const renderScene = SceneMap({
        first: CtAndAlComponent,
        second: ALComponent,
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






    // //데이터 이동 테스트 코드
    useEffect(() => {
        console.log('MainScreen');
        //앱 실행하면 화면에 오면 서버에서 동아리 분과 리스트, 동아리 활동 일지 리스트 가져오기
        //reqestData();
    }, [])

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
export default MainScreen;
import React, { useState, useEffect } from 'react';
import {
    View, Text, ScrollView,
    Dimensions
} from 'react-native';

// npm install react-native-tab-view 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


// ------------Components
import UnionClubListScreenComponent from '../../components/ClubComponent/UnionClubListScreenComponent';


// ------------styles
import styles from '../../components/Style';




const UnionClubListScreen = () => {
    const [index, setIndex] = useState(0);
    const [clubData, setClubData] = useState(["ㅎㅎ"]); // 동아리 전체 데이터
    const [routes] = useState([
        { key: 'first', title: '봉사' },
        { key: 'second', title: '체육' },
        { key: 'third', title: '공연' },
        { key: 'fourth', title: '교양' },
        { key: 'fifth', title: '전공' },
    ]);

    useEffect(() => {
        console.log('UnionClubListScreen');
    }, [])



    // 컴포넌트
    const UnionCLFirst = () => (
        <UnionClubListScreenComponent clubType={"봉사"} clubData={clubData}/>
    )
    const UnionCLSec = () => (
        <UnionClubListScreenComponent clubType={"체육"} clubData={clubData}/>
    )
    const UnionCLThird = () => (
        <UnionClubListScreenComponent clubType={"공연"} clubData={clubData}/>
    )
    const UnionCLFourth = () => (
        <UnionClubListScreenComponent clubType={"교양"} clubData={clubData}/>
    )
    const UnionCLFifth = () => (
        <UnionClubListScreenComponent clubType={"전공"} clubData={clubData}/>
    )


    // 어떤 컴포넌트를 렌더링 할지
    const renderScene = SceneMap({
        first: UnionCLFirst,
        second: UnionCLSec,
        third: UnionCLThird,
        fourth: UnionCLFourth,
        fifth: UnionCLFifth,
    });

    // tab bar style
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'gray' }} // 탭바 밑줄 색깔
            style={styles.tabbarstyle}
            renderLabel={({ route, focused, color }) => {
                return (
                    // 탭바 글씨 텍스트 값, 색깔(activiColor)
                    <Text style={[styles.tabBarText, { color }]}>
                        {route.title}
                    </Text>
                )
            }}
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

export default UnionClubListScreen;
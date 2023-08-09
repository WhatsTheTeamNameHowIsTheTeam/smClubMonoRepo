
// 분과를 선택했을 때 동아리 리스트를 보여주는 페이지
import React, { useState, useEffect } from 'react';
import {
    View, Text, Dimensions
} from 'react-native';
// npm install react-native-tab-view 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// ------------Components
import ClubListScreenComponent from '../../components/MainScreenComponent/ClubListScreenComponent';
import AnnouncementListScreenComponent from '../../components/MainScreenComponent/AnnouncementListScreenComponent';


// ------------styles
import styles from '../../components/Style';


const ClubListMainScreen = (props) => {
    const [] = useState([]); // 동아리 분과 값

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: '동아리' },
        { key: 'second', title: '모집공고' },
    ]);



    useEffect(() => {
        console.log('ClubListMainScreen');
        console.log('props', props.route.params);
        // 앱 실행하면 화면에 오면 서버에서 동아리 분과 리스트, 동아리 활동 일지 리스트 가져오기
        //reqestData();

    }, []);


    // 컴포넌트
    const CtAndAlComponent = () => (
        <ClubListScreenComponent clubtype={props.route.params.clubtype}/>
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

export default ClubListMainScreen;
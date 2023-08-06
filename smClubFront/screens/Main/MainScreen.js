// 메인페이지에서 동아리, 모집 공고 슬라이드 하는 페이지
import React, { useState, useEffect } from 'react';
import {
    View, Text, Dimensions
} from 'react-native';
// npm install react-native-tab-view 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// ------------Components
import ClubTypeAndActivityLogScreenComponent from '../../components/ClubTypeAndActivityLogScreenComponent';
import AnnouncementListScreenComponent from '../../components/AnnouncementListScreenComponent';


// ------------styles
import styles from '../../components/Style';



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

const MainScreen = (props) => {
    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: '동아리' },
        { key: 'second', title: '모집공고' },
    ]);




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
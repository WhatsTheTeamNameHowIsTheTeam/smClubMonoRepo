//stack Navigation
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

//----------page import----------
import MainScreen from '../screens/Main/MainScreen';

import ClubActivityLogScreen from '../screens/Club/ClubActivityLogScreen';
import ClubApplicantListScreen from '../screens/Club/ClubApplicantListScreen';
import ClubInfomationScreen from '../screens/Club/ClubInfomationScreen';
import ClubMemberListScreen from '../screens/Club/ClubMemberListScreen';
import ClubNotificationScreen from '../screens/Club/ClubNotificationScreen';
import ClubRecruitmentAnnouncementScreen from '../screens/Club/ClubRecruitmentAnnouncementScreen';
import ClubRecruitmentDocumentsScreen from '../screens/Club/ClubRecruitmentDocumentsScreen';

import AlarmScreen from '../screens/Alarm/AlarmScreen';

import JoinScreen from '../screens/MyPage/JoinScreen';
import LoginScreen from '../screens/MyPage/LoginScreen';
import MyPageScreen from '../screens/MyPage/MyPageScreen';


// 모듈 변수 선언
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='MainScreen'>
            <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
    );
};

const ClubStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='ClubInfomationScreen'>
            <Stack.Screen name="ClubActivityLogScreen" component={ClubActivityLogScreen} />
            <Stack.Screen name="ClubApplicantListScreen" component={ClubApplicantListScreen} />
            <Stack.Screen name="ClubInfomationScreen" component={ClubInfomationScreen} />
            <Stack.Screen name="ClubMemberListScreen" component={ClubMemberListScreen} />
            <Stack.Screen name="ClubNotificationScreen" component={ClubNotificationScreen} />
            <Stack.Screen name="ClubRecruitmentAnnouncementScreen" component={ClubRecruitmentAnnouncementScreen} />
            <Stack.Screen name="ClubRecruitmentDocumentsScreen" component={ClubRecruitmentDocumentsScreen} />
        </Stack.Navigator>
    );
};

const AlarmStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='AlarmScreen'>
            <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
        </Stack.Navigator>
    )
}

const MyPageStackNavigator = ({ navigation, route }) => {
    // 하단 탭바 제거
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'MyPageScreen') {
            navigation.setOptions({ tabBarStyle: { display: undefined } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: 'none' } }, { screenOptions: { headerShown: false } });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='JoinScreen'>
            <Stack.Screen name="JoinScreen" component={JoinScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
        </Stack.Navigator>
    );
};
export { HomeStackNavigator, ClubStackNavigator, AlarmStackNavigator, MyPageStackNavigator };
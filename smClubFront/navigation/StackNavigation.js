//stack Navigation
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

//----------page import----------
import MainScreen from '../screens/Main/MainScreen';
import ClubListMainScreen from '../screens/Main/ClubListMainScreen';
import UnionClubListScreen from '../screens/ClubCreation/UnionClubListScreen';
import MyClubListScreen from '../screens/Club/MyClubListScreen';

import ClubMainScreen from '../screens/Club/ClubMainScreen';
import ClubCreationScreen from '../screens/ClubCreation/ClubCreationScreen';
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
            <Stack.Screen name="ClubListMainScreen" component={ClubListMainScreen} />            
        </Stack.Navigator>
    );
};

const ClubStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='UnionClubListScreen'>
            <Stack.Screen name="ClubMainScreen" component={ClubMainScreen} />
            <Stack.Screen name="MyClubListScreen" component={MyClubListScreen} />
            <Stack.Screen name="UnionClubListScreen" component={UnionClubListScreen} />
            <Stack.Screen name="ClubCreationScreen" component={ClubCreationScreen} />
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
        <Stack.Navigator initialRouteName='MyPageScreen'>
            <Stack.Screen name="JoinScreen" component={JoinScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
        </Stack.Navigator>
    );
};
export { HomeStackNavigator, ClubStackNavigator, AlarmStackNavigator, MyPageStackNavigator };
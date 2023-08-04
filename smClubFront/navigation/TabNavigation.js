// 하단바 naviagtion
import React from 'react';
//navigation import
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//stack import
import { 
    HomeStackNavigator, 
    ClubStackNavigator, 
    AlarmStackNavigator, 
    MyPageStackNavigator 
} from './StackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackNavigator} />
                    <Tab.Screen name="MyClub" component={ClubStackNavigator} />
                    <Tab.Screen name="Alarm" component={AlarmStackNavigator} />
                    <Tab.Screen name="MyPage" component={MyPageStackNavigator} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};

export default TabNavigation;
// 모듈========================
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";


/* 
// 페이지================
import HomeScreen from './screens/HomeScreen';
import MyClubScreen from './screens/MyClubScreen';
import AlarmScreen from './screens/AlarmScreen';
import MyPageScreen from './screens/MypageScreen';
// import TabNavigation from './Navigation/TapNavigation';

//모듈 사용 선언
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//탭 네비게이터 설정
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        inactiveBackgroundColor: 'yellow',
        style: {
          backgroundColor: '#c6cbef'
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='MyClub' component={MyClubScreen} />
      <Tab.Screen name='Alarm' component={AlarmScreen} />
      <Tab.Screen name='MyPage' component={MyPageScreen} />
    </Tab.Navigator>
  );
  
};

// 스택 네비게이션 설정
const MyStack = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
       <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTintColor: "black",
        }}
      />
       <Stack.Screen
        name="Join"
        component={JoinScreen}
        options={{
          title: "회원가입",
          headerTintColor: "black",
          headerShown: false,
        }}
      />
      </Stack.Navigator>
  )
}
*/ 


import TabNavigation from './navigation/TabNavigation';

// App 컴포넌트 (main)
export default function App() {
  return (
    <>
      <TabNavigation />

      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer> */}
    </>
  );
}


//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

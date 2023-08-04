// 내 동아리 목록 페이지
import React from 'react';
import { View, Button, Text } from 'react-native';

const MyClubListScreen = (props) => {
    return (
        <View>
            <Text>MyClubListScreen</Text>
            <Button title="Go to ClubInfomationScreen" onPress={() => {
                props.navigation.navigate('ClubInfomationScreen')
            }}/>

        </View>
    );
};

export default MyClubListScreen;
// 내 동아리 목록 페이지
import React, { useEffect, useState } from 'react';
import { 
    View, Button, Text
} from 'react-native';


// ------------styles
import styles from '../../components/Style';

// ------------components
import Clubcomponent from '../../components/ClubComponent';

// ------------Dumy Data
import Myclublist from '../../Data/myClubListDumy.json'


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
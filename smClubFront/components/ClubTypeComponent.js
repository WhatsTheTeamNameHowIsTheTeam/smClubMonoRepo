// 동아리 분과별로 나눈 버튼 컴포넌트
import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';


// ------------styles
import styles from './Style';

const ClubTypeComponent = (props) => {
    // navigation 화면 전환하려면 사용하는 값
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.clubTypeTouchable}
            onPress={() => {
                console.log('clubtypecomponent press');
                console.log('props', props)
                navigation.navigate("ClubListMainScreen", { clubtype: props.clubtype })
            }}
        >
            <View style={styles.clubTypeView}>
                <View style={styles.clubTypeImageView}>
                    <Image style={{ width: '70%', height: '70%', position: 'absolute', }} source={require('../assets/favicon.png')} />
                </View>
                <View style={styles.clubtextView}>
                    <Text style={styles.clubtypecomponentText}>{props.clubtype}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ClubTypeComponent;
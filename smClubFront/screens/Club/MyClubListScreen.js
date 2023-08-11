// 내 동아리 목록 페이지
import React, { useEffect, useState } from 'react';
import {
    View, Button, Text,
    Image,
} from 'react-native';


// ------------styles
import styles from '../../components/Style';

// ------------components
import Clubcomponent from '../../components/ClubComponent';

// ------------Dumy Data
import Myclublist from '../../Data/myClubListDumy.json'


const MyClubListScreen = (props) => {
    const [loading, setLoading] = useState(false); // 로딩



    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={styles.loadingView}>
                        <Image style={styles.loadingImage} source={require('../../assets/loading.gif')} resizeMode='contain' />
                    </View>
                    :
                    <View >


                    </View>
            }
        </View>
    );
};

export default MyClubListScreen;
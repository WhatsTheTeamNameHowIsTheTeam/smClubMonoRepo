// 내 동아리 목록 페이지
import React, { useEffect, useState } from 'react';
import {
    View, TextInput, Text,
    Image, TouchableOpacity,
} from 'react-native';


// ------------styles
import styles from '../../components/Style';

// ------------components
import Clubcomponent from '../../components/ClubComponent';

// ------------Dumy Data
import Myclublist from '../../Data/myClubListDumy.json'


const MyClubListScreen = (props) => {
    const [loading, setLoading] = useState(true); // 로딩
    const [searchText, setSearchText] = useState(''); // 검색어
    const [clublist, setClublist] = useState(Myclublist.myClubList); // 동아리 목록

    useEffect(() => {
        // console.log('myclublist', Myclublist.myClubList);
        // 서버에서 값 받아오기
        console.log(clublist)
        // 로딩 시작
        // 서버에서 값 받아오면 바뀌기
        setTimeout(() => {
            console.log('3초 뭐시기')
            if (clublist!=null){
                setLoading(false);
            }
        }, 3000);
    }, []);


    return (
        <View style={styles.containerView}>
            {
                loading ?
                    <View style={styles.loadingView}>
                        <Image style={styles.loadingImage} source={require('../../assets/loading.gif')} resizeMode='contain' />
                    </View>
                    :
                    <View style={styles.clubApplicantListContainer}>
                        {/* ----------검색---------- */}
                        <View style={styles.searchView}>
                            <TextInput
                                style={styles.searchText}
                                placeholder='검색어를 입력하세요.'
                                placeholderTextColor='gray'
                                value={searchText}
                                onChangeText={setSearchText}
                            />

                            <TouchableOpacity
                                style={styles.searchIcon}
                                onPress={() => {
                                    console.log('검색 내용', searchText)
                                    console.log('검색 버튼 클릭');
                                }}
                            >
                                <Image style={{ width: '50%', height: '50%', }} source={require('../../assets/icon.png')} resizeMode='contain' />
                            </TouchableOpacity>

                        </View>



                        {/* ----------내 동아리 목록---------- */}
                        <View style={styles.clubListContainer}>
                            {
                                clublist.map((item, index) => {
                                    return (
                                        <>
                                            <Clubcomponent key={index} clubData={item} />
                                            <View style={styles.line}></View>
                                        </>
                                    );
                                    })
                                }
                        </View>
                    </View>

            }
        </View>
    );
};

export default MyClubListScreen;
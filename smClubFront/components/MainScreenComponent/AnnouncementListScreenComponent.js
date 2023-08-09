// 모집공고 슬라이드
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput
} from 'react-native';


// --------------Components
import RecruitmentAnnouncementComponents from '../RecruitmentAnnouncementComponents';
import styles from '../Style';

const AnnouncementListScreenComponent = (props) => {
    const [announcementList, setAnnouncementList] = useState([]); // 모집공고 리스트
    const [searchText, setSearchText] = useState(''); // 검색어
    useEffect(() => {
        console.log('AnnouncementListScreenComponent');

    }, []);



    return (
        <ScrollView>
            <View style={styles.clubsAndTypeContainer}>

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

                {/* ----------공고 리스트---------- */}
                <RecruitmentAnnouncementComponents />
                <View style={styles.Line} />
                <RecruitmentAnnouncementComponents />
                <View style={styles.Line} />
            </View>
        </ScrollView>
    );
};

export default AnnouncementListScreenComponent;
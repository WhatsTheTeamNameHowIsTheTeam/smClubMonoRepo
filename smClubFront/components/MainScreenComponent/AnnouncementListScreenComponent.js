// 모집공고 슬라이드
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput
} from 'react-native';


// --------------Components
import RecruitmentAnnouncementComponents from '../RecruitmentAnnouncementComponents';

// --------------styles
import styles from '../Style';

// --------------Dumy Data
import AnnouncementList from '../../Data/announcementListDumy.json'

const AnnouncementListScreenComponent = (props) => {
    // const [announcementList, setAnnouncementList] = useState(props.); // 모집공고 리스트
    const [announcementList, setAnnouncementList] = useState(); // 모집공고 리스트
    const [searchText, setSearchText] = useState(''); // 검색어


    useEffect(() => {
        
        // 날짜가 최신순으로 정렬
        setAnnouncementList(AnnouncementList.Announcement.sort(function (a, b) {
            var adate=a.pullupDate.replaceAll("-","")
            var bdate=b.pullupDate.replaceAll("-","")            
            return bdate - adate;
        }))
        

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

                {
                    announcementList?.map((item, index) => {
                        return (
                            <RecruitmentAnnouncementComponents
                                key={index}
                                announcementData={item}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>
    );
};

export default AnnouncementListScreenComponent;
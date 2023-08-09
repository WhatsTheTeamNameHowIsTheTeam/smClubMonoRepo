// 동아리 메인-활동 페이지 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput,
} from 'react-native';

// --------------Components
import styles from '../Style';

const ClubInfomationScreenComponent = () => {
    const dummyAnnouncements = [
        {
            id: 1,
            profileImg: 'https://via.placeholder.com/50',
            author: '홍길동',
            content: '모임에 참여하고 싶어요!',
            imageUrl: 'https://via.placeholder.com/300',
            postedAt: new Date('2023-08-12T10:00:00'),
        },
    ];

    const [announcementList, setAnnouncementList] = useState(dummyAnnouncements); // 모집공고 리스트
    const [searchText, setSearchText] = useState(''); // 검색어
    const [inputText, setInputText] = useState(''); // 공고입력

    useEffect(() => {

    }, []);

    const renderAnnouncements = (announcementList) => {
        return (
            <View>

            </View>
        );
    };


    return (
        <View>
            <ScrollView style={{ marginTop: 100, marginBottom: 70 }}>
                {renderAnnouncements(announcementList)}
            </ScrollView>

        </View>
    );
};

export default ClubInfomationScreenComponent;
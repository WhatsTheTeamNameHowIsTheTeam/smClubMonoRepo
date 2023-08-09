// 동아리 메인-공지 페이지 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput,
    Platform,
} from 'react-native';

// --------------Components
import styles from '../Style';

const ClubApplicantListScreenComponent = () => {
    const dummyAnnouncements = [
        {
            id: 1,
            profileImg: 'https://via.placeholder.com/50',
            author: '홍길동',
            content: '모임에 참여하고 싶어요!',
            imageUrl: 'https://via.placeholder.com/300',
            postedAt: new Date('2023-08-12T10:00:00'),
        },
        {
            id: 2,
            profileImg: 'https://via.placeholder.com/50',
            author: 'Jane Doe',
            content: '안녕하세요! 같이 스터디하실 분 구합니다.',
            imageUrl: '',
            postedAt: new Date('2023-08-12T11:30:00'),
        },
        {
            id: 3,
            profileImg: 'https://via.placeholder.com/50',
            author: 'John Smith',
            content: '오늘 오후에 같이 만나실 분 있나요?',
            imageUrl: '',
            postedAt: new Date('2023-08-12T12:45:00'),
        },
        {
            id: 4,
            profileImg: 'https://via.placeholder.com/50',
            author: 'John Smith',
            content: '오늘 오후에 같이 만나실 분 있나요?',
            imageUrl: 'https://via.placeholder.com/300',
            postedAt: new Date('2023-08-12T12:55:00'),
        },
    ];

    const [announcementList, setAnnouncementList] = useState(dummyAnnouncements); // 모집공고 리스트
    const [searchText, setSearchText] = useState(''); // 검색어

    useEffect(() => {

    }, []);

    // 첨부이미지가 있는 경우와 없는 경우를 모두 대응하기 위한 함수
    const renderImage = (imageUrl) => {
        if (imageUrl) {
            return (
                <Image
                    style={styles.attachmentImage}
                    source={{ uri: imageUrl }}
                    resizeMode="contain"
                />
            );
        }
        return null;
    };

    const renderAnnouncements = (announcementList) => {
        // 날짜 포맷 설정 함수
        const formatDate = (date) => {
            const d = new Date(date);
            return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
        };

        let currentDate = '';
        return announcementList.map((announcement, index) => {
            const postedAtFormatted = formatDate(announcement.postedAt);
            const isNewDate = postedAtFormatted !== currentDate;
            currentDate = postedAtFormatted;

            return (
                <View key={announcement.id}>
                    {isNewDate && (
                        <View style={styles.dateSeparatorContainer}>
                            <View style={styles.dateSeparatorLine} />
                            <Text style={styles.dateSeparatorText}>{currentDate}</Text>
                            <View style={styles.dateSeparatorLine} />
                        </View>
                    )}
                    <View style={styles.announcementContainer}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: announcement.profileImg }}
                            resizeMode="contain"
                        />
                        <View style={styles.announcementContentContainer}>
                            <Text style={styles.authorText}>{announcement.author}</Text>
                            <Text style={styles.contentText}>{announcement.content}</Text>
                            {renderImage(announcement.imageUrl)}
                            <Text style={styles.timeText}>
                                {new Date(announcement.postedAt).toLocaleTimeString()}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        });
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.clubsAndTypeContainer}>
                    <View style={styles.clubActivityLogContainer}>
                    {renderAnnouncements(announcementList)}
                    </View>
                </View>
            </ScrollView>
            {/* ----------검색---------- */}
            <View style={styles.clubSearchView}>
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
                    <Image
                        style={{ width: '50%', height: '50%' }}
                        source={require('../../assets/icon.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default ClubApplicantListScreenComponent;
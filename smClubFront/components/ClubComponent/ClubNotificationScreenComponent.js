// 동아리 메인-공지 페이지 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput, StyleSheet
} from 'react-native';

const ClubNotificationScreenComponent = () => {
    const dummyNotification = [
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
        {
            id: 5,
            profileImg: 'https://via.placeholder.com/50',
            author: 'John Smith',
            content: '오늘 오후에 같이 만나실 분 있나요?',
            imageUrl: 'https://via.placeholder.com/300',
            postedAt: new Date('2023-08-15T12:55:00'),
        },
    ];

    const [notificationList, setNotificationList] = useState(dummyNotification); // 모집공고 리스트
    const [searchText, setSearchText] = useState(''); // 검색어
    const [inputText, setInputText] = useState(''); // 공고입력

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

    const renderAnnouncements = (notificationList) => {
        // 날짜 포맷 설정 함수
        const formatDate = (date) => {
            const d = new Date(date);
            return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
        };

        let currentDate = '';
        return notificationList.map((notification, index) => {
            const postedAtFormatted = formatDate(notification.postedAt);
            const isNewDate = postedAtFormatted !== currentDate;
            currentDate = postedAtFormatted;

            return (
                <View key={notification.id}>
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
                            source={{ uri: notification.profileImg }}
                            resizeMode="contain"
                        />
                        <View style={styles.announcementContentContainer}>
                            <Text style={styles.authorText}>{notification.author}</Text>
                            <Text style={styles.contentText}>{notification.content}</Text>
                            {renderImage(notification.imageUrl)}
                            <Text style={styles.timeText}>
                                {new Date(notification.postedAt).toLocaleTimeString()}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        });
    };

    return (
        <View>
            <ScrollView style={{ marginBottom: 70 }}>
                <View style={{ marginTop: 75 }}></View>
                {renderAnnouncements(notificationList)}
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
                        style={{ width: '75%', height: '75%', borderRadius: 100, }}
                        source={require('../../assets/icon.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.editTextContainer}>
                <TouchableOpacity
                    style={styles.ImageIcon}
                    onPress={() => {
                        console.log('이미지 첨부')
                    }}
                >
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../assets/icon.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <View style={styles.textInPutContainer}>
                    <TextInput
                        style={styles.textInPut}
                        multiline
                        placeholder='공지를 입력하세요.'
                        placeholderTextColor='gray'
                        value={inputText}
                        onChangeText={setInputText}
                    />
                </View>

                <TouchableOpacity
                    style={styles.inputButton}
                    onPress={() => {
                        console.log('공지 전송')
                    }}
                >
                    <Text style={styles.inputButtonText}>전송</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    clubApplicantListContainer: {
        width: '85%',
        height: '100%',
        alignItems: 'center',
    },
    clubSearchView: { // 검색창
        position: 'absolute',
        width: '85%',
        height: 50,
        marginTop: 15,
        marginBottom: 25,
        marginHorizontal: 30,
        paddingLeft: 20,
        paddingRight: 5,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchText: {
        width: '80%',
        height: '100%',
        marginRight: 15,
        fontSize: 15,
    },
    searchIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateSeparatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    dateSeparatorLine: {
        flex: 1,
        height: 0.5,
        backgroundColor: 'lightgray',
    },
    dateSeparatorText: {
        fontSize: 14,
        paddingHorizontal: 10,
    },
    announcementContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover',
    },
    announcementContentContainer: {
        flex: 1,
        marginLeft: 10,
    },
    authorText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contentText: {
        marginBottom: 10,
    },
    attachmentImage: {
        marginTop: 10,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    timeText: {
        marginTop: 5,
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-end',
    },
    editTextContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical:10,
    },
    editText: {
        backgroundColor: '#4b6bff',
        padding: 10,
        borderRadius: 25,
    },
    ImageIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    textInPutContainer: {
        width: '60%',
        borderRadius: 10,
        padding: 10,
        marginRight: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    textInPut: {
        fontSize: 15,
    },
    inputButton: {
        backgroundColor: '#4b6bff',
        borderRadius: 10,
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
export default ClubNotificationScreenComponent;
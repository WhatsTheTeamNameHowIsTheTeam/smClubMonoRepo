// 동아리 메인-모집 페이지 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput,
} from 'react-native';

// --------------Components
import styles from '../Style';


const ClubNotificationScreenComponent = () => {

    const dummyNotification = [
        {
            CLUB_ID: 1, //모집공고 번호
            RCRIT_PBLANC_ID: 1, // 동아리 ID
            STDNT_INNB: 2019727029, // 학번
            SJ: '제목이에용~', // 제목
            CN: '내용이에용~내용이에용~내용이에용~', // 내용
            ATCH_PHOTO: 'https://via.placeholder.com/300', // 첨부사진
            NMPR: 5, // 인원수
            RDCNT: 55, // 조회수
            RCRIT_AT: 'true', // 모집여부
            RCRIT_BEGIN_DT: new Date('2023-08-07T10:00:00'), // 모집시작일시
            RCRIT_END_DT: new Date('2023-08-15T10:00:00'), // 모집종료일시
            PULLUP_DT: '', // 끌어올리기 일시
            CREATE_DT: new Date('2023-08-08T10:00:00'), // 생성일시
            UPDT_DT: '', // 수정일시
        },
    ];

    const [notification, setNotification] = useState(dummyNotification); // 모집공고 리스트

    useEffect(() => {

    }, []);

    return (
        <>
            <ScrollView>
                {notification.map((notif, index) => (
                    <View key={index}>
                        <View style={styles.pageHeader}>
                            <TouchableOpacity>
                                <Text style={styles.button}>신청 양식</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.button}>편집하기</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image
                                source={{ uri: notif.ATCH_PHOTO }}
                                style={styles.notificationImage}
                            />
                            <View style={styles.notificationInfo}>
                                <Text style={styles.title}>{notif.SJ}</Text>
                                <Text>작성자: {notif.STDNT_INNB}</Text>
                                <Text>기간: {notif.RCRIT_BEGIN_DT.toLocaleDateString()} ~ {notif.RCRIT_END_DT.toLocaleDateString()}</Text>
                                <Text>모집 인원: {notif.NMPR}명</Text>
                            </View>
                        </View>

                        <View style={styles.contentContainer}>
                            <Text>{notif.CN}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>신청 인원보기</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ClubNotificationScreenComponent;
// 동아리 메인-활동 페이지 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput,
} from 'react-native';

// --------------Components
import styles from '../Style';
import ActiviatyLogComponent from '../ActivityLogComponent';


const ClubActivityLogScreenComponent = ({ navigation }) => {
    // 더미 데이터
    const dummyActivityLog = [
        {
            ACT_ID: 1, // 활동일지번호
            CLBU_ID: 1, //동아리 ID
            SJ: '활동일지 0810', // 제목
            CN: '활동일지에용~활동일지에용~활동일지에용~', // 내용
            ATCH_PHOTO: 'https://via.placeholder.com/300', //첨부 사진
            NMPR: 12, //인원수
            OTHBC_AT: 'true', //공개여부
            ACT_BEGIN_DT: new Date('2023-08-08T10:00:00'), //활동시작일시
            ACT_END_DT: new Date('2023-08-10T10:00:00'), //활동종료일시 
            CREATE_DT: new Date('2023-08-12T10:00:00'), //생성일시
            UPDT_DT: '', //수정일시
        },
        {
            ACT_ID: 1, // 활동일지번호
            CLBU_ID: 1, //동아리 ID
            SJ: '활동일지 0810', // 제목
            CN: '활동일지에용~활동일지에용~활동일지에용~', // 내용
            ATCH_PHOTO: 'https://via.placeholder.com/300', //첨부 사진
            NMPR: 12, //인원수
            OTHBC_AT: 'true', //공개여부
            ACT_BEGIN_DT: new Date('2023-08-08T10:00:00'), //활동시작일시
            ACT_END_DT: new Date('2023-08-10T10:00:00'), //활동종료일시 
            CREATE_DT: new Date('2023-08-12T10:00:00'), //생성일시
            UPDT_DT: '', //수정일시
        },
    ];

    const [activityLog, setActivityLog] = useState(dummyActivityLog); // 활동일지 리스트
    const [selectedActivity, setSelectedActivity] = useState(null); // 상세페이지 이동 여부

    useEffect(() => {

    }, []);

    const formatDate = (date) => {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    };

    // 활동 일지
    const renderActivityLog = (activityLog) => {
        return activityLog.map((log, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => setSelectedActivity(log)}
            >
                <View style={styles.activityLogContainer}>
                    <Image
                        style={styles.activityLogImage}
                        source={{ uri: log.ATCH_PHOTO }}
                        resizeMode="contain"
                    />
                    <View style={styles.activityLogContent}>
                        <Text style={styles.activityLogTitle}>{log.SJ}</Text>
                        <Text style={styles.activityLogDescription}>
                            {log.CN}
                        </Text>
                        <Text style={styles.activityLogDetails}>
                            인원수: {log.NMPR}
                        </Text>
                        <Text style={styles.activityLogDetails}>
                            활동 기간: {formatDate(log.ACT_BEGIN_DT)} ~{' '}
                            {formatDate(log.ACT_END_DT)}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        ));
    };


    if (selectedActivity) { // 활동일지 상세 페이지
        return (
            <View style={{ margin: 10 }}>
                {selectedActivity && (
                    <ActiviatyLogComponent activity={selectedActivity} />
                )}
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={() => setSelectedActivity(null)}
                >
                    <Text>뒤로 가기</Text>
                </TouchableOpacity>
            </View>
        );
    } else { // 활동일지 목록 페이지
        return (
            <>
                <ScrollView style={{ marginTop: 10, marginBottom: 70 }}>
                    {renderActivityLog(activityLog)}
                </ScrollView>

                {/* 활동일지 추가 버튼 */}
                <View>
                    <TouchableOpacity
                        style={styles.excelContainer}
                        onPress={() => { console.log('활동일지 추가하기') }}>
                        <Image
                            style={{ width: '70%', height: '70%' }}
                            source={require('../../assets/icon.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </>
        );
    }
};

export default ClubActivityLogScreenComponent;
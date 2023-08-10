// 동아리 메인-모집 페이지 컴포넌트

// 모듈
import { useEffect, useState } from 'react';
import {
    View, Text, ScrollView,
    TouchableOpacity, Image,
    TextInput,
} from 'react-native';

// --------------Components
import styles from '../Style';
import ClubRecruitmentDocumentsComponent from "../ClubRecruitmentDocumentsComponent";
import ClubApplicantListComponent from '../ClubApplicantListComponent';

const ClubRecruitmentAnnouncementScreenComponent = () => {

    const dummyRecruitmentAnnouncement = [
        {
            CLUB_ID: 1, // 동아리 ID
            RCRIT_PBLANC_ID: 1, //모집공고 번호
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

    const [recruitmentAnnouncement, setRecruitmentAnnouncement] = useState(dummyRecruitmentAnnouncement); // 모집공고 리스트
    const [selectedForm, setSelectedForm] = useState(null); // 신청 양식 이동 여부
    const [edit, setEdit] = useState(null); // 편집 이동 여부
    const [applicants, setApplicants] = useState(null); // 지원자 이동 여부
    const [selectedAnnouncementIndex, setSelectedAnnouncementIndex] = useState(-1); // 선택된 모집 공고 인덱스

    useEffect(() => {

    }, []);
    if (selectedForm) { // 신청 양식 페이지
        return (
            <View style={{ margin: 10 }}>
                {selectedForm && (
                    <ClubRecruitmentDocumentsComponent activity={selectedForm} />
                )}
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={() => setSelectedActivity(null)}
                >
                    <Text>뒤로 가기</Text>
                </TouchableOpacity>
            </View>
        );
    } else if (edit) { // 편집하기 페이지
        return (
            <View style={{ margin: 10 }}>
                {edit && (
                    <ClubRecruitmentDocumentsComponent activity={edit} />
                )}
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={() => setEdit(null)}
                >
                    <Text>뒤로 가기</Text>
                </TouchableOpacity>
            </View>
        );
    } else if (applicants) { // 지원자 페이지
        return (
            <View style={{ marginVertical: 15, height: '98%', }}>
                {applicants && (
                    <ClubApplicantListComponent activity={recruitmentAnnouncement[selectedAnnouncementIndex]} />
                )}
                <TouchableOpacity
                    style={styles.backbutton}
                    onPress={() => setApplicants(null)}
                >
                    <Text>뒤로 가기</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <>
                <ScrollView>
                    {recruitmentAnnouncement.map((recrui, index) => (
                        <View key={index}>
                            <View style={styles.pageHeader}>
                                <TouchableOpacity
                                >
                                    <Text style={styles.button}>신청 양식</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setEdit(recrui)}
                                >
                                    <Text style={styles.button}>편집하기</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.notificationContainer}>
                                <Image
                                    D source={{ uri: recrui.ATCH_PHOTO }}
                                    style={styles.notificationImage}
                                />
                                <View style={styles.notificationInfo}>
                                    <Text style={styles.title}>{recrui.SJ}</Text>
                                    <Text>작성자: {recrui.STDNT_INNB}</Text>
                                    <Text>기간: {recrui.RCRIT_BEGIN_DT.toLocaleDateString()} ~ {recrui.RCRIT_END_DT.toLocaleDateString()}</Text>
                                    <Text>모집 인원: {recrui.NMPR}명</Text>
                                </View>
                            </View>

                            <View style={styles.contentContainer}>
                                <Text>{recrui.CN}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={styles.applyButton}
                        onPress={() => {
                            setSelectedAnnouncementIndex(0); // 첫 번째 모집 공고를 선택(또는 적절한 인덱스를 전달)
                            setApplicants(true);
                        }}
                    >
                        <Text style={styles.applyButtonText}>신청 인원보기</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
};

export default ClubRecruitmentAnnouncementScreenComponent;
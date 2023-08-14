// 동아리 메인-활동/신청자목록 컴포넌트

// 모듈
import React, { useEffect, useState } from 'react';
import {
    ScrollView, View, Text,
    TouchableOpacity, Image, StyleSheet,
    Modal
} from 'react-native';

// --------------Components
import styles from './Style';

const ClubApplicantListComponent = () => {

    const dummyApplicants = [
        {
            id: 1,
            name: '김철수',
            studentId: '20210001',
            department: '컴퓨터과학과',
            profile: 'https://path.to/profile.jpg',
            questionsAndAnswers: [
                {
                    question: '뭐하고 싶어용?',
                    answer: '침대에 눕고 싶어용'
                },
                {
                    question: '할게 많지 않나용?',
                    answer: '꺼졍'
                }
            ]
        },
        {
            id: 2,
            name: '홍길동',
            studentId: '2019727029',
            department: '신소재공학과',
            profile: 'https://path.to/profile.jpg',
            questionsAndAnswers: [
                {
                    question: '질문 1',
                    answer: '답변 1'
                },
                {
                    question: '질문 2',
                    answer: '답변 2'
                }
            ]
        },
    ];


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const openModal = (applicant) => {
        setSelectedApplicant(applicant);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const renderModalContent = () => {
        if (!selectedApplicant) return null;

        const { name, studentId, department, profile, questionsAndAnswers } = selectedApplicant;

        return (
            <View style={styles.modalContent}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 14 }}>{studentId}</Text>
                <Text style={{ fontSize: 14 }}>{department}</Text>

                {questionsAndAnswers && questionsAndAnswers.map((item, index) => (
                    <View key={index}>
                        <Text>{item.question}</Text>
                        <Text>{item.answer}</Text>
                    </View>
                ))}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.rejectButton}>
                        <Text style={styles.buttonText}>거절</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.buttonText}>승인</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
                    <Text style={styles.buttonText}>닫기</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ScrollView>
            {dummyApplicants.map((applicant, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.Applicantcontainer}
                    onPress={() => openModal(applicant)}
                >
                    <Image source={{ uri: applicant.profile }} style={styles.profileImage} />
                    <View style={styles.applicantInfo}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{applicant.name}</Text>
                        <Text style={{ fontSize: 14 }}>{applicant.studentId}</Text>
                        <Text style={{ fontSize: 14 }}>{applicant.department}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.rejectButton}>
                            <Text style={styles.buttonText}>거절</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptButton}>
                            <Text style={styles.buttonText}>승인</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            ))}
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalWrapper}>
                    {renderModalContent()}
                </View>
            </Modal>
        </ScrollView>
    );
};

export default ClubApplicantListComponent;
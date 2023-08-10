// 동아리 메인-활동/신청자목록 컴포넌트

// 모듈
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// --------------Components
import styles from './Style';

const ClubApplicantListComponent = () => {

    const dummyApplicants = [
        {
            id: 1, // 신청자 ID
            name: '김철수', // 이름
            studentId: '20210001', // 학번
            department: '컴퓨터과학과', // 학과           
            profile: 'https://path.to/profile.jpg' // 프로필 이미지 URL
        },
        {
            id: 2, // 신청자 ID
            name: 'sdfs', // 이름
            studentId: '2019727029', // 학번
            department: '신소재공학과', // 학과           
            profile: 'https://path.to/profile.jpg' // 프로필 이미지 URL
        },
    ];

    return (
        <ScrollView>
            {dummyApplicants.map((applicant, index) => (
                <TouchableOpacity key={index} style={styles.Applicantcontainer}>
                    <Image source={{ uri: applicant.profile }} style={styles.profileImage} />
                    <View style={styles.applicantInfo}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>{applicant.name}</Text>
                        <Text style={{fontSize:14}}>{applicant.studentId}</Text>
                        <Text style={{fontSize:14}}>{applicant.department}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.rejectButton}>
                            <Text style={styles.buttonText}>거절</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptButton}>
                            <Text style={styles.buttonText}>승인</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default ClubApplicantListComponent;
// 동아리 메인 페이지 

import React, { useEffect, useState } from 'react';
import {
    View, Text, Button,
    Dimensions
} from 'react-native';

// npm install react-native-tab-view 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


// ------------Components
import ClubTypeAndActivityLogScreenComponent from '../../components/ClubComponent/ClubActivityLogScreenComponent';
import ClubApplicantListScreenComponent from '../../components/ClubComponent/ClubApplicantListScreenComponent';
import ClubInfomationScreenComponent from '../../components/ClubComponent/ClubInfomationScreenComponent';
import ClubMemberListScreenComponent from '../../components/ClubComponent/ClubMemberListScreenComponent';
import ClubNotificationScreenComponent from '../../components/ClubComponent/ClubNotificationScreenComponent';
import ClubRecruitmentAnnouncementScreenComponent from '../../components/ClubComponent/ClubRecruitmentAnnouncementScreenComponent';
import ClubRecruitmentDocumentsScreenComponent from '../../components/ClubComponent/ClubRecruitmentDocumentsScreenComponent';

const ClubMainScreen = () => {
    return (
        <View>

        </View>
    );
};

export default ClubMainScreen;
// 하단바 클릭했을 때 아이콘 크기 변화 코드
import { Image } from 'react-native'

const TabBarIcon = (focused, name) => {
    let iconImagePath;
    let iconNomalImagePath;

    if (name === 'ClubList' || name === 'ClubMainScreen' || name === 'RecruitmentAnnouncementScreen') {
        iconImagePath = require('../assets/home_white.png')
    } else if (name === 'ClubActivityLogScreen' || name === 'ClubApplicantListScreen' || name === 'ClubInfomationScreen' || name === 'ClubMemberListScreen' || name === 'ClubNotificationScreen' || name === 'ClubRecruitmentAnnouncementScreen' || name === 'ClubRecruitmentDocumentScreen' ) {
        iconImagePath = require('../assets/club_white.png')
    } else if (name === 'AlarmScreen') {
        iconImagePath = require('../assets/alarm_white.png')
    } else if (name === 'JoinScreen' || name === 'LoginScreen' || name === 'MyPageScreen') {
        iconImagePath = require('../assets/mypage_white.png')
    }

    if (name === 'ClubList' || name === 'ClubMainScreen' || name === 'RecruitmentAnnouncementScreen') {
        iconNomalImagePath = require('../assets/home_focus.png')
    } else if (name === 'ClubActivityLogScreen' || name === 'ClubApplicantListScreen' || name === 'ClubInfomationScreen' || name === 'ClubMemberListScreen' || name === 'ClubNotificationScreen' || name === 'ClubRecruitmentAnnouncementScreen' || name === 'ClubRecruitmentDocumentScreen' ) {
        iconImagePath = require('../assets/club_focus.png')
    } else if (name === 'AlarmScreen') {
        iconImagePath = require('../assets/alarm_focus.png')
    } else if (name === 'JoinScreen' || name === 'LoginScreen' || name === 'MyPageScreen') {
        iconImagePath = require('../assets/mypage_focus.png')
    }

    return (
        <Image
            style={{
                width: focused ? 54 : 52,
                height: focused ? 54 : 52,
            }}
            source={focused ? iconImagePath : iconNomalImagePath}
        />
    )
}
export default TabBarIcon;
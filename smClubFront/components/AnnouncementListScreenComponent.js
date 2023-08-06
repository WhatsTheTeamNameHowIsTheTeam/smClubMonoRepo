// 모집공고 슬라이드
import { useEffect, useState } from 'react';
import { 
    View, Text, ScrollView, 
    TouchableOpacity,
} from 'react-native';


// --------------Components
import NotificationComponent from './NotificationComponent';
import styles from './Style';

const AnnouncementListScreenComponent = () => {
    const [announcementList, setAnnouncementList] = useState([]); // 모집공고 리스트

    useEffect(() => {
        console.log('AnnouncementListScreenComponent');

    }, []);



    return (
        <ScrollView>
            <Text>AnnouncementListScreenComponent</Text>
            <View style={styles.clubsAndTypeContainer}>
                <NotificationComponent/>


            </View>
        </ScrollView>
    );
};

export default AnnouncementListScreenComponent;
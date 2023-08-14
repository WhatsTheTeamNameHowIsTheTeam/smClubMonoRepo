// 하나의 활동 일지 컴포넌트
import React from 'react';
import { View, Text, Image } from 'react-native';

// --------------Components
import styles from './Style';

const ActivityLogComponent = ({ activity }) => {
    if (!activity) {
        return <Text>활동 정보가 없습니다.</Text>; // activity가 제대로 전달되지 않았을 경우, 이 메시지가 표시됩니다.
    }

    const { SJ, CN, ATCH_PHOTO, NMPR, ACT_BEGIN_DT, ACT_END_DT } = activity;

    return (
        <View style={styles.ALcontainer}>
            <Text style={styles.title}>{SJ}</Text>
            <Text style={styles.content}>내용: {CN}</Text>

            <Image
                style={styles.image}
                source={{ uri: ATCH_PHOTO }}
                resizeMode="cover"
            />

            <View style={styles.infoRow}>
                <Text>인원수: {NMPR}</Text>
                <Text>
                    활동 기간: {ACT_BEGIN_DT.toLocaleDateString()} ~{' '}
                    {ACT_END_DT.toLocaleDateString()}
                </Text>
            </View>
        </View>
    );
};

export default ActivityLogComponent;

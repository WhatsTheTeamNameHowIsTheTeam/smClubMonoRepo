// 하나의 활동 일지 컴포넌트
import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image,
}
from 'react-native';
import styles from './Style';

const ActivityLogMainComponent = () => {
    return (
        <TouchableOpacity
            style={styles.activityLogComponentView} 
            onPress={() => {
                console.log('동아리 활동 일지 컴포넌트') // 메인페이지에서 보이는 활동일지 컴포넌트
            }}
        >
            
        </TouchableOpacity>
    );
};

export default ActivityLogMainComponent;
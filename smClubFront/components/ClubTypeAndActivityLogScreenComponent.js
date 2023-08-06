// 동아리 분과 버튼과 활동 일지 보이는 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, Image, TouchableOpacity,
    ScrollView,
} from 'react-native';

// ----------------Components
import ClubTypeComponent from './ClubTypeComponent'
import ActivityLogMainComponent from './ActivityLogMainComponent'
import styles from './Style'


const ClubTypeAndActivityLogScreenComponent = (props) => {
    const [clubType, setClubType] = useState(); // 동아리 분과 리스트


    useEffect(() => {
        console.log('ClubTypeAndActivityLogScreenComponent');
        
    }, []);



    return (
        <ScrollView>
              
            <View style={styles.clubsAndTypeContainer}>
                {/* ----------동아리 분과---------- */}
                <View style={styles.clubsView}>
                    <ClubTypeComponent clubtype='전체' />
                    <ClubTypeComponent clubtype='봉사' />
                    <ClubTypeComponent clubtype='체육' />
                    <ClubTypeComponent clubtype='공연' />
                    <ClubTypeComponent clubtype='교양' />
                    <ClubTypeComponent clubtype='전공' />
                </View>


            
                {/* ----------선---------- */}
                <View style={styles.line}/>

                {/* ----------활동일지---------- */}
                <View style={styles.myActivityLogTextView}>
                    <Text style={styles.myActivityLogText}>MY 동아리 활동 일지</Text>
                </View>
                
                <View style={styles.myActivityLogView}>
                    <View style={styles.ActivityComponentView}>
                        {
                            // 동아리 활동 일지 리스트 (최대로 3개?)
                            
                        }
                        <ActivityLogMainComponent/>
                        <ActivityLogMainComponent/>
                        <ActivityLogMainComponent/>
                    </View>
                    <TouchableOpacity 
                        style={styles.myActivityLogmoreView}
                        onPress={() => {
                            console.log("사용자의 동아리 개수가 하나 이상이라면 목록, 아니면 동아리의 활동일지 목록 페이지로 전환")
                        }}
                    >
                        <Text style={{fontSize:15, fontWeight:'bold'}}>더보기 </Text>
                        <Image style={{width:25, height:25}} source={require('../assets/ArrowRightShort.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default ClubTypeAndActivityLogScreenComponent;
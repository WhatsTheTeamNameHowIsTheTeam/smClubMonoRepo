// 동아리 분과 버튼과 활동 일지 보이는 컴포넌트
import { useEffect, useState } from 'react';
import {
    View, Text, Image, TouchableOpacity,
    ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';


// ----------------Components
import ClubTypeComponent from '../ClubTypeComponent'
import ActivityLogMainComponent from '../ActivityLogMainComponent'

// ----------------styles
import styles from '../Style'

// ----------------data
import clubListDumy from '../../Data/clubListDumy.json'
import clubActDumy from '../../Data/clubActDumy'

const ClubTypeAndActivityLogScreenComponent = (props) => {
    const [clubType, setClubType] = useState(); // 동아리 분과 리스트
    const [clubData, setClubData] = useState(clubListDumy.clubList); // 동아리 리스트
    // const [clubAct, setClubAct] = useState(props.clubact); // 동아리 활동 일지 리스트
    const [clubAct, setClubAct] = useState(clubActDumy.actDiary); // 동아리 활동 일지 리스트


    const navigation = useNavigation();


    return (
        <ScrollView>
              
            <View style={styles.clubsAndTypeContainer}>
                {/* ----------동아리 분과---------- */}
                <View style={styles.clubsView}>
                    <ClubTypeComponent clubtype='전체' clubData={clubData} />
                    <ClubTypeComponent clubtype='봉사' clubData={clubData} />
                    <ClubTypeComponent clubtype='체육' clubData={clubData} />
                    <ClubTypeComponent clubtype='공연' clubData={clubData} />
                    <ClubTypeComponent clubtype='교양' clubData={clubData} />
                    <ClubTypeComponent clubtype='전공' clubData={clubData} />
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
                            clubAct.map((item, index) => {
                                if (index>=3){
                                    return null
                                }else {
                                    return (
                                        <ActivityLogMainComponent key={index} clubAct={item}/>
                                    )
                                }
                            })
                        }
                    </View>
                    <TouchableOpacity 
                        style={styles.myActivityLogmoreView}
                        onPress={() => {
                            console.log("사용자의 동아리 개수가 하나 이상이라면 목록, 아니면 동아리의 활동일지 목록 페이지로 전환")
                            navigation.navigate('MyClub', {
                                screen:'MyClubListScreen',
                            })
                        }}
                    >
                        <Text style={{fontSize:15, fontWeight:'bold'}}>더보기 </Text>
                        <Image style={{width:25, height:25}} source={require('../../assets/ArrowRightShort.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default ClubTypeAndActivityLogScreenComponent;
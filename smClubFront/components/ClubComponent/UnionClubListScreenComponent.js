import React, { useState } from 'react';
import {
    View, Text, ScrollView,
} from 'react-native';

// -----------component
import ClubComponent from '../ClubComponent';

const UnionClubListScreenComponent = (props) => {
    const [totalData, setTotalData] = useState(props.clubData); // 동아리 전체 리스트
    const [clubData, setClubDate] = useState([]); // 분과 별 리스트
    
    // if (props.clubType === "봉사") {
    //     setClubDate(totalData.filter((item) => item.clubType === "봉사"));
    // } else if (props.clubType === "체육") {
    //     setClubDate(totalData.filter((item) => item.clubType === "체육"));
    // } else if (props.clubType === "공연") {
    //     setClubDate(totalData.filter((item) => item.clubType === "공연"));
    // } else if (props.clubType === "교양") {
    //     setClubDate(totalData.filter((item) => item.clubType === "교양"));
    // } else if (props.clubType === "전공") {
    //     setClubDate(totalData.filter((item) => item.clubType === "전공"));
    // }


    return (
        <>
        <View>
            <Text>{props.clubType}</Text>
            <Text>{props.clubData}</Text>
        </View>
            {
                // clubData.map((item, index) => {
                //     return (
                //         <ClubComponent
                //             key={index}
                //             clubData={item.clubData}
                //         />
                //     )                    
                // })
            }
        </>
    );
};

export default UnionClubListScreenComponent;
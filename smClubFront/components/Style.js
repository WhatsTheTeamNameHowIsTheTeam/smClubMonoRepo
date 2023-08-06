// 모든 페이지들의 스타일 파일
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },

    // ----------------MainScreen
    tabbarstyle:{ // 탭바 스타일
        backgroundColor:'white',
    },
    tabBarText:{
        margin: 8, 
        fontSize:20, 
        fontWeight:'bold',
    },



    // ----------------ClubTypeComponent 동아리 분과 컴포넌트
    clubTypeTouchable:{
        width: width * 0.2,
        height : width * 0.23,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'skyblue',
    },
    clubTypeView :{ 
        justifyContent:'center',
        alignItems:'center',
        width: '80%',
        height: '90%',
        padding:10
    },
    clubTypeImageView:{ // 정사각형으로 만들기 위해
        justifyContent:'space-around',
        alignItems:'center',
        width : '100%',
        height: '80%',
        backgroundColor:'#D9D9D9',
        borderRadius:15,
    },
    clubtypecomponentText:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    },
    clubtextView:{
        width:'100%',
        height:'20%',
        alignItems:'center',
        justifyContent:'center',
    },




    // -----------------ClubTypeAndActivityLogScreenComponent
    //  분괍 별로 나누어진거, 선, 나의 동아리 활동일지 페이지 컴포넌트
    clubsAndTypeContainer:{ // 분과 버튼
        width : width,
        height : height,
        alignItems:'center',
    },
    clubsView:{
        width:'85%',
        backgroundColor:'orange',
        flexWrap:'wrap',
        flexDirection:'row',
    },
    line:{
        backgroundColor:'black', 
        height:2, 
        width:'85%',
        marginTop:20,
        marginBottom:20,
    },
    myActivityLogTextView:{
        width:'85%',
        backgroundColor:'yellow',
        marginBotttom:20,
        padding:10,
    },
    myActivityLogText:{
        textAlign:'left',
        fontSize:20,
        fontWeight:'bold',
    },
    myActivityLogView:{ // 활동일지 
        width:'85%',
        height:height*0.5,
        backgroundColor:'skyblue',
        borderRadius:15,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
    },
    ActivityComponentView:{
        width:'85%',
        height:'90%',
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
    },
    myActivityLogmoreView:{
        flexDirection:'row', 
        backgroundColor:'yellow',
        width:'95%',
        height:'10%',
        justifyContent:'flex-end',
        alignItems:'center',
    },




    //----------ActivitiLogComponent
    // 활동 일지 컴포넌트
    activityLogComponentView:{
        width:'100%',
        height:height*0.13,
        backgroundColor:'skyblue',
        flexDirection:'row',
        marginBottom:10,
    },
    activityLogImageView:{
        width:'20%',
        height:'100%',
        backgroundColor:'orange',
        justifyContent:'center',
    },
    activitylogNoImage:{
        width:'95%',
        height:'100%',
        backgroundColor:'orange',
        paddingLeft:10,
    }, 
    activityLogTextView:{
        width:'75%',
        height:'100%',
        paddingLeft:10,
        paddingRight:10,
    },
    activityLogClubName:{
        fontSize:13,
        marginTop:8,
    },
    activityLogTitleText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:8,
    },
    activityLogContents:{
        fontSize:15,
        marginTop:8,
    },
    activityLogMoreImage:{
        width:'5%',
        backgroundColor:'yellow',
    },



    // -----------------AnnouncementListScreenComponent
    // 모집 공고 리스트


});
export default styles;
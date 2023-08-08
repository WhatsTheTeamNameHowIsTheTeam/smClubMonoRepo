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
        flexWrap:'wrap',
        flexDirection:'row',
    },
    line:{
        backgroundColor:'#D9D9D9', 
        height:2, 
        width:'85%',
        marginTop:20,
        marginBottom:20,
    },
    myActivityLogTextView:{
        width:'85%',
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
        borderRadius:15,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
    },
    ActivityComponentView:{
        width:'85%',
        height:'90%',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
    },
    myActivityLogmoreView:{
        flexDirection:'row', 
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
        flexDirection:'row',
        marginBottom:10,
    },
    activityLogImageView:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
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
    },



    // -----------------AnnouncementListScreenComponent
    // 모집 공고 리스트
    announcementListContainer:{
        width:'85%',
        height:'100%',
        alignItems:'center',
    },
    searchView:{ // 검색창
        width:'85%',
        height:'8%',
        marginTop:20,
        marginBottom:25,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    searchText:{
        width:'80%',
        height:'100%',
        borderRadius:15,
        padding:20,
        marginRight:15,
        fontSize:15,
        backgroundColor:'#D9D9D9',
    },
    searchIcon:{
        width:'20%',
        height:'100%',
        borderRadius: 15, 
        justifyContent:'center',
        alignItems:'center',        
        backgroundColor:'#D9D9D9',
    },


    // -----------------NotificationComponent
    // 공고 컴포넌트
    notificationComponentView:{
        width:'100%',
        height:height*0.18,
        marginBottom:5,
        paddingLeft:20,
    },
    notificationClubNameView:{
        width:'100%', 
        height:'15%', 
        flexDirection:'row', 
        alignItems:'center',
        marginBottom:5,
    },
    notificationTitleView:{
        width:'100%', 
        height:'20%', 
        flexDirection:'row',
        alignItems:'center', 
        marginBottom:5, 
    },
    notificationContentsView:{
        width:'100%', 
        height:'30%', 
        marginBottom:5,
    },
    notificationInfoView:{
        width:'100%', 
        height:'20%', 
        flexDirection:'row', 
        marginBottom:10,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,        
    }, 
    notificationLine:{
        width:'100%', 
        borderWidth:1, 
        borderColor:'#ECECEC', 
        marginBottom:15,
    },




    // -----------------ClubListScreenComponent
    // 동아리 목록 screen 컴포넌트
    clubListContainer:{
        width : width,
        height : height,
        alignItems:'center',
    },
    clubListOption:{
        width:'85%',
        height:'5%', 
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },
    clubListPicker:{
        width:100,
        height:'90%',
        marginRight:20,
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    recruitmentButton:{
        width:100,
        height:'90%',
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    inputModal: {
        height: 55,
        borderRadius: 10,
        backgroundColor: 'orange',
        marginHorizontal: 30,
        marginTop: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    inputModalText: {
        fontSize: 14,
    },


    // ---------------clubComponent
    // 동아리 컴포넌트
    ClubComponentView:{
        width:'85%',
        height:height*0.2,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
    },
    clubmark:{
        width:'30%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
    },
    clubcontent:{
        width:'55%',
        height:'80%',
    },  
    clubTypeText:{
        fontSize:15,
        marginTop:8,
        color:'#138CDB'
    },
    clubName:{
        fontSize:25,
        marginTop:8,
        fontWeight:'bold',
    },
    clubisrecruit:{
        width:'15%',
        height:'30%',
        backgroundColor:'pink',
        borderRadius:15,
        justifyContent:'center',
    },
    isrecruitText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
    }
});
export default styles;
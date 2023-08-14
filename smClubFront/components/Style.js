// 모든 페이지들의 스타일 파일
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    // ----------------MainScreen
    tabbarstyle: { // 탭바 스타일
        backgroundColor: 'white',
    },
    tabBarText: {
        margin: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },



    // ----------------ClubTypeComponent 동아리 분과 컴포넌트
    clubTypeTouchable: {
        width: width * 0.2,
        height: width * 0.23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clubTypeView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '90%',
        padding: 10
    },
    clubTypeImageView: { // 정사각형으로 만들기 위해
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
    },
    clubtypecomponentText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    clubtextView: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },




    // -----------------ClubTypeAndActivityLogScreenComponent
    //  분괍 별로 나누어진거, 선, 나의 동아리 활동일지 페이지 컴포넌트
    clubsAndTypeContainer: { // 분과 버튼
        width: width,
        height: height,
        alignItems: 'center',
    },
    clubsView: {
        width: '85%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    line: {
        backgroundColor: '#D9D9D9',
        height: 2,
        width: '85%',
        marginTop: 20,
        marginBottom: 20,
    },
    myActivityLogTextView: {
        width: '85%',
        marginBotttom: 20,
        padding: 10,
    },
    myActivityLogText: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    myActivityLogView: { // 활동일지 
        width: '85%',
        height: height * 0.5,
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ActivityComponentView: {
        width: '85%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    myActivityLogmoreView: {
        flexDirection: 'row',
        width: '95%',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },




    //----------ActivitiLogComponent
    // 활동 일지 컴포넌트
    activityLogComponentView: {
        width: '100%',
        height: height * 0.13,
        flexDirection: 'row',
        marginBottom: 10,
    },
    activityLogImageView: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
    },
    activityLogTextView: {
        width: '75%',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    activityLogClubName: {
        fontSize: 13,
        marginTop: 8,
    },
    activityLogTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    activityLogContents: {
        fontSize: 15,
        marginTop: 8,
    },
    activityLogMoreImage: {
        width: '5%',
    },



    // -----------------AnnouncementListScreenComponent
    // 모집 공고 리스트
    announcementListContainer: {
        width: '85%',
        height: '100%',
        alignItems: 'center',
    },
    searchView: { // 검색창
        width: '85%',
        height: '8%',
        marginTop: 20,
        marginBottom: 25,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchText: {
        width: '80%',
        height: '100%',
        borderRadius: 15,
        padding: 20,
        marginRight: 15,
        fontSize: 15,
        backgroundColor: '#D9D9D9',
    },
    searchIcon: {
        width: '20%',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },


    // -----------------NotificationComponent
    // 공고 컴포넌트
    notificationComponentView: {
        width: '100%',
        height: height * 0.18,
        marginBottom: 5,
        paddingLeft: 20,
    },
    notificationClubNameView: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    notificationTitleView: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    notificationContentsView: {
        width: '100%',
        height: '30%',
        marginBottom: 5,
    },
    notificationInfoView: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    notificationLine: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ECECEC',
        marginBottom: 15,
    },




    // -----------------ClubListScreenComponent
    // 동아리 목록 screen 컴포넌트
    clubListContainer: {
        width: width,
        height: height,
        alignItems: 'center',
    },
    clubListOption: {
        width: '85%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    clubListPicker: {
        width: 100,
        height: '90%',
        marginRight: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recruitmentButton: {
        width: 100,
        height: '90%',
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },


    // ---------------clubComponent
    // 동아리 컴포넌트
    ClubComponentView: {
        width: '85%',
        height: height * 0.2,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    clubmark: {
        width: '30%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clubcontent: {
        width: '55%',
        height: '80%',
    },
    clubTypeText: {
        fontSize: 15,
        marginTop: 8,
        color: '#138CDB'
    },
    clubName: {
        fontSize: 25,
        marginTop: 8,
        fontWeight: 'bold',
    },
    clubisrecruit: {
        width: '15%',
        height: '30%',
        backgroundColor: 'pink',
        borderRadius: 15,
        justifyContent: 'center',
    },
    isrecruitText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    // -----------------ClubActivityLogScreenComponent
    // 동아리 메인-정보 페이지 컴포넌트
    clubActivityLogContainer: {
        width: '100%',
        height: height,
    },
    clubNameContainer: {
        width: '100%',
        height: 110,
        paddingVertical: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    clubTypeText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    clubNameText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    clubPromotionContainer: {
        height: '100%',
        alignItems: 'stretch',
        backgroundColor: 'grey'
    },
    editButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    editButton: {
        backgroundColor: '#4b6bff',
        padding: 10,
        borderRadius: 25,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },

    // -----------------ClubApplicantListScreenComponent
    // 동아리 메인-공지 페이지 컴포넌트
    clubApplicantListContainer: {
        width: '85%',
        height: '100%',
        alignItems: 'center',
    },
    clubSearchView: { // 검색창
        position: 'absolute',
        width: '85%',
        height: 70,
        marginTop: 20,
        marginBottom: 25,
        marginHorizontal: 30,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateSeparatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    dateSeparatorLine: {
        flex: 1,
        height: 0.5,
        backgroundColor: 'lightgray',
    },
    dateSeparatorText: {
        fontSize: 14,
        paddingHorizontal: 10,
    },
    announcementContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover',
    },
    announcementContentContainer: {
        flex: 1,
        marginLeft: 10,
    },
    authorText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contentText: {
        marginBottom: 10,
    },
    attachmentImage: {
        marginTop: 10,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    timeText: {
        marginTop: 5,
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-end',
    },
    editTextContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    editText: {
        backgroundColor: '#4b6bff',
        padding: 10,
        borderRadius: 25,
    },
    ImageIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    textInPutContainer: {
        width: '60%',
        height: '60%',
        borderRadius: 10,
        padding: 10,
        marginRight: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    textInPut: {
        fontSize: 15,
    },
    inputButton: {
        backgroundColor: '#4b6bff',
        borderRadius: 10,
        width: '15%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputButtonText: {
        color: '#fff',
        fontSize: 16,
    },

    // -----------------ClubMemberListScreenComponent
    // 동아리 메인-회원 페이지 컴포넌트
    clubMemberContainer: {
        height: height * 0.66,
        marginTop: 160,
        alignItems: 'center'
    },
    clubMemberItem: {
        width: 150,
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    roleText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    majorText: {
        fontSize: 14,
        color: 'gray',
    },

    clubContainer: {
        position: 'absolute',
        top: 0,
        width: '80%',
        height: 90,
        marginVertical: 10,
        marginHorizontal: '10%',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
    },
    numberOfMemberText: {
        marginTop: 50,
    },

    clubMemberSearchView: { // 검색창
        position: 'absolute',
        top: 90,
        width: '85%',
        height: 40,
        marginVertical: 20,
        marginHorizontal: 30,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    clubMembersearchText: {
        width: '60%',
        height: '100%',
        borderRadius: 10,
        padding: 5,
        marginRight: 15,
        fontSize: 15,
        backgroundColor: '#D9D9D9',
    },
    clubMembersearchIcon: {
        width: '13%',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },

    excelContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        backgroundColor: '#4b6bff',
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 6,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
    },
    modalItem: {
        width: "100%",
        padding: 8,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "#568ed9",
    },
    modalItemText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    closeModalButton: {
        width: "100%",
        padding: 8,
        borderRadius: 4,
        backgroundColor: "gray",
    },
    modalCloseText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },

    // -----------------ClubInfomationScreenComponent
    // 동아리 메인-활동 페이지 컴포넌트
    activityLogContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomWidth: 1, // 원하는 선의 두께 지정
        borderColor: '#ccc', // 원하는 선의 색상 지정
    },
    activityLogImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    activityLogContent: {
        flexGrow: 1,
    },
    activityLogTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    activityLogDescription: {
        fontSize: 14,
    },
    activityLogDetails: {
        fontSize: 12,
        color: '#999',
    },
    backbutton: {
        width: '25%',
        padding: 14,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 8,
    },

    // -----------------ActivityLogComponent
    // 하나의 활동 일지 컴포넌트
    ALcontainer: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    content: {
        lineHeight: 24,
    },

    // -----------------ClubNotificationScreenComponent
    // 동아리 메인-모집 페이지 컴포넌트
    pageHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
    },
    button: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'lightgray',
        borderRadius: 8,
    },
    notificationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    notificationImage: {
        width: 75,
        height: 75,
        marginRight: 8,
    },
    notificationInfo: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    contentContainer: {
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    applyButton: {
        width: '90%',
        padding: 16,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 16,
    },
    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },


    // -----------------ClubApplicantListComponent
    // 동아리 메인-활동/신청자목록 컴포넌트
    Applicantcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: "#EFEFEF",
        borderRadius: 6,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    applicantInfo: {
        flex: 1,
        paddingHorizontal: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
    },
    rejectButton: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 100,
        marginRight: 15,
    },
    acceptButton: {
        backgroundColor: 'blue',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
        alignItems: 'center',
        width: '80%',
    },


    // -----------------QuestionFormComponent
    // 동아리 메인-모집/질문 양식 컴포넌트
    questionContainer: {
        marginBottom: 15,
    },
    questionNumber: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4a4a4a',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderColor: '#d3d3d3',
        backgroundColor: '#f1f1f1',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#4a4a4a',
        borderWidth: 1,
        backgroundColor: '#b9d6f3',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    addButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4a4a4a',
    },
    removeButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#4a4a4a',
        borderWidth: 1,
        backgroundColor: '#f18c8e',
        position: 'absolute',
        right: 10,
        top: 4,
    },
    removeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4a4a4a',
    },
});
export default styles;
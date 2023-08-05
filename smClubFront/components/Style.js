// 모든 페이지들의 스타일 파일
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    // 로그인 페이지    ====================
    login_container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: '10%',
        paddingRight: '10%',
        justifyContent: 'center',
    },
    login_formArea: {
        width: '100%',
        paddingBottom: '10%',
    },
    login_textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: '5%',
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    login_buttonArea: {
        marginTop: 5,
    },
    login_link: {
        fontWeight: 'bold',
        color: 'green',
    },

    // 마이페이지   ========================
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    setup: {
        width: '100%',
        marginTop: 15,
        justifyContent: 'flex-start',
    },
    setupText: {
        fontSize: 30,
    }
});
export default styles;
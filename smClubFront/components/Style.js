// 모든 페이지들의 스타일 파일
import { StyleSheet } from 'react-native';
import {
    Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:height,
    }
});
export default styles;
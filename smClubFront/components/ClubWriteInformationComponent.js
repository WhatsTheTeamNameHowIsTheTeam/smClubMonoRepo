// 동아리 메인-정보/작성 컴포넌트
import React from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import axios from 'axios';


const handleHead1 = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
const handleHead2 = ({ tintColor }) => <Text style={{ color: tintColor }}>H2</Text>
const handleHead3 = ({ tintColor }) => <Text style={{ color: tintColor }}>H3</Text>


const ClubWriteInformationComponent = () => {
    const [mainImage, setMainImage] = React.useState(require('../assets/icon.png'));
    const [clubIcon, setClubIcon] = React.useState(require('../assets/icon.png'));
    const richText = React.useRef();

    const [uploadedMainImageData, setUploadedMainImageData] = React.useState(null);
    const [uploadedIconData, setUploadedIconData] = React.useState(null);

    const selectImage = async (setter, dataSetter) => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            multiple: false,
        });

        if (!result.canceled) {
            handleImageUpload(result.assets[0].uri, setter, dataSetter);
        }
    };

    function handleImageUpload(uri, setter, dataSetter) {
        const formData = new FormData();
        formData.append('file', {
            uri,
            type: 'image/jpeg',
            name: `${Date.now()}.jpg`,
        });

        setter({ uri });
        dataSetter(formData);
    }

    const onSaveButtonClick = async () => {
        const descriptionText = richText.current.getContentHtml();

        const payload = new FormData();
        payload.append('mainImage', uploadedMainImageData.get('file'));
        payload.append('iconImage', uploadedIconData.get('file'));
        payload.append('description', descriptionText);

        const response = await axios.post('https://your-server.com/api/update-club-info', payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    return (
        <>
            <ScrollView>
                {/* 동아리 메인 사진 */}
                <TouchableOpacity
                    style={{ height: 200, marginBottom: 10 }}
                    onPress={() => selectImage(setMainImage, setUploadedMainImageData)}
                >
                    <Image style={{ width: '100%', height: '100%' }} source={mainImage} resizeMode='contain' />
                </TouchableOpacity>

                <View style={styles.clubNameContainer}>
                    {/* 동아리 아이콘 */}
                    <TouchableOpacity onPress={() => selectImage(setClubIcon, setUploadedIconData)}>
                        <Image style={{ width: 70, height: 70, borderRadius: 100, marginRight: 10 }} source={clubIcon} resizeMode='contain' />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Text style={styles.clubTypeText}>종류</Text>
                        <Text style={styles.clubNameText}>동아리 명</Text>
                    </View>
                </View>

                {/* 동아리 홍보 내용 */}
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 2 }}>
                    <RichEditor
                        ref={richText}
                        onChange={descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                </KeyboardAvoidingView>

                {/* 텍스트 에디터 */}
                <RichToolbar
                    editor={richText}
                    actions={[
                        actions.setBold,
                        actions.setItalic,
                        actions.insertBulletsList,
                        actions.insertOrderedList,
                        actions.setUnderline,
                        actions.heading1,
                        actions.heading2,
                        actions.heading3,
                    ]}
                    iconMap={{
                        [actions.heading1]: handleHead1,
                        [actions.heading2]: handleHead2,
                        [actions.heading3]: handleHead3
                    }}
                >
                </RichToolbar>


            </ScrollView>
            {/* 저장 버튼 */}
            <TouchableOpacity
                onPress={onSaveButtonClick}
                style={styles.doneButton}
            >
                <Text>저장하기</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    clubNameContainer: {
        flexDirection: 'row',
    },
    clubTypeText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    clubNameText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    doneButton: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        marginLeft: '56%',
        backgroundColor: '#8BFF97',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        width: 150,
    },
});

export default ClubWriteInformationComponent;

// 동아리 메인-활동/일지 생성 컴포넌트

// 모듈
import React, { useEffect, useState } from 'react';
import {
    ScrollView, View, Text,
    TextInput, TouchableOpacity, Image,
    StyleSheet
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateActivityComponent = ({ navigation }) => {

    const [activityName, setActivityName] = useState(""); // 활동 명
    const [activityDate, setActivityDate] = useState(new Date().toISOString()); // 활동 일자
    const [activityPersonnel, setActivityPersonnel] = useState(""); // 활동 인원
    const [activityContent, setActivityContent] = useState(""); // 활동 내용
    const [activityPictures, setActivityPictures] = useState([]); // 활동 사진
    const [showDatePicker, setShowDatePicker] = useState(false); // 캘린더 popover를 위한 state 추가

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('사진 액세스 권한이 거부되었습니다.');
            }
        })();
    }, []);

    const handleActivityDateChange = (event, selectedDate) => { // date 변경 핸들러 함수 추가
        const currentDate = selectedDate || activityDate;
        setShowDatePicker(false);

        if (selectedDate) {
            setActivityDate(currentDate);
        }
    };

    const handleDatePickerClick = () => {
        setShowDatePicker(true);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setActivityPictures([...activityPictures, result.assets[0].uri]);
        }
    };

    const removeImage = (index) => {
        const newActivityPictures = [...activityPictures];
        newActivityPictures.splice(index, 1);
        setActivityPictures(newActivityPictures);
    };


    const handleSubmit = async () => {
        // // 여기에 서버에 데이터를 전송하는 API 요청을 구현합니다.
        // const apiResponse = await fetch('https://your-api-url.com/submit', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     activityName: activityName,
        //     activitDate: activitDate,
        //     activityPersonnel: activityPersonnel,
        //     activityContent: activityContent,
        //     activityPictures: activityPictures,
        //   }),
        // });

        // // 응답 처리 (예시)
        // if (apiResponse.ok) {
        //   const responseJson = await apiResponse.json();
        //   console.log(responseJson);
        //   alert('활동이 성공적으로 등록되었습니다.');
        // } else {
        //   alert('오류가 발생했습니다. 다시 시도해주세요.');
        // }
    };

    return (

        <View style={{ paddingBottom: 10 }}>
            <ScrollView style={styles.container}>

                {/* 활동 명 */}
                <View style={styles.inputContainer} >
                    <Text style={styles.text}>활동 명</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setActivityName}
                        placeholder="활동 명을 입력하세요."
                    />
                </View>

                {/* 활동 일자 */}
                <View style={styles.inputContainer} >
                    <Text style={styles.text}>활동 일자</Text>
                    <TouchableOpacity onPress={handleDatePickerClick}>
                        <Text style={styles.input}>
                            {new Date(activityDate).toLocaleDateString()}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={new Date(activityDate)} // 문자열 값을 Date 객체로 변환합니다.
                            onChange={handleActivityDateChange}
                            mode="date"
                            display="default"
                        />
                    )}
                </View>

                {/* 활동 인원 */}
                <View style={styles.inputContainer} >
                    <Text style={styles.text}>활동 인원</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setActivityPersonnel}
                        placeholder="활동 인원을 입력하세요."
                    />
                </View>

                {/* 활동 내용 및 사진 업로드 */}
                <View style={styles.inputContentContainer} >
                    <View style={styles.textAndButton}>
                        <Text style={styles.text}>활동 내용</Text>
                        <TouchableOpacity
                            style={styles.uploadButton}
                            onPress={pickImage}
                        >
                            <Text style={styles.uploadText}>사진 업로드</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={setActivityContent}
                        placeholder="주요 활동 내용을 입력하세요."
                    />
                </View>

                {/* 업로드된 사진들 */}
                <View style={styles.pictureUploadContainer}>
                    {activityPictures.length
                        ? activityPictures.map((picture, index) => (
                            <View key={index} style={styles.imageContainer}>
                                <Image source={{ uri: picture }} style={styles.previewImage} />
                                <TouchableOpacity
                                    style={styles.removeImageButton}
                                    onPress={() => removeImage(index)}
                                >
                                    <Text style={styles.removeImageText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                        : null}
                </View>

                {/* 완료 버튼 */}
                <TouchableOpacity
                    style={styles.doneButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.doneButtonText}>저장</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingBottom: 20,
    },
    inputContainer: {
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 20,
    },
    inputContentContainer: {
        paddingBottom: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        marginLeft: 5,
    },
    pictureUploadContainer: {
        paddingBottom: 10,
        marginBottom: 20,
    },
    textAndButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    uploadButton: {
        backgroundColor: 'lightgray',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    uploadText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    previewImage: {
        width: '100%',
        height: 200,
        marginTop: 10,
    },
    previewImageEmpty: {
        width: '100%',
        height: 200,
        backgroundColor: 'lightgray',
        marginTop: 10,
    },
    imageContainer: {
        position: 'relative',
        marginTop: 10,
    },
    removeImageButton: {
        position: 'absolute',
        top: 15,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeImageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    doneButton: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        marginHorizontal: '5%',
        backgroundColor: '#EFEFEF',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        width: '90%',
    },
    doneButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CreateActivityComponent;
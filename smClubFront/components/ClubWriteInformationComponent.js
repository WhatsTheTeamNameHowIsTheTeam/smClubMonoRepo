// 동아리 메인-정보/작성 컴포넌트
import React from 'react';
import {
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';


const handleHead1 = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>
const handleHead2 = ({ tintColor }) => <Text style={{ color: tintColor }}>H2</Text>
const handleHead3 = ({ tintColor }) => <Text style={{ color: tintColor }}>H3</Text>


const ClubWriteInformationComponent = () => {
    const richText = React.useRef();

    return (
        <>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    <RichEditor
                        ref={richText}
                        onChange={descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                </KeyboardAvoidingView>
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

        </>
    );
};

const styles = StyleSheet.create({
    colorPicker: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 5,
    },
    modalCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    colorCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 5,
    },
});

export default ClubWriteInformationComponent;
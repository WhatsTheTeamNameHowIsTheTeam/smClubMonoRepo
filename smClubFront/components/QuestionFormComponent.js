// 동아리 메인-모집/질문 양식 컴포넌트
// 모듈
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

// --------------Components
import styles from './Style';

const QuestionFormComponent = () => {
  const [questions, setQuestions] = useState(['']);

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleChangeText = (text, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = text;
    setQuestions(updatedQuestions);
  };

  return (
    <>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionNumber}>질문 {index + 1}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleChangeText(text, index)}
            value={question}
            placeholder="질문을 입력하세요."
          />
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeQuestion(index)}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={addQuestion}>
        <Text>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default QuestionFormComponent;
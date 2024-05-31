import * as React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodayExercise = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const date = route.params?.date;
  const [exercise, setExercise] = useState("");
  const [count1, setCount1] = useState("");
  const [count2, setCount2] = useState("");
  const [userEmail, setUserEmail] = useState(""); // 사용자 이메일 상태 추가
  const [exerciseLog, setExerciseLog] = useState([]);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      if (email) {
        setUserEmail(email);
      }
    };
    fetchUserEmail();
  }, []);

  const onSubmit = () => {
    const newLog = { date, exercise, count1, count2 };
    setExerciseLog([...exerciseLog, newLog]);
    navigation.navigate("Home", { exerciseInfo: { date, exercise, count1, count2 } });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.backbuttonChild, styles.backbuttonChildBorder]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <Text style={styles.topic}>오늘도 운동하러 오셨군요 !</Text>
      <Text style={styles.userEmailText}>{`${userEmail} 님 !`}</Text>
      
      <Text style={styles.reportTitle}>Today's Report</Text>
      <Image
        style={styles.centerImage}
        source={require("../assets/human.png")}
        contentFit="cover"
      />
      <Text style={styles.question}>어떤 운동을 하셨나요 ?</Text>
      <TextInput
        style={styles.input}
        placeholder="운동 종목"
        value={exercise}
        onChangeText={setExercise}
      />
      <Text style={styles.question}>몇 세트 진행하셨나요 ?</Text>
      <TextInput
        style={styles.input}
        placeholder="진행 세트"
        value={count1}
        onChangeText={setCount1}
        keyboardType="numeric"
      />
      <Text style={styles.question}>몇 번 진행하셨나요 ?</Text>
      <TextInput
        style={styles.input}
        placeholder="운동 횟수"
        value={count2}
        onChangeText={setCount2}
        keyboardType="numeric"
      />
      <Pressable style={styles.saveButton} onPress={onSubmit}>
        <Text style={styles.saveButtonText}>저장</Text>
      </Pressable>

      {exerciseLog.map((info, index) => (
        <View key={index} style={styles.exerciseInfoContainer}>
          <Text style={styles.exerciseInfoText}>날짜: {info.date}</Text>
          <Text style={styles.exerciseInfoText}>운동 종류: {info.exercise}</Text>
          <Text style={styles.exerciseInfoText}>운동 세트수: {info.count1}</Text>
          <Text style={styles.exerciseInfoText}>운동 횟수: {info.count2}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.colorLightcyan,
  },
  //userEmailText : 로그인한 사용자의 닉네임을 띄움
  userEmailText: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    textAlign: "right",
    color: Color.colorGray_300,
    marginTop: 30,
    marginBottom: 10,
  },
  topic: {
    fontSize: FontSize.size_sm,
    top :40,
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.latoBold,
    color: Color.colorBlack,
    fontWeight: "600",
    marginBottom: 10,
    textAlign:"right",
  },
  reportTitle: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    textAlign: "center",
    color: Color.colorBlack,
    marginVertical: 20,
    backgroundColor: Color.colorWhite, // 하얀 배경 추가
    padding: 10, // 여백 추가
    borderRadius: Border.br_xs, // 모서리 둥글게
    width: 350, // 배경 길이 고정
    alignSelf: "center", // 중앙 정렬
  },
  centerImage: {
    alignSelf: "center",
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  question: {
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.latoBold,
    color: Color.colorBlack,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.colorGray_300, // 테두리 회색 설정
    borderRadius: 0, // 테두리 직각으로 설정
    padding: 10,
    marginBottom: 5,
    backgroundColor: Color.colorWhite,
  },
  backbutton: {
    position: "absolute",
    top: 40,
    left: 10,
    height: 39,
    width: 41,
  },
  backbuttonChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.primary,
    borderWidth: 2,
    borderStyle: "solid",
    height: "100%",
    width: "100%",
  },
  backbuttonLayout: {
    height: 39,
    width: 41,
  },
  backbuttonChildBorder: {
    borderColor: Color.primary,
  },
  rightArrow1Icon: {
    position: "absolute",
    top: 11,
    left: 10,
    width: 20,
    height: 16,
  },
  saveButton: {
    backgroundColor: '#02AE85', // 버튼 배경색
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    color: '#FFFFFF', // 버튼 텍스트 색상
    fontSize: FontSize.size_l,
    fontWeight: 'bold',
  },
  exerciseInfoContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderRadius: 5,
  },
  exerciseInfoText: {
    fontSize: FontSize.size_m,
    color: Color.colorBlack,
  },
});

export default TodayExercise;





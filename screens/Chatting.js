import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Chatting = ({ navigation }) => {
  const trainerId = 1; // 예시용 트레이너 ID

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/rightarrow-1.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.text}>Chat with Trainer</Text>
      <TouchableOpacity 
        style={styles.requestButton} 
        onPress={() => navigation.navigate('TrainerRequests', { trainerId })}
      >
        <Text style={styles.requestButtonText}>View Trainer Requests</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF', // 바탕화면 흰색
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  requestButton: {
    backgroundColor: '#02AE85', // 버튼 배경색
    padding: 10,
    borderRadius: 10,
  },
  requestButtonText: {
    color: '#FFFFFF', // 버튼 텍스트 색상
    fontSize: 16,
  },
});

export default Chatting;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/getTrainers'); // 실제 API URL로 변경
      const data = await response.json();
      if (response.ok) {
        setTrainers(data.trainers);
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Failed to fetch trainers:', error);
      Alert.alert('Error', 'Failed to fetch trainers.');
    } finally {
      setLoading(false);
    }
  };

  const selectTrainer = (trainer) => {
    // 트레이너 선택 로직 구현
    Alert.alert('트레이너 선택', `${trainer.name} 트레이너를 선택했습니다.`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('Home')}>
        <View style={styles.backbuttonChild}>
          <Image source={require("../assets/rightarrow-1.png")} style={styles.rightArrow1Icon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>당신의 트레이너를 선택하세요!</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Trainer ID</Text>
          <Text style={styles.headerText}>Trainer Name</Text>
          <Text style={styles.headerText}>Experience</Text>
          <Text style={styles.headerText}>Select</Text>
        </View>
        {trainers.map((trainer) => (
          <View key={trainer.id} style={styles.tableRow}>
            <Text style={styles.cellText}>{trainer.id}</Text>
            <Text style={styles.cellText}>{trainer.name}</Text>
            <Text style={styles.cellText}>{trainer.experience}</Text>
            <View style={styles.cellButton}>
              <Button title="Select" onPress={() => selectTrainer(trainer)} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D7F2EC',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7F2EC',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 14, // 글씨 크기 조정
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cellText: {
    flex: 1,
    fontSize: 8, // 글씨 크기 조정
    textAlign: 'center',
  },
  cellButton: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20, // 글씨 크기 조정
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  backbutton: {
    position: "absolute",
    top: 40,
    left: 10,
    height: 39,
    width: 41,
  },
  backbuttonChild: {
    borderRadius: 8,
    borderColor: '#02AE85',
    borderWidth: 2,
    borderStyle: "solid",
    height: "100%",
    width: "100%",
  },
  rightArrow1Icon: {
    position: "absolute",
    top: 10,
    left: 8,
    width: 20,
    height: 16,
  },
});

export default TrainerList;



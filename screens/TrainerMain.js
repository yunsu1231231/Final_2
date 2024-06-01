import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, FlatList, Alert } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';

const TrainerMain = () => {
  const navigation = useNavigation();
  const [requests, setRequests] = useState([]);
  const [dietId, setDietId] = useState('');
  const [trainerId, setTrainerId] = useState('');
  const [trainerEmail, setTrainerEmail] = useState('');

  useEffect(() => {
    const fetchTrainerInfo = async () => {
      const id = await AsyncStorage.getItem('trainerId');
      const email = await AsyncStorage.getItem('userEmail');
      setTrainerId(id);
      setTrainerEmail(email);
      fetchRequests(id);
    };
    fetchTrainerInfo();
  }, []);

  const fetchRequests = async (trainer_id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/trainer/requests/${trainer_id}`);
      const data = await response.json();
      if (data.code === 200) {
        setRequests(data.requests);
      } else {
        Alert.alert('Error', 'Failed to retrieve requests.');
      }
    } catch (error) {
      console.error('Error fetching requests:', error);
      Alert.alert('Error', 'An error occurred while fetching requests.');
    }
  };

  const handleAcceptRequest = async (user_id) => {
    try {
      const response = await fetch('http://localhost:3000/api/trainer/accept', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, trainer_id: trainerId }),
      });

      const data = await response.json();
      if (data.code === 200) {
        Alert.alert('Success', 'Request accepted successfully.');
        fetchRequests(trainerId); // Refresh requests after accepting one
      } else {
        Alert.alert('Error', 'Failed to accept request.');
      }
    } catch (error) {
      console.error('Error accepting request:', error);
      Alert.alert('Error', 'An error occurred while accepting request.');
    }
  };

  const handleRegisterDiet = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/trainer/register-diet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trainer_id: trainerId, diet_id: dietId }),
      });

      const data = await response.json();
      if (data.code === 200) {
        Alert.alert('Success', 'Diet registered successfully.');
      } else {
        Alert.alert('Error', 'Failed to register diet.');
      }
    } catch (error) {
      console.error('Error registering diet:', error);
      Alert.alert('Error', 'An error occurred while registering diet.');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate('Login1')}
      >
        <Image
          style={styles.rightArrowIcon}
          contentFit="cover"
          source={require('../assets/rightarrow-1.png')}
        />
      </Pressable>
      <Text style={styles.email}>{trainerEmail}</Text>
      <Text style={styles.title}>트레이너용 메인페이지</Text>
      <Text style={styles.subtitle}>Received Requests</Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            <Text>{`User ID: ${item.user_id}`}</Text>
            <Text>{`Request Type: ${item.interaction_type}`}</Text>
            <Button
              title="Accept Request"
              onPress={() => handleAcceptRequest(item.user_id)}
              buttonStyle={styles.acceptButton}
            />
          </View>
        )}
      />
      
      <View style={styles.dietSection}>
        <Text style={styles.subtitle}>Register Diet</Text>
        <Input
          label="Diet ID"
          value={dietId}
          onChangeText={setDietId}
        />
        <Button
          title="Register Diet"
          onPress={handleRegisterDiet}
          buttonStyle={styles.registerButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D7F2EC',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#888',
    marginBottom: 10,
  },
  title: {
    top : 50,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    top :60,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  requestItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    marginTop: 10,
  },
  dietSection: {
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: '#2196F3',
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    height: 39,
    width: 41,
  },
  rightArrowIcon: {
    width: 20,
    height: 16,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default TrainerMain;

import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const TrainerRequests = ({ route }) => {
  const navigation = useNavigation();
  const trainer_id = route?.params?.trainer_id; // Optional chaining 사용하여 안전하게 접근
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!trainer_id) {
      Alert.alert("Error", "Trainer ID is missing.");
      return;
    }

    const fetchRequests = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/auth/trainer-requests/${trainer_id}`);
        const data = await response.json();
        if (data.code === 200) {
          setRequests(data.requests);
        } else {
          Alert.alert("Error", data.message || "Failed to retrieve trainer requests.");
        }
      } catch (error) {
        console.error("Failed to retrieve trainer requests:", error);
        Alert.alert("Error", "An error occurred while retrieving trainer requests.");
      }
    };

    fetchRequests();
  }, [trainer_id]);

  const acceptRequest = async (user_id) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/accept-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
          trainer_id,
        }),
      });

      const data = await response.json();
      if (data.code === 200) {
        Alert.alert("Success", "Coaching request accepted successfully.");
        // 성공적으로 수락한 요청은 목록에서 제거
        setRequests(requests.filter(request => request.user_id !== user_id));
      } else {
        Alert.alert("Error", data.message || "Failed to accept coaching request.");
      }
    } catch (error) {
      console.error("Failed to accept coaching request:", error);
      Alert.alert("Error", "An error occurred while accepting the coaching request.");
    }
  };

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Home')} style={{ margin: 10, marginTop: 100 }}>
        <Image
          source={require('../assets/rightarrow-1.png')}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>
      {trainer_id ? (
        <FlatList
          data={requests}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>User ID: {item.user_id}</Text>
              <Button title="Accept Request" onPress={() => acceptRequest(item.user_id)} />
            </View>
          )}
        />
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 70 }}>No trainer ID provided.</Text>
      )}
    </View>
  );
};

export default TrainerRequests;





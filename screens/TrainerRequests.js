import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TrainerRequests = ({ route }) => {
  const { trainerId } = route.params;
  const navigation = useNavigation();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainerRequests = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken'); // 인증 토큰 가져오기
        
        const response = await fetch(`http://localhost:3000/api/auth/getTrainerRequests?trainer_id=${trainerId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setRequests(data.requests);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Failed to retrieve trainer requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainerRequests();
  }, [trainerId]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ListPost')}>
        <Image source={require('../assets/rightarrow-1.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            <Text style={styles.requestText}>Request ID: {item.id}</Text>
            <Text style={styles.requestText}>Client ID: {item.client_id}</Text>
            <Text style={styles.requestText}>Details: {item.details}</Text>
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
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
  requestItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  requestText: {
    fontSize: 16,
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
});

export default TrainerRequests;

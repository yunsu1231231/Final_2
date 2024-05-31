import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [instagramTag, setInstagramTag] = useState('');
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      Alert.alert('Permission Denied', 'You need to allow permission to access the gallery');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImage(pickerResult.uri);
    }
  };

  const createPost = async () => {
    const formData = new FormData();
    formData.append('user_id', '1'); // Replace with dynamic user ID if needed
    formData.append('title', title);
    formData.append('content', content);
    formData.append('instagram_tag', instagramTag);
    formData.append('likes', likes);
    if (image) {
      formData.append('photo', {
        uri: image,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
    }

    try {
      const response = await fetch('http://localhost:3000/api/posts/createPost', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const text = await response.text();
      console.log(text); // 서버 응답 텍스트 확인
      const data = JSON.parse(text);
      if (response.status === 201) {
        Alert.alert('Success', `Post created with ID: ${data.id}`);
        setPostId(data.id); // Save the post ID for liking
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/posts/likePost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post_id: postId }),
      });
      const result = await response.json();
      if (response.status === 200) {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
        Alert.alert('Success', 'Post liked/unliked successfully');
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to like/unlike post');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Image source={require("../assets/rightarrow-1.png")} style={styles.backIcon} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>오늘의 하루를 기록하세요</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Content"
            value={content}
            onChangeText={setContent}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Instagram Tag"
            value={instagramTag}
            onChangeText={setInstagramTag}
          />
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            <Text style={styles.imagePickerText}>Pick an image from gallery</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <TouchableOpacity style={[styles.likeButton, liked && styles.liked]} onPress={handleLike}>
            <Text style={styles.likeButtonText}>{liked ? 'Liked' : 'Like'} ({likes})</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button title="Create Post" onPress={createPost} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#D7F2EC',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  textArea: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    textAlignVertical: 'top',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
    alignSelf: 'center',
    borderRadius: 8,
  },
  imagePicker: {
    backgroundColor: '#02AE85',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  imagePickerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  likeButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  liked: {
    backgroundColor: '#02AE85',
  },
  likeButtonText: {
    color: '#fff',
    textAlign: 'center',
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

export default CreatePost;








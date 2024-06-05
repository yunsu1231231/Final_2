import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mypage = () => {
  const navigation = useNavigation();
  
  const [postname, setPostname] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    const fetchPostname = async () => {
      const storedPostname = await AsyncStorage.getItem('postname');
      if (storedPostname) {
        setPostname(storedPostname);
      }
    };
    fetchPostname();
  }, []);

  React.useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    };
    fetchEmail();
  }, []);

  React.useEffect(() => {
    const fetchPassword = async () => {
      const storedPassword = await AsyncStorage.getItem('password');
      if (storedPassword) {
        setPassword(storedPassword);
      }
    };
    fetchPassword();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/rightarrow-1.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={() => Alert.alert('저장')}>
        <Text style={styles.saveButtonText}>저장</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.mypageContent}>
          <Text style={styles.title}>{`${postname} 님의 정보`}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>이름: {postname}</Text>
            <Text style={styles.infoText}>이메일:{`${email} 님의 정보`}</Text>
            <View style={styles.passwordContainer}>
              <Text style={styles.infoText}>
                비밀번호: {showPassword ? password : '*'.repeat(password.length)}
              </Text>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Image source={require('../assets/hide.png')} style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/buttonhome.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Exercisevideo')}>
          <Image source={require('../assets/buttonexplore.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mypage')}>
          <Image source={require('../assets/buttonprofile.png')} style={styles.navIcon} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollContentContainer: {
    paddingBottom: 100,
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
  saveButton: {
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_xl,
    padding: 10,
  },
  saveButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
  },
  mypageContent: {
    marginTop: 100,
    alignItems: 'center',
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: Color.colorWhite,
    padding: 20,
    borderRadius: Border.br_xl,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: Color.colorWhite,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Color.colorGray,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default Mypage;


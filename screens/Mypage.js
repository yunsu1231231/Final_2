import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Mypage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mypage, styles.iconLayout1]}>
      <View style={styles.mypageChild} />
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.backbuttonChild, styles.mypageItemBorder]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <View style={[styles.mypageItem, styles.mypageItemBorder]} />
      <Image
        style={styles.profile1Icon}
        contentFit="cover"
        source={require("../assets/profile.png")}
      />
      <Text style={styles.text}> 님의 정보</Text>
      
      <View style={[styles.navigationBar, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <Image
          style={[styles.buttonstatisticIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/buttonstatistic.png")}
        />
        <View
          style={[styles.buttonexploreactive, styles.buttonexploreactiveLayout]}
        >
          <View
            style={[
              styles.buttonexploreactiveInner,
              styles.buttonexploreactiveLayout,
            ]}
          >
            <View style={[styles.buttonprofileParent, styles.bgPosition]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/buttonprofile.png")}
              />
              <Text style={styles.mypage1}>Mypage</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.buttonhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/buttonhome.png")}
        />
        <Pressable
          style={[styles.box5, styles.iconLayout]}
          onPress={() => navigation.navigate("Exercisevideo")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/buttonexplore2.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.text1, styles.textTypo1]}>이름</Text>
      <Text style={[styles.text2, styles.textTypo]}>닉네임</Text>
      <Text style={[styles.text3, styles.textTypo]}>이메일</Text>
      <Text style={[styles.text4, styles.textTypo1]}>비밀번호</Text>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.child, styles.viewLayout]} />
        <Text style={[styles.text5, styles.textTypo1]}>저장</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupTextInputInput: {
    left: 26,
    width: 341,
    height: 305,
    top: 355,
    position: "absolute",
  },
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  backbuttonLayout: {
    height: 39,
    width: 41,
  },
  mypageItemBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  bgLayout: {
    height: 64,
    width: 340,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  buttonexploreactiveLayout: {
    height: 36,
    width: 110,
    position: "absolute",
  },
  bgPosition: {
    left: 0,
    top: 0,
  },
  textTypo1: {
    height: 21,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    width: 52,
    height: 21,
    fontSize: FontSize.size_base,
    left: 56,
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    position: "absolute",
  },
  viewLayout: {
    height: 44,
    width: 65,
    position: "absolute",
  },
  mypageChild: {
    top: 93,
    left: 11,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 370,
    height: 745,
    position: "absolute",
  },
  backbuttonChild: {
    borderColor: Color.primary,
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 39,
    width: 41,
  },
  rightArrow1Icon: {
    left: 10,
    width: 20,
    height: 16,
    top: 11,
    position: "absolute",
  },
  backbutton: {
    top: 45,
    left: 15,
    position: "absolute",
  },
  mypageItem: {
    top: 333,
    left: 196,
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 1,
    width: 1,
    height: 271,
  },
  profile1Icon: {
    top: 177,
    width: 156,
    height: 156,
    left: 118,
    position: "absolute",
  },
  text: {
    top: 122,
    fontSize: FontSize.size_3xl,
    width: 164,
    height: 25,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    left: 118,
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_400,
    left: 0,
    top: 0,
  },
  buttonstatisticIcon: {
    left: 170,
    top: 21,
    width: 24,
    position: "absolute",
  },
  mypage1: {
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    color: Color.colorGray_400,
    marginLeft: 4,
    lineHeight: 24,
    textAlign: "left",
  },
  buttonprofileParent: {
    borderRadius: Border.br_24xl,
    backgroundColor: Color.primary,
    flexDirection: "row",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_lgi,
    paddingBottom: Padding.p_7xs,
    position: "absolute",
  },
  buttonexploreactiveInner: {
    left: 0,
    top: 0,
  },
  buttonexploreactive: {
    top: 15,
    left: 214,
  },
  buttonhomeIcon: {
    left: 30,
    top: 21,
    width: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  box5: {
    left: 102,
    top: 20,
    position: "absolute",
  },
  navigationBar: {
    top: 769,
    left: 27,
  },
  text1: {
    top: 407,
    width: 36,
    height: 21,
    fontSize: FontSize.size_base,
    left: 56,
    textAlign: "left",
  },
  text2: {
    top: 467,
  },
  text3: {
    top: 527,
  },
  text4: {
    top: 587,
    width: 62,
    height: 21,
    fontSize: FontSize.size_base,
    left: 56,
    textAlign: "left",
  },
  child: {
    backgroundColor: Color.colorLightcyan,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  text5: {
    textAlign: "center",
    width: 36,
    height: 21,
    fontSize: FontSize.size_base,
    top: 11,
    left: 15,
  },
  view: {
    top: 40,
    left: 316,
  },
  mypage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 843,
  },
});

export default Mypage;

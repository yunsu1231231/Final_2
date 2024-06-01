import * as React from "react";
import { useState, useEffect } from "react";
import { Image, Linking, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from "@rneui/base";

const Exercisevideo = () => {
  const navigation = useNavigation();
  const [postName, setPostName] = useState("");

  useEffect(() => {
    const fetchPostName = async () => {
      const name = await AsyncStorage.getItem('postName');
      if (name) {
        setPostName(name);
      }
    };
    fetchPostName();
  }, []);

  const openYouTubeLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.exercisevideo}>
      <Image
        style={[styles.exercisevideoChild, styles.exercisevideoLayout]}
        contentFit="cover"
        source={require("../assets/Ellipse.png")}
      />
      <Image
        style={[styles.exercisevideoItem, styles.exercisevideoLayout]}
        contentFit="cover"
        source={require("../assets/Ellipse.png")}
      />
      <Image
        style={[styles.exercisevideoInner, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/Ellipse.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/Ellipse.png")}
      />
      <View style={styles.heading}>
        <Text style={styles.text}>{`${postName} 님 !`}</Text>
        <Text style={styles.text1}>오늘도 운동하러 오셨군요 !</Text>
      </View>
      <Pressable
        style={[styles.backbutton, styles.backbuttonLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.backbuttonChild, styles.backbuttonLayout]} />
        <Image
          style={styles.rightArrow1Icon}
          contentFit="cover"
          source={require("../assets/rightarrow-1.png")}
        />
      </Pressable>
      <Pressable onPress={() => openYouTubeLink("https://www.youtube.com/watch?v=squat-video-link")}>
        <Image
          style={styles.gym1Icon}
          contentFit="cover"
          source={require("../assets/squat.png")}
        />
      </Pressable>
      <Pressable onPress={() => openYouTubeLink("https://www.youtube.com/watch?v=biceps-video-link")}>
        <Image
          style={styles.biceps1Icon}
          contentFit="cover"
          source={require("../assets/dumbbelcurl.png")}
        />
      </Pressable>
      <Pressable onPress={() => openYouTubeLink("https://www.youtube.com/watch?v=gym2-video-link")}>
        <Image
          style={styles.gym2Icon}
          contentFit="cover"
          source={require("../assets/lunge.png")}
        />
      </Pressable>
      <Pressable onPress={() => openYouTubeLink("https://www.youtube.com/watch?v=standing-video-link")}>
        <Image
          style={styles.standing1Icon}
          contentFit="cover"
          source={require("../assets/shoulderpress.png")}
        />
      </Pressable>
      <Text style={styles.text2}>어떤 운동을 확인하시겠습니까 ?</Text>
      <Text style={[styles.text3, styles.textTypo]}>스쿼트</Text>
      <Text style={[styles.text4, styles.textTypo]}>런지</Text>
      <Text style={[styles.text5, styles.textTypo]}>덤벨컬</Text>
      <Text style={styles.text6}>숄더 프레스</Text>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={[styles.exercisevideoChild1, styles.lineViewLayout]} />
      <View style={[styles.navigationBar, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <Pressable
          style={[styles.buttonprofile, styles.iconLayout]}
          onPress={() => navigation.navigate("Mypage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/buttonprofile.png")}
          />
        </Pressable>
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
            <View style={[styles.buttonexploreParent, styles.bgPosition]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/buttonexplore.png")}
              />
              <Text style={styles.explore}>Explore</Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
        >
        <Image
          style={[styles.buttonhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/buttonhome.png")}
        />
        </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exercisevideoLayout: {
    height: 155,
    width: 155,
    top: 236,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 468,
    height: 155,
    width: 155,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  backbuttonLayout: {
    height: 39,
    width: 41,
    position: "absolute",
  },
  textTypo: {
    width: 69,
    height: 25,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
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
    width: 107,
    position: "absolute",
  },
  bgPosition: {
    left: 0,
    top: 0,
  },
  exercisevideoChild: {
    left: 30,
  },
  exercisevideoItem: {
    left: 204,
  },
  exercisevideoInner: {
    left: 204,
  },
  ellipseIcon: {
    left: 30,
  },
  text: {
    top: 40,
    left: 100,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    textAlign: "left",
    color: Color.colorGray_300,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    left: 0,
    top: 20,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  heading: {
    top: 41,
    left: 194,
    width: 172,
    height: 55,
    position: "absolute",
  },
  lineView: {
    top: 96,
    left: 205,
    borderColor: Color.colorBlack,
    width: 112,
  },
  backbuttonChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.primary,
    borderWidth: 2,
    borderStyle: "solid",
    height: 39,
    width: 41,
    left: 0,
    top: 0,
  },
  rightArrow1Icon: {
    top: 11,
    left: 10,
    width: 20,
    height: 16,
    position: "absolute",
  },
  backbutton: {
    top: 48,
    left: 14,
  },
  gym1Icon: {
    top: 252,
    left: 48,
    width: 119,
    height: 119,
    position: "absolute",
  },
  biceps1Icon: {
    top: 494,
    left: 232,
    width: 102,
    height: 102,
    position: "absolute",
  },
  gym2Icon: {
    top: 480,
    left: 43,
    width: 130,
    height: 130,
    position: "absolute",
  },
  text2: {
    top: 138,
    left: 26,
    width: 338,
    height: 25,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3: {
    left: 82,
    top: 407,
    width: 69,
    textAlign: "left",
  },
  text4: {
    left: 246,
    top: 407,
    width: 69,
    textAlign: "center",
  },
  text5: {
    top: 639,
    left: 247,
    textAlign: "center",
  },
  text6: {
    top: 642,
    left: 54,
    width: 107,
    height: 25,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    position: "absolute",
  },
  lineIcon: {
    top: 229,
    left: 193,
    width: 1,
    height: 447,
    position: "absolute",
  },
  exercisevideoChild1: {
    top: 444,
    left: 55,
    borderColor: Color.colorGainsboro_200,
    width: 280,
  },
  standing1Icon: {
    top: 256,
    left: 223,
    width: 118,
    height: 118,
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  buttonprofile: {
    left: 286,
    top: 20,
    width: 24,
    position: "absolute",
  },
  buttonstatisticIcon: {
    left: 214,
    top: 20,
    width: 24,
    position: "absolute",
  },
  buttonexploreIcon: {
    left: 14,
    top: 10,
    width: 24,
    position: "absolute",
  },
  explore: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    marginLeft: 4,
    textAlign: "left",
  },
  buttonexploreParent: {
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
    top: 14,
    left: 80,
  },
  buttonhomeIcon: {
    color:color.colorWhite,
    top: 10,
    left: 18,
    position: "absolute",
  },
  navigationBar: {
    top: 770,
    left: 23,
  },
  exercisevideo: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Exercisevideo;


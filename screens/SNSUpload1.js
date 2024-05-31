import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import NavigationBar from "../components/NavigationBar";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const SNSUpload1 = () => {
  return (
    <View style={styles.snsupload}>
      <View style={[styles.back, styles.backLayout]}>
        <View style={[styles.backChild, styles.lineViewBorder]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </View>
      <View style={[styles.snsuploadChild, styles.snsuploadPosition]} />
      <View style={[styles.snsuploadItem, styles.snsuploadPosition]} />
      <View style={styles.snsuploadInner} />
      <Image
        style={[
          styles.materialSymbolspersonOutlinIcon,
          styles.gameIconsqueenCrownLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolspersonoutline.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>지수뿡</Text>
      <Image
        style={[styles.gameIconsqueenCrown, styles.gameIconsqueenCrownLayout]}
        contentFit="cover"
        source={require("../assets/gameiconsqueencrown.png")}
      />
      <View style={[styles.back1, styles.backLayout]}>
        <View style={[styles.backChild, styles.lineViewBorder]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </View>
      <Text style={[styles.allPosts, styles.allPostsPosition]}>
        Today’s Post
      </Text>
      <Text style={[styles.joshuaLTheGameContainer, styles.allPostsPosition]}>
        <Text style={styles.text1}>{`지수뿡 | `}</Text>
        <Text style={styles.text2}>{`오늘 식단 !!
`}</Text>
      </Text>
      <Image
        style={styles.likeIcon}
        contentFit="cover"
        source={require("../assets/like.png")}
      />
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <NavigationBar buttonExplore={require("../assets/buttonexplore2.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    height: 39,
    width: 39,
  },
  lineViewBorder: {
    borderColor: Color.primary,
    borderStyle: "solid",
    position: "absolute",
  },
  snsuploadPosition: {
    backgroundColor: Color.colorWhite,
    left: -1,
    position: "absolute",
  },
  gameIconsqueenCrownLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  allPostsPosition: {
    color: Color.colorGray_200,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    height: 39,
    width: 39,
  },
  iconChevronleft: {
    marginTop: -6.5,
    right: 16,
    width: 9,
    height: 15,
    top: "50%",
    position: "absolute",
  },
  back: {
    left: 17,
    top: 24,
    width: 39,
    position: "absolute",
  },
  snsuploadChild: {
    top: 71,
    width: 390,
    height: 537,
  },
  snsuploadItem: {
    top: 135,
    width: 391,
    height: 405,
  },
  snsuploadInner: {
    top: 129,
    left: 35,
    width: 318,
    height: 250,
    position: "absolute",
  },
  materialSymbolspersonOutlinIcon: {
    top: 89,
    left: 17,
  },
  text: {
    top: 91,
    left: 51,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    width: 58,
    height: 28,
    fontWeight: "800",
    position: "absolute",
  },
  gameIconsqueenCrown: {
    top: 88,
    left: 109,
  },
  back1: {
    left: 18,
    top: 24,
    width: 39,
    position: "absolute",
  },
  allPosts: {
    marginTop: -411.5,
    width: "29.23%",
    left: "35.38%",
    fontSize: FontSize.size_5xl,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.latoBold,
    textAlign: "center",
  },
  text1: {
    fontFamily: FontFamily.latoBlack,
    fontWeight: "800",
  },
  text2: {
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
  },
  joshuaLTheGameContainer: {
    marginTop: 208.5,
    width: "88.46%",
    left: "6.15%",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  likeIcon: {
    height: "4.07%",
    width: "10.26%",
    top: "65.03%",
    right: "85.9%",
    bottom: "30.9%",
    left: "3.85%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineView: {
    top: 743,
    left: 24,
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  snsupload: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    width: "100%",
    height: 855,
    overflow: "hidden",
  },
});

export default SNSUpload1;

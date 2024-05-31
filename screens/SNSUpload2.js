import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TopBar from "../components/TopBar";
import NavigationBar from "../components/NavigationBar";
import { Color } from "../GlobalStyles";

const SNSUpload2 = () => {
  return (
    <View style={styles.snsupload}>
      <View style={styles.snsuploadChild} />
      <TopBar />
      <Image
        style={styles.postsIcon}
        contentFit="cover"
        source={require("../assets/posts.png")}
      />
      <NavigationBar buttonExplore={require("../assets/buttonexplore2.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  snsuploadChild: {
    top: 129,
    left: 35,
    width: 318,
    height: 250,
    position: "absolute",
  },
  postsIcon: {
    top: 88,
    left: 0,
    width: 390,
    height: 767,
    position: "absolute",
  },
  snsupload: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    width: "100%",
    height: 855,
    overflow: "hidden",
  },
});

export default SNSUpload2;

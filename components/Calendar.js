import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./Header";
import Row from "./Row";
import { Border, Color, Padding } from "../GlobalStyles";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <Header />
      <View style={styles.days}>
        <Row
          prop="Su"
          prop1="Mo"
          prop2="Tu"
          prop3="We"
          prop4="Th"
          prop5="Fr"
          prop6="Sa"
          rowPosition="unset"
          rowMarginTop="unset"
          cellBorderStyle="unset"
          cellBorderColor="unset"
          cellPadding={10}
          cellBackgroundColor="unset"
          textFontFamily="Inter-SemiBold"
          textFontWeight="600"
          textColor="#000"
          cellBorderStyle1="unset"
          cellBorderColor1="unset"
          cellPadding1={10}
          cellBackgroundColor1="unset"
          textFontFamily1="Inter-SemiBold"
          textFontWeight1="600"
          textColor1="#000"
          cellBorderStyle2="unset"
          cellBorderColor2="unset"
          cellPadding2={10}
          cellBackgroundColor2="unset"
          textFontFamily2="Inter-SemiBold"
          textFontWeight2="600"
          textColor2="#000"
          cellBorderStyle3="unset"
          cellBorderColor3="unset"
          cellPadding3={10}
          textFontFamily3="Inter-SemiBold"
          textFontWeight3="600"
          cellBorderStyle4="unset"
          cellBorderColor4="unset"
          cellPadding4={10}
          textFontFamily4="Inter-SemiBold"
          textFontWeight4="600"
          cellBorderStyle5="unset"
          cellBorderColor5="unset"
          cellPadding5={10}
          textFontFamily5="Inter-SemiBold"
          textFontWeight5="600"
          cellBorderStyle6="unset"
          cellBorderColor6="unset"
          cellPadding6={10}
          cellBackgroundColor3="unset"
          textFontFamily6="Inter-SemiBold"
          textFontWeight6="600"
          textColor3="#000"
        />
        <Row
          prop="28"
          prop1="29"
          prop2="30"
          prop3="1"
          prop4="2"
          prop5="3"
          prop6="4"
          rowPosition="unset"
          rowMarginTop={-1}
          cellBorderStyle="solid"
          cellBorderColor="#d5d4df"
          cellBorderWidth={1}
          cellPadding={10}
          cellBackgroundColor="#f3f3f7"
          textFontFamily="Inter-Regular"
          textFontWeight="unset"
          textColor="#a8a8a8"
          cellBorderStyle1="solid"
          cellBorderColor1="#d5d4df"
          cellBorderWidth1={1}
          cellPadding1={10}
          cellBackgroundColor1="#f3f3f7"
          textFontFamily1="Inter-Regular"
          textFontWeight1="unset"
          textColor1="#a8a8a8"
          cellBorderStyle2="solid"
          cellBorderColor2="#d5d4df"
          cellBorderWidth2={1}
          cellPadding2={10}
          cellBackgroundColor2="#f3f3f7"
          textFontFamily2="Inter-Regular"
          textFontWeight2="unset"
          textColor2="#a8a8a8"
          cellBorderStyle3="solid"
          cellBorderColor3="#d5d4df"
          cellBorderWidth3={1}
          cellPadding3={10}
          textFontFamily3="Inter-Regular"
          textFontWeight3="unset"
          cellBorderStyle4="solid"
          cellBorderColor4="#d5d4df"
          cellBorderWidth4={1}
          cellPadding4={10}
          textFontFamily4="Inter-Regular"
          textFontWeight4="unset"
          cellBorderStyle5="solid"
          cellBorderColor5="#d5d4df"
          cellBorderWidth5={1}
          cellPadding5={10}
          textFontFamily5="Inter-Regular"
          textFontWeight5="unset"
          cellBorderStyle6="solid"
          cellBorderColor6="#d5d4df"
          cellBorderWidth6={1}
          cellPadding6={10}
          cellBackgroundColor3="unset"
          textFontFamily6="Inter-Regular"
          textFontWeight6="unset"
          textColor3="#000"
        />
        <Row
          prop="5"
          prop1="6"
          prop2="7"
          prop3="8"
          prop4="9"
          prop5="10"
          prop6="11"
          rowPosition="unset"
          rowMarginTop={-1}
          cellBorderStyle="solid"
          cellBorderColor="#d5d4df"
          cellBorderWidth={1}
          cellPadding={10}
          cellBackgroundColor="unset"
          textFontFamily="Inter-Regular"
          textFontWeight="unset"
          textColor="#000"
          cellBorderStyle1="solid"
          cellBorderColor1="#d5d4df"
          cellBorderWidth1={1}
          cellPadding1={10}
          cellBackgroundColor1="unset"
          textFontFamily1="Inter-Regular"
          textFontWeight1="unset"
          textColor1="#000"
          cellBorderStyle2="solid"
          cellBorderColor2="#d5d4df"
          cellBorderWidth2={1}
          cellPadding2={10}
          cellBackgroundColor2="unset"
          textFontFamily2="Inter-Regular"
          textFontWeight2="unset"
          textColor2="#000"
          cellBorderStyle3="solid"
          cellBorderColor3="#d5d4df"
          cellBorderWidth3={1}
          cellPadding3={10}
          textFontFamily3="Inter-Regular"
          textFontWeight3="unset"
          cellBorderStyle4="solid"
          cellBorderColor4="#d5d4df"
          cellBorderWidth4={1}
          cellPadding4={10}
          textFontFamily4="Inter-Regular"
          textFontWeight4="unset"
          cellBorderStyle5="solid"
          cellBorderColor5="#d5d4df"
          cellBorderWidth5={1}
          cellPadding5={10}
          textFontFamily5="Inter-Regular"
          textFontWeight5="unset"
          cellBorderStyle6="solid"
          cellBorderColor6="#d5d4df"
          cellBorderWidth6={1}
          cellPadding6={10}
          cellBackgroundColor3="unset"
          textFontFamily6="Inter-Regular"
          textFontWeight6="unset"
          textColor3="#000"
        />
        <Row
          prop="12"
          prop1="13"
          prop2="14"
          prop3="15"
          prop4="16"
          prop5="17"
          prop6="18"
          rowPosition="unset"
          rowMarginTop={-1}
          cellBorderStyle="solid"
          cellBorderColor="#d5d4df"
          cellBorderWidth={1}
          cellPadding={10}
          cellBackgroundColor="unset"
          textFontFamily="Inter-Regular"
          textFontWeight="unset"
          textColor="#000"
          cellBorderStyle1="solid"
          cellBorderColor1="#d5d4df"
          cellBorderWidth1={1}
          cellPadding1={10}
          cellBackgroundColor1="unset"
          textFontFamily1="Inter-Regular"
          textFontWeight1="unset"
          textColor1="#000"
          cellBorderStyle2="solid"
          cellBorderColor2="#d5d4df"
          cellBorderWidth2={1}
          cellPadding2={10}
          cellBackgroundColor2="unset"
          textFontFamily2="Inter-Regular"
          textFontWeight2="unset"
          textColor2="#000"
          cellBorderStyle3="solid"
          cellBorderColor3="#d5d4df"
          cellBorderWidth3={1}
          cellPadding3={10}
          textFontFamily3="Inter-Regular"
          textFontWeight3="unset"
          cellBorderStyle4="solid"
          cellBorderColor4="#d5d4df"
          cellBorderWidth4={1}
          cellPadding4={10}
          textFontFamily4="Inter-Regular"
          textFontWeight4="unset"
          cellBorderStyle5="solid"
          cellBorderColor5="#d5d4df"
          cellBorderWidth5={1}
          cellPadding5={10}
          textFontFamily5="Inter-Regular"
          textFontWeight5="unset"
          cellBorderStyle6="solid"
          cellBorderColor6="#d5d4df"
          cellBorderWidth6={1}
          cellPadding6={10}
          cellBackgroundColor3="unset"
          textFontFamily6="Inter-Regular"
          textFontWeight6="unset"
          textColor3="#000"
        />
        <Row
          prop="19"
          prop1="20"
          prop2="21"
          prop3="22"
          prop4="23"
          prop5="24"
          prop6="25"
          rowPosition="unset"
          rowMarginTop={-1}
          cellBorderStyle="solid"
          cellBorderColor="#d5d4df"
          cellBorderWidth={1}
          cellPadding={10}
          cellBackgroundColor="unset"
          textFontFamily="Inter-Regular"
          textFontWeight="unset"
          textColor="#000"
          cellBorderStyle1="solid"
          cellBorderColor1="#d5d4df"
          cellBorderWidth1={1}
          cellPadding1={10}
          cellBackgroundColor1="unset"
          textFontFamily1="Inter-Regular"
          textFontWeight1="unset"
          textColor1="#000"
          cellBorderStyle2="solid"
          cellBorderColor2="#d5d4df"
          cellBorderWidth2={1}
          cellPadding2={10}
          cellBackgroundColor2="unset"
          textFontFamily2="Inter-Regular"
          textFontWeight2="unset"
          textColor2="#000"
          cellBorderStyle3="solid"
          cellBorderColor3="#d5d4df"
          cellBorderWidth3={1}
          cellPadding3={10}
          textFontFamily3="Inter-Regular"
          textFontWeight3="unset"
          cellBorderStyle4="solid"
          cellBorderColor4="#d5d4df"
          cellBorderWidth4={1}
          cellPadding4={10}
          textFontFamily4="Inter-Regular"
          textFontWeight4="unset"
          cellBorderStyle5="solid"
          cellBorderColor5="#d5d4df"
          cellBorderWidth5={1}
          cellPadding5={10}
          textFontFamily5="Inter-Regular"
          textFontWeight5="unset"
          cellBorderStyle6="solid"
          cellBorderColor6="#d5d4df"
          cellBorderWidth6={1}
          cellPadding6={10}
          cellBackgroundColor3="unset"
          textFontFamily6="Inter-Regular"
          textFontWeight6="unset"
          textColor3="#000"
        />
        <Row
          prop="26"
          prop1="27"
          prop2="28"
          prop3="29"
          prop4="30"
          prop5="31"
          prop6="1"
          rowPosition="unset"
          rowMarginTop={-1}
          cellBorderStyle="solid"
          cellBorderColor="#d5d4df"
          cellBorderWidth={1}
          cellPadding={10}
          cellBackgroundColor="unset"
          textFontFamily="Inter-Regular"
          textFontWeight="unset"
          textColor="#000"
          cellBorderStyle1="solid"
          cellBorderColor1="#d5d4df"
          cellBorderWidth1={1}
          cellPadding1={10}
          cellBackgroundColor1="unset"
          textFontFamily1="Inter-Regular"
          textFontWeight1="unset"
          textColor1="#000"
          cellBorderStyle2="solid"
          cellBorderColor2="#d5d4df"
          cellBorderWidth2={1}
          cellPadding2={10}
          cellBackgroundColor2="unset"
          textFontFamily2="Inter-Regular"
          textFontWeight2="unset"
          textColor2="#000"
          cellBorderStyle3="solid"
          cellBorderColor3="#d5d4df"
          cellBorderWidth3={1}
          cellPadding3={10}
          textFontFamily3="Inter-Regular"
          textFontWeight3="unset"
          cellBorderStyle4="solid"
          cellBorderColor4="#d5d4df"
          cellBorderWidth4={1}
          cellPadding4={10}
          textFontFamily4="Inter-Regular"
          textFontWeight4="unset"
          cellBorderStyle5="solid"
          cellBorderColor5="#d5d4df"
          cellBorderWidth5={1}
          cellPadding5={10}
          textFontFamily5="Inter-Regular"
          textFontWeight5="unset"
          cellBorderStyle6="solid"
          cellBorderColor6="#d5d4df"
          cellBorderWidth6={1}
          cellPadding6={10}
          cellBackgroundColor3="#f2f3f7"
          textFontFamily6="Inter-Regular"
          textFontWeight6="unset"
          textColor3="#a8a8a8"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  days: {
    alignSelf: "stretch",
    marginTop: 12,
  },
  calendar: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 344,
    height: 357,
    padding: Padding.p_xl,
  },
});

export default Calendar;

import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../assets/css/colors";

const AppText = ({ text, uppercase }) => {
  return <Text style={[styles.text, uppercase ? uppercase : ""]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    lineHeight: 20,
  },
});

export default AppText;

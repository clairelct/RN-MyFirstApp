import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../assets/css/colors";

const AppTextGrey = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.paleGrey,
    lineHeight: 20,
  },
});

export default AppTextGrey;

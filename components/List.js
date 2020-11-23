import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../assets/css/colors";
import AppTextGrey from "../components/AppTextGrey";

const List = () => {
  return (
    <View style={styles.list}>
      <Text style={styles.textList}>2014</Text>
      <Text style={styles.textList}>PG-13</Text>
      <Text style={styles.textList}>2h 49min</Text>
      <Text style={styles.textList}>Adventure, Drama, Sci-Fi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
  },
  textList: {
    color: colors.paleGrey,
    marginRight: 10,
  },
});

export default List;

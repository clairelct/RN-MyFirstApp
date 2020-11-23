import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppText from "../components/AppText";
import AppTextGrey from "../components/AppTextGrey";
import colors from "../assets/css/colors";

const Actor = () => {
  return (
    <View style={styles.actorContainer}>
      <Image
        style={styles.img}
        source={require("../assets/img/matthew-mcconaughey.jpg")}
      ></Image>
      <View style={styles.infos}>
        <AppText text="Matthew"></AppText>
        <AppTextGrey text="Cooper"></AppTextGrey>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 250,
    width: "100%",
  },
  infos: {
    color: colors.grey,
  },
  actorContainer: {
    width: 140,
    backgroundColor: colors.grey,
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default Actor;

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppText from "../components/AppText";
import AppTextGrey from "../components/AppTextGrey";
import colors from "../assets/css/colors";

const Actor = ({ name, character, img }) => {
  return (
    <View style={styles.actorContainer}>
      <Image
        style={styles.img}
        source={require("../assets/img/matthew-mcconaughey.jpg")}
      ></Image>
      <View style={styles.infos}>
        <AppText text={name}></AppText>
        <AppTextGrey text={character}></AppTextGrey>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 220,
    width: "100%",
  },
  infos: {
    color: colors.grey,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  actorContainer: {
    marginTop: 15,
    marginBottom: 20,
    marginRight: 10,
    width: 150,
    backgroundColor: colors.grey,
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default Actor;

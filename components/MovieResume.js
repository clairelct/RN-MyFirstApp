import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../assets/css/colors";
import AppText from "../components/AppText";

const MovieResume = ({ img, text }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img}></Image>
      <View style={styles.resumeContainer}>
        <AppText text={text}></AppText>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+ Add to watchlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  img: {
    width: "33%",
    height: 165,
    resizeMode: "contain",
  },
  resumeContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  button: {
    marginTop: 15,
    backgroundColor: colors.blue,
    borderRadius: 5,
    padding: 8,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default MovieResume;

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppText from "./AppText";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../assets/css/colors";

const Rates = ({ rate, totalRates, metascore, totalCritics }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <FontAwesome
          style={styles.iconMargin}
          name="star"
          size={24}
          color={colors.yellow}
        />
        <Text style={styles.rate}>
          <Text style={styles.bold}>{rate}</Text>/10
        </Text>
        <Text style={[styles.legend, { textTransform: "uppercase" }]}>
          {totalRates}M
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <FontAwesome
          style={styles.iconMargin}
          name="star-o"
          size={24}
          color="white"
        />
        <AppText
          uppercase={{ textTransform: "uppercase" }}
          text="Rate this"
        ></AppText>
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.numberIcon, styles.iconMargin]}>
          <AppText text={metascore}></AppText>
        </View>
        <AppText text="Metascore"></AppText>
        <Text style={styles.legend}>{totalCritics} critic reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  boxContainer: {
    flex: 1,
    height: 95,
    paddingTop: 15,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  legend: {
    color: colors.paleGrey,
  },
  rate: {
    color: colors.white,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  numberIcon: {
    backgroundColor: colors.green,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  iconMargin: {
    marginBottom: 5,
  },
});

export default Rates;

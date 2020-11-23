import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import List from "./components/List";
import MovieResume from "./components/MovieResume";
import Rates from "./components/Rates";
import Actor from "./components/Actor";
import colors from "./assets/css/colors";
import AppText from "./components/AppText";
import AppTextGrey from "./components/AppTextGrey";

export default function App() {
  console.log(Platform);
  console.log(Constants);

  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        {
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        },
      ]}
    >
      <ScrollView style={styles.mainContainer}>
        <StatusBar
          style={Platform.OS === "android" ? "light" : "dark"}
          backgroundColor="black"
        ></StatusBar>
        <View style={[styles.topBar, styles.internPadding]}>
          <Image
            style={styles.topBarImg}
            source={require("./assets/img/imdb.png")}
          ></Image>
        </View>

        {/* SECTION 1 */}
        <View style={[styles.section, styles.internPadding]}>
          <Text style={styles.mainTitle}>Interstellar</Text>
          <List></List>
          <MovieResume
            img={require("./assets/img/interstellar.jpg")}
            text="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
          ></MovieResume>
          <Rates
            rate={8.6}
            totalRates={1.1}
            metascore={74}
            totalCritics={46}
          ></Rates>
        </View>

        {/* SECTION 2 */}
        <View style={[styles.section, styles.internPadding]}>
          <View style={styles.titleBar}>
            <Text style={styles.secondaryTitle}>Top Billed Cast</Text>
            <Text style={styles.link}>See all</Text>
          </View>
          <ScrollView horizontal={true} style={styles.galleryContainer}>
            <Actor name="Matthew McConaughey" character="Cooper"></Actor>
            <Actor name="Jessica Chastain" character="Murph"></Actor>
            <Actor name="Anne Hataway" character="Brand"></Actor>
          </ScrollView>
          <View style={{ marginBottom: 15 }}>
            <AppText text="Director"></AppText>
            <AppTextGrey text="Christopher Nolan"></AppTextGrey>
          </View>
          <View>
            <AppText text="Writers"></AppText>
            <AppTextGrey text="Jonathan Nolan (written by) and Christopher Nolan (written by)"></AppTextGrey>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  internPadding: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainContainer: {
    backgroundColor: colors.darkGrey,
    flex: 1,
  },
  section: {
    backgroundColor: colors.mediumGrey,
    marginBottom: 20,
  },
  topBar: {
    // height: 40,
    backgroundColor: colors.lightGrey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,

    elevation: 6,
  },
  topBarImg: {
    width: 60,
    height: 40,
    resizeMode: "cover",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  mainTitle: {
    fontSize: 34,
    color: colors.white,
    marginBottom: 5,
  },
  secondaryTitle: {
    marginTop: 10,
    fontSize: 24,
    color: colors.white,
  },
  link: {
    textTransform: "uppercase",
    color: colors.blue,
    fontWeight: "bold",
  },
  galleryContainer: {
    flexDirection: "row",
  },
});

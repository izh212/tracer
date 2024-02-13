import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import constants from "expo-constants";
import WorkoutHeader from "../components/WorkoutHeader";
import { Feather, Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

const Workout = () => {
  const nav = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <WorkoutHeader />
      <View style={styles.body}>
        <Text style={styles.text}>Quick Start</Text>
        <TouchableOpacity style={styles.btn} onPress={
          ()=>nav.navigate("LogWorkout")
        }>
          <Text style={styles.plus}>+</Text>
          <Text style={{ fontSize: 16 }}>Start Empty workout</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Routines</Text>
        <View style={{
            flexDirection: "row",
            gap: 5,
        }}>
          <TouchableOpacity style={styles.btn2}>
          <Feather name="clipboard" size={24} color="dodgerblue" />
            <Text style={{ fontSize: 16 }}>New Routine</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2}>
          <Ionicons name="search-outline" size={24} color="dodgerblue" />
            <Text style={{ fontSize: 16 }}>Explore</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>My Routines</Text>
      </View>
    </SafeAreaView>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    marginTop: constants.statusBarHeight,
    backgroundColor: "white",
    height: "100%",
  },
  body: {
    marginHorizontal: 15,
    marginTop: 20,
    gap: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    gap: 10,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  btn2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    gap: 10,
    padding: 7,
    borderRadius: 5,
    borderColor: "lightgrey",
    width: "50%",
  },
  plus: {
    fontSize: 30,
    color: "dodgerblue",
  },
});

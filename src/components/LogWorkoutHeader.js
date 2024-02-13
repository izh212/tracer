import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import StopWatch from "../components/StopWatch";
import constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const LogWorkoutHeader = () => {
    const nav = useNavigation()
  return (
    <SafeAreaView style={styles.main}>
        <TouchableOpacity onPress={()=> nav.goBack()}>
      <AntDesign name="down" size={20} color="dodgerblue" />
        </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
        }}
      >
        Log Workout
      </Text>
      <TouchableOpacity>
        <Text style={
            {
                fontSize: 18,
                color: "white",
                backgroundColor: "dodgerblue",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 10
            }
        }>
            Finish
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogWorkoutHeader;

const styles = StyleSheet.create({
  main: {
    marginTop: constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
});

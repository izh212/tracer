import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import constants from "expo-constants";
import ProfileHeader from "../components/ProfileHeader";
import User from "../components/User";
import Chart from "../components/Chart";

const Profile = () => {
  const [filter, setFilter] = React.useState("duration");
  return (
    <SafeAreaView style={{marginTop:constants.statusBarHeight}} >
      <ProfileHeader />
      <View style={styles.container}>
      <User/>
      <Chart filter = {filter}/>

      <View style={styles.filters}>
        <Text style={filter === 'duration' ?styles.filter_selected:styles.filter_unselected} onPress={()=> setFilter('duration')}>Duration</Text>
        <Text style={filter === 'volume' ?styles.filter_selected:styles.filter_unselected} onPress={()=> setFilter('volume')}>Volume</Text>
        <Text style={filter === 'reps' ?styles.filter_selected:styles.filter_unselected} onPress={()=> setFilter('reps')}>Reps</Text>
      </View>

      <View style={styles.dashboard}>

      </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  filters: {
    flexDirection: "row",
    width: "100%",
    gap: 20,
    paddingHorizontal: 30,
  },
  filter_selected: {
    fontSize: 16,
    color: "white",
    backgroundColor: "dodgerblue",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,


  },
  filter_unselected: {
    fontSize: 16,
    color: "black",
    backgroundColor: "ghostwhite",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
  }
  
});

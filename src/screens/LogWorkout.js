import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import LogWorkoutHeader from '../components/LogWorkoutHeader'
import WorkoutDetailsHeader from '../components/WorkoutDetailsHeader'

const LogWorkout = () => {
  return (
    <SafeAreaView style={styles.main}>
      <LogWorkoutHeader />
      <WorkoutDetailsHeader/>
      <View style={{
        justifyContent: 'center',
        marginTop: 50,
      
      }}>
        <TouchableOpacity >
          <Text style={styles.text}> + Add Exercise</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LogWorkout

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'dodgerblue',
      width: "90%",
      padding: 5,
      borderRadius: 10,
      alignSelf: 'center',
        
    },
    main: {
      flex: 1,
      backgroundColor: "white",
        
    },

})
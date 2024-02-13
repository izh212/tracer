import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';

const WorkoutHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Workout</Text>
    </SafeAreaView>
  )
}

export default WorkoutHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,    
        paddingTop: 2,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',},
    text:{
        fontSize: 18,

    }
})
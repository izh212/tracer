import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import StopWatch from './StopWatch'

const WorkoutDetailsHeader = () => {
  return (
    <SafeAreaView style={styles.view}>
        <View style={styles.smView}>
            <Text style={styles.text}>Duration</Text>
            <StopWatch />
        </View>
        <View style={styles.smView}>
            <Text style={styles.text}>Volume</Text>
            <Text>0 kg</Text>
        </View>
        <View style={styles.smView}>
            <Text style={styles.text}>Sets</Text>
            <Text>0</Text>
        </View>
    </SafeAreaView>
  )
}

export default WorkoutDetailsHeader

const styles = StyleSheet.create({
    view:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 15,
        gap: 15,
    },
    smView:{
        alignItems: "center",
    },
    text:{
        fontSize: 14,
        fontWeight: "300",
        color: "grey",
    }
})
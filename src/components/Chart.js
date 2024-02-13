import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chart = ({filter}) => {
  return (
    <View style=
    {styles.container}>
      <Text>{filter}</Text>
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: "90%",
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgrey",
    }
})
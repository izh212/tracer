import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View style={styles.info}>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={{
          gap: 10
        }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>John Doe</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              width: 200,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={styles.graytext}> Workouts</Text>
              <Text style={styles.text}>0</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={styles.graytext}> Sets</Text>
              <Text style={styles.text}>0</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={styles.graytext}> Total Volume</Text>
              <Text style={styles.text}>0</Text>
            </View>
          </View>
        </View>
      </View>
  )
}

export default User

const styles = StyleSheet.create({
    info: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      },
      graytext: {
        color: "gray",
        fontSize: 12,
      },
      text: {
        fontSize: 14,
        fontWeight: "500",
      },
})
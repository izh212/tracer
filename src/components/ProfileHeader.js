import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'

const ProfileHeader = () => {
  return (
    <View style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,    
        paddingTop: 2,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    
    }}>
        <Text 
        style={{
            fontSize: 16,
            color: 'dodgerblue',
        
        }}> Edit Profile</Text>
        <Text style={
            {
                fontSize: 16,
                fontWeight: '500',
                marginLeft:-20
            }
        
        }> John Doe</Text>
        <View style={{flexDirection:'row', gap:10}}>
        <Feather name="share" size={24} color="dodgerblue" />
        <Feather name="settings" size={24} color="dodgerblue" />
        </View>

    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})
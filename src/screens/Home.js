import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import StepCounter from '../components/StepCounter'
import constants from 'expo-constants';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <SafeAreaView style={{
        marginTop: constants.statusBarHeight,
        backgroundColor: 'white',
    }}>
        {/* <HomeHeader/> */}
        <StepCounter/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

})
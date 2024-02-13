import { StyleSheet, Text, View } from 'react-native'
import {useState, useEffect} from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0)
    
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const formatTime = `0${minutes}:${seconds > 9 ? seconds : `0${seconds}`} `

  return (
    <View>
        <Text style={styles.text}>{formatTime}</Text>
    </View>
  )
}

export default StopWatch

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "700",
        color: "dodgerblue",
    },
})
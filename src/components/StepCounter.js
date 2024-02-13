import { StyleSheet, Text, View } from 'react-native'
import {React, useState, useEffect} from 'react'
import { Accelerometer } from 'expo-sensors';

const StepCounter = () => {
  const [{x, y, z}, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);

    });
    countSteps();
    if (readStepDetection([x, y, z])) {
      console.log('Step detected');
    }
Accelerometer.setUpdateInterval(500)
    return () => {
      subscription.remove();
  }}
  , [x, y, z]);

  const countSteps = () => {
    console.log(x, y, z)
    
  }

  return (
    <View>
      <Text>x:{x}</Text>
      <Text>y:{y}</Text>
      <Text>z:{z}</Text>
      <Text>Steps: {steps}</Text>

    </View>
  )
}

export default StepCounter

const styles = StyleSheet.create({})

let lastAccelZValue = -9999;
let lastCheckTime = 0;
let highLineState = true;
let lowLineState = true;
let passageState = false;
let highLine = 1;
let highBoundaryLine = 0;
let highBoundaryLineAlpha = 1.0;
let highLineMin = 0.50;
let highLineMax = 1.5;
let highLineAlpha = 0.0005;
let lowLine = -1;
let lowBoundaryLine = 0;
let lowBoundaryLineAlpha = -1.0;
let lowLineMax = -0.50;
let lowLineMin = -1.5;
let lowLineAlpha = 0.0005;
let lowPassFilterAlpha = 0.9;

function readStepDetection(accelLinearData) {
  const currentTime = Date.now();
  const gapTime1 = currentTime - lastCheckTime;
  
  if (lastAccelZValue === -9999) {
    lastAccelZValue = accelLinearData[2];
  }

  if (highLineState && highLine > highLineMin) {
    highLine -= highLineAlpha;
    highBoundaryLine = highLine * highBoundaryLineAlpha;
  }

  if (lowLineState && lowLine < lowLineMax) {
    lowLine += lowLineAlpha;
    lowBoundaryLine = lowLine * lowBoundaryLineAlpha;
  }

  // Perform a low pass filter for sensor reading
  const zValue = (lowPassFilterAlpha * lastAccelZValue) + (1 - lowPassFilterAlpha) * accelLinearData[2];
  
  if (highLineState && gapTime1 > 100 && zValue > highBoundaryLine) {
    highLineState = false;
  }

  if (lowLineState && zValue < lowBoundaryLine && passageState) {
    lowLineState = false;
  }

  if (!highLineState) {
    if (zValue > highLine) {
      highLine = zValue;
      highBoundaryLine = highLine * highBoundaryLineAlpha;

      if (highLine > highLineMax) {
        highLine = highLineMax;
        highBoundaryLine = highLine * highBoundaryLineAlpha;
      }
    } else {
      if (highBoundaryLine > zValue) {
        highLineState = true;
        passageState = true;
      }
    }
  }

  if (!lowLineState && passageState) {
    if (zValue < lowLine) {
      lowLine = zValue;
      lowBoundaryLine = lowLine * lowBoundaryLineAlpha;

      if (lowLine < lowLineMin) {
        lowLine = lowLineMin;
        lowBoundaryLine = lowLine * lowBoundaryLineAlpha;
      }
    } else {
      if (lowBoundaryLine < zValue) {
        lowLineState = true;
        passageState = false;

        // Step is detected here
        // Do something

        lastCheckTime = currentTime;
        return true; // Return true when a step is detected
      }
    }
  }

  lastAccelZValue = zValue;
  return false; // Return false if no step is detected
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Workout from './src/screens/Workout';
import LogWorkout from './src/screens/LogWorkout';
import Profile from './src/screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/screens/Home';
export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const WorkoutStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='WorkoutST' component={Workout} options={{headerShown:false}}/>
        <Stack.Screen name='LogWorkout' component={LogWorkout} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Home'
      screenOptions={({route}) => ({
        tabBarIcon:({
          focused,
          color,
          size
        }) => {
          let iconName;
           if (route.name === 'Workout') {
            iconName = focused ? 'barbell-sharp' : 'barbell-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false
      }
      )
      }
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Workout' component={WorkoutStack}/>
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/Screens/LoginScreen'
import SignUpscreen from './src/Screens/SignUpscreen'
import { createStackNavigator } from '@react-navigation/stack'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name ="Login" component={LoginScreen}/>
        <Stack.Screen name ="SignUp" component={SignUpscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
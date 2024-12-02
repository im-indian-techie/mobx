import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Notes from './src/Notes'

const App = () => {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Notes' component={Notes} />
        <stack.Screen name='Home' component={Home} />

      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
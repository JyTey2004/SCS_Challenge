import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack'

const AppNav = () => {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
    
  )
}

export default AppNav
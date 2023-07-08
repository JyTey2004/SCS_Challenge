import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack'
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import HomeScreen from '../screens/HomeScreen';
import AppTab from './AppTab';

const AppNav = () => {
    const {isLoggedIn} = useContext(AuthContext)
  return (
    <NavigationContainer>
      {
            isLoggedIn ?<AppTab /> : <AuthStack />
      }
    </NavigationContainer>
    
  )
}

export default AppNav
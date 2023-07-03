import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'

const AuthStack = () => {
    const AuthStackNav = createStackNavigator()
  return (
    <AuthStackNav.Navigator>
        <AuthStackNav.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStackNav.Screen name="Login" component={LoginScreen} />
        <AuthStackNav.Screen name="Register" component={RegisterScreen} />
    </AuthStackNav.Navigator>
  )
}

export default AuthStack
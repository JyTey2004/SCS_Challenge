import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'
import PatientInfoScreen from '../screens/RegisterHealth/PatientInfoScreen'

const AuthStack = () => {
    const AuthStackNav = createStackNavigator()
  return (
    <AuthStackNav.Navigator>
        <AuthStackNav.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <AuthStackNav.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <AuthStackNav.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <AuthStackNav.Screen name="PatientInfoScreen" component={PatientInfoScreen} options={{headerShown: false}}/>
    </AuthStackNav.Navigator>
  )
}

export default AuthStack
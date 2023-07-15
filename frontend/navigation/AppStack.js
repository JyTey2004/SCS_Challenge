import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SnapScreen from '../screens/StackScreens/SnapScreen'
import CommunityScreen from '../screens/StackScreens/CommunityScreen'

const AppStack = () => {
    const AppStackNav = createStackNavigator()
  return (
    <AppStackNav.Navigator>
        <AppStackNav.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <AppStackNav.Screen name="SnapScreen" component={SnapScreen} options={{headerShown: false, presentation: 'modal'}}/>
        <AppStackNav.Screen name="CommunityScreen" component={CommunityScreen} options={{headerShown: false}}/>
    </AppStackNav.Navigator>
  )
}

export default AppStack
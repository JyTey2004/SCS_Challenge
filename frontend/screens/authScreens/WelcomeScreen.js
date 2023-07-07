import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Typewriter from '../../components/Typewriter'
import Accordian from '../../components/Accordian'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View className="bg-black flex-1 justify-center ">
      <View className='p-3 ml-2'>
        <Text className="text-green-300 text-5xl font-semibold">ProDoctor</Text>
        <View className='flex-row mb-2'>
          <Text className="text-green-300 text-2xl font-semibold">Health? </Text>
          <Typewriter
            text="Your one stop solution!"
            delay={100}
            infinite={true}
            style="text-green-300 text-2xl font-semibold"
          />
        </View>
        <Accordian />
        <TouchableOpacity
          className='mt-2 flex-row items-center'
          onPress={() => navigation.navigate('Register')}
        >
          <Text className="text-white text-xl font-semibold underline">
            Get Started with ProDoctor now!
          </Text>
          {/* <Ionicons name="chevron-forward-circle-outline" size={24} color="white" style={{marginTop: 3, marginLeft:2}}/> */}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen
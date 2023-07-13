import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from '@react-native-material/core';

const HealthInfoScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-black items-center justify-center'>
        <Text className='text-green-300 text-2xl font-bold text-center'>Add Your Health Information!</Text>

        <View className='mt-3 p-3' style={{width: '80%', height: '34%',borderBottomRightRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, borderWidth: 2, borderColor: '#86efac' }} >
            <Text className='text-green-300 text-xl font-bold text-center'>Upload Information</Text>
            <View className='flex-1 items-center mt-1'>
              <View className="flex-row">
                <Text className='text-white text-xl font-semibold flex-1'>Use SingPass or Health report:</Text>
              </View>
              <View className='flex-1 w-full'>
                <View className='flex-row ml-3'>
                  <Text className='text-white text-base font-semibold'>1. </Text>
                  <Text className='text-white text-base font-semibold flex-1'>Upload your health records with SingPass with HealthHub/ Take a photo of your health report</Text>
                </View>
                <View className='ml-2 mr-2'>
                  <LinearGradient
                          colors={['rgba(50, 50, 50, 0.7)', '#dc2626']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          className='p-1 rounded-xl w-full mt-2'
                      >
                          <TouchableOpacity 
                              onPress={() => handleSingPass()}
                              className='flex-row items-center'
                          >
                              <Text className='text-white text-xl font-bold flex-1 ml-2'>Login With SingPass</Text>
                              <Ionicons name="body" size={24} color="white"/>
                          </TouchableOpacity>
                  </LinearGradient>
                </View>
                <Text className='text-white text-base font-semibold text-center mt-2'>- OR -</Text>
                <View className='ml-2 mr-2'>
                  <LinearGradient
                          colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          className='p-1 rounded-xl w-full mt-1'
                      >
                          <TouchableOpacity 
                              onPress={() => handleSingPass()}
                              className='flex-row items-center'
                          >
                              <Text className='text-white text-xl font-bold flex-1 ml-2'>Upload Document</Text>
                              <Ionicons name="document" size={24} color="black"/>
                          </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
        </View>

        <View className='mt-3 p-3' style={{width: '80%', height: '21%',borderBottomRightRadius: 30, borderBottomLeftRadius: 30, borderTopLeftRadius: 30, borderWidth: 2, borderColor: '#86efac' }} >
            <Text className='text-green-300 text-xl font-bold text-center'>Manually Upload Information</Text>
            <View className='flex-1 items-center mt-1'>
              <View className="flex-row">
                <Text className='text-white text-xl font-semibold flex-1'>Self Analysis of Health Information</Text>
              </View>
              <View className='flex-1 w-full'>
                <View className='flex-row ml-3'>
                  <Text className='text-white text-base font-semibold'>1. </Text>
                  <Text className='text-white text-base font-semibold flex-1'>Fill in your Health Info Manually</Text>
                </View>
                <View className='ml-2 mr-2'>
                  <LinearGradient
                          colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          className='p-1 rounded-xl w-full mt-2'
                      >
                          <TouchableOpacity 
                              onPress={() => handleSingPass()}
                              className='flex-row items-center'
                          >
                              <Text className='text-white text-xl font-bold flex-1 ml-2'>Fill Up Form</Text>
                              <Ionicons name="caret-forward" size={24} color="black"/>
                          </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
        </View>

        <View className='mt-3 p-3' style={{width: '80%', height: '21%', borderRadius: 30, borderWidth: 2, borderColor: '#86efac' }} >
          <Text className='text-green-300 text-xl font-bold text-center'>Get Your Information Reviewed</Text>
          <View className="flex-row">
            <Text className='text-white text-xl font-semibold flex-1'>Get Information Reviewed by Professionals:</Text>
          </View>
          <View className='flex-row ml-3'>
            <Text className='text-white text-base font-semibold'>2. </Text>
            <Text className='text-white text-base font-semibold flex-1'>Reviewing of Health Details - 1 day</Text>
          </View>
          <View className='flex-row ml-3'>
            <Text className='text-white text-base font-semibold'>3. </Text>
            <Text className='text-white text-base font-semibold flex-1'>AI Genrated Report - Free</Text>
          </View>
          <View className='flex-row ml-3'>
            <Text className='text-white text-base font-semibold'>4. </Text>
            <Text className='text-white text-base font-semibold flex-1'>Professional Advice and Report - $3/report</Text>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default HealthInfoScreen
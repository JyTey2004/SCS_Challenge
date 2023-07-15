import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HomeCarousel from '../components/Carousel'
import { Divider } from '@react-native-material/core'
import { Ionicons } from '@expo/vector-icons'
import ServicesMiniMenu from '../components/ServicesMiniMenu'
import SnapRecords from '../components/SnapRecords'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <View className='flex-row items-center'>
        <Text className='text-green-300 text-3xl font-bold flex-1'>ProDoctor</Text>
        <TouchableOpacity className='mr-2'>
          <Ionicons name="people" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className='mr-2'>
          <Ionicons name="notifications" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Divider style={{ backgroundColor: 'white', marginTop: 10}} />
      <ScrollView className='pl-2 pr-2 mb-3'>
        <View className='mt-4 items-center'>
          <HomeCarousel />
        </View>

        <View className='mt-3 mb-2'>
          <Text className='text-green-300 text-3xl font-bold'>In a SNAP - Your Health Records</Text>
        </View> 

        <SnapRecords />
        
        <View className='mt-3'>
          <Text className='text-green-300 text-3xl font-bold'>Services</Text>
        </View>

         <ScrollView 
          horizontal={true}
          className='mt-3 h1/4'
        >
          <ServicesMiniMenu
            title='Book Appointment'
            img='https://img.freepik.com/free-vector/call-doctor-concept-doctors-answer-patient-questions-phone_1150-50289.jpg?size=626&ext=jpg&ga=GA1.2.1004410598.1686174404&semt=sph'
            desc='Book an appointment with a doctor'
          />
          <ServicesMiniMenu
            title='Meal Planning'
            img='https://img.freepik.com/free-photo/close-up-nutrition-food-meal-planning_23-2149074232.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=ais'
            desc='Plan Nutrition in take with ease!'
          />
        </ScrollView>
       

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
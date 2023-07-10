import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const ServicesMiniMenu = ({title, img, desc}) => {
  return (
    // <ScrollView
    //     horizontal={true}
    // >
        <View className='bg-gray-800 flex-1 rounded-lg p-2 mr-2'>
            <Image 
                source={{ uri: img }}
                className='w-full h-52 rounded-t-lg'
            />
            <Text className='text-white text-2xl font-bold'>{title}</Text>
            <Text className='text-white text-lg' numberOfLines={1} ellipsizeMode="tail">{desc}</Text>
        </View>
    // </ScrollView>
  )
}

export default ServicesMiniMenu
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const SnapRecords = () => {
    // const [healthData, setHealthData] = useState()
    const navigation = useNavigation()
    const healthDataBefore = {
        'Blood Pressure': '120/80',
        'Average BPM': '80',
        'Weight': '150',
        'Height': '5\'10"',
        'BMI': '21.5',
        'Blood Sugar': '120',
        'Cholesterol': '120',
    }

    const healthDataAfter = {
        'Blood Pressure': '120/80',
        'Average BPM': '78',
        'Weight': '150',
        'Height': '5\'10"',
        'BMI': '21.5',
        'Blood Sugar': '120',
        'Cholesterol': '120',
    }

    const keys = Object.keys(healthDataBefore);

  return (
    <ScrollView horizontal>
      {keys.map((key) => (
        <View
          key={key}
          style={{
            flex: 1,
            width: 200,
            height: 200,
            backgroundColor: '#333',
            borderRadius: 50,
            alignItems: 'center',
            marginRight: 10,
            justifyContent: 'flex-end',
          }}
        >
        <LinearGradient
            // Green
                colors={['#00F260', '#0575E6']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 200,
                    borderRadius: 50,
                }}
            />
            <TouchableOpacity style={{ position: 'absolute', top: 20, right:25, backgroundColor: '#1f2937', borderRadius: 5, padding: 3}} >
                <Ionicons name="bookmark-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
              className='h-1/2 w-full bg-gray-800 p-3' style={{ borderBottomEndRadius: 50}}
              onPress={() => navigation.navigate('SnapScreen', { healthDataBefore: healthDataBefore, healthDataAfter: healthDataAfter, key: key })}
            >
                <Text style={{ color: 'white', fontSize: 20 }} className='font-bold'>{`${key}:`}</Text>
                <Text style={{ color: 'white', fontSize: 14 }} className='font-light'>Previous: {healthDataBefore[key]}</Text>
                <View className='flex-1 justify-end'>
                    <LinearGradient
                        colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className='p-1 rounded-xl mr-3'
                    >
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>Current: {healthDataAfter[key]}</Text>
                    </LinearGradient>    
                </View>
            </TouchableOpacity>

        </View>
      ))}
    </ScrollView>

  )
}

export default SnapRecords
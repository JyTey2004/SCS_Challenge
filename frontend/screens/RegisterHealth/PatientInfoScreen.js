import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const PatientInfoScreen = () => {
    const navigation = useNavigation()
    const {checkLogin} = useContext(AuthContext)

    handleSingPass = () => {
        // navigation.navigate('SingPass')
    }

    handleStart = () => {
        checkLogin()
    }

  return (
    <View className='bg-black flex-1 justify-center items-center'>
      <View className='p-3 rounded-xl bg-black mb-1' style={{width: '90%'}}>
            <View className='mb-2 flex-row items-center'>
                <Text className='text-green-300 text-5xl font-bold flex-1'>Let's Get Started</Text>
            </View>
            
            <View className='mb-2'>
                <Text className='text-white text-2xl font-semibold'>We have got some features for you:</Text>
            </View>

            <Animatable.View 
                animation="slideInLeft" 
                duration={1000}
                className='mb-2' 
            >
                <LinearGradient
                    colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className='p-2 rounded-xl mt-2'
                >
                    <Text className='text-white text-xl font-semibold'>1. Upload your health records with SingPass ( Optional )</Text>
                    <LinearGradient
                        colors={['rgba(50, 50, 50, 0.7)', '#dc2626']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className='p-1 rounded-xl w-4/5 mt-2 ml-2'
                    >
                        <TouchableOpacity 
                            onPress={() => handleSingPass()}
                            className='flex-row items-center'
                        >
                            <Text className='text-white text-xl font-bold flex-1 ml-2'>Login With SingPass</Text>
                            <Ionicons name="body" size={24} color="white"/>
                        </TouchableOpacity>
                    </LinearGradient>
                </LinearGradient>
            </Animatable.View>

            <Animatable.View 
                animation="slideInRight" 
                duration={1000}
                className='mb-2' 
            >
                <LinearGradient
                    colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className='p-2 rounded-xl mt-2'
                >
                    <Text className='text-white text-xl font-semibold'>2. Analyse your health records with our AI</Text>
                </LinearGradient>
            </Animatable.View>

            <Animatable.View 
                animation="slideInLeft" 
                duration={1000}
                className='mb-2' 
            >
                <LinearGradient
                    colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className='p-2 rounded-xl mt-2'
                >
                    <Text className='text-white text-xl font-semibold'>3. Get a list of recommended doctors</Text>
                </LinearGradient>
            </Animatable.View>

            <Animatable.View 
                animation="slideInLeft" 
                duration={1000}
                className='mb-2' 
            >
                <LinearGradient
                    colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className='p-2 rounded-xl mt-2'
                >
                    <Text className='text-white text-xl font-semibold'>4. Book an appointment with the doctor ( Online / Physically )</Text>
                </LinearGradient>
            </Animatable.View>

            <Animatable.View 
                animation="slideInRight" 
                duration={1000}
                className='mb-2' 
            >
                <LinearGradient
                    colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className='p-2 rounded-xl mt-2'
                >
                    <Text className='text-white text-xl font-semibold'>5. Get a list of recommended medicines & advice</Text>
                </LinearGradient>
            </Animatable.View>

            <Animatable.View 
                animation="slideInRight" 
                duration={1000}
                className='mb-2' 
            >
                <LinearGradient
                    colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className='p-2 rounded-xl mt-2'
                >
                    <Text className='text-white text-xl font-semibold'>6. Monitor your health with our AI</Text>
                </LinearGradient>
            </Animatable.View>
            <TouchableOpacity 
                className='flex-row items-center justify-end'
                onPress={() => handleStart()}
                >
                <Text className='text-white text-xl font-semibold'>Let's Start</Text>
                <Ionicons name="chevron-forward" size={24} color="white" style={{marginTop: 3}}/>
            </TouchableOpacity>
           
        </View>
    </View>
  )
}

export default PatientInfoScreen
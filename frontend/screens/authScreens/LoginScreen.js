import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../context/AuthContext';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Divider } from '@react-native-material/core';
import { login } from '../../Apis/userApi';
import { useState } from 'react';
import { Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const navigation = useNavigation()
    const {checkLogin} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // console.log('password:', password);
            const response = await login(email, password); // Call the login API
            if (response.isSuccess) {
                // console.log('account:', response.message);
                // Handle the successful response here, e.g., update component state with the fetched account
                checkLogin()
                // navigation.navigate('AccountScreen')
            } else {
                Alert.alert('Email or password is incorrect')
                console.log('Failed to get account:', response.message);
                // Handle the error response here
            }
        } catch (error) {
            console.error('Error occurred while getting account:', error);
            // Handle any unexpected errors here
        }
    };

  return (
    <View className='bg-black flex-1 p-3 justify-center items-center'>
        
        <View className='p-3 rounded-xl bg-black mb-3' style={{width: '90%'}}>
            <View className='rounded-xl bg-black mb-3 flex-row items-center'>
                <Text className='text-green-300 text-5xl font-bold flex-1'>Login</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Ionicons name="close-circle-outline" size={50} color="#86efac" />
                </TouchableOpacity>
            </View>
            <View className='bg-black p-3 rounded-xl'>
                <Text className='text-white text-2xl font-semibold'>Email:</Text>
                <View className='mt-2'>
                    <FloatingLabelInput
                        customLabelStyles = {{
                            colorFocused: 'white',
                            fontSizeFocused: 10,
                            topFocused: -10,
                            colorBlurred: 'white',
                            fontSizeBlurred: 15,
                            topBlurred: 0,
                            paddingTop: 5
                        }}
                        labelStyles={{
                            color: 'white',
                            fontSizeFocused: 15,
                            topFocused: -15,
                            colorBlurred: 'white',
                            fontSizeBlurred: 15,
                            topBlurred: 0,
                        }}
                        containerStyles={{
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 10,
                            width: '100%',
                            height: 50,
                            padding: 10,
                        }}
                        inputStyles={{
                            color: 'white',
                            fontSize: 20,
                            padding: 0,
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                        }}
                    label="Email" // required
                    value={email} // required
                    onChange={(event) => setEmail(event.nativeEvent.text)} // required
                    />
                </View>
            </View>

            <View className='bg-black p-3 rounded-xl mt-3'>
                <Text className='text-white text-2xl font-semibold'>Password:</Text>
                <View className='mt-2'>
                    <FloatingLabelInput
                        customLabelStyles = {{
                            colorFocused: 'white',
                            fontSizeFocused: 10,
                            topFocused: -10,
                            colorBlurred: 'white',
                            fontSizeBlurred: 15,
                            topBlurred: 0,
                            paddingTop: 5
                        }}
                        labelStyles={{
                            color: 'white',
                            fontSizeFocused: 15,
                            topFocused: -15,
                            colorBlurred: 'white',
                            fontSizeBlurred: 15,
                            topBlurred: 0,
                        }}
                        containerStyles={{
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 10,
                            width: '100%',
                            height: 50,
                            padding: 10,
                        }}
                        inputStyles={{
                            color: 'white',
                            fontSize: 20,
                            padding: 0,
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                        }}
                    label="Password" // required
                    value={password} // required
                    onChange={(event) => setPassword(event.nativeEvent.text)} // required
                    />
                </View>
            </View>
            
            <LinearGradient
                colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className='p-2 rounded-xl flex-row items-center mt-2'
            >
                <TouchableOpacity 
                    onPress={() => handleLogin()}
                    className='flex-row items-center'
                >
                    <Text className='text-white text-2xl font-semibold flex-1 ml-2'>Login</Text>
                    <Ionicons name="log-in-outline" size={30} color="black"/>
                </TouchableOpacity>
            </LinearGradient>
            
            <Divider style={{ marginTop: 20,}} color='white'/>
            
            <Text className='text-white text-lg text-center font-base mt-3'>Or Login with:</Text>
            <View className='flex-row mt-2 items-center justify-center space-x-10'>
                <Ionicons name="logo-google" size={30} color="white"/>
                <Ionicons name="logo-facebook" size={30} color="white"/>
                <Ionicons name="logo-twitter" size={30} color="white"/>
                <Ionicons name="logo-apple" size={30} color="white"/>
            </View>

            <Divider style={{ marginTop: 20}} color='white'/>
        </View>
        
        <View className='flex-row justify-center items-center'>
            <Text className='text-white text-lg font-semibold'>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text className='text-lg font-semibold ml-2 text-green-300'>Register</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default LoginScreen
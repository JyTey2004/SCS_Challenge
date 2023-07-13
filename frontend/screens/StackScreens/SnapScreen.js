import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const SnapScreen = ({route}) => {
    const healthDataBefore = route.params.healthDataBefore;
    const healthDataAfter = route.params.healthDataAfter;
    const scrollTo = route.params.key;

    const width = Dimensions.get('window').width*0.97;

    healthDescription = (key) => {
        switch (key) {
            case 'Blood Pressure':
                return 'Blood pressure is the force of blood on vessel walls, mainly from the heart\'s pumping.'
            case 'Average BPM':
                return 'Heart rate is the speed of the heartbeat measured by the number of contractions (beats) of the heart per minute (bpm).'
            case 'Weight':
                return 'Your body weight is the force exerted on the earth by your body. It is commonly measured in kilograms (kg) or pounds (lb)'
            case 'Height':
                return 'Your height is the distance from the bottom of your feet to the top of your head. It is commonly measured in centimeters (cm) or feet (ft)'
            case 'BMI':
                return 'The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.'
            case 'Blood Sugar':
                return 'Blood sugar, or blood glucose, is sugar that the bloodstream carries to all the cells in the body to supply energy.'
            case 'Cholesterol':
                return 'Your body needs some cholesterol to make hormones, vitamin D, and substances that help you digest foods.'
            case 'Oxygen Saturation':
                return 'Oxygen saturation is a measure of how much oxygen the blood is carrying as a percentage of the maximum it could carry. It can be measured by an instrument called a pulse oximeter. A pulse oximeter is a small, clip-like device that attaches to a body part, like toes or an earlobe.'
        }
    }

    const keys = Object.keys(healthDataBefore);
  return (
    <View className="bg-black flex-1">
        <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 10}} className='text-green-200'>Descriptions</Text>
        <ScrollView 
            className='p-3 w-full'
            
        >
            {keys.map((key, index) => (
                <View style={{
                    flex: 1,
                    width: width,
                    height: 200,
                    flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                    marginBottom: 10,
                }}
                key={key}
                >
                    <View 
                        style={{ 
                            width: width-200,
                            marginLeft: index % 2 === 0 ? 10 : 0,
                            marginRight: index % 2 === 0 ? 0 : 10,
                        }}
                    >
                        <LinearGradient
                            // Green
                            colors={['#00F260', '#0575E6']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                height: 200,
                                borderBottomRightRadius: index % 2 === 0 ? 50 : 0,
                                borderTopRightRadius: index % 2 === 0 ? 50 : 0,
                                borderBottomLeftRadius: index % 2 === 0 ? 0 : 50,
                                borderTopLeftRadius: index % 2 === 0 ? 0 : 50,
                            }}
                            />
                         <View
                        className='h-1/2 w-full bg-gray-800 p-5'
                        style={{ 
                            borderTopRightRadius: index % 2 === 0 ? 50 : 0,
                            borderTopLeftRadius: index % 2 === 0 ? 0 : 50,
                            justifyContent: 'center',
                         }}
                        >
                            <Text style={{ color: 'white', fontSize: 30, textAlign: index % 2 === 0 ? 'left' : 'right',}} className='font-bold'>{`${key}`}</Text>
                        </View>
                        <View className='p-2'>
                            <Text style={{ 
                                color: 'white', 
                                fontSize: 16, 
                                textAlign: index % 2 === 0 ? 'left' : 'right',
                            }}>
                                    {healthDescription(key)}
                            </Text>
                        </View>
                        
                    </View>
                    <View
                        key={key}
                        style={{
                        flex: 1,
                        width: 200,
                        height: 200,
                        backgroundColor: '#333',
                        borderRadius: 50,
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
                            borderBottomLeftRadius: index % 2 === 0 ? 50 : 0,
                            borderTopLeftRadius: index % 2 === 0 ? 50 : 0,
                            borderBottomRightRadius: index % 2 === 0 ? 0 : 50,
                            borderTopRightRadius: index % 2 === 0 ? 0 : 50,
                        }}
                        />
                        <TouchableOpacity
                        style={{ 
                            position: 'absolute', 
                            top: index % 2 === 0 ? 10 : 20, 
                            right: index % 2 === 0 ? 10 : 25, 
                            backgroundColor: '#1f2937', 
                            borderRadius: 5, 
                            padding: 3 
                        }}
                        >
                            <Ionicons name="bookmark-outline" size={24} color="white" />
                        </TouchableOpacity>
                        <View
                        className='h-1/2 w-full bg-gray-800 p-3'
                        style={{ 
                            borderBottomLeftRadius: index % 2 === 0 ? 50 : 0,
                            borderBottomRightRadius: index % 2 === 0 ? 0 : 50,
                         }}
                        >
                            <Text style={{ color: 'white', fontSize: 20 }} className='font-bold'>{`${key}:`}</Text>
                            <Text style={{ color: 'white', fontSize: 14 }} className='font-light'>Previous: {index % 2 === 0 ? healthDataBefore[key] : healthDataAfter[key]}</Text>
                            <View 
                                className='flex-1 justify-end'
                                style={{
                                    marginLeft: index % 2 === 0 ? 10 : 0,
                                    marginRight: index % 2 === 0 ? 0 : 10,
                                }}
                                >
                                <LinearGradient
                                colors={['rgba(50, 50, 50, 0.9)', '#86efac']}
                                start={{ x: index % 2 === 0 ? 0 : 1, y: 0 }}
                                end={{ x: index % 2 === 0 ? 1 : 0, y: 0 }}
                                className='p-1 rounded-xl'
                                >
                                <Text style={{ color: 'white', fontSize: 16, marginLeft: index % 2 === 0 ? 5 : 0, marginRight: index % 2 === 0 ? 0 : 5, textAlign: index % 2 === 0 ? 'left' : 'right' }}>Current: {index % 2 === 0 ? healthDataAfter[key] : healthDataBefore[key]}</Text>
                                </LinearGradient>    
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>

    </View>
  )
}

export default SnapScreen
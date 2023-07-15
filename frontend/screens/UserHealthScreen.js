import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Divider, Icon } from '@react-native-material/core'
import { Ionicons } from '@expo/vector-icons'

const UserHealthScreen = () => {
    const heathStatus = {
        'Score': 90,
        'Health': 'Very Healthy',
    }

    const userInfo = {
        'Name': 'Ben',
        'Age': 20,
    }

    const Nutrition = {
        'Calories': 2000,
        'Carbs': 300,
        'Protein': 100,
        'Fat': 50,
    }

    const Diet = {
        'name': 'Ketogenic',
        'description': 'low carb, high fat diet',
        'dishes': [
            {
                'name': 'Keto Mac & Cheese'
            },
            {
                'name': 'Keto Fried Chicken'
            }
        ]
    }

    const Exercise = [
        {
            'name': 'Push Ups',
            'count': 10,
            'sets': 3,
        },
        {
            'name': 'Jogging',
            'count': '10km',
            'sets': 1,
        },
        {
            'name': 'Squats',
            'count': 10,
            'sets': 3,
        },
    ]

    const Supplements = [
        {
            'name': 'Vitamin C',
            'count': 1,
        },
        {
            'name': 'Vitamin D',
            'count': 1,
        },
        {
            'name': 'Vitamin B12',
            'count': 1,
        },
    ]
        

  return (
    <SafeAreaView className='bg-black flex-1 items-center'>
        <View style={{alignItems: 'left', width: '97%'}}>
            <Text style={{ color: '#86efac', fontSize: 24, marginTop: 10, marginLeft: 10}} className='font-bold'>Health Status</Text>
        </View>
        
        {/* <Divider style={{ backgroundColor: 'white', width: '97%', marginTop: 10}} /> */}
        <View style={{width: '97%',height: '25%', borderRadius: 40, marginTop: 10, flexDirection: 'row', padding: 10, borderColor: '#1f2937', borderWidth: 3, backgroundColor: '#1f2937' }}>
            <View style={{
                    height: '100%',
                    width: '15%',
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 30,
                    marginRight: 10,
                    backgroundColor: '#86efac',
                }}>
                    <View style={{ width: '100%', height: '60%', backgroundColor: 'rgba(0, 0, 0, 0.6)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 30, borderTopLeftRadius: 30}}>
                        {/* <Text style={{ color: '#1f2937', fontSize: 36,}} className='font-bold'>{userInfo.Name}</Text>
                        <Text style={{ color: 'white', fontSize: 24,}} className='font-bold'>Age: </Text>
                        <Text style={{ color: 'white', fontSize: 24,}} className='font-bold'>{userInfo.Age}</Text> */}
                        <Ionicons name="person" size={40} color="white" />
                    </View>
                    <View style={{ width: '100%', height: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 30, borderTopLeftRadius: 30}}>
                        <Ionicons name="basket" size={35} color="black" />
                    </View>
            </View>
            <LinearGradient
                // Green to Blue
                colors={['#86efac', '#67e8f9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    height: '100%',
                    width: '83%',
                    // borderTopLeftRadius: 30,
                    // borderBottomLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    justifyContent: 'flex',
                    alignItems: 'left',
                    // marginRight: 10,
                }}
            >
                <View className='w-full flex-row'>
                    <View className='flex-1'>
                        <View className='h-3/5 p-3 justify-center items-center' 
                            // style={{ borderTopLeftRadius: 30}}
                            >
                            <Text style={{ fontSize: 60,}} className='font-bold text-gray-800'>{`${heathStatus['Score']}`}</Text>
                            {/* <Text style={{ color: 'white', fontSize: 15,}} className='font-bold'>{`${heathStatus['Health']}`}</Text> */}
                        </View>
                        <View className='h-2/5 justify-center items-center bg-black'>
                            <Text style={{fontSize: 24}} className='font-bold text-white'>Score</Text>
                        </View>
                    </View>
                    <View style={{width: '70%'}}>
                        <View className=' h-3/5 justify-center items-center'>
                            <Text style={{fontSize: 40}} className='font-bold text-gray-800 underline'>{`${heathStatus['Health']}`}</Text>
                        </View>
                        
                        <View className='h-2/5 bg-black p-3 justify-center items-center' style={{ borderBottomRightRadius: 30}}>
                            <Text style={{ color: 'white', fontSize: 24,}} className='font-bold'>Status</Text>
                            {/* <Text style={{ color: 'white', fontSize: 60,}} className='font-bold'>{`${heathStatus['Score']}`}</Text> */}
                            {/* <Text style={{ color: 'white', fontSize: 15,}} className='font-bold'>{`${heathStatus['Health']}`}</Text> */}
                        </View>
                    </View>
                    
                </View>
            </LinearGradient>
        </View>
        <View style={{width: '97%',height: '66%', borderRadius: 30, marginTop: 10 }}>
            <Text style={{ color: '#86efac', fontSize: 24,}} className='font-bold'>AI Recommendations</Text>
            <View style={{width: '100%', height: '50%', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <LinearGradient 
                    colors={['#86efac', '#86efac']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{width: '40%',height: '100%', borderRadius: 30, marginTop: 10, padding: 10, marginRight: 10 }}>
                    <Text style={{ fontSize: 24,}} className='font-bold text-gray-800'>Nutrition</Text>
                    <View style={{width: '100%', height: '20%', borderRadius: 10, marginTop: 10, flexDirection: 'row', padding: 5, justifyContent: 'center', backgroundColor: '#1f2937', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18,}} className='font-base'>Calories: </Text>
                        <Text style={{ color: 'white', fontSize: 18,}} className='font-base'>{`${Nutrition['Calories']}`}</Text>
                    </View>
                    <View style={{flex: 1, borderRadius: 20, marginTop: 10, padding: 10, justifyContent: 'flex-start', backgroundColor: '#1f2937' }}>
                        <Text style={{ color: 'white', fontSize: 18,}} className='font-base'>Intake: </Text>
                        <View className='flex-row mt-1'>
                            <Text style={{ color: 'white', fontSize: 15,}} className='font-base'>   Carbs: </Text>
                            <Text style={{ color: 'white', fontSize: 15,}} className='font-base'>{`${Nutrition['Carbs']}g`}</Text> 
                        </View>
                        <View className='flex-row mt-1'>
                            <Text style={{ color: 'white', fontSize: 15,}} className='font-base'>   Protein: </Text>
                            <Text style={{ color: 'white', fontSize: 15,}} className='font-base'>{`${Nutrition['Protein']}g`}</Text> 
                        </View>
                        <View className='flex-row mt-1'>
                            <Text style={{ color: 'white', fontSize: 15,}} className='font-base'>   Fat: </Text>
                            <Text style={{ color: 'white', fontSize: 15,}} className='font-base'>{`${Nutrition['Fat']}g`}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <LinearGradient 
                    colors={['#67e8f9', '#67e8f9']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{width: '58%',height: '100%', borderRadius: 30, marginTop: 10, padding: 10 }}>
                    <Text style={{ fontSize: 24,}} className='font-bold text-gray-800'>Diet: {Diet.name}</Text>
                    <View style={{width: '100%', height: '20%', borderRadius: 10, marginTop: 10, flexDirection: 'row', padding: 5, justifyContent: 'center', backgroundColor: '#1f2937', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18}} className='font-base'>{Diet.description}</Text>
                    </View>
                    <View style={{flex: 1, borderRadius: 20, marginTop: 10, padding: 10, justifyContent: 'flex-start', backgroundColor: '#1f2937' }}>
                        <Text style={{ color: 'white', fontSize: 18,}} className='font-base'>Dishes: </Text>
                        <TouchableOpacity className='flex-row mt-1'>
                            <LinearGradient
                                colors={['black', '#86efac']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ flex:1, borderRadius: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Text style={{fontSize: 14,}} className='font-base text-white ml-1'>{`${Diet['dishes'][0].name}`}</Text>
                                <Ionicons name="chevron-forward-outline" size={24} color="black" />
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row mt-1'>
                            <LinearGradient
                                colors={['black', '#86efac']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ flex:1, borderRadius: 10, marginRight: 10, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Text style={{fontSize: 14,}} className='font-base text-white ml-1'>{`${Diet['dishes'][1].name}`}</Text>
                                <Ionicons name="chevron-forward-outline" size={24} color="black" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View style={{width: '100%', height: '38%', marginTop: 5, alignItems: 'center', marginLeft: 5 }}>
                {/* <View style={{width: '100%',height: '100%', borderRadius: 30, marginTop: 10, padding: 10, marginRight: 10 }}> */}
                    <LinearGradient
                        colors={['black', '#67e8f9']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{width: '100%',height: '100%', borderRadius: 30, marginTop: 10, padding: 10, marginRight: 10 }}
                    >
                    <Text style={{ color: 'white', fontSize: 24,}} className='font-bold'>Keep Healthy</Text>
                    <View className='flex-row space-x-2' style={{width: '100%', height: '100%'}}>
                        <View style={{ width: '24%', height: '75%'}}>
                            <View style={{width: '100%', height: '30%', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 10, padding: 5, backgroundColor: '#86efac', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18,}} className='font-bold text-gray-800'>Exercise</Text>
                            </View>
                            <View style={{width: '100%', height: '70%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 8, backgroundColor: '#1f2937' }}>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[0].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[0].count}`}</Text>
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[1].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[1].count}`}</Text>
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[2].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[2].count}`}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '24%', height: '75%'}}>
                            <View style={{width: '100%', height: '30%', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 10, padding: 5, backgroundColor: '#86efac', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18,}} className='font-bold text-gray-800'>Sleep</Text>
                            </View>
                            <View style={{width: '100%', height: '70%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 8, backgroundColor: '#1f2937' }}>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>8 Hours</Text>
                                    {/* <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[0].count}`}</Text> */}
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>Before</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>11pm</Text>
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>After</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>4am</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '24%', height: '75%'}}>
                            <View style={{width: '100%', height: '30%', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 10, padding: 5, backgroundColor: '#86efac', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18,}} className='font-bold text-gray-800'>Drink</Text>
                            </View>
                            <View style={{width: '100%', height: '70%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 8, backgroundColor: '#1f2937' }}>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>2 litres water</Text>
                                    {/* <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[0].count}`}</Text> */}
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    {/* <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'></Text> */}
                                    {/* <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[1].count}`}</Text> */}
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    {/* <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[2].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Exercise[2].count}`}</Text> */}
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '24%', height: '75%'}}>
                            <View style={{width: '100%', height: '30%', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 10, padding: 5, backgroundColor: '#86efac', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18,}} className='font-bold text-gray-800'>Supplements</Text>
                            </View>
                            <View style={{width: '100%', height: '70%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 8, backgroundColor: '#1f2937' }}>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Supplements[0].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Supplements[0].count}`}</Text>
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Supplements[1].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Supplements[1].count}`}</Text>
                                </View>
                                <View className='flex-row' style={{justifyContent: 'space-between'}}>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Supplements[2].name}`}</Text>
                                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2}} className='font-base'>{`${Supplements[2].count}`}</Text>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                    </LinearGradient>
                    
                    

                {/* </View> */}
            </View>
        </View>
    </SafeAreaView>
  )
}

export default UserHealthScreen
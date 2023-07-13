import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const ServicesScreen = () => {
  return (
    <SafeAreaView className='bg-black flex-1 items-center'>
        <Text style={{ color: '#86efac', fontSize: 24, marginTop: 10, marginLeft: 10}} className='font-bold'>Services</Text>
        {/* <View style={{ backgroundColor: '#86efac', height: 1, width: '97%', marginTop: 10 }} /> */}
        <View style={{ height: '40%', width: '87%', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
                <View style={{ height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} className='w-1/3'>
                    <Image
                        style={{ width: '50%', height: '50%', borderRadius: 10 }}
                        source={require('../assets/images/Calendar-bro.png')}
                    />
                    <Text style={{ color: '#86efac', fontSize: 16, marginLeft: 10}} className='font-base'>Appointment</Text>                        
                </View>
                <View style={{height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} className='w-1/3'>
                    <Image
                        style={{ width: '50%', height: '50%', borderRadius: 10 }}
                        source={require('../assets/images/Cake-bro.png')}
                    />
                    <Text style={{ color: '#86efac', fontSize: 16, marginLeft: 10}} className='font-base'>Nutrition</Text>  
                </View>
                <View style={{ height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} className='w-1/3'>
                    <Image
                            style={{ width: '50%', height: '50%', borderRadius: 10 }}
                            source={require('../assets/images/Pharmacist-amico.png')}
                        />
                    <Text style={{ color: '#86efac', fontSize: 16, marginLeft: 10}} className='font-base'>Prescription</Text>  
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
                <View style={{ height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} className='w-1/3'>
                    <Image
                        style={{ width: '50%', height: '50%', borderRadius: 10 }}
                        source={require('../assets/images/Rheumatology-bro.png')}
                    />
                    <Text style={{ color: '#86efac', fontSize: 16, marginLeft: 10}} className='font-base'>Check-up</Text>                        
                </View>
                <View style={{ height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} className='w-1/3'>
                    <Image
                        style={{ width: '50%', height: '50%', borderRadius: 10 }}
                        source={require('../assets/images/Drone-Delivery-bro.png')}
                    />
                    <Text style={{ color: '#86efac', fontSize: 16, marginLeft: 10}} className='font-base'>Delivery</Text>                        
                </View>
                <View style={{ height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} className='w-1/3'>
                    <Image
                        style={{ width: '50%', height: '50%', borderRadius: 10 }}
                        source={require('../assets/images/Designer-girl-bro.png')}
                    />
                    <Text style={{ color: '#86efac', fontSize: 16, marginLeft: 10}} className='font-base'>Free Reports</Text>                        
                </View>
            </View>
        </View>

        <View style={{ backgroundColor: '#86efac', height: 1, width: '92%', marginTop: 30 }} />

        <View style={{ height: '49%', width: '97%', backgroundColor: 'black', borderRadius: 20, padding: 20, paddingTop: 10}}>
            <View style={{ flexDirection: 'row', width: '100%', height: '65%', backgroundColor: '#86efac', borderRadius: 20, padding: 7 }}>
                {/* <View style={{ height: '100%', padding: 10, borderRadius: 15}} className='w-1/2 bg-gray-800 flex-row'> */}
                    <Image
                        style={{ width: '40%', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                        source={{uri: 'https://img.freepik.com/free-photo/doctors-working_23-2147822735.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=ais'}}
                    />
                {/* </View> */}
                <View style={{ height: '100%', padding: 15, borderTopRightRadius: 10, borderBottomRightRadius: 10}} className='w-3/5 bg-gray-800'>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: 5}} className='font-bold'>Trainee Doctor Program!</Text>
                    <Text style={{ color: 'white', fontSize: 16,marginTop: 10, marginLeft: 5}} className='font-base'>Feel free to get free sessions with our trainee doctors!</Text>
                    <View className='flex-1 items-end justify-end'>
                       <TouchableOpacity style={{ backgroundColor: '#86efac', width: '50%', height: '40%', borderRadius: 10, marginTop: 10, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 16, marginLeft: 5, flex: 1, textAlign: 'center' }} className='font-bold'>Learn More</Text>
                            <Ionicons name="arrow-forward-circle" size={24} color="black" style={{ marginRight: 5}} />
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '35%', backgroundColor: '#86efac', borderRadius: 20, padding: 7, marginTop: 10 }}>
                <Image
                    style={{ width: '40%', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                    source={{uri: 'https://img.freepik.com/free-photo/top-view-showing-hands-eating-healthy-lunch-with-bulgur-meat-fresh-vegetables-fruit-wooden-table-fitness-healthy-lifestyle-concept-lunchbox-top-view_2829-6077.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=ais'}}
                />
                <View style={{ height: '100%', padding: 15, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center'}} className='w-3/5 bg-gray-800'>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: 5}} className='font-bold'>Smart Nutrition Planner!</Text>
                    <View className='flex-1 items-end justify-end'>
                        <TouchableOpacity style={{ backgroundColor: '#86efac', width: '50%', height: '70%', borderRadius: 10, marginTop: 10, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 16, marginLeft: 5, flex: 1, textAlign: 'center' }} className='font-bold'>Try Now</Text>
                            <Ionicons name="arrow-forward-circle" size={24} color="black" style={{ marginRight: 5}} />
                        </TouchableOpacity> 
                    </View>
                    
                </View>
            </View>
        </View>
        

    </SafeAreaView>
  )
}

export default ServicesScreen
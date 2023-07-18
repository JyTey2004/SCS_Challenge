import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
    const healthReports = [
        {
            date: '2023-05-01',
            details: 'Great job! You have been doing well in your health. Keep it up!',
            status: 'Excellent',
            score : 90,
            note : 'Blood pressure is a bit high. Please monitor it.'
        },
        {
            date: '2023-04-01',
            details: 'Please remember to take your medication on time.',
            status: 'Very Good',
            score : 80,
            note : 'Cholesterol and Blood Sugar is a bit high. Please monitor it.'
        },
    ]

    const medicationNotifications = [
        {
            date: '2023-04-01',
            details: 'Reminder to take your medication',
            quantity: '1',
            name: 'Paracetamol',
            time: '12:00pm'
        },
        {
            date: '2023-04-08',
            details: 'Reminder to check your blood pressure',
            quantity: '',
            name: 'Blood Pressure Monitor',
            time: '12:00pm'
        },
    ]
    
    const communityNotifications = [
        {
            date: '2023-05-21',
            details: 'You have been invited to cycle at East Coast Park!',
            name: 'Cycling at East Coast Park',
            time: '12:00pm'
        },
    ]

    const appointmentNotifications = [
        {   
            date: '2023-05-30',
            details: 'You have an appointment with Dr. Tan at 2:00pm',
            name: 'Dr. Tan',
            time: '2:00pm'
        },
    ]


  return (
    <SafeAreaView className='bg-black flex-1'>
        <View className='items-center justify-center mt-2 flex-1'>
            <Text className='text-white text-3xl font-bold'>Notifications</Text>
            <View className='mt-1 bg-gray-800 w-11/12 rounded-3xl p-2' style={{ height: '85%'}}>
                <View style={{ height: '30%', borderRadius: 20}}>
                    <Text className='text-white text-2xl font-bold'>Health Reports</Text>
                    <FlatList
                        data={healthReports}
                        renderItem={({ item }) => (
                            <View className='mt-1 bg-gray-700 w-full rounded-lg'>
                                <View className='flex-row justify-between bg-black p-1 rounded-t-lg items-center space-x-3'>
                                    <Text className='text-green-300 text-base font-bold'>{item.date} - Health Report</Text>
                                    <View style={{ backgroundColor: 'white', height: 1, flex: 1 }} />
                                    <Text className='text-green-300 text-base font-bold'>{item.status}</Text>
                                </View>
                                <View className='flex-row justify-between'>
                                    <View className='p-1 ' style={{ width: '85%'}}>
                                        <Text className='text-white text-base font-semibold'>{item.details}</Text>
                                        <Text className='text-white text-base font-semibold'>{item.note}</Text>
                                    </View>
                                    <View className='bg-cyan-300 items-center justify-center' style={{ width: '10%', borderBottomRightRadius: 10}}>
                                        <Text className='text-black text-xl font-bold'>{item.score}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.date}
                    />
                </View>
                <View style={{ backgroundColor: '#67e8f9', height: 2, width: '100%', marginTop: 10 }} />
                <View style={{ height: '28%'}}>
                    <Text className='text-white text-2xl font-bold mt-1'>Medication</Text>
                    <FlatList
                        data={medicationNotifications}
                        renderItem={({ item }) => (
                            <View className='mt-1 bg-gray-700 w-full rounded-lg'>
                                <View className='flex-row justify-between bg-black p-1 rounded-t-lg items-center space-x-3'>
                                    <Text className='text-green-300 text-base font-bold'>{item.date} - {item.name}</Text>
                                    <View style={{ backgroundColor: 'white', height: 1, flex: 1 }} />
                                    <Text className='text-green-300 text-base font-bold'>{item.time}</Text>
                                </View>
                                <View className='flex-row justify-between'>
                                    <View className='p-1 justify-between flex-row ' style={{ width: '90%'}}>
                                        <Text className='text-white text-lg font-semibold'>{item.details}</Text>
                                        { item.quantity !== '' && <Text className='text-white text-lg font-semibold mr-2'>Quantity</Text>}
                                    </View>
                                    <View className='bg-cyan-300 items-center justify-center' style={{ width: '10%', borderBottomRightRadius: 10}}>
                                        <Text className='text-black text-xl font-bold'>{item.quantity}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.date}
                    />
                </View>
                <View style={{ backgroundColor: '#67e8f9', height: 2, width: '100%', marginTop: 10 }} />
                <View style={{ height: '17%'}}>
                    <Text className='text-white text-2xl font-bold mt-1'>Community</Text>
                    <FlatList
                        data={communityNotifications}
                        renderItem={({ item }) => (
                            <View className='mt-1 bg-gray-700 w-full rounded-lg'>
                                <View className='flex-row justify-between bg-black p-1 rounded-t-lg items-center space-x-3'>
                                    <Text className='text-green-300 text-base font-bold'>{item.date} - {item.name}</Text>
                                    <View style={{ backgroundColor: 'white', height: 1, flex: 1 }} />
                                    <Text className='text-green-300 text-base font-bold'>{item.time}</Text>
                                </View>
                                <View className='flex-row justify-between'>
                                    <View className='p-1 justify-between flex-row ' style={{ width: '90%'}}>
                                        <Text className='text-white text-lg font-semibold'>{item.details}</Text>
                                    </View>
                                    <View className='bg-cyan-300 items-center justify-center' style={{ width: '10%', borderBottomRightRadius: 10}}>
                                        <Text className='text-black text-xl font-bold'>Go</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.date}
                    />
                </View>
                <View style={{ backgroundColor: '#67e8f9', height: 2, width: '100%', marginTop: 10 }} />
                <View style={{ height: '17%'}}>
                    <Text className='text-white text-2xl font-bold mt-1'>Appointments</Text>
                    <FlatList
                        data={appointmentNotifications}
                        renderItem={({ item }) => (
                            <View className='mt-1 bg-gray-700 w-full rounded-lg'>
                                <View className='flex-row justify-between bg-black p-1 rounded-t-lg items-center space-x-3'>
                                    <Text className='text-green-300 text-base font-bold'>{item.date} - {item.name}</Text>
                                    <View style={{ backgroundColor: 'white', height: 1, flex: 1 }} />
                                    <Text className='text-green-300 text-base font-bold'>{item.time}</Text>
                                </View>
                                <View className='flex-row justify-between'>
                                    <View className='p-1 justify-between flex-row ' style={{ width: '90%'}}>
                                        <Text className='text-white text-lg font-semibold'>{item.details}</Text>
                                    </View>
                                    <View className='bg-cyan-300 items-center justify-center' style={{ width: '10%', borderBottomRightRadius: 10}}>
                                        <Text className='text-black text-xl font-bold'>Go</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.date}
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NotificationScreen
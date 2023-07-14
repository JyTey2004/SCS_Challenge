import { View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HealthEnquiryScreen = () => {
  return (
    <SafeAreaView className='bg-black flex-1 items-center justify-center'>
      <View className='m-6 h-4/5  w-4/5  p-2'> 
      {/* style={{ borderWidth: 2, borderColor: 'white' }} */}
        <Text style={{ color: '#86efac', fontSize: 24}} className='font-bold'>Vitual Appointment</Text>
        <View className='flex-row space-x-2' style={{ width: '100%', height: '40%', marginTop: 10}}>
          <TouchableOpacity className='items-center justify-center' style={{ flex: 1, borderRadius: 20}}>
            <ImageBackground
              source={{uri: 'https://img.freepik.com/free-photo/doctors-working_23-2147822735.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=ais'}}
              style={{ width: '100%', height: '100%', resizeMode: 'contain', justifyContent: 'flex-end', alignItems: 'flex-start'}}
              imageStyle={{ borderRadius: 20, opacity: 0.4}}
            >
              <View className='flex-row items-center m-3'>
                <Text style={{ color: '#86efac', fontSize: 24, flex: 1 }} className='font-bold'>Doctor</Text>
                <View className='flex-row items-end h-full'>
                  <Ionicons name='chevron-forward-outline' size={24} color='#86efac'/>
                </View>
              </View>
              {/* <Text style={{ color: 'white', fontSize: 14, marginLeft: 10}} className='font-base'>Note: Upload as much health information as you have</Text> */}
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity className='items-center justify-center' style={{ flex: 1, borderRadius: 20}}>
            <ImageBackground
                source={{uri: 'https://media.istockphoto.com/id/1434731448/photo/fellow-students-smile-as-two-classmates-discuss-ideas.jpg?s=612x612&w=0&k=20&c=R2xNMwlK1QUvI6Wmr1qTar6G1BPU6g1qyUz0xLsNgh4='}}
                style={{ width: '100%', height: '100%', resizeMode: 'contain', justifyContent: 'flex-end', alignItems: 'flex-start'}}
                imageStyle={{ borderRadius: 20, opacity: 0.4}}
              >
                <View className='flex-row items-center m-3'>
                  <Text style={{ color: '#86efac', fontSize: 24, flex: 1 }} className='font-bold'>Trainee Doctor</Text>
                  <View className='flex-row items-end h-full'>
                    <Ionicons name='chevron-forward-outline' size={24} color='#86efac'/>
                  </View>
                </View>
                {/* <Text style={{ color: 'white', fontSize: 14, marginLeft: 10}} className='font-base'>Note: Upload as much health information as you have</Text> */}
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#86efac', fontSize: 24, marginTop: 10}} className='font-bold'>Health Recommendations</Text>
        <View className='items-center' style={{ borderRadius: 20, width: '100%', height: '35%', marginTop: 5}}>
            <View className='' style={{ width: '100%', height: '35%', borderRadius: 20}}>
              {/* <Text style={{ color: '#86efac', fontSize: 20}} className='font-bold'>Review Health Status</Text> */}
              <LinearGradient
                colors={['#67e8f9', '#86efac']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{borderRadius: 10, padding: 10, flex: 1}}
              >
                <Text style={{ color: 'black', fontSize: 20}} className='font-bold'>Review Health Status</Text>
                <Text style={{ color: 'black', fontSize: 14, marginTop: 2}} className='font-base'>Note: Upload as much health information as you have</Text>
              </LinearGradient>
            </View>
            <View style={{ width: '100%', height: '61%', borderRadius: 20, marginTop: 5}}>
            <LinearGradient
                colors={['#67e8f9', '#86efac']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{borderRadius: 10, padding: 5, flex: 1, flexDirection: 'row'}}
              >
                <Image
                  source={{uri: 'https://media.gettyimages.com/id/1386963076/photo/two-doctors-looking-at-patient-data-on-digital-tablet.jpg?s=612x612&w=0&k=20&c=TOkZA09vhKdw09G0K9dh9ws_uyaK6cTb4cszsZyi1Vw='}}
                  style={{ width: '30%', height: '100%', borderRadius: 10}}
                />
                <View style={{ flex: 1, marginLeft: 10, paddingBottom: 10}}>
                  <Text style={{ color: 'black', fontSize: 20}} className='font-bold'>Get your health reviewed!</Text>
                  <Text style={{ color: 'black', fontSize: 14, marginTop: 2}} className='font-base'>We will compile your health data and give you a summary of your health</Text>
                  <View style={{ flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity className='items-center justify-center' style={{ borderRadius: 10, width: '50%', height: '100%', marginTop: 10, padding: 5, backgroundColor: 'black'}}>
                      <Text style={{ color: 'white', fontSize: 14}} className='font-bold'>Get Yours Now!</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
              </LinearGradient>
            </View>
        </View>

        <Text style={{ color: '#86efac', fontSize: 24, marginTop: 10}} className='font-bold'>Prescriptions</Text>
        <TouchableOpacity className='items-center justify-center' style={{ borderRadius: 10,  width: '100%', height: '8%', marginTop: 10}}>
          <LinearGradient
            colors={['#67e8f9', '#86efac']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{borderRadius: 10, padding: 5, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
          >
            <Text style={{ color: 'black', fontSize: 20, flex: 1, marginLeft: 5}} className='font-bold'>Buy & Deliver</Text>
            <Ionicons name='chevron-forward-outline' size={24} color='black'/>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default HealthEnquiryScreen
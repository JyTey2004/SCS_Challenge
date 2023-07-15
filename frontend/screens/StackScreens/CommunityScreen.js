import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const CommunityScreen = () => {
  const { width, height } = Dimensions.get('window')

  const posts = [
    {
      title: 'Tips on Dieting',
      author: 'Ben',
      imageUrl: 'https://img.freepik.com/free-photo/ketogenic-low-carbs-diet-food-selection-white-wall_155003-27728.jpg?size=626&ext=jpg&ga=GA1.2.1004410598.1686174404&semt=sph'
    },
    {
      title: 'Depression Experience',
      author: 'Michelle',
      imageUrl: 'https://img.freepik.com/free-photo/portrait-man-near-laptop-his-hands-closing-his-face_1163-2128.jpg?size=626&ext=jpg&ga=GA1.2.1004410598.1686174404&semt=sph'
    },
    {
      title: 'Exercising Tips',
      author: 'Dicky',
      imageUrl: 'https://img.freepik.com/free-photo/portrait-young-fitness-woman-stretching-her-arms-warmup-before-training-session-sport-event-park-jogging-excercising_1258-122926.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=sph'
    },
    {
      title: 'Doctor Recommendations',
      author: 'Johnathan',
      imageUrl: 'https://img.freepik.com/free-photo/cheerful-asian-dentists-posing-treatment-room-clinic-front-equipment_1098-20373.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=sph'
    },
    {
      title: 'Benefits of sleep',
      author: 'Kendra Tan',
      imageUrl: 'https://img.freepik.com/free-photo/my-bed-is-my-best-friend_329181-10418.jpg?size=626&ext=jpg&ga=GA1.2.1004410598.1686174404&semt=sph'
    },
    {
      title: 'Breakfast Ideas',
      author: 'Jane',
      imageUrl: 'https://img.freepik.com/free-photo/healthy-breakfast-with-eggs-avocado-tomatoes_1220-1169.jpg?size=626&ext=jpg&ga=GA1.2.1004410598.1686174404&semt=sph'
    }
  ]
  const sortedPosts = [];
  for (let i = 0; i < posts.length; i += 2) {
    sortedPosts.push([posts[i], posts[i + 1]]);
  }

  return (
    <SafeAreaView className='flex-1 bg-black'>
      <View className='flex-row items-center mt-2'>
        <Text className='ml-2 text-green-300 text-3xl font-bold mr-2'>Community</Text>
        <View className='mr-2 flex-1 flex-row p-2 items-center'             
          style={{
                backgroundColor: '#1f2937',
                borderRadius: 10,
                color: 'white',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                flex: 1,
                marginRight: 10,
                alignItems: 'center'
              }}>
          <Ionicons name="search-outline" size={16} color="white" style={{ marginRight: 5}} />
          <TextInput
            placeholder='Search'
            placeholderTextColor='#86efac'
            style={{ color: 'white', flex: 1}}
          />
          {/* 
          <Text style={{ color: 'white', fontSize: 16, marginLeft: 10}} className='font-semibold'>Search</Text> */}
        </View>
        <TouchableOpacity className='mr-3'>
          <Ionicons name="bookmark-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView className='flex-1 h-full mt-2'>
        {sortedPosts.map(([item1, item2], index) => (
          <View key={index} className='w-full flex-row p-2 pt-0 space-x-2' style={{ height: height/3}}>
            <LinearGradient
                  colors={['#67e8f9', '#86efac']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{borderRadius: 10, flex: 1, alignItems: 'flex-start'}}
                >
              <Image
                className='w-full h-2/3'
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={{
                  uri: item1.imageUrl
                }}
              />
              <View className='p-1 flex-1 w-full mt-1'>
                <View className='flex-1 w-full justify-end mt-3 space-y-1'>
                  <Text style={{ color: 'black', fontSize: 20}} className='font-bold'>{item1.title}</Text>
                  <View style={{ height:2, width: '100%', backgroundColor: 'gray', marginTop: 3}}/>
                  <Text style={{ color: 'black', fontSize: 12, marginTop: 3 }} className='font-base'>Author: {item1.author}</Text>
                </View>
                <View className='flex-1 w-full justify-end'>
                  <TouchableOpacity className='flex-row p-1 bg-gray-800 rounded-lg items-center' style={{ marginTop: 3 }}>
                      <Text style={{ color: 'white', fontSize: 14, flex: 1, marginLeft: 3}} className='font-bold'>Explore</Text>
                      <Ionicons name='chevron-forward-outline' size={18} color='white'/>
                  </TouchableOpacity>  
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
                  colors={['#67e8f9', '#86efac']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{borderRadius: 10, flex: 1, alignItems: 'flex-start'}}
                >
              <Image
                className='w-full h-2/3'
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={{
                  uri: item2.imageUrl
                }}
              />
              <View className='p-1 flex-1 w-full mt-1'>
                <View className='flex-1 w-full justify-end mt-3 space-y-1'>
                  <Text style={{ color: 'black', fontSize: 20}} className='font-bold'>{item2.title}</Text>
                  <View style={{ height: 2, width: '100%', backgroundColor: 'gray', marginTop: 3}}/>
                  <Text style={{ color: 'black', fontSize: 12, marginTop: 3 }} className='font-base'>Author: {item2.author}</Text>
                </View>
                <View className='flex-1 w-full justify-end'>
                  <TouchableOpacity className='flex-row p-1 bg-gray-800 rounded-lg items-center' style={{ marginTop: 3 }}>
                      <Text style={{ color: 'white', fontSize: 14, flex: 1, marginLeft: 3}} className='font-bold'>Explore</Text>
                      <Ionicons name='chevron-forward-outline' size={18} color='white'/>
                  </TouchableOpacity>  
                </View>
              </View>
            </LinearGradient>
          </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CommunityScreen
import * as React from 'react';
import { Dimensions, Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';

const HomeCarousel = () => {
    const width = Dimensions.get('window').width*0.97;
    const navigation = useNavigation();
    data = [
        {
            title: 'Community',
            text: 'Join our community and share your stories!',
            imgUrl: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1600',
            navigateTo : 'CommunityScreen'
        },
        {
            title: 'Meal Planning',
            text: 'Find recipes and plan your meals for the week!',
            imgUrl: 'https://img.freepik.com/free-photo/close-up-hand-with-food-container_23-2148484667.jpg?size=626&ext=jpg&ga=GA1.2.1004410598.1686174404&semt=ais',
            navigateTo : 'MealPlanningScreen'
        },
        {
            title: 'Virtual Doctor',
            text: 'Get a virtual doctor to help you with your health!',
            imgUrl: 'https://img.freepik.com/free-photo/filling-medical-record_1098-18239.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=sph',
            navigateTo : 'VirtualDoctorScreen'
        },
        {
            title: 'Calorie Challenge',
            text: 'Join our calorie challenge and get fit!',
            imgUrl: 'https://img.freepik.com/free-photo/woman-standing-exercising-with-red-dumbbell-gym_1150-16555.jpg?size=626&ext=jpg&ga=GA1.1.1004410598.1686174404&semt=sph',
            navigateTo : 'CalorieChallengeScreen'
        },
    ]

    return (
        <View style={{ flex: 'contain'}}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                borderRadius={50}
                onSnapToItem={(index) => index}
                renderItem={({ index }) => (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            borderRadius: 30,
                        }}
                        onPress={() => navigation.navigate(data[index].navigateTo)}
                    >
                        <ImageBackground
                            style={{ width: '100%', height: '100%', borderRadius: 30, justifyContent: 'flex-end', alignItems: 'flex-start' }}
                            source={{ uri: data[index].imgUrl }}
                        >
                          <View style={{ width: '100%', height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.4)', justifyContent: 'flex-end', alignItems: 'flex-start', padding: 5}}>
                            <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold', color: 'black', marginLeft: 20
                          }}>
                                {data[index].title}
                            </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20, 
                          }}>
                                {data[index].text}
                            </Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    // <MaskedView
                    // style={styles.maskedView}
                    // maskElement={
                    //     <View style={styles.maskWrapper}>
                    //         <View style={styles.maskWrapperTriangle}>
                    //             <Text style={styles.mask}>{data[index].title}</Text>
                    //             {/* <Text style={styles.maskDes} numberOfLines={2}>{data[index].text}</Text> */}
                    //         </View>
                    //     </View>
                    // }
                    // >
                    // <Image
                    //   source={{ uri: data[index].imgUrl }}
                    //   style={styles.image}
                    // />
                  // </MaskedView>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    maskedView: {
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      borderRadius: 50,
    },
    mask: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 60,
      left: 120,
      transform: [{ rotate: '-26deg'}]
    },
    maskDes: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 85,
        left: 155,
        transform: [{ rotate: '-27deg'}]
      },
    maskWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    maskWrapperTriangle: {
        backgroundColor: 'rgba(0, 0, 0, 0.)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        borderLeftWidth: 0,
        borderRightWidth: Dimensions.get('window').width,
        borderTopWidth: Dimensions.get('window').width/2,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      },
    image: {
      flex: 1,
      height: '100%',
      backgroundColor: '#324376',
    //   borderRadius: 50,
    },
  });

export default HomeCarousel;
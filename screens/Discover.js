import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets";
import { Hotels } from "../assets";
import { Attractions } from "../assets";
import { Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from "../components/ItemCardContainer";

function Discover() {
  const [type, setType] = useState('restaurants')

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className='flex-row items-center justify-between px-8'>
        <View>
          <Text className='text-[40px] text-[#0B646B] font-bold'>Discover</Text>
          <Text className='text-[#527883] text-[36px]'>the beauty today</Text>
        </View>
        <View className='w-12 h-12 rounded-md items-center justify-center shadow-lg'>
          <Image
            source={Avatar}
            className='w-full h-full rounded-md object-cover'
          />
        </View>
      </View>

      {/* searchbar */}
      <View className='flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4'>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: 'geometry' }}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: 'AIzaSyDgbR-2N-264cBBGKbVH68Zb8jzluLAG_U',
            language: 'en',
          }}
        />
      </View>

      {/* menu container */}
      <ScrollView>
        <View className='flex-row items-center justify-between px-8 mt-8'>
          <MenuContainer
            key={'hotel'}
            title='Hotels'
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'attractions'}
            title='Attractions'
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'restaurants'}
            title='Restaurants'
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View className='flex-row items-center justify-between px-4 mt-8'>
            <Text className='text-[#2C7379] text-[28px] font-bold'>
              Top Tips
            </Text>
            <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
              <Text className='text-[#A0C4C7] text-[20px] font-bold'>Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className='mt-8 flex-row items-center justify-evenly flex-wrap'>
            <ItemCardContainer 
            key={'101'} 
              imageSrc={'https://picsum.photos/id/237/536/354'} 
            title='Something' 
            location='Doha' />
            <ItemCardContainer 
            key={'102'} 
              imageSrc={'https://picsum.photos/seed/picsum/536/354'}
            title='Sample' 
            location='Quatar' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Discover;

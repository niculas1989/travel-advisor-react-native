import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets";

function Discover() {
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
    </SafeAreaView>
  );
}

export default Discover;

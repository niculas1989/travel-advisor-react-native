import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemScreen = ({ route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const navigation = useNavigation()

    const data = route?.params?.param

    return (
        <SafeAreaView className='flex-1 bg-white relative'>
            <ScrollView className='flex-1 px-4 py-6'>
                <View className='relative bg-white shadow-lg'>
                    <Image
                        source={
                            {
                                uri: data?.photo?.images?.large?.url ?
                                    data?.photo?.images?.large?.url :
                                    "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                            }
                        }
                        className= 'w-full h-72 object-cover -rounded-2xl'
                    />

                    <View className='absolute flex-row inset-x-0 top-5 justify-between px-6'>
                         <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-white'>

                         </TouchableOpacity>

                         <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-[#06828BE]'>
                            
                         </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemScreen
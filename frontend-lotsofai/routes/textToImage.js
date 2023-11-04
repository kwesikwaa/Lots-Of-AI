import { View, Text, FlatList, TextInput, Button } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-paper';

export default function TextToImage() {

    const x = [
        {'dat':'something dey here','key':1},
        {'dat':'so adey go some','key':2},
        {'dat':'you see say we dey form','key':3},
        {'dat':'a3 for life chale','key':4},        
    ];

    return (
    <View className="flex flex-col p-1 h-full justify-between">
        <View className="">
            <FlatList data={x} keyExtractor={(item)=>item.key}
                renderItem={({item})=>(
                    <Text>{item.dat}</Text>
                )}
            />
        </View>
        <View className="flex flex-row justify-between space-x-1 items-center">
            <TextInput placeholder='Enter Prompt' multiline numberOfLines={5} className="  border-red-500 border flex-grow rounded-md py-1.5 px-1.5"/>
            {/* <Button /> */}
            <Text className="text-red-700">Button</Text>
        </View>
    </View>
    )
}
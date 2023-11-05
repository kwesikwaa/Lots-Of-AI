import { View, Text, FlatList, TextInput, Button } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-paper';

export default function TextToImage() {

    const x = [
        {'dat':'something dey here','key':1},
        {'dat':'so adey go some','key':2},
        {'dat':'you see say we dey form','key':3},
        {'dat':'a3 for life chale','key':4},        
        {'dat':'something dey here','key':5},
        {'dat':'so adey go some','key':6},
        {'dat':'you see say we dey form','key':7},
        {'dat':'a3 for life chale','key':8}, 
        {'dat':'something dey here','key':9},
        {'dat':'so adey go some','key':10},
        {'dat':'you see say we dey form','key':11},
        {'dat':'a3 for life chale','key':12}, 
        {'dat':'something dey here','key':13},
        {'dat':'so adey go some','key':14},
        {'dat':'you see say we dey form','key':15},
        {'dat':'a3 for life chale','key':16}, 
        {'dat':'something dey here','key':17},
        {'dat':'so adey go some','key':18},
        {'dat':'you see say we dey form','key':19},
        {'dat':'a3 for life chale','key':20},
        {'dat':'something dey here','key':21},
        {'dat':'so adey go some','key':22},
        {'dat':'you see say we dey form','key':23},
        {'dat':'a3 for life chale','key':24},  
    ];

    return (
    <View className="flex flex-col p-1 h-full w-full justify-between">
        <View className=" h-5/6">
            <FlatList data={x} keyExtractor={(item)=>item.key} inverted={true}
                renderItem={({item})=>(
                    <View className="bg-zinc-600 rounded-md w-full my-2 pl-1">
                        <Text className=" my-2 text-white">{item.dat}</Text>
                        <View className="bg-slate-500 h-64 w-4/5"></View>


                    </View>
                )}
            />
        </View>
        <View className="flex flex-row justify-between space-x-1 items-end border-blue-500 border rounded-md">
            <TextInput placeholder='Enter Prompt' multiline numberOfLines={5} className=" w-5/6 py-1.5 px-1.5"/>
            <Button title='Send'/>
        </View>
    </View>
    )
}
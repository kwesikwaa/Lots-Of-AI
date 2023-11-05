import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Chatgpt() {

  const x = [
    {'dat':'something dey here number one','key':1},
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
    {'dat':'a3 for life chale last','key':24},  
];

return (
  <View className="flex flex-col p-1 h-full w-full justify-between">
      <View className=" h-5/6">
          <FlatList data={x} keyExtractor={(item)=>item.key} inverted={true}
              renderItem={({item})=>(
                  <Text className=" my-2">{item.dat}</Text>
              )}
          />
      </View>
      <View className="flex flex-row justify-between space-x-1 items-end bg-zinc-500 shadow-md">
          <TextInput placeholder='Enter Prompt' multiline className=" text-white w-5/6 py-1.5 px-1.5"/>
          <TouchableOpacity className="p-1.5 border border-zinc-300"><Text className=" text-white text-xl">Send</Text></TouchableOpacity>
      </View>
  </View>
)
}
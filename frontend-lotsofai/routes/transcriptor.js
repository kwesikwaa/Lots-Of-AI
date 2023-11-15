import { View, Text, FlatList, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSignal } from '@preact/signals-react'

export default function Transcriptor() {

  const toggle = useSignal(false)
  const togglemood = useSignal('record')

  const dotoggle = ()=>{
    toggle.value = !toggle.value
    togglemood.value=toggle.value?'stop':'record'
    console.log(toggle.value)
  }


  console.log('----------------build------------')

  const x =[
    {
      'id':1,'title':'title goes here','file':'filename.type','subtitle':'first\ntwo\nthree\nfour\nfive\nlines'
    },
    {
      'id':2,'title':'title goes here','file':'filename.type','subtitle':'first\ntwo\nthree\nfour\nfive\nlines'
    },
    {
      'id':3,'title':'title goes here','file':'filename.type','subtitle':'first\ntwo\nthree\nfour\nfive\nlines'
    },
    {
      'id':4,'title':'title goes here','file':'filename.type','subtitle':'first\ntwo\nthree\nfour\nfive\nlines'
    },
  ]

  return (
    <View className="flex flex-col p-1 h-full w-full justify-between">
      <View className=" h-5/6">
        <FlatList data={x} keyExtractor={(item)=>item.id} inverted={true}
            renderItem={({item})=>(
              <View className=" bg-slate-500 rounded-lg w-full p-1.5 h-40 flex flex-row my-1">
                <View className="w-2/6 rounded-lg bg-slate-800 mr-1.5">
                  <Text className=" my-2">{item.dat}</Text>
                </View>
                <View>
                  <Text className=" ">{item.title}</Text>
                  <Text className="  text-xs">{item.file}</Text>
                  <Text className=" my-2">{item.subtitle}</Text>
                </View>
              </View>
            )}
        />
      </View>
      <View className="flex flex-row justify-center space-x-4 mb-10 ">
        {
          toggle.value &&
            (<TouchableOpacity className="w-20 h-20 bg-red-600 border-dotted border-neutral-700 border-8 rounded-full flex items-center justify-center" onPress={dotoggle} ><Text className="text-white">stop</Text></TouchableOpacity>    )
        }
        {
          !toggle.value &&
          (<TouchableOpacity className="w-20 h-20 bg-green-600 border-dotted border-neutral-700 border-8 rounded-full flex items-center justify-center" onPress={dotoggle} ><Text className="text-white">record</Text></TouchableOpacity>    )
        }
        
        {/* <TouchableOpacity className={` w-20 h-20 ${toggle.value?'bg-neutral-700':'bg-green-600'} border-dotted border-neutral-700 border-8 rounded-full flex items-center justify-center`} onPress={dotoggle} ><Text className="text-white">record</Text></TouchableOpacity> */}
        <TouchableOpacity className=" w-20 h-20 bg-neutral-700 border-dotted border-neutral-500 border-8 rounded-full flex items-center justify-center"><Text className="text-white">file</Text></TouchableOpacity>
      </View>
    </View>
  )
}
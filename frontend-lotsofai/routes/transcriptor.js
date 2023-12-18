import { View, Text, FlatList, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useSignal } from '@preact/signals-react'
import * as ImagePicker from 'expo-image-picker'
import { Icon } from 'react-native-paper'
export default function Transcriptor() {

  const toggle = useSignal(false)
  const togglemood = useSignal('record')


  const [picked, setPicked] = useState('')

  const dotoggle = ()=>{
    toggle.value = !toggle.value
    togglemood.value=toggle.value?'stop':'record'
    console.log(toggle.value)
  }

  async function loadVideoFromDevice(){
    try{
      await ImagePicker.requestMediaLibraryPermissionsAsync()
      const res = await ImagePicker.launchImageLibraryAsync({allowsEditing:true, quality:1,mediaTypes:ImagePicker.MediaTypeOptions.Videos})
    
      if(!res.canceled){
        setPicked(res.assets[0].uri)
      }
    }catch(error){console.log(error)}
  }

  async function VideoCamera(){
    try{
      await ImagePicker.requestCameraPermissionsAsync()
      const res = await ImagePicker.launchCameraAsync({quality:1,mediaTypes:ImagePicker.MediaTypeOptions.Videos})
    
      if(!res.canceled){
        setPicked(res.assets[0].uri)
        console.log(picked)
      }
    }catch(error){console.log(error)}
  }

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
        <TouchableOpacity className="w-20 h-20 bg-green-600 border-dotted border-neutral-700 border-8 rounded-full flex items-center justify-center" onPress={()=>VideoCamera()}><Icon source="video" color='white' size={30} /></TouchableOpacity>
        <TouchableOpacity className="w-20 h-20 bg-green-600 border-dotted border-neutral-700 border-8 rounded-full flex items-center justify-center" onPress={()=>loadVideoFromDevice()}><Icon source="file-video" color='white' size={30} /></TouchableOpacity>
        <TouchableOpacity className=" w-20 h-20 bg-neutral-700 border-dotted border-neutral-500 border-8 rounded-full flex items-center justify-center"><Icon source="microphone" color='white' size={30} /></TouchableOpacity>
        <TouchableOpacity className=" w-20 h-20 bg-neutral-700 border-dotted border-neutral-500 border-8 rounded-full flex items-center justify-center"><Icon source="file" color='white' size={30} /></TouchableOpacity>
      </View>
    </View>
  )
}
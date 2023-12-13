import { View, Text, FlatList, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
// import * as ImagePicker from 'expo-image-picker'

export default function ImageToText() {
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

  let docket = []

  const [picked,setPicked] = useState('')

  function loadimage(){
    launchImageLibrary({},setPicked)
  }

  // async function  snapphoto (){
  //   try{
  //     await ImagePicker.requestCameraPermissionAsync()
  //     const res = await ImagePicker.launchCameraAsync({
  //       cameraType: ImagePicker.cameraType.back,
  //       allowsEditing:true,
  //       quality: 1
  //     })
  //     if(!res.canceled){
  //      await savetoState(res.assets[0].uri)
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  // async function savetoState(image){
  //   try{
  //     setPicked(image)
  //   }catch(error){
  //     console.log(error)
  //   }

  // }

  // useEffect(()=>{
  //   async()=>{
  //     if(picked){
  //       const res = await TextRecognition.recognize(picked.assets[0].uri )
  //       docket.push({"id":Date(),image:picked.assets[0].ur, extractedText: res})
  //     }
  //   }
  // },[picked])

  return (
    <View className="flex flex-col p-1 h-full w-full justify-between">
      <View className=" h-5/6 ">
        <FlatList data={x} keyExtractor={(item)=>item.id} inverted={true}
            renderItem={({item})=>(
              <View className="  bg-zinc-800 rounded-lg w-full p-1.5 h-40 flex flex-row my-1">
                <View className="w-2/6 rounded-lg bg-zinc-700 mr-1.5">
                  <Text className=" my-2">{item.dat}</Text>
                </View>
                <View >
                  <Text className=" text-white text-sm ">{item.title}</Text>
                  <Text className=" text-white  text-xs">{item.file}</Text>
                  <Text className=" text-white my-2">{item.subtitle}</Text>
                </View>
              </View>
            )}
        />
      </View>
      <View className="flex flex-row justify-center space-x-4 mb-10 ">
        <TouchableOpacity onPress={loadimage} className="  w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center"><Text className="text-white">file</Text></TouchableOpacity>
        <TouchableOpacity className=" w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center"><Text className="text-white">photo</Text></TouchableOpacity>
      </View>
    </View>
  )
}
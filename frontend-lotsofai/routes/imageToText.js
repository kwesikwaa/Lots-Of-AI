import { View, Text, FlatList, Modal,TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextRecognition from 'react-native-text-recognition'

import * as ImagePicker from 'expo-image-picker'

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
  const [modalVisible, setModal]=useState(false)
  let title

  async function loadImageFromDevice(){
    try{
      await ImagePicker.requestMediaLibraryPermissionsAsync()
      const res = await ImagePicker.launchImageLibraryAsync({allowsEditing:true, quality:1,})
    
      if(!res.canceled){
        await setPicked(res.assets[0].uri)
      }
    }catch(error){console.log(error)}
  }

  

  async function  snapphoto (){
    try{
      await ImagePicker.requestCameraPermissionsAsync()
      const res = await ImagePicker.launchCameraAsync({allowsEditing:true, quality: 1})
      
      if(!res.canceled){
       await setPicked(res.assets[0].uri)
      }
    }catch(error){
      console.log(error)
    }
  }

  async function extractText(){
    const res = await TextRecognition.recognize(picked)
  }
  async function save(){
    await docket.push({"id":Date(),"image":picked.assets[0].ur, "extractedText": res, "title":title})
    title = ''
    setModal(false)
  }

  function close(){
    title = ''
    setModal(false)
  }

  function pullTitle(val){
    title = val
  }


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
      {/* <View className="flex  justify-center items-center bg-white">
        <Modal animationType='slide' transparent={true} onRequestClose={()=>{}}> 
          <View>
              <TextInput placeholder='enter title here' onChangeText={(val)=>pullTitle}/>
              <View className=" flex flex-row">
                <TouchableOpacity onPress={()=>save} className="p-1.5 border border-zinc-300"><Text>Save</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>close} className="p-1.5 border border-zinc-300"><Text>Cancel</Text></TouchableOpacity>
              </View>
          </View>
        </Modal>
      </View> */}
      <View className="flex flex-row justify-center space-x-4 mb-10 ">
        <TouchableOpacity onPress={loadImageFromDevice} className="  w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center"><Text className="text-white">file</Text></TouchableOpacity>
        <TouchableOpacity onPress={snapphoto} className=" w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center"><Text className="text-white">photo</Text></TouchableOpacity>
      </View>
    </View>
  )
}
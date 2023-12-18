import { View, Text, FlatList, Modal,TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import {useState } from 'react'
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
  let tempextract = ''



  async function loadImageFromDevice(){
    try{
      await ImagePicker.requestMediaLibraryPermissionsAsync()
      const res = await ImagePicker.launchImageLibraryAsync({allowsEditing:true, quality:1,})
    
      if(!res.canceled){
        extracted = await TextRecognition.recognize(res.assets[0].uri)
        tempextract = extractText
        setPicked(res.assets[0].uri)
        setModal(true)
      }
    }catch(error){console.log(error)}
  }

  

  async function  snapphoto (){
    try{
      await ImagePicker.requestCameraPermissionsAsync()
      const res = await ImagePicker.launchCameraAsync({allowsEditing:true, quality: 1})
      
      if(!res.canceled){
      //  await setPicked(res.assets[0].uri)
        extracted = await TextRecognition.recognize(res.assets[0].uri)
        tempextract = extractText
        setPicked(res.assets[0].uri)
        setModal(true)
      }
    }catch(error){
      console.log(error)
    }
  }

  function save(){
    docket.push({"id":Date(),"image":picked, "extractedText": tempextract, "title":title})
    title = ''
    Alert.alert("Saved",'Saved Successfully!')
    setModal(false)

  }

  function topdf(){
    // convert extracted to pdf
  }

  function close(){
    console.log(title)
    title = ''
    setModal(true)
    console.log(modalVisible)
  }

  function pullTitle(val){
    title = val
    console.log(title)
  }


  return (
    <View className="flex flex-col p-1 h-full w-full justify-between">
      <View className=" h-5/6 ">

        {(docket.length>0) && <FlatList data={x} keyExtractor={(item)=>item.id} inverted={true}
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
        />}
      </View>
      
      <Modal animationType='slide' transparent={true}  onRequestClose={()=>close()} visible={!modalVisible}  > 
        <View className='flex flex-col h-full w-[100vw] items-center justify-center'>
          <View className=' w-fit bg-white rounded-md p-3 px-6'>
              <View className=' h-[60vh]'>
                <View className= 'h-1/2 bg-pink-500'>
                  {/* <Image source={picked} className='w-full h-full' /> */}
                </View>
                <View className="h-1/2 bg-teal-300">
                  <Text>{tempextract}</Text>
                </View>
                
              </View>
              <TextInput placeholder='enter title here' onChangeText={(val)=>pullTitle} className='border rounded-md px-1.5 w-[80vw] mb-4'/>
              <View className=" flex flex-row space-x-2">
                <TouchableOpacity onPress={()=>save()} className="p-1.5 border border-zinc-300"><Text>Save</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>close()} className="p-1.5 border border-zinc-300"><Text>Cancel</Text></TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
      
      <View className="flex flex-row justify-center space-x-4 mb-10 ">
        <TouchableOpacity onPress={loadImageFromDevice} className="  w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center"><Text className="text-white">file</Text></TouchableOpacity>
        <TouchableOpacity onPress={snapphoto} className=" w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center"><Text className="text-white">photo</Text></TouchableOpacity>
      </View>
    </View>
  )
}
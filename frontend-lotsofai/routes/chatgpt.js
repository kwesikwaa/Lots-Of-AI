import { View, Text, FlatList, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import React,{useRef} from 'react'
import { signal } from '@preact/signals-react';
import { tochatai } from '../api/openaicall';

import { chats } from '../data';



export default function Chatgpt() {

const flviewRef = useRef()

const message = signal('')

const setMessage = (val)=>{
    message.value = val
    console.log(message.value)
}

const send = ()=>{
    if(message.value.trim().length>0){
        Keyboard.dismiss()
        chats.value.push({'content':message.value.trim(),'key':chats.value.length+1,'role':'user'})
        // make api call
        tochatai(message.value.trim())
        
        // clear field and scroll
        message.value=''
        scrollup()
    }
    
}

console.log('rendering.......to.........checking needless rendering........like useState does..............')

//made this function to be called cos of the ref var it cannot be used diretly. hence the need for it to be in a fxn
const scrollup =()=>{
    // to avoid the error:  'Cannot read property 'scrollToEnd' of null'
    // i added ?
    setTimeout(()=>flviewRef?.current?.scrollToEn,400)
}
scrollup()

return (
    
    <View className="flex flex-col p-1 h-full w-full justify-between">
       <View className=" flex-1 mb-4">
          <FlatList data={chats.value} keyExtractor={(item)=>item.key} ref={flviewRef} 
              renderItem={({item})=>{
                if (item.role==="assistant") {
                    return <View className="flex-row">
                                <View className="flex-col my-1 min-w-max" style={{maxWidth:'85%'}}>
                                <View className="bg-orange-700 h-0.5 w-1"></View>
                                    <View className="bg-orange-700 rounded-b-md rounded-r-md" >
                                        <Text className="p-2 text-white">{item.content}</Text>
                                    </View>
                                    
                                </View>
                            </View>
                }
                else if(item.role==="user") return <View className="flex-row justify-end">
                                <View className="flex-col items-end my-1 min-w-max" style={{maxWidth:'85%'}}>
                                    <View className="bg-blue-600 rounded-t-md rounded-l-md" >
                                        <Text className="p-2 text-white">{item.content}</Text>
                                    </View>
                                    <View className="bg-blue-600 h-0.5 w-1"></View>
                                </View>
                            </View>
                   
              }
            }
          />
        </View>
      <View className=" flex flex-row justify-between mb-4 space-x-1 items-end rounded-md bg-neutral-700 shadow-md">
          <TextInput placeholder='Enter Prompt' placeholderTextColor="white" multiline value={message.value} className=" text-white w-5/6 py-1.5 px-1.5"  onChangeText={(val)=>setMessage(val)}/>
          <TouchableOpacity className="p-1.5 border border-zinc-300" onPress={send}><Text className=" text-white text-xl">Send</Text></TouchableOpacity>
      </View>
    </View>
)
}
import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react'
import { useSignal } from '@preact/signals-react';

export default function Chatgpt() {

  const x = useSignal([
    {'dat':'HAHA something dey here number one \nsomeont sos sysd \ni go evn longer on this one to see whsaty will it now eclips eofr ogo and fif sodsf l s hlhlkl  khlkjkl  lklkjo  lkshjsl  slk slk dklfjs  ojslkjdi  dskfjoks fsdkfnl','key':1,'from':'user'},
    {'dat':'so adey go some','key':2,'from':'bot'},
    {'dat':'you see say we dey form','key':3,'from':'user'},
    {'dat':'a3 for life chale','key':4,'from':'bot'},        
    {'dat':'something dey here','key':5,'from':'user'},
    {'dat':'so adey go some','key':6,'from':'bot'},
    {'dat':'you see say we dey form','key':7,'from':'user'},
    {'dat':'a3 for life chale','key':8,'from':'bot'}, 
    {'dat':'something dey here','key':9,'from':'user'},
    {'dat':'so adey go some','key':10,'from':'bot'},
    {'dat':'you see say we dey form','key':11,'from':'user'},
    {'dat':'a3 for life chale','key':12,'from':'bot'}, 
    {'dat':'something dey here','key':13,'from':'user'},
    {'dat':'so adey go some','key':14,'from':'bot'},
    {'dat':'you see say we dey form','key':15,'from':'user'},
    {'dat':'a3 for life chale','key':16,'from':'bot'}, 
    {'dat':'something dey here','key':17,'from':'user'},
    {'dat':'so adey go some','key':18,'from':'bot'},
    {'dat':'you see say we dey form','key':19,'from':'user'},
    {'dat':'a3 for life chale','key':20,'from':'bot'},
    {'dat':'something dey here','key':21,'from':'user'},
    {'dat':'so adey go some','key':22,'from':'bot'},
    {'dat':'you see say we dey form','key':23,'from':'user'},
    {'dat':'a3 for life chale last','key':24,'from':'bot'},  
])

const flviewRef = useRef()

const message = useSignal('')


const send =()=>{
    if(message.value.trim().length>0){
        x.value.push({'dat':message.value,'key':x.value.length+1,'from':'user'})
        // dismiss the keyboard
        scrollup()
        
    }
    message.value=''
}

console.log('rendering.......to.........checking needless rendering........like useState does..............')

const scrollup =()=>{
    setTimeout(()=>flviewRef.current.scrollToEnd(),200)
}
scrollup()

return (
    <View className="flex flex-col p-1 h-full w-full justify-between">
       <View className=" h-5/6">
          <FlatList data={x.value} keyExtractor={(item)=>item.key} ref={flviewRef} 
              renderItem={({item})=>{
                if (item.from==="bot") {
                    return <View className="flex-row">
                                <View className="my-1 rounded-b-md rounded-r-md bg-orange-700 min-w-max" style={{maxWidth:'85%'}}>
                                    <Text className="p-2 text-white">{item.dat}</Text>
                                </View>
                            </View>
                }
                else return <View className="flex-row justify-end">
                                <View className=" my-1 bg-blue-600 rounded-t-md rounded-l-md min-w-max" style={{maxWidth:'85%'}}>
                                    <Text className="p-2 text-white">{item.dat}</Text>
                                </View>
                            </View>
                   
              }
            }
          />
      </View>
      <View className="flex flex-row justify-between space-x-1 items-end rounded-md bg-neutral-700 shadow-md">
          <TextInput placeholder='Enter Prompt' placeholderTextColor="white" multiline className=" text-white w-5/6 py-1.5 px-1.5" value={message}   onChangeText={(val)=> message.value=val}/>
          <TouchableOpacity className="p-1.5 border border-zinc-300" onPress={send}><Text className=" text-white text-xl">Send</Text></TouchableOpacity>
      </View>
    </View>
)
}
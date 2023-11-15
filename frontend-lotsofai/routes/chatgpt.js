import { View, Text, FlatList, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import React,{useRef} from 'react'
import { signal } from '@preact/signals-react';
import { tochatai } from '../api/openaicall';

export const chats = signal([
    {"role":"system","key":0,
        "content":'You are an assistant. You give brief and straightforward responses. You make your responses feel human, a bit jovial sometimes but mostly conscise'},
    // {'content':'HAHA something dey here number one \nsomeont sos sysd \ni go evn longer on this one to see whsaty will it now eclips eofr ogo and fif sodsf l s hlhlkl  khlkjkl  lklkjo  lkshjsl  slk slk dklfjs  ojslkjdi  dskfjoks fsdkfnl','key':1,'role':'user'},
    // {'content':'so adey go some','key':2,'role':'bot'},
    // {'content':'you see say we dey form','key':3,'role':'user'},
    // {'content':'a3 for life chale','key':4,'role':'bot'},        
    // {'content':'something dey here','key':5,'role':'user'},
    // {'content':'so adey go some','key':6,'role':'bot'},
    // {'content':'you see say we dey form','key':7,'role':'user'},
    // {'content':'a3 for life chale','key':8,'role':'bot'}, 
    // {'content':'something dey here','key':9,'role':'user'},
    // {'content':'so adey go some','key':10,'role':'bot'},
    // {'content':'you see say we dey form','key':11,'role':'user'},
    // {'content':'a3 for life chale','key':12,'role':'bot'}, 
    // {'content':'something dey here','key':13,'role':'user'},
    // {'content':'so adey go some','key':14,'role':'bot'},
    // {'content':'you see say we dey form','key':15,'role':'user'},
    // {'content':'a3 for life chale','key':16,'role':'bot'}, 
    // {'content':'something dey here','key':17,'role':'user'},
    // {'content':'so adey go some','key':18,'role':'bot'},
    // {'content':'you see say we dey form','key':19,'role':'user'},
    // {'content':'a3 for life chale','key':20,'role':'bot'},
    // {'content':'something dey here','key':21,'role':'user'},
    // {'content':'so adey go some','key':22,'role':'bot'},
    // {'content':'you see say we dey form','key':23,'role':'user'},
    // {'content':'a3 for life chale last','key':24,'role':'bot'},  
])

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
    setTimeout(()=>flviewRef.current.scrollToEnd(),400)
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
          <TextInput placeholder='Enter Prompt' placeholderTextColor="white" multiline value={message} className=" text-white w-5/6 py-1.5 px-1.5"  onChangeText={(val)=>setMessage(val)}/>
          <TouchableOpacity className="p-1.5 border border-zinc-300" onPress={send}><Text className=" text-white text-xl">Send</Text></TouchableOpacity>
      </View>
    </View>
)
}